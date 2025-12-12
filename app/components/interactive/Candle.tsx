'use client';
import React, { FC } from 'react';

export const Candle: FC<{ isLit: boolean; onClick: () => void }> = ({ isLit, onClick }) => (
  // Lilin interaktif (bisa diklik buat matiin api)
  <div onClick={onClick} className="relative w-4 h-16 sm:w-5 sm:h-20 bg-yellow-100 border border-yellow-200 mx-1 rounded-sm cursor-pointer hover:-translate-y-1 transition-transform z-20">
    {/* Garis-garis lilin (dekorasi) */}
    <div className="absolute top-2 w-full h-2 bg-pink-300 opacity-50"></div>
    <div className="absolute top-6 w-full h-2 bg-pink-300 opacity-50"></div>
    <div className="absolute top-10 w-full h-2 bg-pink-300 opacity-50"></div>
    
    {/* Api Lilin (Muncul kalau isLit = true) */}
    {isLit && (
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-6 bg-orange-400 rounded-full animate-pulse blur-[1px]">
        <div className="absolute top-1 left-1 w-2 h-4 bg-yellow-200 rounded-full opacity-80"></div>
      </div>
    )}
  </div>
);