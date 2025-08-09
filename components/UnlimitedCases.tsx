import React, { useState, useCallback } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { BrainIcon } from './icons';

const sampleCases = [
  {
    title: "A 45-year-old Male with Prolonged Fever and Abdominal Discomfort",
    tags: {
      row1: [
        { text: "Internal Medicine", color: "blue" },
        { text: "Para-clinical", color: "green" },
        { text: "Application", color: "yellow" },
      ],
      row2: [
        { text: "History-taking" },
        { text: "Physical Exam" },
        { text: "Diagnosis" },
        { text: "CBME/NExT" },
      ],
    },
    competency: {
        code: "M 1.1",
        description: "Describe the etiological agents, pathogenesis, epidemiology, clinical manifestations, laboratory diagnosis, treatment and prevention of common bacterial, viral, fungal, parasitic, spirochaetal and rickettsial diseases."
    },
    patient: "Rajesh Kumar, 45, Male"
  },
  {
    title: "A 23-year-old Student with Anxiety and Palpitations",
    tags: {
      row1: [
        { text: "Psychiatry", color: "purple" },
        { text: "Clinical", color: "green" },
        { text: "Knowledge", color: "yellow" },
      ],
      row2: [
        { text: "History-taking" },
        { text: "Diagnosis" },
      ],
    },
    competency: {
        code: "PS 2.3",
        description: "Differentiate between anxiety disorders, panic attacks, and somatic symptom disorders based on clinical presentation."
    },
    patient: "Priya Sharma, 23, Female"
  },
  {
    title: "An 8-year-old Child with High Fever and a Widespread Rash",
    tags: {
      row1: [
        { text: "Pediatrics", color: "pink" },
        { text: "Clinical", color: "green" },
        { text: "Application", color: "yellow" },
      ],
      row2: [
        { text: "Physical Exam" },
        { text: "Diagnosis" },
        { text: "Management" },
      ],
    },
    competency: {
        code: "PE 4.1",
        description: "Recognize and manage common childhood exanthems, including measles, rubella, and varicella."
    },
    patient: "Aarav Singh, 8, Male"
  },
   {
    title: "A 72-year-old Smoker with Shortness of Breath",
    tags: {
      row1: [
        { text: "Cardiology", color: "red" },
        { text: "Clinical", color: "green" },
        { text: "Management", color: "yellow" }
      ],
      row2: [
        { text: "History-taking" },
        { text: "Physical Exam" },
        { text: "Diagnosis" }
      ]
    },
    competency: {
        code: "CVS 3.5",
        description: "Evaluate and manage a patient with suspected chronic obstructive pulmonary disease (COPD) exacerbation."
    },
    patient: "Suresh Gupta, 72, Male"
  }
];

const CaseCard = ({ caseData, isVisible }: { caseData: typeof sampleCases[0], isVisible: boolean }) => {
    const tagColorClasses: { [key: string]: string } = {
        blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
        green: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
        yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
        purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300',
        pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-300',
        red: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300',
    };
    
    const defaultTagClass = 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300';

    return (
        <div className={`bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-500 h-full flex flex-col ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">{caseData.title}</h3>
            
            <div className="mt-4 flex flex-wrap gap-2">
                {caseData.tags.row1.map((tag: any) => (
                    <span key={tag.text} className={`px-3 py-1 text-xs font-semibold rounded-full ${tagColorClasses[tag.color] || defaultTagClass}`}>
                        {tag.text}
                    </span>
                ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
                 {caseData.tags.row2.map((tag: any) => (
                    <span key={tag.text} className={`px-3 py-1 text-xs font-semibold rounded-full ${defaultTagClass}`}>
                        {tag.text}
                    </span>
                ))}
            </div>

            <div className="mt-6 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-800 dark:text-slate-100">Competency: {caseData.competency.code}</strong> {caseData.competency.description}
                </p>
            </div>
            
            <div className="flex-grow"></div>
            <p className="mt-6 text-right font-semibold text-slate-500 dark:text-slate-400">{caseData.patient}</p>
        </div>
    )
}

export const UnlimitedCases: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
    const [shuffling, setShuffling] = useState(false);

    const generateNewCase = useCallback(() => {
        if (shuffling) return;
        setShuffling(true);
        let shuffleCount = 0;
        const shuffleInterval = setInterval(() => {
            setCurrentCaseIndex(prevIndex => (prevIndex + 1) % sampleCases.length);
            shuffleCount++;
            if (shuffleCount >= 10) { // Shuffle for a bit
                clearInterval(shuffleInterval);
                const newIndex = Math.floor(Math.random() * sampleCases.length);
                setCurrentCaseIndex(newIndex);
                setShuffling(false);
            }
        }, 50);
    }, [shuffling]);

    return (
        <section id="unlimited-cases" ref={ref} className="bg-white dark:bg-slate-800/50 py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                            Never-Ending Learning Opportunities
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                            With over 10,000+ unique case combinations, our case generator ensures you'll never repeat the same scenario twice. It even learns your weak areas to create focused practice.
                        </p>
                        <button 
                            onClick={generateNewCase}
                            data-interactive
                            disabled={shuffling}
                            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center gap-3 hover:scale-105 active:scale-95 disabled:bg-blue-400 disabled:cursor-wait"
                        >
                            <BrainIcon />
                            <span>{shuffling ? 'Generating...' : 'Generate New Case'}</span>
                        </button>
                    </div>
                    <div className="relative min-h-[420px] md:min-h-[380px]">
                         {sampleCases.map((caseItem, index) => (
                             <div 
                                key={index} 
                                className={`absolute inset-0 transition-all duration-300 ${index === currentCaseIndex ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                             >
                                <CaseCard caseData={caseItem} isVisible={isVisible} />
                             </div>
                         ))}
                    </div>
                </div>
            </div>
        </section>
    );
};