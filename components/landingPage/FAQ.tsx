"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does TechForge offer?",
      answer:
        "We offer comprehensive tech solutions including custom software development, mobile app development, web development, cloud solutions, hardware supply, and IT consulting. Our team specializes in end-to-end digital transformation for businesses of all sizes.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex software solutions can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes! We offer comprehensive support and maintenance packages. This includes regular updates, security patches, performance monitoring, and 24/7 technical support. We believe in long-term partnerships with our clients.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "We work with a wide range of modern technologies including React, Node.js, Python, Flutter, React Native, AWS, Docker, and many more. Our team stays updated with the latest tech trends to provide cutting-edge solutions.",
    },
    {
      question: "How do you ensure project quality?",
      answer:
        "We follow industry best practices including code reviews, automated testing, continuous integration, and agile development methodologies. Every project goes through rigorous quality assurance before delivery.",
    },
    {
      question: "Can you work with our existing systems?",
      answer:
        "Absolutely! We specialize in system integration and can work with your existing infrastructure. We'll assess your current setup and provide solutions that seamlessly integrate with your existing systems.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is project-based and depends on scope, complexity, and timeline. We offer competitive rates and transparent pricing with no hidden costs. Contact us for a detailed quote tailored to your specific needs.",
    },
    {
      question: "Do you sign NDAs and ensure data security?",
      answer:
        "Yes, we take data security very seriously. We're happy to sign NDAs and follow strict security protocols. All our development processes comply with industry security standards and data protection regulations.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
            Got questions? We've got answers. Here are some of the most common
            questions we receive from our clients.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-secondary/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between hover:bg-secondary/10 transition-colors duration-200"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-6">
                    <p className="text-black/70 dark:text-white/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-black/70 dark:text-white/70 mb-6">
              Can't find the answer you're looking for? Our team is here to help
              you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Contact Us
              </a>
              <a
                href="mailto:hello@techforge.com"
                className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
