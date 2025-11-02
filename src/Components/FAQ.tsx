import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "How do I create an account?",
    answer: (
      <p className="text-gray-600">
        To create an account, click on the "Register" button at the top right
        corner of our website. You'll need to provide your name, email address and
        a password to submit or you will continue with Google or Facebook.
      </p>
    ),
  },
  {
    question: "What is this POS solution about?",
    answer: (
      <>
        <p className="text-gray-600 mb-3">

          Our POS (Point of Sale) system is a cloud-based platform that helps restaurants, retail stores, and cafés manage sales, inventory, and customer data in one place — all accessible from any device.
        </p>

      </>
    ),
  },
  {
    question: "Can I use this POS system on mobile and tablet?",
    answer: (
      <p className="text-gray-600">
        Yes! The entire platform is responsive and optimized for mobile, tablet, and desktop devices, so you can manage your business on the go.
      </p>
    ),
  },
  {
    question: "How secure is my data?",
    answer: (
      <>
        <p className="text-gray-600 mb-3">Your data is protected with end-to-end encryption and hosted on secure cloud servers. We follow the latest security standards to ensure your business information stays private.</p>

      </>
    ),
  },
  {
    question: "What kind of customer support do you provide?",
    answer: (
      <p className="text-gray-600">
        We provide 24/7 support via live chat, email, and our Help Center. Our team is always ready to assist with setup, troubleshooting, or customization.
      </p>
    ),
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 font-sans py-12 px-4" id="faq">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-500 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-emerald-500">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our products and services.
          </p>
        </div>
        <div className="mb-10">
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button className="absolute right-3 top-3 text-gray-400 hover:text-indigo-600">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["All", "Account", "Billing", "Features", "Support"].map((cat, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-full transition ${i === 0
                  ? "bg-emerald-500 text-white hover:bg-emerald-600"
                  : "bg-white text-emerald-500 border border-emerald-500 hover:bg-emerald-50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-toggle w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <i
                  className={`fas fa-chevron-down text-indigo-600 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                    }`}
                ></i>
              </button>
              {activeIndex === index && (
                <div className="faq-content px-6 pb-6">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-16 text-center bg-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-emerald-600  mb-3">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our support team is happy to help you with any other questions you
            might have.
          </p>
          <Link to="/contact">
          <button className="px-6 py-3 cursor-pointer bg-gradient-to-r from-black to-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition font-medium">
            Contact Support
          </button>
        </Link>
      </div>
    </div>
    </div >
  );
};

export default FAQ;
