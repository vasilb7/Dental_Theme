import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  theme?: 'light' | 'dark';
  noMargin?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false, className, theme = 'light', noMargin = false }: SectionHeadingProps) {
  return (
    <div className={cn(!noMargin && "mb-12", centered && "text-center", className)}>
      <h2 className={cn(
        "text-3xl font-bold tracking-tight sm:text-4xl",
        theme === 'dark' ? "text-white" : "text-primary"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg max-w-2xl",
          centered && "mx-auto",
          theme === 'dark' ? "text-slate-300" : "text-slate-600"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
