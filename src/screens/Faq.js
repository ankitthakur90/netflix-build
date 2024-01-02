import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const faqData = [
    {
      question: "How can I watch Netflix?",
      answer: "You can watch Netflix on various devices such as smart TVs, computers, smartphones, tablets, and more. Just sign in to your account and start streaming!",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, Netflix offers a free trial for new members. You can sign up on the Netflix website to get started.",
    },
    {
      question: "How do I cancel my subscription?",
      answer: "To cancel your Netflix subscription, go to your Account settings and follow the cancellation instructions. Your subscription will be canceled at the end of the current billing period.",
    },
    // Add more questions and answers as needed
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqData.map((item, index) => (
          <li key={index} className={`faq-item ${activeQuestion === index && "active"}`}>
            <div className="question-container" onClick={() => handleToggleAnswer(index)}>
              <span className="question">{item.question}</span>
              <span className="plus-sign">+</span>
            </div>
            {activeQuestion === index && (
              <div className="answer-container">
                <p className="answer">{item.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
