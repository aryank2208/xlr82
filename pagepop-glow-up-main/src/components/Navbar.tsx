
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <div className="flex items-center">
          <span className="font-playfair text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-dark-purple to-purple-500">
            PagePop
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-dark-purple transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-dark-purple transition-colors">How it Works</a>
          <a href="#pricing" className="text-sm font-medium hover:text-dark-purple transition-colors">Pricing</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-dark-purple transition-colors">Testimonials</a>
        </div>
        
        <div>
          <Button 
            variant="default" 
            className="bg-gradient-to-r from-dark-purple to-purple-500 text-white"
            onClick={() => window.open('https://forms.google.com/create', '_blank')}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
