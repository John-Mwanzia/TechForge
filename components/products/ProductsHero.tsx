import { ShoppingCart, Truck, Shield, Headphones } from "lucide-react";
import { Button } from "../ui/button";

export default function ProductsHero() {
  return (
    <section className="py-24 sm:py-32 md:py-40 lg:py-48">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 sm:mb-6 leading-tight">
            Premium Tech <span className="text-primary">Hardware</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline"> & Equipment</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-black/70 dark:text-white/70 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Discover our curated selection of cutting-edge computers, servers,
            networking equipment, and accessories from the world&apos;s leading
            technology brands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Browse Products
            </Button>
            <Button className="px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-all duration-300">
              Request Quote
            </Button>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Genuine Products
            </h3>
            <p className="text-black/70 dark:text-white/70 text-sm">
              100% authentic products from authorized distributors
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Fast Delivery
            </h3>
            <p className="text-black/70 dark:text-white/70 text-sm">
              Quick delivery across Kenya with secure packaging
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Warranty Support
            </h3>
            <p className="text-black/70 dark:text-white/70 text-sm">
              Comprehensive warranty and after-sales support
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Headphones className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Expert Support
            </h3>
            <p className="text-black/70 dark:text-white/70 text-sm">
              Technical consultation and installation services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
