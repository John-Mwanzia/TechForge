"use client";

import { Shield, Clock, Award, Users, Zap, HeadphonesIcon } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security protocols and data protection for all your solutions",
      color: "text-primary",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description:
        "Fast turnaround times without compromising on quality or reliability",
      color: "text-primary",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "Only top-tier brands and cutting-edge technologies in our solutions",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with years of industry experience",
      color: "text-primary",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services",
      color: "text-primary",
    },
    {
      icon: Clock,
      title: "Scalable Solutions",
      description:
        "Future-proof architecture that grows with your business needs",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6">
            Why Choose TechForge?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
            We combine cutting-edge software development with premium hardware
            solutions, delivering end-to-end tech services that drive your
            business forward
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-4 sm:p-6 md:p-8 bg-card rounded-2xl overflow-hidden"
            >
              {/* Animated beam border - colorful gradient */}
              <div className="absolute inset-0 rounded-2xl">
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-400/40 via-purple-500/50 via-pink-500/40 via-primary/50 to-cyan-400/40 animate-spin-slow opacity-70"></div>
                <div className="absolute inset-[2px] rounded-2xl bg-card"></div>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-secondary/50 dark:bg-secondary/40 rounded-full flex items-center justify-center border border-secondary/30">
                    <feature.icon className="size-8 text-black dark:text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-black/70 dark:text-white/70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-2xl p-6 sm:p-8 border border-secondary/30">
            <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-3 sm:mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-black/70 dark:text-white/70 mb-4 sm:mb-6 max-w-2xl mx-auto px-4 sm:px-0">
              Join our growing list of satisfied clients and experience the
              TechForge difference
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
