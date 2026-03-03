// src/components/FAQ.jsx
import React, { useState, useRef } from "react";

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients see measurable growth within 4–6 weeks, depending on their starting point and engagement level.",
  },
  {
    question: "Do I need to provide my own content?",
    answer:
      "We can guide content strategy and provide templates, but original content creation is up to you.",
  },
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes! Our plans are flexible and can be upgraded or downgraded at any time without penalties.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div
      className={`rounded-3xl transition-all duration-300 border 
      ${isOpen
          ? "border-primary/40 shadow-xl shadow-primary/10"
          : "border-gray-200 dark:border-gray-700"
        }
      bg-white dark:bg-gray-900`}
    >
      <button
        onClick={onClick}
        className="w-full px-8 py-6 flex justify-between items-center text-left group"
      >
        <span className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white tracking-tight">
          {faq.question}
        </span>

        <span
          className={`text-xl transition-transform duration-300 text-gray-500 dark:text-gray-400 ${isOpen ? "rotate-180" : ""
            }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="px-8 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white dark:bg-darkBg transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-20 text-gray-900 dark:text-white tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              isOpen={openIndex === idx}
              onClick={() => toggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;