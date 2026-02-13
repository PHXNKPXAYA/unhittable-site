import { Loader2, Lock, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

interface VerificationGateProps {
  onVerified: () => void;
}

export default function VerificationGate({ onVerified }: VerificationGateProps) {
  const [loading, setLoading] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);

  // Initialize reCAPTCHA
  useEffect(() => {
    const checkRecaptcha = () => {
      if (typeof window !== "undefined" && (window as any).grecaptcha) {
        setRecaptchaReady(true);
      }
    };

    checkRecaptcha();
    const interval = setInterval(checkRecaptcha, 100);
    return () => clearInterval(interval);
  }, []);

  const handleVerify = async () => {
    // Check if reCAPTCHA is completed
    const recaptchaToken = (window as any).grecaptcha?.getResponse?.();
    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA verification");
      return;
    }

    setLoading(true);

    try {
      // Send to backend API for verification
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: recaptchaToken,
          name: "Verification Gate",
          email: "verification@unhittable.io",
          message: "Site access verification",
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Store verification in localStorage
        localStorage.setItem("unhittable-verified", "true");
        localStorage.setItem("unhittable-verified-time", new Date().toISOString());
        toast.success("Verification successful! Welcome to UNHITTABLE.");
        onVerified();
      } else {
        toast.error("Verification failed. Please try again.");
        // Reset reCAPTCHA
        (window as any).grecaptcha?.reset?.();
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
      // Reset reCAPTCHA
      (window as any).grecaptcha?.reset?.();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Verification Card */}
      <div className="w-full max-w-md mx-4">
        <div className="glass p-8 md:p-12 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <Shield className="w-8 h-8 text-accent" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-text">UNHITTABLE</span>
          </h1>

          {/* Subheading */}
          <h2 className="text-xl font-semibold mb-2">
            Enterprise-Grade Network Resilience
          </h2>

          {/* Description */}
          <p className="text-foreground/70 mb-8">
            This site is protected by human verification. Please complete the reCAPTCHA below to proceed.
          </p>

          {/* reCAPTCHA v2 - "I'm not a robot" checkbox */}
          <div className="flex justify-center mb-8">
            <div
              ref={recaptchaRef}
              className="scale-100 md:scale-110 origin-center"
              data-testid="recaptcha-container"
            >
              {recaptchaReady && (
                <div
                  className="g-recaptcha"
                  data-sitekey="6Lc9uWksAAAAAN-p2EmGz_yLYLaBA1baWQJmZwjP"
                />
              )}
            </div>
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={loading || !recaptchaReady}
            className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                Verify & Enter Site
              </>
            )}
          </button>

          {/* Helper Text */}
          <p className="text-xs text-foreground/50 mt-8">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground/70"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground/70"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>
    </div>
  );
}
