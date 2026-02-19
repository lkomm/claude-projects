"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {faqs.map(({ question, answer }, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={question}
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="text-lg font-semibold text-black dark:text-white">
                {question}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`ml-4 shrink-0 text-zinc-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-6 pb-5">
                <p className="text-zinc-600 dark:text-zinc-400">{answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
