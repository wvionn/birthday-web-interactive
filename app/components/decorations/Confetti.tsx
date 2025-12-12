'use client';
import React, { FC, useEffect, useState } from 'react';

export const Confetti: FC<{ active: boolean }> = ({ active }) => {
  interface Particle { id: number; x: number; y: number; color: string; size: number; rotation: number; speed: number; delay: number; }
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    if (active) {
      const colors = ['#FFC0CB','#FFD700','#87CEEB','#98FB98','#E6E6FA'];
      const newParticles: Particle[] = Array.from({length: 50}).map((_, i) => ({
        id: i, x: Math.random()*100, y: -10-Math.random()*20, color: colors[Math.floor(Math.random()*colors.length)],
        size: Math.random()*10+5, rotation: Math.random()*360, speed: Math.random()*5+2, delay: Math.random()*2 }));
      setParticles(newParticles);
    }
  }, [active]);

  if (!active) return null;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-40">
      {particles.map(p => (
        <div key={p.id} className="absolute"
          style={{
            left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px`, backgroundColor: p.color,
            transform: `rotate(${p.rotation}deg)`, animation: `fall ${p.speed}s linear infinite`, animationDelay: `${p.delay}s`, borderRadius: '4px',
          }} />
      ))}
      <style>{`@keyframes fall { to { transform: translateY(110vh) rotate(720deg); } }`}</style>
    </div>
  );
};