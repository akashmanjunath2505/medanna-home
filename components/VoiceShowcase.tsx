import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { PlayIcon, UserAvatarIcon, PatientAvatarIcon, VolumeOffIcon } from './icons';

const conversation = [
  { speaker: 'student', text: "Hello, I'm Dr. Smith. What brings you in today?" },
  { speaker: 'patient', text: "Hi Doctor, I've been having this terrible chest pain for the past 2 hours..." },
  { speaker: 'student', text: "Can you describe the pain for me?" },
  { speaker: 'patient', text: "It's like someone is crushing my chest. It started suddenly while I was gardening..." },
];

const highlights = [
  "Natural speech patterns",
  "Realistic emotional responses",
  "Medically accurate descriptions",
  "Appropriate patient concerns"
];

const ChatBubble = ({ item }: { item: typeof conversation[0] }) => {
  const isPatient = item.speaker === 'patient';
  return (
    <div className={`flex items-start gap-4 ${isPatient ? '' : 'flex-row-reverse'}`}>
      <div className={`flex-shrink-0 rounded-full p-2 ${isPatient ? 'bg-indigo-200 dark:bg-indigo-800' : 'bg-slate-200 dark:bg-slate-700'}`}>
        {isPatient ? <PatientAvatarIcon /> : <UserAvatarIcon />}
      </div>
      <div className={`rounded-2xl p-4 max-w-sm ${isPatient ? 'bg-indigo-500 text-white rounded-bl-lg' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-br-lg'}`}>
        <p>{item.text}</p>
      </div>
    </div>
  );
};

export const VoiceShowcase: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  return (
    <section id="voice-showcase" ref={ref} className="py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Experience Real Medical Conversations
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            See how natural voice interaction makes practice more effective and engaging.
          </p>
        </div>
        
        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column: Video */}
          <div className={`relative w-full max-w-[280px] mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div 
              className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-300 dark:ring-slate-700 bg-slate-900"
            >
               {!isPlayerReady && (
                <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <div className="w-8 h-8 border-4 border-slate-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
               <iframe
                  className="absolute top-0 left-0 w-full h-full transform scale-[1.25] transition-opacity duration-500"
                  style={{ opacity: isPlayerReady ? 1 : 0 }}
                  src="https://www.youtube.com/embed/BFzEPRUQFdc?autoplay=1&mute=1&loop=1&playlist=BFzEPRUQFdc&controls=0&showinfo=0&rel=0&modestbranding=1&autohide=1"
                  title="Patient Conversation Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  onLoad={() => setIsPlayerReady(true)}
                  loading="lazy"
                ></iframe>
            </div>
          </div>

          {/* Right Column: Chat Interface */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="space-y-6">
              {conversation.map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : (item.speaker === 'patient' ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10')}`}
                  style={{ transitionDelay: `${isVisible ? index * 200 + 400 : 0}ms` }}
                >
                  <ChatBubble item={item} />
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-start gap-4">
              <button data-interactive className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 active:scale-95">
                <PlayIcon />
                <span>Hear Full Conversation</span>
              </button>
              <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-1 text-left">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};