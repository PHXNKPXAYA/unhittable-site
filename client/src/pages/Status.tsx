import { CheckCircle, AlertCircle } from "lucide-react";

export default function Status() {
  const services = [
    { name: "Global Edge Network", status: "operational", uptime: "99.99%" },
    { name: "API Services", status: "operational", uptime: "99.98%" },
    { name: "Dashboard", status: "operational", uptime: "99.99%" },
    { name: "DDoS Protection", status: "operational", uptime: "99.99%" },
    { name: "WAF Engine", status: "operational", uptime: "99.97%" },
    { name: "Analytics", status: "operational", uptime: "99.95%" },
  ];

  const incidents = [
    {
      date: "Feb 10, 2026",
      title: "Brief API Latency",
      description: "Experienced elevated latency on API endpoints for 15 minutes. Issue resolved.",
      status: "resolved",
    },
    {
      date: "Feb 5, 2026",
      title: "Scheduled Maintenance",
      description: "Completed infrastructure upgrades in US-East region. No service impact.",
      status: "completed",
    },
    {
      date: "Jan 28, 2026",
      title: "Dashboard Performance",
      description: "Optimized dashboard performance. Average load time reduced by 40%.",
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              System Status
            </h1>
            <p className="text-xl text-foreground/70">
              Real-time status of UNHITTABLE services and infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="glass p-12 text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                <h2 className="text-3xl font-bold">All Systems Operational</h2>
              </div>
              <p className="text-foreground/70 mb-4">
                Last updated: {new Date().toLocaleString()}
              </p>
              <p className="text-sm text-foreground/60">
                30-day uptime: <span className="font-semibold">99.99%</span>
              </p>
            </div>

            {/* Service Status Grid */}
            <h3 className="text-2xl font-bold mb-6">Service Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {services.map((service, idx) => (
                <div key={idx} className="glass p-6 flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold mb-1">{service.name}</h4>
                    <p className="text-sm text-foreground/60">
                      Uptime: {service.uptime}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-600 dark:bg-green-400" />
                    <span className="text-xs font-medium text-green-600 dark:text-green-400">
                      Operational
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Incident History */}
            <h3 className="text-2xl font-bold mb-6">Recent Incidents</h3>
            <div className="space-y-4">
              {incidents.map((incident, idx) => (
                <div key={idx} className="glass p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{incident.title}</h4>
                      <p className="text-sm text-foreground/60">{incident.date}</p>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-600/10 text-green-600 dark:text-green-400">
                      {incident.status === "resolved" ? "RESOLVED" : "COMPLETED"}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/70">{incident.description}</p>
                </div>
              ))}
            </div>

            {/* Maintenance Window */}
            <div className="mt-12 glass p-6 flex items-start gap-4 border-l-4 border-accent">
              <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold mb-1">Scheduled Maintenance</h4>
                <p className="text-sm text-foreground/70">
                  We have no scheduled maintenance windows at this time. We perform maintenance during low-traffic periods and notify customers in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status Page Subscription */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto glass-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Get Status Updates
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Subscribe to receive notifications about service incidents and maintenance.
            </p>
            <a
              href="https://status.unhittable.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View Full Status Page
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
