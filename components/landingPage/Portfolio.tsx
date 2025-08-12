"use client";

import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description:
        "Modern e-commerce solution with advanced analytics and inventory management",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "mobile",
      description:
        "Patient management system with appointment scheduling and telemedicine features",
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Firebase", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Cloud Infrastructure Setup",
      category: "cloud",
      description:
        "Scalable cloud architecture for a fintech startup with 99.9% uptime",
      image: "/api/placeholder/400/300",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Corporate Website",
      category: "web",
      description:
        "Professional corporate website with CMS and SEO optimization",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "Tailwind", "Strapi", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "IoT Dashboard",
      category: "web",
      description:
        "Real-time monitoring dashboard for IoT devices with data visualization",
      image: "/api/placeholder/400/300",
      technologies: ["Vue.js", "Python", "InfluxDB", "Grafana"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "mobile",
      description:
        "Cross-platform fitness app with workout tracking and social features",
      image: "/api/placeholder/400/300",
      technologies: ["Flutter", "Firebase", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "cloud", label: "Cloud Solutions" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-20 bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6">
            Our Portfolio
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
            Explore our recent projects and see how we&apos;ve helped businesses
            transform their digital presence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-secondary/20 text-black dark:text-white hover:bg-secondary/30"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-secondary/20 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    Project Image
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <ExternalLink className="w-5 h-5 text-black" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Github className="w-5 h-5 text-black" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-black/70 dark:text-white/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <Button className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 group-hover:shadow-lg">
                  View Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
