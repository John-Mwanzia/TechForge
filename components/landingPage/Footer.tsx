import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              TechForge
            </h3>
            <p className="text-black/70 dark:text-white/70 mb-4 text-sm leading-relaxed">
              Transforming businesses through innovative software solutions and
              premium hardware. Your trusted partner in digital transformation.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-black/60 dark:text-white/60 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-black/60 dark:text-white/60 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-black/60 dark:text-white/60 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-black/60 dark:text-white/60 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-black/70 dark:text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-black/70 dark:text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-black/70 dark:text-white/70 hover:text-primary transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-black/70 dark:text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-black/70 dark:text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Hardware Supply
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary transition-colors text-sm"
                >
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-black/70 dark:text-white/70 text-sm">
                  Westlands Business Park, Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-black/70 dark:text-white/70 text-sm">
                  +254 700 123 456
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-black/70 dark:text-white/70 text-sm">
                  hello@techforge.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/20 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-black/60 dark:text-white/60 text-sm mb-4 sm:mb-0">
            © 2024 TechForge. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-black/60 dark:text-white/60 hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-black/60 dark:text-white/60 hover:text-primary transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-black/60 dark:text-white/60 hover:text-primary transition-colors text-sm"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
