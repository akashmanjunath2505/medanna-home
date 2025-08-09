import React from 'react';

export const ClockIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export const MicIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
);

export const StethoscopeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 12.188c1.08 1.125 2.5 1.875 4.125 1.875h0a9.03 9.03 0 000-18H7.5c-1.625 0-3.047.75-4.125 1.875m0 0A8.982 8.982 0 002.25 12c0 2.22.783 4.25 2.125 5.813m0-11.626a9.03 9.03 0 010 11.626m-4.25 0a8.956 8.956 0 01-1.125-4.125v-3.375c0-1.523.444-2.95 1.125-4.125m15.375 1.875c-1.08-1.125-2.5-1.875-4.125-1.875h0a9.03 9.03 0 000 18h.03c1.625 0 3.047-.75 4.125-1.875M19.5 12a8.982 8.982 0 00-1.125-4.125m1.125 4.125a8.956 8.956 0 011.125 4.125v3.375c0 1.523-.444 2.95-1.125 4.125m-15.375-1.875a9.03 9.03 0 010-11.626m15.375 0a9.03 9.03 0 000 11.626" />
    </svg>
);

export const ArrowRightIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

export const BrainIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.379m3.421 3.379a15.995 15.995 0 004.468-2.845l.01.002c.03.02.06.038.09.056a15.99 15.99 0 004.825-2.082l-.004-.005a16.002 16.002 0 00-.42-3.419c-.06-.248-.122-.494-.188-.738l-.005-.019a2.25 2.25 0 01.982-2.35 4.5 4.5 0 00-3.028-5.715a5.995 5.995 0 00-2.695 1.056l-.002.001a15.986 15.986 0 00-2.245 2.244l-.002.002a15.986 15.986 0 00-2.244 2.245l-.002.002a15.986 15.986 0 00-2.245 2.244l-.002.002a15.998 15.998 0 00-3.388 1.62" />
    </svg>
);

export const UsersIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.566-.649 1.26-1.285 2.067-1.785a9.09 9.09 0 015.868 2.81.996.996 0 01-1.414 1.414 7.09 7.09 0 00-3.953-1.685m-7.5-2.962a9.09 9.09 0 005.868 2.81.996.996 0 01-1.414 1.414 7.09 7.09 0 01-3.953-1.685m-2.5-4.86a3.375 3.375 0 013.375-3.375h1.5a3.375 3.375 0 013.375 3.375m-7.5 0v6.375a3.375 3.375 0 003.375 3.375h1.5a3.375 3.375 0 003.375-3.375V11.25m-7.5 0h7.5" />
    </svg>
);

export const GraduationCapIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" />
    </svg>
);

export const HeartPulseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h2.5l1.5-4 3 8 2-5 1.5 3.5H21" />
    </svg>
);

export const PreloaderHeartbeatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 250 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 25 H40 L55 10 L75 40 L95 5 L115 30 L130 25 H250"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
    </svg>
);

// === NEW ICONS FOR VOICE-FIRST REDESIGN ===

// --- Revolutionary Features Icons ---
export const SpeakingHeadIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 10c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 8v.5a3.5 3.5 0 01-3.5 3.5h-.5" />
    </svg>
);

export const InfinityMedicalIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12h.01M12 8h.01M12 16h.01M17.25 12h-1.5M6.75 12h-1.5m10.106-4.25a7.5 7.5 0 10-10.106 8.5 7.5 7.5 0 1010.106-8.5z" />
    </svg>
);

export const BrainConversationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75h4.5m-4.5 3h3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 18.375a8.956 8.956 0 00-1.125-4.125c-.2-.5-.43-.984-.687-1.45M12.75 12.75A8.96 8.96 0 0012 13.5v.375" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 20.25h-9a2.25 2.25 0 01-2.25-2.25V6a2.25 2.25 0 012.25-2.25h9A2.25 2.25 0 0118.75 6v12a2.25 2.25 0 01-2.25 2.25z" />
    </svg>
);

