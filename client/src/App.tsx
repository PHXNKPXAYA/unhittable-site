import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VerificationGate from "@/components/VerificationGate";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Dashboard from "@/pages/Dashboard";
import Docs from "@/pages/Docs";
import FAQ from "@/pages/FAQ";
import Features from "@/pages/Features";
import NotFound from "@/pages/NotFound";
import Pricing from "@/pages/Pricing";
import Privacy from "@/pages/Privacy";
import Status from "@/pages/Status";
import Terms from "@/pages/Terms";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { VerificationProvider, useVerification } from "./contexts/VerificationContext";
import Home from "./pages/Home";

function ProtectedRouter() {
  const { isVerified, setIsVerified } = useVerification();

  if (!isVerified) {
    return <VerificationGate onVerified={() => setIsVerified(true)} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/features" component={Features} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/docs" component={Docs} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />
          <Route path="/status" component={Status} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <VerificationProvider>
          <TooltipProvider>
            <Toaster />
            <ProtectedRouter />
          </TooltipProvider>
        </VerificationProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
