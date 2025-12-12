'use client';
import React, { useState, useEffect, FC } from 'react';
import { Confetti } from '../decorations/Confetti';
import { LetterModal } from '../modals/LetterModal';
import { Balloon } from '../decorations/Balloons';
import { Flower } from '../decorations/Flowers';
import { PhotoSlider } from '../interactive/PhotoSlider';
import { Candle } from '../interactive/Candle';
import { photoAlbum } from '../../data/content';
import { BalloonData } from '../../types';
import { InteractiveCat } from '../interactive/Cat';

// 1. KUE - BACKGROUND
const BaseCake: FC = () => (
    <svg viewBox="0 0 200 200" className="w-60 h-60 sm:w-72 sm:h-72 drop-shadow-xl transform translate-y-4">
        {/* Cake plate */}
        <ellipse cx="100" cy="165" rx="90" ry="20" fill="#f1f5f9" />
        <ellipse cx="100" cy="155" rx="80" ry="15" fill="#e2e8f0" />

        {/* Base cake */}
        <path d="M25 110 L25 150 Q100 185 175 150 L175 110" fill="#FEF3C7" />
        <ellipse cx="100" cy="110" rx="75" ry="20" fill="#FEF3C7" />

        {/* Frosting pink */}
        <path d="M25 110 Q25 130 40 125 Q55 120 70 130 Q85 140 100 125 Q115 110 130 130 Q145 150 160 130 Q175 120 175 110 Q100 150 25 110" fill="#F472B6" />
        <ellipse cx="100" cy="110" rx="75" ry="20" fill="#FBCFE8" />
    </svg>
);

// 2. ceri (foreground)
const CherryOverlay: FC = () => (
    <svg viewBox="0 0 200 200" className="absolute top-0 left-0 w-60 h-65 sm:w-72 sm:h-72 pointer-events-none z-50 transform translate-y-4">
        {/* Cherry */}
        <circle cx="100" cy="90" r="12" fill="#EF4444" />
        <path d="M98 80 Q100 70 108 75" stroke="green" strokeWidth="3" fill="none" />
        {/* Highlight Kilap Ceri */}
        <circle cx="96" cy="86" r="3" fill="white" opacity="0.4" />
    </svg>
);

