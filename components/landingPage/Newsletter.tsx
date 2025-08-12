"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
              Thank You for Subscribing!
            </h2>
            <p className="text-black/70 dark:text-white/70 mb-6">
              You've successfully subscribed to our newsletter. We'll keep you
              updated with the latest tech insights, project updates, and
              exclusive offers.
            </p>
            <Button
              onClick={() => setIsSubscribed(false)}
              className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Subscribe Another Email
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
                Stay Updated with TechForge
              </h2>
              <p className="text-black/70 dark:text-white/70 mb-6 leading-relaxed">
                Get the latest insights on technology trends, development tips,
                project showcases, and exclusive offers delivered straight to
                your inbox.
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-black/70 dark:text-white/70 text-sm">
                    Weekly tech insights and industry updates
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-black/70 dark:text-white/70 text-sm">
                    Exclusive project case studies and behind-the-scenes content
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-black/70 dark:text-white/70 text-sm">
                    Early access to new services and special offers
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-black/70 dark:text-white/70 text-sm">
                    Development tips and best practices from our experts
                  </span>
                </li>
              </ul>
            </div>

            {/* Newsletter Form */}
            <div className="bg-card border border-secondary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
                Join Our Newsletter
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="newsletter-email"
                    className="block text-sm font-medium text-black dark:text-white mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="newsletter-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-secondary/20 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black dark:text-white placeholder-black/50 dark:placeholder-white/50"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>

              <p className="text-xs text-black/60 dark:text-white/60 text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>

              {/* Social Proof */}
              <div className="mt-6 pt-6 border-t border-secondary/20">
                <div className="flex items-center justify-center space-x-4 text-sm text-black/70 dark:text-white/70">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>1,200+ subscribers</span>
                  </div>
                  <div className="w-1 h-1 bg-black/30 dark:bg-white/30 rounded-full"></div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Weekly updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
