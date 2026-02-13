export default function Privacy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-foreground/70">
              Last updated: February 12, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="glass p-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-foreground/70 leading-relaxed">
                UNHITTABLE ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </div>

            <div className="glass p-8">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <p className="text-foreground/70">
                    We collect information you provide directly, such as name, email address, phone number, and company information when you create an account or contact us.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Usage Information</h3>
                  <p className="text-foreground/70">
                    We automatically collect information about your interactions with our services, including IP addresses, browser type, pages visited, and timestamps.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Traffic Data</h3>
                  <p className="text-foreground/70">
                    We collect metadata about traffic passing through our network for security and analytics purposes. We do not store the content of your communications.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-8">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <ul className="space-y-2 list-disc list-inside text-foreground/70">
                <li>To provide and maintain our services</li>
                <li>To process transactions and send related information</li>
                <li>To detect and prevent fraud and security incidents</li>
                <li>To improve and optimize our services</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div className="glass p-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Retention</h2>
              <p className="text-foreground/70 leading-relaxed">
                We retain personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. You can request deletion of your data at any time, subject to legal obligations.
              </p>
            </div>

            <div className="glass p-8">
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-foreground/70 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div className="glass p-8">
              <h2 className="text-2xl font-bold mb-4">6. Third-Party Sharing</h2>
              <p className="text-foreground/70 leading-relaxed">
                We do not sell your personal information. We may share information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
              </p>
            </div>

            <div className="glass p-8">
              <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="space-y-2 list-disc list-inside text-foreground/70">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to delete your information</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to opt-out of marketing communications</li>
              </ul>
            </div>

            <div className="glass p-8">
              <h2 className="text-2xl font-bold mb-4">8. Cookies and Tracking</h2>
              <p className="text-foreground/70 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser. Some features may not work properly if cookies are disabled.
              </p>
            </div>

            <div className="glass p-8">
              <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
              <p className="text-foreground/70 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div className="glass p-8">
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-foreground/70 leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <p>UNHITTABLE Privacy Team</p>
                <p>Email: privacy@unhittable.io</p>
                <p>Address: [Your Address]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
