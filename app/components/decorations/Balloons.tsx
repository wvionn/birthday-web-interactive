'use client';
import React, { FC, useState } from 'react';
import { BalloonData } from '../../types';

export const Balloon: FC<BalloonData & { onPop: (id: number) => void }> = ({ id, color, speed, delay, x, onPop }) => {
  const [popped, setPopped] = useState(false);
  if (popped) return null;
  return (
    <div onClick={e => { e.stopPropagation(); setPopped(true); setTimeout(() => onPop(id), 200); }}
      className="absolute cursor-pointer hover:brightness-110 z-50 group"
      style={{ left: `${x}%`, bottom: '-150px', animation: `floatUp ${speed}s linear forwards`, animationDelay: `${delay}s` }}>
      <svg width="40" height="60" viewBox="0 0 60 80" className="overflow-visible block">
        <path d="M30 0 C10 0 0 20 0 35 C0 55 20 70 30 70 C40 70 60 55 60 35 C60 20 50 0 30 0 Z" fill={color} />
        <path d="M30 70 Q30 80 25 90" stroke="#888" strokeWidth="2" fill="none" />
        <ellipse cx="20" cy="20" rx="6" ry="10" fill="white" opacity="0.3" transform="rotate(-30 20 20)" />
      </svg>
      <span className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-white 
        px-2 py-1 rounded text-xs font-bold text-gray-600 shadow-sm pointer-events-none">
        POP!
      </span>
      <style>{`@keyframes floatUp { from{transform:translateY(0);} to{transform: translateY(-130vh);} }`}</style>
    </div>
  );
};