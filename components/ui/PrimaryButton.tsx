import React from 'react';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function PrimaryButton({ children, className, ...props }: PrimaryButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary/95 active:scale-95 focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
