"use client"
import { createContext, useContext, useState, useEffect } from 'react';

interface EmailContextType {
  emailSignupContext: string;
  setEmail: (email: string) => void;
  clearEmail: () => void;
}

const EmailContext = createContext<EmailContextType | undefined>(undefined);

export function EmailProvider({ children }: { children: React.ReactNode }) {
  const [emailSignupContext, setEmailState] = useState<string>('');

  // جلب البريد من localStorage عند التحميل الأولي
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedEmail = localStorage.getItem('userEmail');
      if (savedEmail) {
        setEmailState(savedEmail);
      }
    }
  }, []);

  // دالة لتحديث البريد مع حفظه في localStorage
  const setEmail = (newEmail: string) => {
    setEmailState(newEmail);
    if (typeof window !== 'undefined') {
      localStorage.setItem('userEmail', newEmail);
    }
  };

  // دالة لمسح البريد من الذاكرة والتخزين المحلي
  const clearEmail = () => {
    setEmailState('');
    if (typeof window !== 'undefined') {
      localStorage.removeItem('userEmail');
    }
  };

  return (
    <EmailContext.Provider value={{ emailSignupContext, setEmail, clearEmail }}>
      {children}
    </EmailContext.Provider>
  );
}

export function useEmail() {
  const context = useContext(EmailContext);
  if (context === undefined) {
    throw new Error('useEmail must be used within an EmailProvider');
  }
  return context;
}