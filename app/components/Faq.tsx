'use client';

import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FaqProps {
  faqData: FAQItem[];
  title?: string;
}

function FAQItemComponent({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className={`text-2xl font-light text-black transition-transform duration-300 shrink-0 ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}>
          +
        </span>
        <span className="flex-1 text-base md:text-lg font-medium text-black">
          {question}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 pl-10 text-gray-700 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function Faq({ faqData, title = "FAQ:" }: FaqProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <FAQItemComponent key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

