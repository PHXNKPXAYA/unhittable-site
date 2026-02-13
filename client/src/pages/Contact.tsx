import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if reCAPTCHA is completed
    const recaptchaToken = (window as any).grecaptcha?.getResponse?.();
    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA verification");
      return;
    }

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
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
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! We'll be in touch soon.");
        setFormData({ name: "", email: "", message: "" });
        // Reset reCAPTCHA
        (window as any).grecaptcha?.reset?.();
      } else {
        toast.error("Verification failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-foreground/70">
              Have questions about UNHITTABLE? Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="glass p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-border/40 bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-border/40 bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border/40 bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    required
                  />
                </div>

                {/* reCAPTCHA v2 - "I'm not a robot" checkbox */}
                {/* INSERT YOUR RECAPTCHA SITE KEY BELOW */}
                <div
                  ref={recaptchaRef}
                  className="flex justify-center my-6"
                  data-testid="recaptcha-container"
                >
                  {recaptchaReady && (
                    <div
                      className="g-recaptcha"
                      data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    />
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading || !recaptchaReady}
                  className="w-full"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>

                {/* Helper Text */}
                <p className="text-xs text-foreground/50 text-center">
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
              </form>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Email",
                  value: "support@unhittable.io",
                },
                {
                  title: "Phone",
                  value: "+1 (555) 123-4567",
                },
                {
                  title: "Response Time",
                  value: "Within 24 hours",
                },
              ].map((info, idx) => (
                <div key={idx} className="glass p-6 text-center">
                  <h4 className="font-semibold mb-2">{info.title}</h4>
                  <p className="text-sm text-foreground/60">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
