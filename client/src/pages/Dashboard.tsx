import { BarChart3, Shield, TrendingUp, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [counters, setCounters] = useState({
    threats: 0,
    blocked: 0,
    uptime: 0,
    latency: 0,
  });

  // Animated counters
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters({
        threats: Math.floor(Math.random() * 50000) + 10000,
        blocked: Math.floor(Math.random() * 99999) + 50000,
        uptime: 99.99,
        latency: Math.floor(Math.random() * 30) + 15,
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real-Time Dashboard
            </h1>
            <p className="text-xl text-foreground/70">
              Monitor your network protection in real-time with comprehensive analytics and insights.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                icon: Shield,
                label: "Threats Detected",
                value: counters.threats.toLocaleString(),
                change: "+12.5%",
              },
              {
                icon: TrendingUp,
                label: "Attacks Blocked",
                value: counters.blocked.toLocaleString(),
                change: "+8.2%",
              },
              {
                icon: Zap,
                label: "Uptime",
                value: `${counters.uptime}%`,
                change: "Stable",
              },
              {
                icon: BarChart3,
                label: "Avg Latency",
                value: `${counters.latency}ms`,
                change: "-2.1%",
              },
            ].map((metric, idx) => (
              <div key={idx} className="glass p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs font-semibold text-accent">{metric.change}</span>
                </div>
                <p className="text-sm text-foreground/60 mb-2">{metric.label}</p>
                <p className="text-3xl font-bold">{metric.value}</p>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Traffic Chart */}
            <div className="glass p-8">
              <h3 className="text-lg font-semibold mb-6">Traffic Overview</h3>
              <div className="h-64 flex items-end justify-around gap-2">
                {[65, 45, 78, 52, 88, 72, 95, 68, 82, 55, 90, 70].map((height, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-gradient-to-t from-accent to-blue-500 rounded-t-lg opacity-70 hover:opacity-100 transition-opacity"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="mt-4 flex justify-between text-xs text-foreground/60">
                <span>12 hours ago</span>
                <span>Now</span>
              </div>
            </div>

            {/* Attack Timeline */}
            <div className="glass p-8">
              <h3 className="text-lg font-semibold mb-6">Recent Attacks</h3>
              <div className="space-y-4">
                {[
                  { type: "DDoS Attack", time: "2 min ago", blocked: true },
                  { type: "SQL Injection", time: "15 min ago", blocked: true },
                  { type: "Bot Traffic", time: "1 hour ago", blocked: true },
                  { type: "Credential Stuffing", time: "3 hours ago", blocked: true },
                  { type: "XSS Attempt", time: "5 hours ago", blocked: true },
                ].map((attack, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium text-sm">{attack.type}</p>
                      <p className="text-xs text-foreground/60">{attack.time}</p>
                    </div>
                    <span className="text-xs font-bold text-green-600 dark:text-green-400">
                      BLOCKED
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Top Threats",
                items: [
                  { name: "DDoS Attacks", count: "2,341" },
                  { name: "Bot Traffic", count: "1,892" },
                  { name: "SQL Injection", count: "456" },
                  { name: "XSS Attempts", count: "234" },
                ],
              },
              {
                title: "Geographic Distribution",
                items: [
                  { name: "United States", count: "45%" },
                  { name: "Europe", count: "28%" },
                  { name: "Asia Pacific", count: "18%" },
                  { name: "Other", count: "9%" },
                ],
              },
              {
                title: "Protection Status",
                items: [
                  { name: "Layer 3/4", status: "Active" },
                  { name: "Layer 7 WAF", status: "Active" },
                  { name: "Bot Detection", status: "Active" },
                  { name: "Rate Limiting", status: "Active" },
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="glass p-8">
                <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
                <div className="space-y-4">
                  {section.items.map((item, iidx) => (
                    <div key={iidx} className="flex items-center justify-between">
                      <span className="text-sm">{item.name}</span>
                      <span className="text-sm font-semibold text-accent">
                        {(item as any).count || (item as any).status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto glass p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              This is a Preview
            </h2>
            <p className="text-foreground/70 mb-8">
              Sign up for a free trial to access the full dashboard with real-time data, custom reports, and advanced analytics.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
