"use client"
import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the purpose of ChatGPT Rewriter?",
      answer: "The tool aims to rewrite AI-generated content to sound more human-like, making it undetectable by AI recognition tools and improving SEO."
    },
    {
      question: "Who can use ChatGPT Rewriter?",
      answer: "It can be used by anyone, regardless of skill or profession, who wants more natural-sounding text or aims to improve their writing skills."
    },
    {
      question: "What are the benefits of using ChatGPT Rewriter?",
      answer: "1. Produces natural-sounding text. 2. Makes text invisible to AI detectors. 3. Provides learning opportunities for writers. 4. Unlimited daily usage. 5. Free of charge."
    },
  ];

  const toggleFAQ = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mb-10">
      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-grey">
          <button
            className="w-full text-left p-4 bg-grey rounded-md focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-white border border-t-0 border-grey rounded-b-md">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
