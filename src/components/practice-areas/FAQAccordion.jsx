"use client";

import { useState } from "react";

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="border-b border-navy/10 pb-4">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex justify-between items-center text-left py-3 font-display text-lg md:text-xl text-navy hover:text-brass transition-colors focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-xl text-brass shrink-0 ml-4 font-light">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-slate leading-relaxed pr-8 text-sm md:text-base">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
