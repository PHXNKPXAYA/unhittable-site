import { Code, FileText, Zap } from "lucide-react";

export default function Docs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-xl text-foreground/70">
              Everything you need to integrate and configure UNHITTABLE.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="glass p-6 sticky top-24">
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {[
                    "Getting Started",
                    "DNS Configuration",
                    "API Reference",
                    "Integration Guide",
                    "Security Rules",
                    "Monitoring",
                    "Troubleshooting",
                    "FAQ",
                  ].map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Getting Started */}
              <div id="getting-started" className="glass p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Getting Started</h2>
                    <p className="text-sm text-foreground/60">Setup UNHITTABLE in 5 minutes</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-foreground/70">
                    Follow these steps to get your first domain protected:
                  </p>
                  <ol className="space-y-3 list-decimal list-inside">
                    <li className="text-foreground/70">Create an account and log in to the dashboard</li>
                    <li className="text-foreground/70">Add your domain in the "Domains" section</li>
                    <li className="text-foreground/70">Update your DNS records to point to UNHITTABLE nameservers</li>
                    <li className="text-foreground/70">Configure security rules for your domain</li>
                    <li className="text-foreground/70">Monitor traffic in the analytics dashboard</li>
                  </ol>
                </div>
              </div>

              {/* DNS Configuration */}
              <div id="dns-configuration" className="glass p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">DNS Configuration</h2>
                    <p className="text-sm text-foreground/60">Point your domain to UNHITTABLE</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-foreground/70">
                    Update your domain's nameservers to the following:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div>ns1.unhittable.io</div>
                    <div>ns2.unhittable.io</div>
                    <div>ns3.unhittable.io</div>
                    <div>ns4.unhittable.io</div>
                  </div>
                  <p className="text-sm text-foreground/60">
                    Changes typically take 24-48 hours to propagate globally.
                  </p>
                </div>
              </div>

              {/* API Reference */}
              <div id="api-reference" className="glass p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">API Reference</h2>
                    <p className="text-sm text-foreground/60">Programmatic access to UNHITTABLE</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-foreground/70">
                    Authenticate with your API key in the Authorization header:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <div>Authorization: Bearer YOUR_API_KEY</div>
                  </div>
                  <h4 className="font-semibold mt-6 mb-2">Example: Get Domain Stats</h4>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{`GET /api/v1/domains/example.com/stats
Authorization: Bearer YOUR_API_KEY

Response:
{
  "domain": "example.com",
  "threats_blocked": 12345,
  "uptime": 99.99,
  "avg_latency": 25
}`}</pre>
                  </div>
                </div>
              </div>

              {/* Integration Guide */}
              <div id="integration-guide" className="glass p-8">
                <h2 className="text-2xl font-bold mb-6">Integration Guide</h2>
                <div className="space-y-4">
                  <h4 className="font-semibold">CDN Integration</h4>
                  <p className="text-foreground/70">
                    If you're using a CDN like Cloudflare or Akamai, add UNHITTABLE as an origin shield:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <div>Origin: unhittable.example.com</div>
                    <div>Protocol: HTTPS</div>
                    <div>Port: 443</div>
                  </div>
                </div>
              </div>

              {/* Security Rules */}
              <div id="security-rules" className="glass p-8">
                <h2 className="text-2xl font-bold mb-6">Security Rules</h2>
                <div className="space-y-4">
                  <p className="text-foreground/70">
                    Configure custom security rules in the dashboard:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li className="text-foreground/70">Rate limiting rules per IP or user</li>
                    <li className="text-foreground/70">Geographic blocking by country</li>
                    <li className="text-foreground/70">Custom WAF rules using regex patterns</li>
                    <li className="text-foreground/70">Bot challenge thresholds</li>
                    <li className="text-foreground/70">Automatic attack response actions</li>
                  </ul>
                </div>
              </div>

              {/* Monitoring */}
              <div id="monitoring" className="glass p-8">
                <h2 className="text-2xl font-bold mb-6">Monitoring & Alerts</h2>
                <div className="space-y-4">
                  <p className="text-foreground/70">
                    Set up alerts to be notified of potential threats:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li className="text-foreground/70">Email notifications for major attacks</li>
                    <li className="text-foreground/70">Webhook integration for custom workflows</li>
                    <li className="text-foreground/70">Slack integration for team alerts</li>
                    <li className="text-foreground/70">SMS alerts for critical events</li>
                  </ul>
                </div>
              </div>

              {/* Troubleshooting */}
              <div id="troubleshooting" className="glass p-8">
                <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Domain not resolving?</h4>
                    <p className="text-sm text-foreground/70">
                      Check that your nameservers have been updated and wait 24-48 hours for propagation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">High latency?</h4>
                    <p className="text-sm text-foreground/70">
                      Check your origin server health and ensure it's responding quickly to requests.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Legitimate traffic blocked?</h4>
                    <p className="text-sm text-foreground/70">
                      Adjust your security rules or add IPs to the whitelist in the dashboard.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div id="faq" className="glass p-8">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "How long does setup take?",
                      a: "Initial setup takes about 5 minutes. DNS propagation typically takes 24-48 hours.",
                    },
                    {
                      q: "Can I use UNHITTABLE with my existing CDN?",
                      a: "Yes, UNHITTABLE can be configured as an origin shield or integrated with most CDN providers.",
                    },
                    {
                      q: "What's the API rate limit?",
                      a: "Standard plans have 1000 requests per minute. Enterprise plans have custom limits.",
                    },
                    {
                      q: "Do you support IPv6?",
                      a: "Yes, full IPv6 support is available on all plans.",
                    },
                  ].map((faq, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold mb-2">{faq.q}</h4>
                      <p className="text-sm text-foreground/70">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
