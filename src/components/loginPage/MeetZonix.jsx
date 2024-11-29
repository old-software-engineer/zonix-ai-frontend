import React, { useState } from "react";

const MeetZonix = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const meetZonix = [
    {
      question: "Create with ZONIX AI",
      answer:
        "Draft and iterate on websites, graphics, documents, and code alongside your chat with Artifacts.",
    },
    {
      question: "Bring your knowledge",
      answer:
        "Create Projects and add knowledge so that you can deliver expert-level results with the Zonix Pro, Team and Enterprise plans.",
    },
    {
      question: "Share and collaborate with your team",
      answer:
        "Share your best chats with your team to spark better ideas and move work forward on the Zonix Team and Enterprise plans.",
    },
  ];

  return (
    <div>
      <div className="bg-cream min-h-screen flex flex-col items-center justify-center font-sans text-gray-800">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Meet ZONIX AI</h1>
          <p className="text-lg">
            ZONIX AI is a next-generation AI assistant built by Anthropic and
            trained to be safe, accurate, and secure to help you do your best
            work.
          </p>
        </header>

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full mb-8 lg:mb-0">
            <div className="mb-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="text-sm bg-gray-100 p-3 rounded-md">
                    Build a scatter plot to visualize the relationship between
                    page load time (in seconds) and user session duration (in
                    minutes).
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="text-sm bg-gray-100 p-3 rounded-md">
                    Here's a scatter plot to visualize the relationship between
                    page load time and user session duration:
                  </p>
                  {/* Scatter Plot Placeholder */}
                  <div className="bg-blue-500 text-white rounded-lg mt-3 p-4">
                    <p className="text-sm text-center">Scatter Plot</p>
                    <p className="text-xs text-center">(Placeholder)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {meetZonix.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 py-4 cursor-pointer w-72"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{faq.question}</span>
                </div>
                {activeIndex === index && ( 
                  <div className="mt-2 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetZonix;
