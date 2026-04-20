"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3" role="list" aria-label="Frequently asked questions">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className={`bg-stone-900 border rounded-2xl overflow-hidden transition-colors duration-200 ${
              isOpen ? "border-amber-500/40" : "border-stone-800 hover:border-stone-700"
            }`}
            role="listitem"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-3"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span className="font-semibold text-white text-sm leading-snug pr-2">
                {faq.question}
              </span>
              <ChevronDown
                size={18}
                className={`text-amber-400 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-stone-800 pt-4">
                {faq.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
