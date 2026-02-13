import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Bot, Globe, Lock, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Enterprise-Grade Protection</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="gradient-text">UNHITTABLE</span>
              <br />
              <span className="text-foreground">Network Resilience</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Enterprise-grade uptime protection with global edge defense, intelligent traffic filtering, and real-time threat mitigation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Dashboard
                </Button>
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="text-sm text-foreground/50">
              🛡️ Trusted by enterprise customers worldwide
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Protection
            </h2>
            <p className="text-lg text-foreground/70">
              Multi-layered defense across all network layers with AI-powered threat detection.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Lock,
                title: "Layer 3/4 Filtering",
                description: "Advanced DDoS mitigation at network and transport layers with real-time threat analysis.",
              },
              {
                icon: Zap,
                title: "Layer 7 Protection",
                description: "Application-layer WAF with intelligent bot detection and rate limiting.",
              },
              {
                icon: Bot,
                title: "AI Anomaly Detection",
                description: "Machine learning-powered threat detection with zero-day protection.",
              },
              {
                icon: Globe,
                title: "Global Edge Network",
                description: "Distributed protection across 200+ edge locations worldwide.",
              },
              {
                icon: BarChart3,
                title: "Real-Time Analytics",
                description: "Live dashboard with detailed traffic insights and attack visualization.",
              },
              {
                icon: Lock,
                title: "Enterprise Uptime",
                description: "99.99% SLA with automatic failover and redundancy.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="glass p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center glass-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Protect Your Network?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Start with a free trial. No credit card required. Full access to all features.
            </p>
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
