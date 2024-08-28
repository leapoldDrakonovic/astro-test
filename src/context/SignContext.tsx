import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SignContextType {
  sign: string;
  period: string
  setSign: (sign: string) => void;
  setPeriod: (period: string) => void
}

const SignContext = createContext<SignContextType | undefined>(undefined);

export const SignProvider = ({ children }: { children: ReactNode }) => {
  const [sign, setSign] = useState<string>("");
  const [period, setPeriod] = useState<string>("today")

  return (
    <SignContext.Provider value={{ sign, setSign, period, setPeriod }}>
      {children}
    </SignContext.Provider>
  );
};

export const useSign = () => {
  const context = useContext(SignContext);
  if (!context) {
    throw new Error('useSign must be used within a SignProvider');
  }
  return context;
};
