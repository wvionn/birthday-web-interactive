'use client';
import React, { FC, useEffect, useState } from 'react';
import { Photo } from '../../types';

export const PhotoSlider: FC<{ images: Photo[] }> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto ganti foto tiap 4 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-64 flex flex-col items-center justify-start pt-4">
      {/* Tali Jemuran */}
      <div className="absolute top-6 w-[120%] h-1 bg-gray-400/50 rounded-full shadow-sm rotate-[-2deg]"></div>

      {/* Frame Polaroid */}
      <div className="relative mt-6 p-3 bg-white shadow-xl rotate-2 transition-all duration-700 ease-in-out hover:scale-105 hover:rotate-0 w-48 sm:w-56">
        {/* Jepitan Kayu */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-8 bg-amber-700 rounded-sm z-20 border-r-2 border-amber-800 shadow-md">
           <div className="absolute bottom-1 w-full h-1 bg-amber-900/30"></div>
        </div>

        {/* Gambar */}
        <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 mb-4 rounded-sm relative">
           {images.map((img, idx) => (
             <img 
               key={idx}
               src={img.url} 
               alt={img.alt}
               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === activeIndex ? 'opacity-100' : 'opacity-0'}`}
             />
           ))}
        </div>
        
        {/* font caption under the polaroid*/}
        <div className="text-center font-serif text-slate-600 text-sm italic">
          {images[activeIndex].alt}
        </div>
      </div>
      
      {/* Dots Indicator */}
      <div className="absolute -bottom-0 flex space-x-2">
        {images.map((_, idx) => (
          <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'bg-blue-300 scale-125' : 'bg-gray-300'}`} />
        ))}
      </div>
    </div>
  );
};