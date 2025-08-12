"use client";

import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "InnovateTech Solutions",
      rating: 5,
      text: "TechForge transformed our entire digital infrastructure. Their team delivered a scalable solution that increased our productivity by 40%. Exceptional service and technical expertise!",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "DataFlow Systems",
      rating: 5,
      text: "Working with TechForge was a game-changer. They not only delivered our mobile app on time but also provided ongoing support that&apos;s been invaluable. Highly recommended!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder",
      company: "GreenTech Innovations",
      rating: 5,
      text: "The custom software solution TechForge built for us streamlined our operations completely. Their attention to detail and commitment to quality is outstanding.",
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Operations Manager",
      company: "LogiCore Industries",
      rating: 5,
      text: "TechForge&apos;s hardware solutions and IT consulting helped us modernize our entire system. The ROI was evident within the first quarter. Professional and reliable!",
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Marketing Director",
      company: "BrandBoost Agency",
      rating: 5,
      text: "Their web development team created a stunning, high-performance website that doubled our conversion rates. The project management was flawless from start to finish.",
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Tech Lead",
      company: "StartupFlow",
      rating: 5,
      text: "TechForge delivered exactly what we needed - a robust, scalable platform that grows with our business. Their expertise in modern technologies is impressive.",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            clients have to say about working with TechForge.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-1 sm:pl-2 md:pl-4 basis-full md:basis-1/2"
                >
                  <div className="bg-card border border-secondary/20 rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden">
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 opacity-10">
                      <Quote className="w-12 h-12 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Stars */}
                      <div className="flex items-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-black dark:text-white mb-6 leading-relaxed flex-grow">
                        &quot;{testimonial.text}&quot;
                      </blockquote>

                      {/* Client Info */}
                      <div className="flex items-center mt-auto">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-primary font-bold text-lg">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black dark:text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-black/70 dark:text-white/70 text-sm">
                            {testimonial.position} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white text-center mb-8">
            Our Track Record
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                98%
              </div>
              <div className="text-black/70 dark:text-white/70 text-sm">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                150+
              </div>
              <div className="text-black/70 dark:text-white/70 text-sm">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                50+
              </div>
              <div className="text-black/70 dark:text-white/70 text-sm">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                24/7
              </div>
              <div className="text-black/70 dark:text-white/70 text-sm">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
