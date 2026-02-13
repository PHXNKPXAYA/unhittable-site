import React, { createContext, useContext, useState } from "react";

interface VerificationContextType {
  isVerified: boolean;
  setIsVerified: (verified: boolean) => void;
  clearVerification: () => void;
}

const VerificationContext = createContext<VerificationContextType | undefined>(undefined);

interface VerificationProviderProps {
  children: React.ReactNode;
}

export function VerificationProvider({ children }: VerificationProviderProps) {
  const [isVerified, setIsVerifiedState] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("unhittable-verified") === "true";
    }
    return false;
  });

  const handleSetIsVerified = (verified: boolean) => {
    setIsVerifiedState(verified);
    if (verified) {
      localStorage.setItem("unhittable-verified", "true");
      localStorage.setItem("unhittable-verified-time", new Date().toISOString());
    }
  };

  const clearVerification = () => {
    setIsVerifiedState(false);
    localStorage.removeItem("unhittable-verified");
    localStorage.removeItem("unhittable-verified-time");
  };

  return (
    <VerificationContext.Provider
      value={{
        isVerified,
        setIsVerified: handleSetIsVerified,
        clearVerification,
      }}
    >
      {children}
    </VerificationContext.Provider>
  );
}

export function useVerification() {
  const context = useContext(VerificationContext);
  if (context === undefined) {
    throw new Error("useVerification must be used within a VerificationProvider");
  }
  return context;
}
