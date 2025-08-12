"use client";

import Aos from "aos";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FaBars } from "react-icons/fa";
import { ThemeToggle } from "./ThemeToggle";

export default function Header({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 overflow-hidden bg-background/80 backdrop-blur-md">
        <div className="sm:container mx-auto flex items-center justify-between py-4 border-b border-black/10 dark:border-white/20">
          <div className="flex w-full justify-between items-center">
            <div className="text-3xl font-bold z-50">
              <Button className="font-sans font-bold text-3xl bg-transparent text-black dark:text-white hover:bg-transparent hover:text-primary transition-colors duration-300 px-0">
                TechForge
              </Button>
            </div>
            <nav className="hidden md:flex">
              <div>
                <ul className="flex space-x-8 items-center text-basic">
                  <li className="text-black dark:text-white cursor-pointer transition-colors">
                    <a href="#services">Services</a>
                  </li>
                  <li className="text-black dark:text-white cursor-pointer transition-colors">
                    <a href="#products">Products</a>
                  </li>
                  <li className="text-black dark:text-white cursor-pointer transition-colors">
                    <a href="#about">About</a>
                  </li>
                  <li className="text-black dark:text-white cursor-pointer transition-colors">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="hidden md:flex md:gap-4">
              <ThemeToggle theme={theme} setTheme={setTheme} />

              <Button>Get Quote</Button>
            </div>
          </div>
          {isOpen && (
            <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden">
              <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
                <a
                  href="#home"
                  className="text-2xl font-semibold text-black dark:text-white hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="text-2xl font-semibold text-black dark:text-white hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-2xl font-semibold text-black dark:text-white hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-2xl font-semibold text-black dark:text-white hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
                <div className="pt-4">
                  <ThemeToggle theme={theme} setTheme={setTheme} />
                </div>
                <Button className="mt-4" onClick={toggleMenu}>
                  Get Quote
                </Button>
              </div>
            </div>
          )}

          <div className="block md:hidden z-50 relative">
            {isOpen ? (
              <X
                size={25}
                className="text-black dark:text-white font-bold cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <FaBars
                className="text-black dark:text-white text-xl cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
