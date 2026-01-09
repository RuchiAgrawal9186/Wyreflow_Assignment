import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What does Wyreflow do?",
    answer:
      "Wyreflow provides digital transformation services including web, cloud, AI, and enterprise solutions.",
  },
  {
    id: 2,
    question: "How can Wyreflow help my business?",
    answer:
      "We build scalable, secure, and innovative digital solutions tailored to your business needs.",
  },
  {
    id: 3,
    question: "Which industries does Wyreflow serve?",
    answer:
      "We serve industries like healthcare, fintech, retail, logistics, and education.",
  },
  {
    id: 4,
    question: "Why choose Wyreflow?",
    answer:
      "Customer-centric approach, experienced team, and proven delivery excellence.",
  },
];
const styles = {
  container: {
    maxWidth: "1600px",

    padding: "10px 60px",
    backgroundColor: "black",
    color: "white",
  },

  heading: {
    textAlign: "left",
    fontSize: "40px",
    marginBottom: "30px",
  },

  faqBox: {
    borderBottom: "1px solid #ddd",
    padding: "20px 0",
  },

  question: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "600",
    cursor: "pointer",
  },

  icon: {
    fontSize: "24px",
    fontWeight: "700",
  },

  answer: {
    marginTop: "20px",
    fontSize: "16px",
    color: "white",
    lineHeight: "1.6",
  },
};
const FAQSection = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Frequently Asked Questions</h2>

      {faqs.map((faq) => (
        <div key={faq.id} style={styles.faqBox}>
          <div style={styles.question} onClick={() => toggleFAQ(faq.id)}>
            <span>{faq.question}</span>
            <span style={styles.icon}>{activeId === faq.id ? "−" : "+"}</span>
          </div>

          {activeId === faq.id && <div style={styles.answer}>{faq.answer}</div>}
        </div>
      ))}
    </section>
  );
};

export default FAQSection;
