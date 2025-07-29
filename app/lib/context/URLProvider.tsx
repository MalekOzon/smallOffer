"use client"
import { createContext, useContext, useState, useEffect } from 'react';

interface UrlContextType {
  urlSaveContext: string;
  setUrl: (url: string) => void;
  clearUrl: () => void;
}

const UrlContext = createContext<UrlContextType | undefined>(undefined);

export function UrlProvider({ children }: { children: React.ReactNode }) {
  const [urlSaveContext, setUrlState] = useState<string>('http://localhost:3000/showpost');

  // جلب البريد من localStorage عند التحميل الأولي
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedUrl = localStorage.getItem('UrlContextSaved');
      if (savedUrl) {
        setUrlState(savedUrl);
      }
    }
  }, []);

  // دالة لتحديث البريد مع حفظه في localStorage
  const setUrl = (newUrl: string) => {
    setUrlState(newUrl);
    if (typeof window !== 'undefined') {
      localStorage.setItem('UrlContextSaved', newUrl);
    }
  };

  // دالة لمسح البريد من الذاكرة والتخزين المحلي
  const clearUrl = () => {
    setUrlState('');
    if (typeof window !== 'undefined') {
      localStorage.removeItem('UrlContextSaved');
    }
  };

  return (
    <UrlContext.Provider value={{ urlSaveContext, setUrl, clearUrl }}>
      {children}
    </UrlContext.Provider>
  );
}

export function useUrl() {
  const context = useContext(UrlContext);
  if (context === undefined) {
    throw new Error('useURL must be used within an URLProvider');
  }
  return context;
}

