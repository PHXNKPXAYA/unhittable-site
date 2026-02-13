import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Features() {
  const features = [
    {
      title: "Layer 3/4 Filtering",
      description: "Network and transport layer protection against volumetric attacks",
      benefits: [
        "UDP/TCP flood mitigation",
        "ICMP echo attack prevention",
        "Fragmented packet filtering",
        "Spoofed IP detection",
        "Real-time traffic analysis",
      ],
    },
    {
      title: "Layer 7 Protection",
      description: "Application-layer defense with intelligent request analysis",
      benefits: [
        "HTTP/HTTPS filtering",
        "SQL injection prevention",
        "XSS attack mitigation",
        "CSRF protection",
        "Custom rule engine",
      ],
    },
    {
      title: "AI Anomaly Detection",
      description: "Machine learning-powered threat identification",
      benefits: [
        "Behavioral analysis",
        "Zero-day threat detection",
        "Pattern recognition",
        "Automated response",
        "Continuous learning",
      ],
    },
    {
      title: "Bot Mitigation",
      description: "Advanced bot detection and blocking",
      benefits: [
        "Credential stuffing prevention",
        "Account takeover protection",
        "Scraper detection",
        "API abuse prevention",
        "Challenge-based verification",
      ],
    },
    {
      title: "Rate Limiting",
      description: "Intelligent request throttling and traffic management",
      benefits: [
        "Per-IP rate limits",
        "Per-user rate limits",
        "Adaptive thresholds",
        "Burst protection",
        "Custom policies",
      ],
    },
    {
      title: "Load Balancing",
      description: "Intelligent traffic distribution across servers",
      benefits: [
        "Round-robin distribution",
        "Health-based routing",
        "Geographic load balancing",
        "Session persistence",
        "Automatic failover",
      ],
    },
    {
      title: "Global Edge Network",
      description: "Distributed protection across worldwide locations",
      benefits: [
        "200+ edge locations",
        "Sub-50ms latency",
        "Automatic routing",
        "Redundant paths",
        "Regional failover",
      ],
    },
    {
      title: "Real-Time Analytics",
      description: "Comprehensive monitoring and reporting dashboard",
      benefits: [
        "Live traffic visualization",
        "Attack timeline",
        "Threat intelligence",
        "Custom reports",
        "API access",
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
              Complete Protection Stack
            </h1>
            <p className="text-xl text-foreground/70">
              Every layer of your network is protected with enterprise-grade security and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="glass p-8">
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/60 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Easy Integration
            </h2>
            <div className="glass p-8 md:p-12">
              <p className="text-foreground/70 mb-6">
                UNHITTABLE integrates seamlessly with your existing infrastructure. Simply update your DNS records or configure your CDN to route traffic through our global network.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-accent">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Configure Your Domain</h4>
                    <p className="text-sm text-foreground/60">Point your DNS to our nameservers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-accent">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Set Protection Rules</h4>
                    <p className="text-sm text-foreground/60">Configure security policies in the dashboard</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-accent">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Monitor & Optimize</h4>
                    <p className="text-sm text-foreground/60">Track metrics and adjust rules in real-time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center glass-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Network?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Explore our pricing plans and find the perfect protection level for your needs.
            </p>
            <Link href="/pricing">
              <Button size="lg" className="w-full sm:w-auto">
                View Pricing
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
