import React from "react";
import { ArrowRight, Palette, Clock, Smartphone, Link, Check, Calendar, ShoppingBag, Users, Zap, Briefcase, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import PricingCard from "@/components/PricingCard";
import PortfolioItem from "@/components/PortfolioItem";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-bg pt-32 pb-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="lavender" className="mb-4">Creator Landing Pages</Badge>
              <h1 className="text-5xl md:text-6xl font-bold font-playfair leading-tight mb-6">
                Your Whole Vibe. <span className="bg-clip-text text-transparent bg-gradient-to-r from-dark-purple to-purple-500">One Stunning Page.</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                We craft custom landing pages for creators — done-for-you and delivered in 48 hours.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-dark-purple to-purple-500 hover:from-purple-600 hover:to-purple-700 text-white"
                  onClick={() => window.open('https://forms.google.com/create', '_blank')}
                >
                  Get Your Page <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="lg:block hidden">
              <div className="relative animate-fade-in">
                <div className="absolute -z-10 w-64 h-64 rounded-full bg-lavender/50 blur-3xl top-10 -left-10"></div>
                <div className="absolute -z-10 w-64 h-64 rounded-full bg-light-purple/30 blur-3xl bottom-10 right-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80" 
                  alt="Creator Page Example" 
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landing Page Types Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="purple" className="mb-4">Landing Page Types</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Choose Your Perfect Landing Page</h2>
            <p className="text-gray-700">
              From events to e-commerce, we create landing pages tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Event Landing Pages"
              description="Perfect for conferences, workshops, and special events with RSVP functionality."
              icon={<Calendar className="h-6 w-6 text-purple-700" />}
            />
            <FeatureCard 
              title="Basic Landing Pages"
              description="Clean, simple pages for brand awareness and basic information sharing."
              icon={<Globe className="h-6 w-6 text-purple-700" />}
            />
            <FeatureCard 
              title="E-commerce Landing Pages"
              description="Sales-focused pages designed to convert visitors into customers."
              icon={<ShoppingBag className="h-6 w-6 text-purple-700" />}
            />
            <FeatureCard 
              title="Lead Generation Pages"
              description="Capture leads with optimized forms and compelling offers."
              icon={<Users className="h-6 w-6 text-purple-700" />}
            />
            <FeatureCard 
              title="App Landing Pages"
              description="Showcase your mobile or web app with download links and features."
              icon={<Zap className="h-6 w-6 text-purple-700" />}
            />
            <FeatureCard 
              title="Portfolio Landing Pages"
              description="Display your work beautifully with galleries and project showcases."
              icon={<Briefcase className="h-6 w-6 text-purple-700" />}
            />
          </div>
        </div>
      </section>

      {/* Why PagePop Section */}
      <section id="features" className="py-24 px-4 gradient-bg">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="purple" className="mb-4">Why Creators Choose PagePop</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Designed For Creators, By Creators</h2>
            <p className="text-gray-700">
              No templates. No coding. Just your unique brand presented beautifully.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              title="Custom Branding"
              description="No templates. Styled for you."
              icon={<Palette className="h-6 w-6 text-purple-700" />}
            />
            <FeatureCard 
              title="48-Hour Delivery"
              description="You create. We ship your site."
              icon={<Clock className="h-6 w-6 text-purple-700" />}
            />
            <FeatureCard 
              title="Mobile-First Design"
              description="Looks amazing everywhere."
              icon={<Smartphone className="h-6 w-6 text-purple-700" />}
            />
            <FeatureCard 
              title="Link-in-Bio Ready"
              description="Turn traffic into fans."
              icon={<Link className="h-6 w-6 text-purple-700" />}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="purple" className="mb-4">Simple Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">How It Works</h2>
            <p className="text-gray-700">
              From concept to live site in just three simple steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-lavender -z-10"></div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 text-center relative">
              <div className="w-12 h-12 rounded-full bg-dark-purple text-white flex items-center justify-center text-xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Fill out a short brief</h3>
              <p className="text-gray-600">
                Tell us about your brand, style preferences, and what you need on your page.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 text-center relative">
              <div className="w-12 h-12 rounded-full bg-dark-purple text-white flex items-center justify-center text-xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">We build your perfect page</h3>
              <p className="text-gray-600">
                Our designers craft a custom landing page that captures your unique vibe.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 text-center relative">
              <div className="w-12 h-12 rounded-full bg-dark-purple text-white flex items-center justify-center text-xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Go live in 48 hours</h3>
              <p className="text-gray-600">
                Your professional page is ready to share with your audience in just two days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 gradient-bg">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="purple" className="mb-4">Pricing Plans</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Pick Your Plan</h2>
            <p className="text-gray-700">
              Choose the package that best fits your landing page needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              plan="Starter"
              price="₹999"
              description="Basic landing page"
              features={[
                "Basic landing page design",
                "Mobile responsive",
                "Contact form",
                "Social media links",
                "24-hour delivery"
              ]}
            />
            
            <PricingCard
              plan="Professional"
              price="₹2,999"
              description="Advanced landing page"
              features={[
                "Custom branded design",
                "Lead generation forms",
                "Analytics integration",
                "SEO optimization",
                "Event/E-commerce features",
                "48-hour delivery"
              ]}
              popular={true}
            />
            
            <PricingCard
              plan="Premium"
              price="₹7,999"
              description="Complete solution"
              features={[
                "Full custom development",
                "Advanced functionality",
                "Custom domain setup",
                "Priority support",
                "Multiple page types",
                "Strategy consultation"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Portfolio/Examples Section */}
      <section id="portfolio" className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="purple" className="mb-4">Our Work</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Landing Pages We've Built</h2>
            <p className="text-gray-700">
              Take a look at some of our recent custom landing pages across different industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <PortfolioItem
              title="Tech Conference 2024"
              category="Event Landing Page"
              imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
            />
            <PortfolioItem
              title="Style With Sarah"
              category="E-commerce Landing Page"
              imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80"
              badgeText="Popular"
            />
            <PortfolioItem
              title="Creative Portfolio"
              category="Portfolio Landing Page"
              imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 gradient-bg">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="purple" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">What Creators Are Saying</h2>
            <p className="text-gray-700">
              Hear from content creators who have transformed their online presence with PagePop.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="My PagePop makes me look 10x more professional. Now I can focus on creating content, not building websites."
              author="Mira Shah"
              role="Food Blogger"
              rating={5}
            />
            <TestimonialCard
              quote="I finally feel like my brand is real. PagePop gave me exactly what I needed without any tech headaches."
              author="Alex Chen"
              role="Lifestyle Creator"
              rating={5}
            />
            <TestimonialCard
              quote="It's like magic — no code, no stress. Just a beautiful page that represents my brand perfectly."
              author="Priya Desai"
              role="Fitness Coach"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-dark-purple to-purple-500 text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Your story deserves better than Linktree.</h2>
            <p className="text-lg mb-8 opacity-90">
              Let us turn your vibe into your digital home.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-dark-purple hover:bg-cream"
              onClick={() => window.open('https://forms.google.com/create', '_blank')}
            >
              Start My PagePop
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 pt-16 pb-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-6 md:mb-0">
              <h3 className="font-playfair text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-dark-purple to-purple-500 mb-2">
                PagePop
              </h3>
              <p className="text-sm text-gray-600">
                Built by humans, styled for creators.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="https://wa.me/yourphonenumber" className="text-gray-600 hover:text-dark-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
              </a>
              <a href="https://instagram.com/pagepop.shop" className="text-gray-600 hover:text-dark-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="mailto:hello@pagepop.shop" className="text-gray-600 hover:text-dark-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} PagePop. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              <a href="https://instagram.com/pagepop.shop" className="hover:text-dark-purple">@pagepop.shop</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
