/**
 * Vercel Serverless Function: reCAPTCHA v2 Verification
 * 
 * This endpoint verifies reCAPTCHA tokens and processes contact form submissions.
 * It uses the reCAPTCHA secret key from environment variables.
 * 
 * Request body:
 * {
 *   token: string (reCAPTCHA token from client),
 *   name: string,
 *   email: string,
 *   message: string
 * }
 * 
 * Response:
 * { success: true } or { success: false, error: string }
 */

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { token, name, email, message } = req.body;

  // Validate required fields
  if (!token) {
    return res.status(400).json({ success: false, error: "reCAPTCHA token is required" });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields" });
  }

  // Get secret key from environment
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY not configured");
    return res.status(500).json({ success: false, error: "Server configuration error" });
  }

  try {
    // Verify token with Google reCAPTCHA API
    const verificationResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const verificationData = await verificationResponse.json();

    // Check if verification was successful
    if (!verificationData.success) {
      console.warn("reCAPTCHA verification failed:", verificationData["error-codes"]);
      return res.status(400).json({ success: false, error: "reCAPTCHA verification failed" });
    }

    // Optional: Check score for v3 (not applicable for v2, but kept for reference)
    // For v2 "I'm not a robot", the score is not provided
    if (verificationData.score !== undefined && verificationData.score < 0.5) {
      return res.status(400).json({ success: false, error: "reCAPTCHA score too low" });
    }

    // TODO: Here you would typically:
    // 1. Save the contact form data to a database
    // 2. Send an email notification to support
    // 3. Log the submission for analytics
    
    console.log("Contact form submitted:", {
      name,
      email,
      timestamp: new Date().toISOString(),
      recaptchaScore: verificationData.score || "N/A (v2)",
    });

    // Return success
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return res.status(500).json({ success: false, error: "Verification error" });
  }
}
