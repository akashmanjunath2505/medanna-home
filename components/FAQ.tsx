import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ChevronDownIcon } from './icons';

const faqData = [
  {
    question: "How realistic are the AI patients?",
    answer: "Our AI patients are trained on thousands of real clinical scenarios and respond with medically accurate symptoms, vital signs, and examination findings. They adapt to your questioning style and provide realistic patient personalities and concerns."
  },
  {
    question: "Can I use MedAnna for exam preparation?",
    answer: "Absolutely! MedAnna is specifically designed for OSCE preparation, clinical skills exams, and medical licensing tests. Our cases align with standard examination formats and assessment criteria."
  },
  {
    question: "Is my progress data secure and private?",
    answer: "Yes, we use enterprise-grade encryption and comply with FERPA and GDPR regulations. Your learning data is never shared with third parties and remains completely confidential."
  },
  {
    question: "Can I practice on mobile devices?",
    answer: "Yes, MedAnna works seamlessly on tablets, smartphones, and desktop computers. Many students prefer practicing on tablets for the most realistic clinical interface experience."
  },
  {
    question: "How does the AI feedback work?",
    answer: "After each case, you receive detailed explanations of correct diagnostic reasoning, alternative approaches you could have taken, and personalized recommendations for improvement based on your specific performance patterns."
  },
  {
    question: "Can instructors track student progress?",
    answer: "Our institutional plans include comprehensive instructor dashboards where faculty can assign specific cases, monitor student engagement, and track learning outcomes across their classes."
  },
  {
    question: "What medical specialties are covered?",
    answer: "MedAnna covers all major medical specialties including Internal Medicine, Emergency Medicine, Cardiology, Neurology, Pediatrics, Surgery, Psychiatry, and more, with new cases added monthly."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try 3 complete cases for free without any credit card required. Simply click \"Try Interactive Demo\" to get started immediately."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-700 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left gap-4"
        aria-expanded={isOpen}
        data-interactive
      >
        <span className="text-lg font-semibold text-slate-800 dark:text-slate-200">{question}</span>
        <ChevronDownIcon className={`transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-blue-500' : 'rotate-0 text-slate-500'}`} />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="faq" ref={ref} className="py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                >
                    <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-slate-100 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
                        Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${isVisible ? index * 100 : 0}ms` }}
                        >
                            <FAQItem question={item.question} answer={item.answer} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
