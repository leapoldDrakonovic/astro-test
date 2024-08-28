import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SideWindowContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SideWindowContext = createContext<SideWindowContextType | undefined>(undefined);

export const SideWindowProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return ( 
    <SideWindowContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideWindowContext.Provider>
  );
};

export const useSideWindow = () => {
  const context = useContext(SideWindowContext);
  if (!context) {
    throw new Error('useSign must be used within a SideWindowProvider');
  }
  return context;
};
