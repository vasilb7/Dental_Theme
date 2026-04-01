import React from 'react';
import { cn } from '@/lib/utils';

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function SecondaryButton({ children, className, ...props }: SecondaryButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg border-2 border-primary bg-transparent px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
