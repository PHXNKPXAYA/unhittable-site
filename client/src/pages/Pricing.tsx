import { Button } from "@/components/ui/button";
import { CheckCircle, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small projects",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "Up to 10 Gbps protection",
        "Layer 3/4 filtering",
        "Basic bot mitigation",
        "5 domains",
        "Email support",
        "30-day analytics",
      ],
      notIncluded: [
        "Layer 7 WAF",
        "AI anomaly detection",
        "Load balancing",
        "Priority support",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      description: "For growing businesses",
      monthlyPrice: 499,
      yearlyPrice: 4990,
      features: [
        "Up to 100 Gbps protection",
        "Layer 3/4 filtering",
        "Advanced bot mitigation",
        "Layer 7 WAF",
        "50 domains",
        "AI anomaly detection",
        "Real-time analytics",
        "Priority support",
        "90-day analytics",
      ],
      notIncluded: [
        "Load balancing",
        "Custom integrations",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "For mission-critical systems",
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        "Unlimited protection",
        "All Layer 3/4 features",
        "All Layer 7 features",
        "AI anomaly detection",
        "Unlimited domains",
        "Load balancing",
        "Global edge network",
        "Custom integrations",
        "Unlimited analytics",
        "24/7 phone support",
        "Dedicated account manager",
        "99.99% SLA",
      ],
      notIncluded: [],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Choose the protection level that fits your needs. All plans include our core security features.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 glass px-6 py-3 rounded-full">
              <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-foreground/60"}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative inline-flex h-8 w-14 items-center rounded-full bg-muted"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-background transition-transform ${
                    isYearly ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-foreground/60"}`}>
                Yearly
              </span>
              {isYearly && (
                <span className="ml-2 text-sm font-semibold text-accent">
                  Save 17%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`glass p-8 flex flex-col ${
                  plan.highlighted ? "ring-2 ring-accent md:scale-105" : ""
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-flex items-center justify-center w-full mb-4">
                    <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-foreground/60 mb-6">{plan.description}</p>

                {/* Pricing */}
                <div className="mb-6">
                  {plan.monthlyPrice ? (
                    <>
                      <div className="text-4xl font-bold">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </div>
                      <p className="text-sm text-foreground/60 mt-1">
                        {isYearly ? "per year" : "per month"}
                      </p>
                    </>
                  ) : (
                    <div className="text-2xl font-bold text-accent">
                      Custom Pricing
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Link href="/contact" className="mb-8">
                  <Button
                    variant={plan.highlighted ? "default" : "outline"}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </Link>

                {/* Features */}
                <div className="space-y-3 flex-1 mb-6">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Not Included */}
                {plan.notIncluded.length > 0 && (
                  <div className="border-t border-border/40 pt-6 space-y-3">
                    {plan.notIncluded.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-foreground/30 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/50">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Detailed Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "DDoS Protection", starter: true, pro: true, enterprise: true },
                  { name: "Layer 7 WAF", starter: false, pro: true, enterprise: true },
                  { name: "AI Anomaly Detection", starter: false, pro: true, enterprise: true },
                  { name: "Bot Mitigation", starter: true, pro: true, enterprise: true },
                  { name: "Load Balancing", starter: false, pro: false, enterprise: true },
                  { name: "Global Edge Network", starter: false, pro: true, enterprise: true },
                  { name: "Real-Time Analytics", starter: false, pro: true, enterprise: true },
                  { name: "API Access", starter: false, pro: true, enterprise: true },
                  { name: "Custom Rules", starter: false, pro: true, enterprise: true },
                  { name: "Priority Support", starter: false, pro: true, enterprise: true },
                  { name: "Dedicated Account Manager", starter: false, pro: false, enterprise: true },
                  { name: "99.99% SLA", starter: false, pro: false, enterprise: true },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">{row.name}</td>
                    <td className="text-center py-4 px-4">
                      {row.starter ? (
                        <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-foreground/30 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.pro ? (
                        <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-foreground/30 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.enterprise ? (
                        <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-foreground/30 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Can I change plans anytime?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes, all plans come with a 14-day free trial. No credit card required.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, bank transfers, and purchase orders for enterprise customers.",
                },
                {
                  q: "Do you offer volume discounts?",
                  a: "Yes, enterprise customers can negotiate custom pricing based on their needs.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="glass p-6">
                  <h4 className="font-semibold mb-2">{faq.q}</h4>
                  <p className="text-sm text-foreground/60">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
