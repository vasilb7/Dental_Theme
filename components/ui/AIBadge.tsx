'use client';

import React from 'react';

interface AIBadgeProps {
  className?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

export function AIBadge({ className = '', position = 'bottom-right' }: AIBadgeProps) {
  const posClasses = {
    'bottom-right': 'bottom-3 right-3',
    'bottom-left': 'bottom-3 left-3',
    'top-right': 'top-3 right-3',
    'top-left': 'top-3 left-3',
  }[position];

  const tooltipAlignClasses = {
    'bottom-right': 'bottom-full right-0 mb-2',
    'bottom-left': 'bottom-full left-0 mb-2',
    'top-right': 'top-full right-0 mt-2',
    'top-left': 'top-full left-0 mt-2',
  }[position];

  return (
    <div className={`absolute ${posClasses} z-30 group/ai ${className}`}>
      {/* Black AI Circle Badge */}
      <div 
        className="w-7 h-7 rounded-full bg-black/85 hover:bg-black text-white text-[10px] font-black tracking-wider flex items-center justify-center border border-white/30 shadow-lg backdrop-blur-md cursor-help transition-all duration-200 hover:scale-110 select-none"
        aria-label="EU AI Act Disclosure"
      >
        AI
      </div>

      {/* Hover Tooltip Card */}
      <div className={`absolute ${tooltipAlignClasses} hidden group-hover/ai:block w-64 p-3 bg-slate-900/95 text-white text-xs font-medium leading-normal rounded-xl shadow-2xl border border-slate-700/80 backdrop-blur-md pointer-events-none transition-all duration-200 z-50`}>
        <div className="flex items-center gap-1.5 mb-1.5 text-accent font-bold uppercase text-[10px] tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          EU AI Act Disclosure
        </div>
        <p className="text-slate-200 text-[11px] leading-relaxed">
          Съгласно EU AI Act, този модел е дигитално генериран от <strong>VB AI Models</strong>.
        </p>
      </div>
    </div>
  );
}

