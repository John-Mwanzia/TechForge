import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function ProductShowcase() {
  const showcaseItems = [
    {
      title: "Enterprise Solutions",
      subtitle: "Complete IT Infrastructure",
      description:
        "From servers to networking equipment, we provide complete enterprise solutions that scale with your business needs.",
      features: [
        "24/7 Technical Support",
        "On-site Installation",
        "Maintenance Contracts",
        "Scalable Solutions",
      ],
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center",
      cta: "Explore Enterprise",
    },
    {
      title: "Creative Workstations",
      subtitle: "Power for Professionals",
      description:
        "High-performance workstations designed for creative professionals, developers, and content creators.",
      features: [
        "Latest Generation CPUs",
        "Professional Graphics",
        "High-Speed Storage",
        "Color-Accurate Displays",
      ],
      image:
        "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600&h=400&fit=crop&crop=center",
      cta: "View Workstations",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6">
            Specialized Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
            Tailored technology solutions for specific business needs and
            professional requirements
          </p>
        </div>

        {/* Showcase Items */}
        <div className="space-y-16 sm:space-y-24">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="mb-4">
                  <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                  {item.title}
                </h3>

                <p className="text-black/70 dark:text-white/70 mb-8 leading-relaxed">
                  {item.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {item.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-black dark:text-white text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2">
                  {item.cta}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden h-80">
                    <Image
                      src={item.image}
                      alt={`${item.title} - ${item.subtitle}`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse hidden sm:block"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/30 rounded-full animate-pulse hidden sm:block"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-24">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 sm:p-12 border border-primary/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-black/70 dark:text-white/70 mb-8 max-w-2xl mx-auto">
              Our experts can help you design and source the perfect technology
              solution for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Consult Our Experts
              </Button>
              <Button className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
