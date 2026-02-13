import { Award, Globe, Users, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About UNHITTABLE
            </h1>
            <p className="text-xl text-foreground/70">
              Enterprise-grade network protection built by security experts.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="glass p-12">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                UNHITTABLE was founded with a simple mission: to make enterprise-grade network protection accessible to businesses of all sizes. We believe that security should not be a luxury—it should be a fundamental right.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Our team of security experts, network engineers, and infrastructure specialists work tirelessly to deliver cutting-edge protection that keeps your network resilient against evolving threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Performance",
                description: "Lightning-fast protection with sub-50ms latency globally.",
              },
              {
                icon: Award,
                title: "Reliability",
                description: "99.99% uptime SLA with redundant systems across all regions.",
              },
              {
                icon: Users,
                title: "Support",
                description: "Expert support team available 24/7 to help you succeed.",
              },
              {
                icon: Globe,
                title: "Scale",
                description: "Global infrastructure ready to handle any traffic volume.",
              },
            ].map((value, idx) => (
              <div key={idx} className="glass p-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-foreground/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Sarah Chen",
                title: "CEO & Co-founder",
                bio: "Former VP of Security at major cloud provider. 15+ years in network security.",
              },
              {
                name: "Michael Rodriguez",
                title: "CTO & Co-founder",
                bio: "PhD in Computer Science. Built DDoS mitigation systems at scale.",
              },
              {
                name: "Emily Watson",
                title: "VP of Operations",
                bio: "Managed infrastructure for 500M+ users. Expert in global network operations.",
              },
            ].map((member, idx) => (
              <div key={idx} className="glass p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-accent font-medium mb-3">{member.title}</p>
                <p className="text-sm text-foreground/60">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "200+", label: "Edge Locations" },
              { number: "500M+", label: "Requests/Day" },
              { number: "99.99%", label: "Uptime" },
              { number: "50ms", label: "Avg Latency" },
            ].map((stat, idx) => (
              <div key={idx} className="glass p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6">
              <div className="glass p-6">
                <h4 className="font-semibold mb-2">2020 - Founded</h4>
                <p className="text-sm text-foreground/70">
                  UNHITTABLE was founded by a team of security experts frustrated with expensive, complicated DDoS protection solutions.
                </p>
              </div>
              <div className="glass p-6">
                <h4 className="font-semibold mb-2">2021 - Series A Funding</h4>
                <p className="text-sm text-foreground/70">
                  Raised $10M to expand our global network and accelerate product development.
                </p>
              </div>
              <div className="glass p-6">
                <h4 className="font-semibold mb-2">2022 - 100K+ Customers</h4>
                <p className="text-sm text-foreground/70">
                  Reached 100,000 protected domains and expanded to 200+ edge locations worldwide.
                </p>
              </div>
              <div className="glass p-6">
                <h4 className="font-semibold mb-2">2023 - AI Integration</h4>
                <p className="text-sm text-foreground/70">
                  Launched AI-powered anomaly detection for zero-day threat protection.
                </p>
              </div>
              <div className="glass p-6">
                <h4 className="font-semibold mb-2">2024 - Enterprise Focus</h4>
                <p className="text-sm text-foreground/70">
                  Expanded enterprise features including load balancing and custom integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto glass-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              We are hiring talented security engineers, infrastructure specialists, and product managers to help us build the future of network protection.
            </p>
            <a
              href="mailto:careers@unhittable.io"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
