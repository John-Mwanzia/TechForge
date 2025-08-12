"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "../ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
            Ready to transform your business? Let&apos;s discuss your project
            and see how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-card border border-secondary/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-black dark:text-white mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/20 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black dark:text-white placeholder-black/50 dark:placeholder-white/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-black dark:text-white mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/20 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black dark:text-white placeholder-black/50 dark:placeholder-white/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-black dark:text-white mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary/20 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black dark:text-white placeholder-black/50 dark:placeholder-white/50"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black dark:text-white mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary/20 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                  Contact Information
                </h3>
                <p className="text-black/70 dark:text-white/70 mb-8">
                  We&apos;re here to help and answer any question you might
                  have. We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black dark:text-white mb-1">
                      Office Address
                    </h4>
                    <p className="text-black/70 dark:text-white/70 text-sm">
                      Westlands Business Park
                      <br />
                      Nairobi, Kenya
                      <br />
                      00100
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black dark:text-white mb-1">
                      Phone Number
                    </h4>
                    <p className="text-black/70 dark:text-white/70 text-sm">
                      +254 700 123 456
                      <br />
                      +254 733 987 654
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black dark:text-white mb-1">
                      Email Address
                    </h4>
                    <p className="text-black/70 dark:text-white/70 text-sm">
                      hello@techforge.com
                      <br />
                      support@techforge.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black dark:text-white mb-1">
                      Business Hours
                    </h4>
                    <p className="text-black/70 dark:text-white/70 text-sm">
                      Monday - Friday: 8:00 AM - 5:00 PM (EAT)
                      <br />
                      Saturday: 9:00 AM - 1:00 PM (EAT)
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h4 className="font-semibold text-black dark:text-white mb-2">
                  Quick Response Guarantee
                </h4>
                <p className="text-black/70 dark:text-white/70 text-sm">
                  We typically respond to all inquiries within 24 hours during
                  business days. For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
