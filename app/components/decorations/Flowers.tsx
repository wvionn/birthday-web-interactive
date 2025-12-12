import React, { FC } from 'react';

export const Flower: FC<{ type: 'poppy' | 'dandelion' | 'lily' | 'tulip'; className: string }> = ({ type, className }) => {
  const stems = "stroke-green-600 stroke-[3px] fill-none";
  switch (type) {
    case 'poppy': return (<svg viewBox="0 0 100 100" className={`w-11 h-11 sm:w-16 sm:h-16 ${className} drop-shadow-md`}>
      <path d="M50 100 Q50 50 50 50" className={stems} />
      <path d="M30 20 Q10 10 10 40 Q20 70 50 70 Q80 70 90 40 Q90 10 70 20 Q50 30 50 50 Q50 30 30 20" fill="#EF4444" />
      <circle cx="50" cy="50" r="8" fill="#1F2937" />
    </svg>);
    case 'dandelion': return (<svg viewBox="0 0 100 100" className={`w-11 h-11 sm:w-16 sm:h-16 ${className} drop-shadow-md`}>
      <path d="M50 100 L50 60" className={stems} />
      {[...Array(12)].map((_, i) => (
        <line key={i} x1="50" y1="60" x2={50+25*Math.cos(i*30*Math.PI/180)} y2={60+25*Math.sin(i*30*Math.PI/180)} stroke="#FCD34D" strokeWidth="3" />
      ))}
      <circle cx="50" cy="60" r="5" fill="#F59E0B" />
    </svg>);
    case 'lily': return (<svg viewBox="0 0 100 100" className={`w-10 h-10 sm:w-14 sm:h-14 ${className} drop-shadow-md`}>
      <path d="M50 100 Q60 80 50 60" className={stems} />
      <path d="M50 60 Q30 30 20 20 Q40 40 50 60" fill="white" stroke="#E5E7EB" />
      <path d="M50 60 Q70 30 80 20 Q60 40 50 60" fill="white" stroke="#E5E7EB" />
      <path d="M50 60 Q50 20 50 10 Q50 40 50 60" fill="white" stroke="#E5E7EB" />
    </svg>);
    case 'tulip': return (<svg viewBox="0 0 100 100" className={`w-11 h-11 sm:w-14 sm:h-14 ${className} drop-shadow-md`}>
      <path d="M50 100 Q40 70 50 65" className={stems} />
      <path d="M30 35 Q30 65 50 65 Q70 65 70 35 Q70 15 50 25 Q30 15 30 35" fill="#EC4899" />
    </svg>);
    default: return null;
  }
};