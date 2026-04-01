'use client';

import { useState, useEffect } from 'react';

export function useFormDraft<T>(key: string, initialValue: T) {
  const [draft, setDraft] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading sessionStorage', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(draft));
    } catch (error) {
      console.error('Error setting sessionStorage', error);
    }
  }, [key, draft]);

  const clearDraft = () => {
    try {
      window.sessionStorage.removeItem(key);
      setDraft(initialValue);
    } catch (error) {
      console.error('Error removing sessionStorage', error);
    }
  };

  return [draft, setDraft, clearDraft] as const;
}
