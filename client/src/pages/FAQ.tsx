import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is UNHITTABLE?",
          a: "UNHITTABLE is an enterprise-grade network resilience and uptime protection service that provides comprehensive DDoS mitigation, WAF protection, bot detection, and global edge defense.",
        },
        {
          q: "How does UNHITTABLE work?",
          a: "UNHITTABLE works by routing your traffic through our global network of edge locations. We analyze traffic in real-time, detect threats using AI and machine learning, and block malicious requests before they reach your origin server.",
        },
        {
          q: "Is UNHITTABLE suitable for my business?",
          a: "UNHITTABLE serves businesses of all sizes, from startups to enterprises. We offer flexible pricing plans and can scale from small projects to handling billions of requests per day.",
        },
      ],
    },
    {
      category: "Technical",
      questions: [
        {
          q: "How long does setup take?",
          a: "Initial setup takes about 5 minutes. DNS changes typically propagate within 24-48 hours, after which your protection is fully active.",
        },
        {
          q: "What's the latency impact?",
          a: "Our global edge network ensures sub-50ms latency in most regions. In many cases, UNHITTABLE actually improves performance by caching and optimizing content delivery.",
        },
        {
          q: "Do you support IPv6?",
          a: "Yes, UNHITTABLE provides full IPv6 support across all plans.",
        },
        {
          q: "Can I use UNHITTABLE with my CDN?",
          a: "Yes, UNHITTABLE integrates seamlessly with most CDN providers. You can use it as an origin shield or configure it alongside your existing CDN.",
        },
      ],
    },
    {
      category: "Security",
      questions: [
        {
          q: "What types of attacks does UNHITTABLE protect against?",
          a: "We protect against volumetric attacks (DDoS), protocol attacks, application-layer attacks (WAF), bot traffic, credential stuffing, and zero-day threats using AI anomaly detection.",
        },
        {
          q: "How does your AI anomaly detection work?",
          a: "Our AI system learns normal traffic patterns for your domain and automatically detects deviations that indicate potential threats. It continuously improves through machine learning.",
        },
        {
          q: "Is my data encrypted?",
          a: "Yes, all traffic is encrypted in transit using TLS 1.3. We also support end-to-end encryption and comply with major security standards.",
        },
        {
          q: "Do you log my traffic?",
          a: "We log metadata for analytics and threat detection, but we do not log sensitive data. All logs are encrypted and retained according to your privacy settings.",
        },
      ],
    },
    {
      category: "Pricing & Billing",
      questions: [
        {
          q: "Is there a free trial?",
          a: "Yes, all plans include a 14-day free trial with full access to features. No credit card required.",
        },
        {
          q: "Can I change plans anytime?",
          a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, bank transfers, and purchase orders for enterprise customers.",
        },
        {
          q: "Do you offer discounts for annual billing?",
          a: "Yes, annual plans save 17% compared to monthly billing. Enterprise customers can negotiate custom pricing.",
        },
        {
          q: "What if I exceed my plan limits?",
          a: "We'll notify you when you approach limits. You can upgrade anytime, and we offer burst capacity for temporary spikes.",
        },
      ],
    },
    {
      category: "Support",
      questions: [
        {
          q: "What support options are available?",
          a: "All plans include email support. Pro plans include priority support. Enterprise plans include 24/7 phone support and a dedicated account manager.",
        },
        {
          q: "What's your average response time?",
          a: "Standard support: 24 hours. Priority support: 4 hours. Enterprise support: 1 hour.",
        },
        {
          q: "Do you offer SLA guarantees?",
          a: "Yes, Pro and Enterprise plans include a 99.99% uptime SLA with service credits for downtime.",
        },
        {
          q: "How do I report a security issue?",
          a: "Please email security@unhittable.io with details. We take all security reports seriously and will respond within 24 hours.",
        },
      ],
    },
    {
      category: "Integration",
      questions: [
        {
          q: "Do you have an API?",
          a: "Yes, we provide a comprehensive REST API for domain management, analytics, rule configuration, and more.",
        },
        {
          q: "What integrations do you support?",
          a: "We support integrations with Slack, PagerDuty, Datadog, webhooks, and most major platforms via API.",
        },
        {
          q: "Can I automate rule updates?",
          a: "Yes, the API allows you to programmatically manage security rules, enabling automation and CI/CD integration.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-foreground/70">
              Find answers to common questions about UNHITTABLE.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqs.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <div className="glass p-6 md:p-8">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, qidx) => (
                      <AccordionItem
                        key={qidx}
                        value={`${idx}-${qidx}`}
                        className="border-b border-border/40 last:border-0"
                      >
                        <AccordionTrigger className="hover:text-accent transition-colors py-4">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-foreground/70 pb-4">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto glass-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Still have questions?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Our support team is here to help. Reach out anytime.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
