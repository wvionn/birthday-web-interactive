'use client';
import React, { FC, useState, useEffect, useRef } from 'react';

export const InteractiveCat: FC = () => {
    const [isPurring, setIsPurring] = useState(false);
    const [blink, setBlink] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // handle cat blinking every few seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setBlink(true);
            setTimeout(() => setBlink(false), 200);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // trigger purring if user clicks the cat
    const handlePet = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio('/purr.mp3');
            audioRef.current.volume = 1.0;
        }
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        setIsPurring(true);
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // Balikin ke detik 0
            audioRef.current.play().catch((e) => console.log('Audio play failed', e));
        }

        setIsPurring(true);

        timerRef.current = setTimeout(() => {
            setIsPurring(false);

            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        }, 5500);

    };

    return (
        <div onClick={handlePet} className={`group relative w-24 h-24 cursor-pointer z-50 hover:scale-105 transition-transform ${isPurring ? 'animate-vibrate' : ''}`}>

            <style>{`
        @keyframes vibrate {
          0% { transform: translate(0, 0); }
          25% { transform: translate(1px, 1px); }
          50% { transform: translate(-1px, -1px); }
          75% { transform: translate(1px, -1px); }
          100% { transform: translate(0, 0); }
        }
        .animate-vibrate {
          animation: vibrate 0.2s linear infinite;
        }
      `     }</style>
            {/* bubble chat (only pop up when user clicked) */}
            <div className={`absolute -top-10 -right-4 bg-white px-2 py-1 rounded-xl text-xs font-bold text-pink-500 shadow-md transition-opacity duration-300 ${isPurring ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                {isPurring ? "Purrr~ ❤️" : "Meow!"}
                <div className="absolute bottom-0 left-2 translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
            </div>
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                {/* --- LAYER 1: WARNA DASAR ORANGE --- */}

                {/* Ekor (Orange dasar) */}
                <path d="M80 80 Q95 70 90 50" stroke="#EA580C" strokeWidth="8" fill="none" strokeLinecap="round" className={`origin-bottom ${isPurring ? 'animate-pulse' : 'group-hover:animate-pulse'}`} />

                {/* Badan (Duduk - Orange Cerah) */}
                <path d="M30 90 L70 90 Q80 90 80 70 L80 50 Q80 30 50 30 Q20 30 20 50 L20 70 Q20 90 30 90" fill="#FB923C" />

                {/* Kaki Depan */}
                <ellipse cx="40" cy="85" rx="6" ry="5" fill="#F97316" />
                <ellipse cx="60" cy="85" rx="6" ry="5" fill="#F97316" />

                {/* Kepala (Orange Cerah) */}
                <ellipse cx="50" cy="40" rx="25" ry="22" fill="#FB923C" />

                {/* Telinga */}
                <path d="M30 25 L25 10 L45 20 Z" fill="#FB923C" stroke="#EA580C" strokeWidth="1" />
                <path d="M70 25 L75 10 L55 20 Z" fill="#FB923C" stroke="#EA580C" strokeWidth="1" />

                {/* --- LAYER 2: MOTIF BELANG (STRIPES) YANG LEBIH NATURAL --- */}
                {/* Menggunakan FILL shape yang lancip ujungnya, bukan garis kaku */}
                <g fill="#9A3412" opacity="0.8"> {/* Warna Coklat Tua Kemerahan, agak transparan dikit biar blend */}

                    {/* Dahi (Bentuk sapuan kuas kecil) */}
                    <path d="M50 18 Q52 23 50 28 L48 28 Q50 23 48 18 Z" />
                    <path d="M44 20 Q46 25 44 30 L42 30 Q44 25 42 20 Z" transform="rotate(-10 43 25)" />
                    <path d="M56 20 Q58 25 56 30 L54 30 Q56 25 54 20 Z" transform="rotate(10 57 25)" />

                    {/* Pipi Kiri (Melengkung ngikutin pipi) */}
                    <path d="M28 42 Q35 47 28 52 L26 50 Q32 47 26 44 Z" />
                    <path d="M27 56 Q34 61 27 66 L25 64 Q31 61 25 58 Z" />

                    {/* Pipi Kanan */}
                    <path d="M72 42 Q65 47 72 52 L74 50 Q68 47 74 44 Z" />
                    <path d="M73 56 Q66 61 73 66 L75 64 Q69 61 75 58 Z" />

                    {/* Badan Samping (Lebih tebal di pinggir) */}
                    <path d="M22 70 Q30 75 22 80 L20 78 Q27 75 20 72 Z" />
                    <path d="M78 70 Q70 75 78 80 L80 78 Q73 75 80 72 Z" />
                </g>

                {/* Motif Ekor (Cincin di atas stroke ekor) */}
                <g stroke="#9A3412" strokeWidth="3" fill="none" opacity="0.8" className={`origin-bottom ${isPurring ? 'animate-pulse' : 'group-hover:animate-pulse'}`}>
                    <path d="M84 72 Q88 70 92 74" />
                    <path d="M87 60 Q91 58 95 62" />
                </g>

                {/* PARTY HAT*/}
                <g transform="rotate(-15 25 40)"> {/* Dimiringin dikit biar lucu */}
                    {/* Badan Topi (Kerucut Biru) */}
                    <path d="M 50 2 L 64 35 Q 50 40 36 35 Z" fill="#3B82F6" stroke="#1E40AF" strokeWidth="1" />

                    {/* Dekorasi Polkadot Putih */}
                    <circle cx="50" cy="18" r="2.5" fill="white" opacity="0.9" />
                    <circle cx="45" cy="28" r="2" fill="white" opacity="0.9" />
                    <circle cx="55" cy="28" r="2" fill="white" opacity="0.9" />
                    <circle cx="50" cy="32" r="1.5" fill="white" opacity="0.9" />

                    {/* Pom-pom di Ujung (Kuning) */}
                    <circle cx="50" cy="2" r="4" fill="#997b04ff" stroke="#CA8A04" strokeWidth="1" />

                    {/* Renda/Ruffle di Base Topi (Kuning) */}
                    <path d="M 36 35 Q 39 38 43 35 Q 46 38 50 35 Q 54 38 57 35 Q 61 38 64 35" stroke="#FACC15" strokeWidth="2" fill="none" strokeLinecap="round" />
                </g>

                {/* FACE */}
                {/* Eyes */}
                {blink || isPurring ? (
                    <>
                        <path d="M36 38 Q42 34 48 38" stroke="#431407" strokeWidth="2" fill="none" strokeLinecap="round" />
                        <path d="M52 38 Q58 34 64 38" stroke="#431407" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </>
                ) : (
                    <>
                        <circle cx="42" cy="38" r="3" fill="#431407" />
                        <circle cx="58" cy="38" r="3" fill="#431407" />
                    </>
                )}

                {/* Nose & Mouth */}
                <path d="M48 45 L52 45 L50 48 Z" fill="#FB7185" />
                <path d="M50 48 Q45 52 42 48 M50 48 Q55 52 58 48" stroke="#431407" strokeWidth="1" fill="none" strokeLinecap="round" />

                {/* Cheeks */}
                <circle cx="35" cy="45" r="3" fill="#FDA4AF" opacity={isPurring ? "0.9" : "0.5"} className="transition-opacity" />
                <circle cx="65" cy="45" r="3" fill="#FDA4AF" opacity={isPurring ? "0.9" : "0.5"} className="transition-opacity" />
            </svg>
        </div>
    );
};

