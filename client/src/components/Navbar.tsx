import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' 
        : 'bg-transparent'
      } transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary dark:text-primary">Fractal<span className="text-accent">.</span></span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden space-x-2">
            <ThemeToggle />
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <button onClick={() => handleNavClick("about")} className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary">About</button>
            <button onClick={() => handleNavClick("services")} className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary">Services</button>
            <button onClick={() => handleNavClick("portfolio")} className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary">Portfolio</button>
            <button onClick={() => handleNavClick("tech-stack")} className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary">Tech Stack</button>
            <button onClick={() => handleNavClick("testimonials")} className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary">Testimonials</button>
            <ThemeToggle />
            <Button 
              onClick={() => handleNavClick("contact")} 
              className="ml-2 bg-primary hover:bg-secondary"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 shadow-md">
          <button onClick={() => handleNavClick("about")} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary w-full text-left">About</button>
          <button onClick={() => handleNavClick("services")} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary w-full text-left">Services</button>
          <button onClick={() => handleNavClick("portfolio")} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary w-full text-left">Portfolio</button>
          <button onClick={() => handleNavClick("tech-stack")} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary w-full text-left">Tech Stack</button>
          <button onClick={() => handleNavClick("testimonials")} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary w-full text-left">Testimonials</button>
          <button onClick={() => handleNavClick("contact")} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary w-full text-left">Contact</button>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="px-2">
            <Button 
              onClick={() => handleNavClick("contact")} 
              className="block w-full text-center bg-primary hover:bg-secondary"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
