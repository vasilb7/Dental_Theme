'use client';

import { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';

export function OfflineBanner() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Set initial state
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="bg-amber-500 text-white px-4 py-2.5 text-sm font-medium flex items-center justify-center gap-2 sticky top-0 z-[100] shadow-sm">
      <WifiOff className="h-4 w-4" />
      <span>Нямате интернет връзка. Някои функции може да са недостъпни.</span>
    </div>
  );
}