// --- How It Works Icons ---
export const AcademicLadderIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V9.5C4 8.12 5.12 7 6.5 7h11C18.88 7 20 8.12 20 9.5V21" /> <path strokeLinecap="round" strokeLinejoin="round" d="M7 21v-5.5C7 14.12 8.12 13 9.5 13h5c1.38 0 2.5 1.12 2.5 2.5V21" /> <path strokeLinecap="round" strokeLinejoin="round" d="M10 21v-3.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5V21" /> <path strokeLinecap="round" strokeLinejoin="round" d="M12 12V3m-2.5 2.5L12 3l2.5 2.5" /> </svg> );
export const SpecialtyGridIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM17 17h1m-4 0h1m-4 0h1m-1-3h1m-1 3h1m3-3h1m-1-3h1m-4-3h1m3 0h1m-7-4h1m-1 3h1m3 0h1" /> <path d="M14 14.5a2.5 2.5 0 105 0 2.5 2.5 0 10-5 0z" /> </svg> );
export const TargetVoiceIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <circle cx="12" cy="12" r="10" /> <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a5 5 0 005 5m-5-5a5 5 0 015-5" /> </svg> );
export const VirtualPatientIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M18 10a2 2 0 100-4h-3.5a2 2 0 100 4H18zM6 10a2 2 0 11-4 0v3.5a2 2 0 114 0V10z" /> </svg> );
export const MicStethoscopeIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75H6a2.25 2.25 0 00-2.25 2.25v2.25a2.25 2.25 0 002.25 2.25h1.5v-6.75zM15.75 3.75H18a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25h-1.5v-6.75z" /> </svg> );
export const AIBrainSpeechBubbleIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M15.375 12a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M18 10.5v.75a7.5 7.5 0 01-7.5 7.5h-1.5a7.5 7.5 0 01-7.5-7.5v-.75" /> <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62" /> </svg> );

// --- Voice Showcase Icons ---
export const PlayIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg> );
export const UserAvatarIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> </svg> );
export const PatientAvatarIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /> </svg> );

export const VolumeOffIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.108 12 5v14c0 .892-1.077 1.337-1.707.707L5.586 15z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l-4-4m0 4l4-4" />
  </svg>
);

// --- Advanced Features Icons ---
export const VoiceWaveformMedicalIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h2.5l1.5-4 3 8 2-5 1.5 3.5H15M18 12h3M18 9h3M18 15h3" /> </svg> );
export const InfinityLoopPatientsIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0 4.97 4.03 9 9 9s9-4.03 9-9-4.03-9-9-9" /> <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 15a6.5 6.5 0 00-11 0" /> </svg> );
export const MultipleFacesIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3 3 0 100-6 3 3 0 000 6z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M19.23 15.23a7.5 7.5 0 10-14.46 0" /> <path strokeLinecap="round" strokeLinejoin="round" d="M7 8.5a1 1 0 11-2 0 1 1 0 012 0z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M19 8.5a1 1 0 10-2 0 1 1 0 002 0z" /> </svg> );
export const SymptomTimelineIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M19 19l-2-2" /> </svg> );
export const HeartEmotionIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h.01M15 10h.01M12 13h.01" /> </svg> );
export const GlobeSpeechBubblesIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12H20.25" /> <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-2.485 0-4.838.86-6.66 2.376M12 21.75c2.485 0 4.838-.86 6.66-2.376M4.5 15.75l-1.5 1.5M19.5 8.25l1.5-1.5" /> </svg> );
export const BrainDecisionTreeIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v1.5m0 7.5v1.5m-3.352-7.148L7.5 7.5m8.996 0l-1.148 1.352M12 19.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M12 13.5V15m0-9V4.5" /> <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 16.5l-1.852 1.852M16.5 16.5l1.852 1.852" /> </svg> );
export const VoiceStethoscopeIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h1.5v9h-1.5z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.75h1.5v9h-1.5z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75H12v2.25a2.25 2.25 0 004.5 0V18h-2.25M12 15.75H9.75v-9H12M12 15.75h2.25v-9H12" /> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 8.25v4.5a3.75 3.75 0 003.75 3.75h1.5v-12h-1.5A3.75 3.75 0 003.75 8.25z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 4.5h1.5a3.75 3.75 0 013.75 3.75v4.5a3.75 3.75 0 01-3.75 3.75h-1.5" /> </svg> );
export const HandshakeEmpathyIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655L7.5 19.56l-2.485-2.485a2.25 2.25 0 010-3.182l2.485-2.485L11.412 15.655z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M12.588 8.345l3.927-3.927 2.485 2.485a2.25 2.25 0 010 3.182l-2.485 2.485L12.588 8.345z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 12l2.828-2.828M10.5 15L7.672 12.172" /> <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 1.674.83 3.193 2.13 4.125" /> </svg> );
export const SpecialtyConversationIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-2.25 3h5.25" /> <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg> );

