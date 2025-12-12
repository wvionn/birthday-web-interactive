'use client';
import React, { FC, useEffect, useState } from 'react';

export const Transition: FC<{ show: boolean; onFinished: () => void }> = ({ show, onFinished }) => {
  const [stage, setStage] = useState<'idle' | 'in' | 'out'>('idle');

  useEffect(() => {
    if (show) {
      setStage('in'); // Layar menggelap
      setTimeout(() => {
        setStage('out'); // Layar terang lagi (masuk celebration)
        onFinished();
      }, 2500); // Durasi gelapnya
    }
  }, [show]);

  if (stage === 'idle' && !show) return null;

  return (
    <div className={`fixed inset-0 z-[100] pointer-events-none flex items-center justify-center bg-black transition-opacity duration-1000 ${stage === 'in' ? 'opacity-100' : 'opacity-0'}`}>
      {/* Teks kecil pas gelap (opsional) */}
      <div className={`text-white font-serif text-xl tracking-widest transition-all duration-700 delay-500 ${stage === 'in' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Preparing your surprise...
      </div>
    </div>
  );
};