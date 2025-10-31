import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "How do I create an account?",
    answer: (
      <p className="text-gray-600">
        To create an account, click on the "Sign Up" button at the top right
        corner of our website. You'll need to provide your email address,
        create a password, and fill in some basic information. After
        verification, your account will be ready to use.
      </p>
    ),
  },
  {
    question: "What payment methods do you accept?",
    answer: (
      <>
        <p className="text-gray-600 mb-3">
          We accept all major credit cards including Visa, MasterCard, American
          Express, and Discover. We also support payments through PayPal and
          bank transfers for certain plans.
        </p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Credit/Debit Cards</li>
          <li>PayPal</li>
          <li>Bank Transfers (for annual plans)</li>
        </ul>
      </>
    ),
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: (
      <p className="text-gray-600">
        Yes, you can cancel your subscription at any time. If you cancel during
        your billing period, you'll continue to have access to our services
        until the end of that period. We don't charge any cancellation fees.
      </p>
    ),
  },
  {
    question: "How do I reset my password?",
    answer: (
      <>
        <p className="text-gray-600 mb-3">To reset your password:</p>
        <ol className="list-decimal pl-5 text-gray-600 space-y-2">
          <li>Go to the login page and click "Forgot password"</li>
          <li>Enter the email address associated with your account</li>
          <li>Check your email for a password reset link</li>
          <li>Click the link and follow the instructions to create a new password</li>
        </ol>
      </>
    ),
  },
  {
    question: "Is there a mobile app available?",
    answer: (
      <p className="text-gray-600">
        Yes! We have mobile apps available for both iOS and Android devices. You
        can download them from the App Store or Google Play Store. All your data
        will sync automatically between the web version and mobile apps.
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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-500 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our products and services.
          </p>
        </div>

        {/* Search Bar */}
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

        {/* Categories (static UI only) */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["All", "Account", "Billing", "Features", "Support"].map((cat, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-full transition ${
                i === 0
                  ? "bg-emerald-500 text-white hover:bg-emerald-600"
                  : "bg-white text-emerald-500 border border-emerald-500 hover:bg-emerald-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
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
                  className={`fas fa-chevron-down text-indigo-600 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              {activeIndex === index && (
                <div className="faq-content px-6 pb-6">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center bg-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-emerald-600  mb-3">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our support team is happy to help you with any other questions you
            might have.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-black to-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
