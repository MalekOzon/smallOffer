"use client"
import { createContext, useContext, useState, useEffect } from 'react';

interface PhoneContextType {
  phoneNumberContext: string;
  setPhoneNumber: (phone: string) => void;
  clearPhoneNumber: () => void;
}

const PhoneContext = createContext<PhoneContextType | undefined>(undefined);

export function PhoneProvider({ children }: { children: React.ReactNode }) {
  const [phoneNumberContext, setPhoneNumberContext] = useState<string>('');

  // تحميل رقم الهاتف من localStorage عند أول تحميل
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPhone = localStorage.getItem('userPhoneNumber');
      if (savedPhone) {
        setPhoneNumberContext(savedPhone);
      }
    }
  }, []);

  // حفظ الرقم
  const setPhoneNumber = (newPhone: string) => {
    setPhoneNumberContext(newPhone);
    if (typeof window !== 'undefined') {
      localStorage.setItem('userPhoneNumber', newPhone);
    }
  };

  // مسح الرقم
  const clearPhoneNumber = () => {
    setPhoneNumberContext('');
    if (typeof window !== 'undefined') {
      localStorage.removeItem('userPhoneNumber');
    }
  };

  return (
    <PhoneContext.Provider value={{ phoneNumberContext, setPhoneNumber, clearPhoneNumber }}>
      {children}
    </PhoneContext.Provider>
  );
}

export function usePhone() {
  const context = useContext(PhoneContext);
  if (context === undefined) {
    throw new Error('usePhone must be used within a PhoneProvider');
  }
  return context;
}
