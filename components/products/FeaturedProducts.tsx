import { Star, ShoppingCart, Eye } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: "MacBook Pro 16-inch M3",
      category: "Laptops",
      price: "KSh 450,000",
      originalPrice: "KSh 480,000",
      rating: 4.9,
      reviews: 127,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop&crop=center",
      badge: "Best Seller",
      specs: ["Apple M3 Chip", "32GB RAM", "1TB SSD", "16-inch Display"],
    },
    {
      id: 2,
      name: "Dell PowerEdge R750",
      category: "Servers",
      price: "KSh 850,000",
      originalPrice: null,
      rating: 4.8,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
      badge: "Enterprise",
      specs: ["Intel Xeon", "64GB RAM", "2TB Storage", "Rack Mount"],
    },
    {
      id: 3,
      name: "Cisco Catalyst 9300",
      category: "Networking",
      price: "KSh 320,000",
      originalPrice: "KSh 350,000",
      rating: 4.7,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop&crop=center",
      badge: "Popular",
      specs: ["48 Ports", "PoE+", "Stackable", "Layer 3 Switching"],
    },
    {
      id: 4,
      name: "LG UltraWide 34WP65C",
      category: "Monitors",
      price: "KSh 65,000",
      originalPrice: "KSh 75,000",
      rating: 4.6,
      reviews: 203,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop&crop=center",
      badge: "Sale",
      specs: ["34-inch", "3440x1440", "USB-C", "HDR10"],
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
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
            Featured Products
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
            Handpicked premium products that deliver exceptional performance and
            value
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card border border-secondary/20 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.badge === "Best Seller"
                        ? "bg-green-500 text-white"
                        : product.badge === "Enterprise"
                        ? "bg-blue-500 text-white"
                        : product.badge === "Popular"
                        ? "bg-purple-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {product.badge}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Eye className="w-5 h-5 text-black" />
                  </button>
                  <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs text-primary font-medium">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center mr-2">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-black/70 dark:text-white/70">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Specs */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.specs.slice(0, 2).map((spec, index) => (
                      <span
                        key={index}
                        className="text-xs bg-secondary/20 px-2 py-1 rounded text-black/70 dark:text-white/70"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xl font-bold text-primary">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-black/50 dark:text-white/50 line-through ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products */}
        <div className="text-center mt-12">
          <Button className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
