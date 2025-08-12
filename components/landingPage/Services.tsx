import { ChevronsLeftRight, MoveRight, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

export default function Services() {
  return (
    <div className="flex flex-col container mx-auto px-4 sm:px-6 lg:px-8 text-black dark:text-white py-16 sm:py-24 md:py-32 lg:py-48">
      <div className="flex flex-col mb-12 sm:mb-16 justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-4 sm:pb-6 text-center">
          Our Services
        </h1>
        <p className="max-w-2xl text-center text-base sm:text-lg px-4 sm:px-0">
          Comprehensive tech solutions combining cutting-edge software
          development with premium hardware to accelerate your business growth
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-6xl mx-auto px-4 sm:px-0">
        <div className="group relative border border-white/20 px-4 sm:px-6 pt-6 sm:pt-8 pb-8 sm:pb-10 rounded-2xl bg-gradient-to-br from-background to-secondary/20 hover:from-primary/5 hover:to-primary/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Icon with animation */}
          <div className="relative z-10 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
              <ChevronsLeftRight className="text-primary size-8 group-hover:size-9 transition-all duration-300" />
            </div>
          </div>

          <div className="relative z-10">
            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl py-3 sm:py-4 group-hover:text-primary transition-colors duration-300">
              Custom Software Development
            </h2>
            <p className="pb-4 text-black/70 dark:text-white/70 group-hover:text-black/90 dark:group-hover:text-white/90 transition-colors duration-300 text-sm sm:text-base">
              Full-Stack web applications, mobile apps, and enterprise solutions
              tailored to your business needs
            </p>

            {/* Enhanced feature list */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Web Applications</span>
                </div>
                <div className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">API Development</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300 delay-150">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Mobile Apps</span>
                </div>
                <div className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300 delay-200">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Cloud Solutions</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button className="border border-primary/50 bg-transparent hover:bg-primary hover:text-white group-hover:border-primary transition-all duration-300 group-hover:shadow-lg">
                <span className="group-hover:mr-2 transition-all duration-300">
                  Learn More
                </span>
                <MoveRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>

        <div className="group relative border border-white/20 px-4 sm:px-6 pt-6 sm:pt-8 pb-8 sm:pb-10 rounded-2xl bg-gradient-to-br from-background to-secondary/20 hover:from-primary/5 hover:to-primary/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Icon with animation */}
          <div className="relative z-10 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
              <ShoppingCart className="text-primary size-8 group-hover:size-9 transition-all duration-300" />
            </div>
          </div>

          <div className="relative z-10">
            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl py-3 sm:py-4 group-hover:text-primary transition-colors duration-300">
              Tech Equipment Store
            </h2>
            <p className="pb-4 text-black/70 dark:text-white/70 group-hover:text-black/90 dark:group-hover:text-white/90 transition-colors duration-300 text-sm sm:text-base">
              Premium computers, servers, network equipment and accessories from
              leading brands
            </p>

            {/* Enhanced feature list */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Laptops & Desktops</span>
                </div>
                <div className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Networking Gear</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300 delay-150">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Servers & Storage</span>
                </div>
                <div className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300 delay-200">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Accessories</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button className="border border-primary/50 bg-transparent hover:bg-primary hover:text-white group-hover:border-primary transition-all duration-300 group-hover:shadow-lg">
                <span className="group-hover:mr-2 transition-all duration-300">
                  Learn More
                </span>
                <MoveRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
