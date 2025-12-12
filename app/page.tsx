'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChatSection } from './components/views/ChatSection';
import { CelebrationSection } from './components/views/CelebrationSection';
import { Transition } from './components/views/Transition';

export default function Page() {
  const [stage, setStage] = useState<'chat' | 'celebration'>('chat');
  const [showTransition, setShowTransition] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false); // State buat nandain musiknya udah nyala belum

  const handleChatComplete = () => {
    setShowTransition(true);
  };

  const handleTransitionDone = () => {
    setStage('celebration');
    setShowTransition(false);
  };

  // Fungsi Play Music
  const playMusic = () => {
    const audio = document.getElementById('bg-music') as HTMLAudioElement;
    if (audio) {
      audio.volume = 0.4;
      audio.play()
        .then(() => {
          setMusicStarted(true);
        })
        .catch(e => {
          console.log("Audio play blocked (nunggu interaksi user)");
        });
    }
  };

  // ---GLOBAL CLICK LISTENER ---

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!musicStarted) {
        playMusic();
      }
    };


    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);


    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [musicStarted]);


  return (
    <>
      <Transition show={showTransition} onFinished={handleTransitionDone} />

      {stage === 'chat' && <ChatSection onComplete={handleChatComplete} />}
      {stage === 'celebration' && <CelebrationSection />}


      <audio id="bg-music" src="/song.mp3" loop></audio>


    </>
  );
}