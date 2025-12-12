'use client';
import React, { useState, useEffect, useRef, FC } from 'react';
import { Avatar } from '../decorations/Avatar';
import { Message } from '../../types';
import { chatScript } from '../../data/content';

interface ChatSectionProps {
  onComplete: () => void;
}

export const ChatSection: FC<ChatSectionProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, typing]);

  useEffect(() => {
    if (messages.length === 0) {
      setTyping(true);
      setTimeout(() => {
        setMessages([{ type: 'text', content: chatScript[0].text, sender: 'me' }]);
        setTyping(false);
      }, 1300);
    }
  }, []);

  const handleChoice = (choice: string) => {
    setMessages([...messages, { type: 'text', content: choice, sender: 'user' }]);
    const nextStep = currentStep + 1;
    if (nextStep < chatScript.length) {
      setTyping(true); 
      setCurrentStep(nextStep);
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'text', content: chatScript[nextStep].text, sender: 'me' }]);
        setTyping(false);
      }, 1300);
    } else {
      setTimeout(() => onComplete(), 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 relative overflow-hidden font-sans px-2 pt-2 pb-4">
      <div className="w-full max-w-xs sm:max-w-md bg-gray-900 shadow-2xl flex flex-col h-[98vh] sm:h-[80vh] min-h-[400px] sm:rounded-xl">
        <div className="bg-gray-800 p-4 flex items-center shadow-md z-10 border-b border-gray-700">
          <Avatar />
          <div className="ml-3">
            <h2 className="font-bold text-white text-sm sm:text-base">Ur best person?</h2>
            <p className="text-xs text-green-400">{typing ? 'typing...' : 'Online'}</p>
          </div>
        </div>
        <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-4 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
          <div className="text-center text-xs text-gray-500 my-4">Today</div>
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] sm:max-w-[75%] p-3 rounded-2xl text-sm shadow-lg ${
                msg.sender === 'user' ? 'bg-green-600 text-white rounded-br-none' : 'bg-gray-700 text-gray-100 rounded-bl-none'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {typing &&
            <div className="flex w-full justify-start animate-pulse">
              <div className="bg-gray-700 p-3 rounded-2xl rounded-bl-none flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          }
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 bg-gray-800 border-t border-gray-700">
          {!typing && currentStep < chatScript.length ? (
            <div className="flex flex-col space-y-2">
              {chatScript[currentStep].choices.map((c, i) => (
                <button key={i} onClick={() => handleChoice(c)}
                  className="w-full py-3 px-4 bg-gray-700 hover:bg-gray-600 active:bg-gray-500 rounded-xl text-left transition-colors text-sm font-medium border border-gray-600 shadow-md">
                  {c}
                </button>
              ))}
            </div>
          ) : (
            <div className="h-12 flex items-center justify-center text-gray-500 text-sm italic">
              {currentStep >= chatScript.length ? "Mempersiapkan kejutan..." : "Menunggu balasan..."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};