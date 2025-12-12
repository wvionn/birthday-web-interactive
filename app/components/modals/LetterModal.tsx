'use client';
import React, { FC } from 'react';

export const LetterModal: FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;


  const myPhoneNumber = process.env.NEXT_PUBLIC_WA_NUMBER || ""; 

  return (
    // Z-INDEX 9999: Penting biar gak ketutup Kucing/Kue
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      
      {/* Container Surat (Miring dikit rotatenya biar natural, Tanpa Animasi biar stabil) */}
      <div className="relative w-full max-w-md bg-[#FFFDD0] rounded-sm shadow-2xl overflow-hidden transform rotate-1">
        
        {/* Hiasan 1: Washi Tape (Selotip Merah) */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-red-200/90 rotate-[-2deg] shadow-sm z-30"></div>

        {/* Hiasan 2: Tekstur Kertas Halus */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

        {/* Tombol Close (X) - Pojok Kiri */}
        <button onClick={onClose} className="absolute top-3 left-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full p-2 transition-colors z-50 text-xl font-bold">
          ✕
        </button>

        {/* --- AREA KONTEN (SCROLLABLE) --- */}
        {/* max-h-[70vh] artinya tinggi maksimal 70% layar, sisanya di-scroll */}
        <div className="relative z-20 max-h-[80vh] overflow-y-auto p-8 sm:p-10 custom-scrollbar">
          
          {/* Header */}
          <h3 className="text-2xl font-bold text-red-800 border-b-2 border-red-800/10 pb-3 mb-5 inline-block font-serif">
            Dear You,
          </h3>

          {/* Isi Surat */}
          <div className="font-serif leading-relaxed text-slate-800 space-y-4 text-justify text-sm sm:text-base">
            <p>Happy Birthday to my best friend! 🎉</p>
            <p>
              Selamat ulang tahun buat orang paling spesial. Sebenarnya banyak sih yang mau gua ketik tapi kayaknya gak muat :v 
              But first of all, i wanna thanks for everything. Almost 1 year i knew u, and i feel so grateful that i met u. Really. I think you're one of the person that i could ever wish for.
            My day been brighter everytime i talk to u, and i hope the same goes to u too.
            </p>
            <p>
              Semoga di umur yang baru ini, lu makin stabil kondisinya, makin bahagia, makin cantik, makin awet muda, dan makin dicintai banyak orang (termasuk gua:v). 
              Jangan lupa juga buat terus ngejar apa yang lu inginkan, gua yakin satu persatu lu bisa capai itu semua dgn usaha dan kerja keras lu.
            </p>
            <p>
            Apalagi ya? Ya pokoknya met ultah lah. Kalo dunia bikin lu capek, istirahat. Kalo ada manusia yg bikin lu kesel, inget… tp gua juga manusia sih :v, jadi sabar ya. Tapi gua usahain gua jadi manusia yang ga buat lu pengen pindah planet.
            Pokoknya gua seneng lu masih betah ngobrol sama gua. Gatau kenapa sih, mungkin karena gua lucu? Iya kan? Iya dong. 😏
            </p>
            <p>
              Gua bakal ada disini terus buat lu. Selama lu masih nyaman ada gua di hidup lu.. ❤️
            </p>
            <p>
                Oh ya, kucing yang ada di meja bisa dipencet itu. Tar dia bersuara~ (Klo lu belum tau) okeh.
            </p>
          </div>

          {/* Tanda Tangan */}
          <div className="mt-8 pt-4 border-t border-gray-800/10 flex flex-col items-end">
              <p className="text-xs text-gray-500 font-sans tracking-widest uppercase mb-1">With Love,</p>
              <div className="font-serif italic text-3xl text-red-700 -rotate-2">
                - V
              </div>
          </div>

          {/* Tombol Balas WA (Opsional, kalau gak mau apus aja div ini) */}
          <div className="mt-8 text-center">
            <a 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}?text`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-full text-xs font-bold tracking-wider transition-colors uppercase cursor-pointer decoration-0"
            >
              <span>💌</span> Balas Surat
            </a>
          </div>

        </div>
      </div>

      {/* Style buat Scrollbar biar tipis & cantik */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 10px; }
      `}</style>
    </div>
  );
};