import { Users, Target, Award, Lightbulb } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Empowering businesses through innovative technology solutions and premium equipment.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Building lasting partnerships by delivering exceptional value and personalized service.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "Staying ahead of technology trends to provide cutting-edge solutions.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "Committed to delivering the highest standards in everything we do.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6">
            About TechForge
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
            We&apos;re a passionate team of developers, designers, and tech
            enthusiasts dedicated to building the future of digital business.
          </p>
        </div>

        {/* Main Content Layout - Following the provided design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Side - Story */}
          <div>
            <div className="space-y-6 text-black/70 dark:text-white/70 leading-relaxed mb-8">
              <p>
                Founded with a vision to bridge the gap between software
                innovation and hardware excellence, TechForge has emerged as a
                trusted partner for businesses seeking comprehensive technology
                solutions.
              </p>
              <p>
                Our unique approach combines custom software development
                expertise with carefully curated tech equipment offerings,
                ensuring our clients have everything they need to succeed in
                today&apos;s digital landscape.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
              >
                Our Portfolio
              </a>
              <a
                href="#contact"
                className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
              >
                Meet Our Team
              </a>
            </div>
          </div>

          {/* Right Side - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-secondary/20 rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-black dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