export const CelebrationSection: FC = () => {
    const [candlesLit, setCandlesLit] = useState([true, true, true]);
    const [wished, setWished] = useState(false);
    const [balloons, setBalloons] = useState<BalloonData[]>([]);
    const [showLetter, setShowLetter] = useState(false);

    const allOut = candlesLit.every(lit => !lit);

    useEffect(() => {
        if (allOut) {
            setWished(true);
            const colors: string[] = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF9F43', '#A8E6CF'];
            const newBalloons: BalloonData[] = Array.from({ length: 20 }).map((_, i) => ({
                id: i, x: Math.random() * 90 + 5, speed: Math.random() * 10 + 10, delay: Math.random() * 4.5, color: colors[Math.floor(Math.random() * colors.length)],
            }));
            setBalloons(newBalloons);
        }
    }, [allOut]);

    const toggleCandle = (idx: number) => {
        if (candlesLit[idx]) {
            const newCandles = [...candlesLit];
            newCandles[idx] = false;
            setCandlesLit(newCandles);
        }
    };

    const handlePopBalloon = (id: number) => setBalloons(prev => prev.filter(b => b.id !== id));

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden font-sans bg-gradient-to-b from-[#b0e0e6] to-[#f8f8f8] px-2 sm:px-5 pt-5 pb-4">
            <style>{`.animate-fadeIn { animation: fadeIn 1.5s ease-in forwards; } @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>

            {/* Pattern Grid Halus */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#4A5568 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            </div>

            <Confetti active={wished} />
            <LetterModal isOpen={showLetter} onClose={() => setShowLetter(false)} />
            {balloons.map((b) => <Balloon key={b.id} {...b} onPop={handlePopBalloon} />)}

            {/* sudut bunga */}
            <div className="absolute top-4 left-4 sm:top-10 sm:left-10"><Flower type="poppy" className="transform -rotate-12 scale-95 sm:scale-150" /></div>
            <div className="absolute top-8 right-4 sm:top-20 sm:right-10"><Flower type="dandelion" className="transform rotate-12 scale-90 sm:scale-125" /></div>
            <div className="absolute bottom-0.5 left-4 sm:bottom-10 sm:left-16"><Flower type="lily" className="transform -rotate-6 scale-95 sm:scale-130" /></div>
            <div className="absolute bottom-0.5 right-4 sm:bottom-20 sm:right-16"><Flower type="tulip" className="transform rotate-6 scale-90 sm:scale-125" /></div>

            <div className="relative z-30 w-full max-w-xs sm:max-w-md md:max-w-xl p-0 sm:p-4">
                <div className="text-center mb-7">
                    <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-700 mb-2 transition-all duration-1000 ${wished ? 'scale-110 text-pink-600 drop-shadow-lg' : ''}`}>
                        {wished ? "Happy Birthday!" : "Close your eyes..."}
                    </h1>
                    <p className="text-slate-500 text-base sm:text-lg">{wished ? "Pencet balonnya dan baca suratnya!" : "And make a wish!!"}</p>
                    {!wished && (
                        <div className="mt-4 text-pink-600 font-bold animate-pulse text-sm bg-white/70 inline-block px-3 py-1 rounded-full shadow-lg">
                            Klik lilinnya buat niup api! 👇
                        </div>
                    )}
                    {wished && !showLetter && (
                        <div className="mt-4 text-red-700 font-bold animate-bounce text-sm bg-white/70 inline-block px-3 py-1 rounded-full cursor-pointer shadow-lg" onClick={() => setShowLetter(true)}>
                            Ada surat di meja! 👇
                        </div>
                    )}
                </div>

                <div className="w-full h-[550px] bg-amber-200 border-8 border-amber-300 rounded-xl shadow-2xl relative overflow-hidden flex flex-col justify-end items-center group">
                    <div className="absolute top-4 w-11/12 sm:w-3/4 max-w-[350px] left-1/2 -translate-x-1/2 z-10"><PhotoSlider images={photoAlbum} /></div>

                    {/* Meja */}
                    <div className="w-[120%] h-1/3 bg-[#D32F2F] shadow-inner relative transform skew-x-2 -mb-2 flex justify-center items-end pb-8">
                        <div className="absolute top-0 w-full h-4 bg-[#B71C1C] opacity-30"></div>
                       {/* cat position */}
                        <div className="absolute left-2 bottom-32 z-[60] sm:left-6 sm:bottom-32">
                        <InteractiveCat/>
                    </div>
                        {/* Amplop */}
                        <div onClick={() => setShowLetter(true)}
                            className="absolute right-5 sm:right-14 bottom-16 w-14 h-9 bg-red-600 border border-red-700 shadow-xl cursor-pointer hover:scale-105 transition-transform z-20 flex items-center justify-center rotate-3"
                            style={{ display: wished ? 'flex' : 'none' }}>
                            <div className="absolute top-0 w-0 h-0 border-l-[28px] border-l-transparent border-r-[28px] border-r-transparent border-t-[18px] border-t-red-800"></div>
                            <span className="text-[8px] text-white/50 mt-2 font-bold z-30">Open Me</span>
                        </div>
                    </div>

                    {/* Cake + Candles Area (UPDATED LAYERING) */}
                    <div className="absolute bottom-16 flex flex-col items-center z-10">

                        <div className="flex justify-center space-x-6 translate-y-35 z-30 relative">
                            {candlesLit.map((isLit, i) => (
                                <Candle key={i} isLit={isLit} onClick={() => toggleCandle(i)} />
                            ))}
                        </div>

                        <div className="relative">

                            <BaseCake />

                            <CherryOverlay />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};