// Icons for HowItWorksSection specialties
export const InternalMedicineIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-5.247-8.248a3.75 3.75 0 100 7.493 3.75 3.75 0 000-7.493zM17.247 9.5a3.75 3.75 0 100 7.493 3.75 3.75 0 000-7.493z" /> </svg> );
export const SurgeryIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5-4.5L7.5 12l2.25 2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /> </svg> );
export const PediatricsIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m7.692-7.693l-7.693 7.693" /> </svg> );
export const ObgynIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg> );
export const EmergencyMedicineIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l4.08-4.08a.75.75 0 011.06 0l4.08 4.08m-8.16 0L12 21.75l4.08-4.08m-8.16 0L12 5.25l4.08 4.08" /> </svg> );
export const CardiologyIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /> </svg> );
export const NeurologyIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.379m3.421 3.379a15.995 15.995 0 004.468-2.845l.01.002c.03.02.06.038.09.056a15.99 15.99 0 004.825-2.082l-.004-.005a16.002 16.002 0 00-.42-3.419c-.06-.248-.122-.494-.188-.738" /> </svg> );
export const PsychiatryIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /> <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /> </svg> );
export const RadiologyIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.632-2.112A4.5 4.5 0 0118 10.5a4.5 4.5 0 01-4.5 4.5m-5.25 0" /> </svg> );

// === ICONS FOR STUDENT METRICS ===
export const ClinicalReasoningIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.379m3.421 3.379a15.995 15.995 0 004.468-2.845M19.5 12c0-3.313-2.687-6-6-6s-6 2.687-6 6 2.687 6 6 6" /> <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 12H12v3.5" /> </svg> );
export const ToolsEffectivenessIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg> );
export const PreparednessIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z" /> </svg> );
export const StudentAdoptionIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 16.5l-1.5-1.5" /> <path strokeLinecap="round" strokeLinejoin="round" d="M15 12l4.5 4.5" /> </svg> );
export const ReturnUserIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg> );
export const FeedbackIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg> );
export const SurveyedStudentsIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.5a1.125 1.125 0 011.125-1.125h9.75a1.125 1.125 0 011.125 1.125v3.375M16.5 12.75l-3 3m0 0l-3-3m3 3V6.75" /> <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5h6" /> </svg> );
export const BetaTestersIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /> </svg> );
export const MedicalEducatorsIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-2.438c.155-.143.295-.293.43-4.442M15 19.128v-2.872a3.375 3.375 0 00-3.375-3.375H9.75a3.375 3.375 0 00-3.375 3.375v2.872M15 19.128P12 15.75v-2.872a3.375 3.375 0 013.375-3.375H16.5a3.375 3.375 0 013.375 3.375v2.872m-1.5-1.5l-1.5-1.5M4.5 15.75l-1.5-1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg> );
export const SimulationNecessityIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.321h5.365a.562.562 0 01.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.528 5.307a.562.562 0 01-.827.62l-4.206-3.602a.563.563 0 00-.59 0l-4.206 3.602a.562.562 0 01-.827-.62l1.528-5.307a.563.563 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988h5.365a.563.563 0 00.475-.321L11.48 3.5z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15" /> </svg> );