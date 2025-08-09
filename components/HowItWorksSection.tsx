import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import {
  AcademicLadderIcon, SpecialtyGridIcon, TargetVoiceIcon, VirtualPatientIcon,
  MicStethoscopeIcon, AIBrainSpeechBubbleIcon, ArrowRightIcon, InternalMedicineIcon,
  SurgeryIcon, PediatricsIcon, ObgynIcon, EmergencyMedicineIcon, CardiologyIcon,
  NeurologyIcon, PsychiatryIcon, RadiologyIcon
} from './icons';

const timelineSteps = [
  { icon: <AcademicLadderIcon />, title: 'Choose Your Training Phase', description: "Select your level from Pre-clinical to NEXT/FMG. The AI automatically adjusts case complexity to match." },
  { icon: <SpecialtyGridIcon />, title: 'Pick Your Specialty Focus', description: "Choose from 9+ core specialties. Our AI creates specialty-specific patient personalities and scenarios." },
  { icon: <TargetVoiceIcon />, title: 'Set Your EPA Learning Goal', description: "Focus on History Taking, Physical Exam, Diagnosis, or Management. Voice interaction is optimized for each goal." },
  { icon: <VirtualPatientIcon />, title: 'Meet Your Virtual Patient', description: "Start a natural conversation. Speak your questions and hear realistic patient responses with appropriate emotions." },
  { icon: <MicStethoscopeIcon />, title: 'Conduct Voice-Based Assessment', description: "Perform verbal history-taking and examinations. The AI generates real-time responses and findings, reacting to your bedside manner." },
  { icon: <AIBrainSpeechBubbleIcon />, title: 'Receive Intelligent Feedback', description: "Get personalized voice or text feedback on your conversation skills, diagnostic reasoning, and clinical approach from an AI that analyzes your communication patterns." },
];

const trainingPhases = [
  { name: "Pre-clinical" },
  { name: "Para-clinical" },
  { name: "Clinical" },
  { name: "Internship" },
  { name: "NEXT/FMG Prep" },
];

const specialties = [
    { name: "Internal Medicine", icon: <InternalMedicineIcon /> },
    { name: "Surgery", icon: <SurgeryIcon /> },
    { name: "Pediatrics", icon: <PediatricsIcon /> },
    { name: "Obs & Gyn", icon: <ObgynIcon /> },
    { name: "Emergency", icon: <EmergencyMedicineIcon /> },
    { name: "Cardiology", icon: <CardiologyIcon /> },
    { name: "Neurology", icon: <NeurologyIcon /> },
    { name: "Psychiatry", icon: <PsychiatryIcon /> },
    { name: "Radiology", icon: <RadiologyIcon /> },
];

const epas = [
    { name: "History Taking", description: "Master patient interview and symptom exploration techniques." },
    { name: "Physical Examination", description: "Perfect systematic examination skills and findings interpretation." },
    { name: "Diagnosis", description: "Develop differential diagnosis and clinical reasoning abilities." },
    { name: "Management", description: "Learn treatment planning, medication selection, and patient care." },
];


const TimelineStep = ({ step, index, children }: { step: typeof timelineSteps[0], index: number, children?: React.ReactNode }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  return (
    <div ref={ref} className={`flex gap-x-6 md:gap-x-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
      <div className="relative last:after:hidden after:absolute after:top-14 after:bottom-0 after:start-6 after:w-px after:bg-slate-300 dark:after:bg-slate-700">
        <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 ${isVisible ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
          {step.icon}
        </div>
      </div>
      <div className="grow pt-1 pb-10">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
          <span className="text-slate-400 dark:text-slate-500 mr-2">Step {index + 1}:</span>{step.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mt-1">{step.description}</p>
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
};

export const HowItWorksSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [selectedPhase, setSelectedPhase] = useState('Clinical');
  const [selectedSpecialty, setSelectedSpecialty] = useState('Cardiology');
  const [selectedEpa, setSelectedEpa] = useState('History Taking');

  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-white dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Your Personalized Voice-Interactive Learning Journey
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Our structured 6-step process uses natural voice conversation to build your clinical confidence and competence.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <TimelineStep step={timelineSteps[0]} index={0}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {trainingPhases.map(({ name }) => (
                <button
                  key={name}
                  onClick={() => setSelectedPhase(name)}
                  data-interactive
                  className={`p-3 rounded-lg text-sm font-semibold transition-all duration-200 text-center ${
                    selectedPhase === name
                      ? 'bg-blue-100 dark:bg-blue-900/80 text-blue-600 dark:text-blue-300 ring-2 ring-blue-500'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </TimelineStep>

          <TimelineStep step={timelineSteps[1]} index={1}>
             <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                 {specialties.map(({ name, icon }) => (
                    <button
                        key={name}
                        onClick={() => setSelectedSpecialty(name)}
                        data-interactive
                        className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 text-center ${
                            selectedSpecialty === name
                            ? 'bg-blue-100 dark:bg-blue-900/80 text-blue-600 dark:text-blue-300 ring-2 ring-blue-500'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                    >
                        {icon}
                        <span className="mt-2 text-xs font-semibold text-slate-800 dark:text-slate-200">{name}</span>
                    </button>
                ))}
             </div>
          </TimelineStep>
          
          <TimelineStep step={timelineSteps[2]} index={2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {epas.map(({ name, description }) => (
                      <button
                          key={name}
                          onClick={() => setSelectedEpa(name)}
                          data-interactive
                          className={`p-4 rounded-lg text-left transition-all duration-200 ${
                            selectedEpa === name
                            ? 'bg-blue-100 dark:bg-blue-900/80 ring-2 ring-blue-500'
                            : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                          }`}
                      >
                          <h4 className="font-bold text-slate-800 dark:text-slate-100">{name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{description}</p>
                      </button>
                  ))}
              </div>
          </TimelineStep>

          <TimelineStep step={timelineSteps[3]} index={3} />
          <TimelineStep step={timelineSteps[4]} index={4} />
          <TimelineStep step={timelineSteps[5]} index={5} />

           <div className="flex items-start gap-x-6 md:gap-x-8">
               <div className="relative after:hidden">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </span>
                    </div>
               </div>
               <div className={`grow pt-1 pb-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                   <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900/50 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-blue-500/20">
                       <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                           Your Personalized Learning Path
                       </h3>
                       <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-slate-600 dark:text-slate-300">
                           <span>Phase: <strong className="text-blue-600 dark:text-blue-400">{selectedPhase}</strong></span>
                           <span>Specialty: <strong className="text-blue-600 dark:text-blue-400">{selectedSpecialty}</strong></span>
                           <span>Goal: <strong className="text-blue-600 dark:text-blue-400">{selectedEpa}</strong></span>
                       </div>
                       <a
                          href="https://medannaweb.aivanahealth.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-interactive
                          className="mt-6 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 max-w-max hover:scale-105 active:scale-95"
                        >
                          <span>Start a Case Now</span>
                          <ArrowRightIcon />
                        </a>
                   </div>
               </div>
           </div>

        </div>
      </div>
    </section>
  );
};