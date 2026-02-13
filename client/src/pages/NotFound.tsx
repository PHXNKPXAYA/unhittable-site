import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl md:text-[150px] font-bold gradient-text">
              404
            </h1>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Page Not Found
          </h2>

          <p className="text-xl text-foreground/70 mb-8">
            The page you are looking for does not exist or has been moved. Let us help you get back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg">
                Go Home
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Support
              </Button>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Features", href: "/features" },
              { title: "Pricing", href: "/pricing" },
              { title: "Documentation", href: "/docs" },
            ].map((link, idx) => (
              <Link key={idx} href={link.href}>
                <div className="glass p-6 hover:shadow-lg transition-all cursor-pointer">
                  <p className="font-medium text-foreground/70 hover:text-foreground transition-colors">
                    {link.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
