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
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.379m3.421 3.379a15.995 15.995 0 004.468-2.845l.01.002c.03.02.06.038.09.056a15.99 15.99 0 004.825-2.082l-.004-.005a16.002 16.002 0 00-.42-3.419c-.06-.248-.122-.494-.188-.738l-.005-.019a2.25 2.25 0 01.982-2.35 4.5 4.5 0 00-3.028-5.715a5.995 5.995 0 00-2.695 1.056l-.002.001a15.986 15.986 0 00-2.245 2.244l-.002.002a15.986 15.986 0 00-2.244 2.245l-.002.002a15.986 15.986 0 00-2.245 2.244l-.002.002a15.998 15.998 0 00-3.388 1.62m5.043 .025a15.994 15.994 0 01-1.622 3.379m3.421-3.379a15.995 15.995 0 004.468 2.845l.01.002c.03.02.06.038.09.056a15.99 15.99 0 004.825-2.082l-.004-.005a16.002 16.002 0 00-.42-3.419c-.06-.248-.122-.494-.188-.738l-.005-.019a2.25 2.25 0 01.982-2.35 4.5 4.5 0 00-3.028-5.715a5.995 5.995 0 00-2.695 1.056l-.002.001a15.986 15.986 0 00-2.245 2.244l-.002.002a15.986 15.986 0 00-2.244 2.245l-.002.002a15.986 15.986 0 00-2.245 2.244l-.002.002a15.998 15.998 0 00-3.388 1.62" />
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

export const CogIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m1.5 0H21m-9 6.75v1.5m0-1.5V3.75m0 1.5v1.5m0 10.5v1.5m0-1.5V6.75m-6-1.5h1.5m1.5 0H18m-3-1.5V3.75m0 1.5v1.5m0 10.5v1.5m0-1.5V6.75m-6 3.75h1.5m1.5 0H15" />
    </svg>
);

export const DocumentArrowDownIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);

export const ChatBubbleLeftRightIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.722.534a1.125 1.125 0 01-1.007-.991v-5.228c0-.934.658-1.751 1.533-1.996l3.675-.735zM10.5 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.722.534a1.125 1.125 0 01-1.007-.991v-5.228c0-.934.658-1.751 1.533-1.996l3.675-.735zM3.75 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193L.028 17.534a1.125 1.125 0 01-1.007-.991v-5.228c0-.934.658-1.751 1.533-1.996l3.675-.735z" />
    </svg>
);

export const HeartPulseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h2.5l1.5-4 3 8 2-5 1.5 3.5H21" />
    </svg>
);

export const InfinityIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.098 8.623c.312-.53.402-1.152.402-1.773 0-2.828-2.228-5.11-4.973-5.11S3.554 4.022 3.554 6.85c0 .621.09 1.242.402 1.773m9.142 0c.312.53.402 1.152.402 1.773 0 2.828-2.228 5.11-4.973 5.11S3.554 13.224 3.554 10.397c0-.621.09-1.242.402-1.773m9.142 0L20.446 6.85c.312-.53.402-1.152.402-1.773 0-2.828-2.228-5.11-4.973-5.11S10.928 4.022 10.928 6.85c0 .621.09 1.242.402 1.773m-1.832 0L10.928 10.397c.312.53.402 1.152.402 1.773 0 2.828-2.228 5.11-4.973 5.11S1.382 13.224 1.382 10.397c0-.621.09-1.242.402-1.773L10.928 8.623z" />
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