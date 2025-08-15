import {
  Laptop,
  Server,
  Wifi,
  HardDrive,
  Monitor,
  Smartphone,
} from "lucide-react";

export default function ProductCategories() {
  const categories = [
    {
      icon: Laptop,
      title: "Laptops & Desktops",
      description: "High-performance computers for business and personal use",
      count: "150+ Products",
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: Server,
      title: "Servers & Storage",
      description: "Enterprise-grade servers and storage solutions",
      count: "80+ Products",
      color: "from-green-500/20 to-green-600/20",
    },
    {
      icon: Wifi,
      title: "Networking Equipment",
      description: "Routers, switches, and network infrastructure",
      count: "120+ Products",
      color: "from-purple-500/20 to-purple-600/20",
    },
    {
      icon: Monitor,
      title: "Monitors & Displays",
      description: "Professional monitors and display solutions",
      count: "90+ Products",
      color: "from-orange-500/20 to-orange-600/20",
    },
    {
      icon: HardDrive,
      title: "Components & Parts",
      description: "CPUs, RAM, storage drives, and components",
      count: "200+ Products",
      color: "from-red-500/20 to-red-600/20",
    },
    {
      icon: Smartphone,
      title: "Mobile & Tablets",
      description: "Business smartphones and tablets",
      count: "60+ Products",
      color: "from-cyan-500/20 to-cyan-600/20",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6">
            Product Categories
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
            Explore our comprehensive range of technology products across
            different categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-card border border-secondary/20 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-black/70 dark:text-white/70 mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>

                {/* Product Count */}
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold text-sm">
                    {category.count}
                  </span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-black/70 dark:text-white/70 mb-6">
            Can&apos;t find what you&apos;re looking for? We can source any tech
            product you need.
          </p>
          <button className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
