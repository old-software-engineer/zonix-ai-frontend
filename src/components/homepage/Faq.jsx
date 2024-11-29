import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Zonix and how does it work?",
      answer: "Zonix is an AI system designed to assist with a variety of tasks like answering questions, generating text, and more.",
    },
    {
      question: "What should I use Zonix for?",
      answer: "You can use Zonix for tasks such as content creation, coding, research, and general problem-solving.",
    },
    {
      question: "How much does it cost to use?",
      answer: "The cost depends on the pricing plan you select, with options ranging from free trials to paid plans.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Frequently asked questions
      </h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-300 py-4 cursor-pointer"
          onClick={() => toggleAccordion(index)}
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">{faq.question}</span>
            <span className="text-xl">
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          {activeIndex === index && (
            <div className="mt-2 text-gray-600">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
