import React, { useState, useEffect, useRef } from 'react';
import { Search, Package, Shield, Clock, TrendingUp, Star, ChevronRight, Menu, X } from 'lucide-react';

export default function RentalLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observers = [];

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    };

    // Use setTimeout to ensure refs are set
    const timeoutId = setTimeout(() => {
      Object.keys(sectionRefs.current).forEach((key) => {
        if (sectionRefs.current[key]) {
          const observer = new IntersectionObserver(observerCallback, observerOptions);
          observer.observe(sectionRefs.current[key]);
          observers.push(observer);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const categories = [
    { name: 'Electronics', icon: '📱', count: '2.5k+' },
    { name: 'Tools & Equipment', icon: '🔧', count: '3.2k+' },
    { name: 'Party Supplies', icon: '🎉', count: '1.8k+' },
    { name: 'Sports Gear', icon: '⚽', count: '1.5k+' },
    { name: 'Photography', icon: '📷', count: '890+' },
    { name: 'Vehicles', icon: '🚗', count: '450+' }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Verified Vendors',
      description: 'All vendors are thoroughly vetted and verified for your safety'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexible Duration',
      description: 'Rent by the hour, day, week, or month - you choose'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Easy Delivery',
      description: 'Get items delivered to your doorstep or pick them up'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Best Prices',
      description: 'Compare prices from multiple vendors to get the best deals'
    }
  ];

  const popularItems = [
    {
      image: '🎥',
      name: 'Professional Camera Kit',
      price: '$45/day',
      rating: 4.9,
      vendor: 'TechRent Pro'
    },
    {
      image: '⛺',
      name: 'Camping Gear Set',
      price: '$30/day',
      rating: 4.8,
      vendor: 'Outdoor Ventures'
    },
    {
      image: '🎸',
      name: 'Electric Guitar',
      price: '$25/day',
      rating: 4.7,
      vendor: 'Music Hub'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/40">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-lg flex items-center justify-center shadow-md">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                RentHub
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Browse</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">How It Works</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Become a Vendor</a>
              <button className="px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all font-medium">
                Sign In
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all font-medium">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-emerald-600 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block text-gray-700 hover:text-emerald-600 py-2 font-medium">Browse</a>
              <a href="#" className="block text-gray-700 hover:text-emerald-600 py-2 font-medium">How It Works</a>
              <a href="#" className="block text-gray-700 hover:text-emerald-600 py-2 font-medium">Become a Vendor</a>
              <button className="w-full px-4 py-2 text-emerald-600 border border-emerald-300 rounded-lg hover:bg-emerald-50 transition font-medium">
                Sign In
              </button>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-4xl mx-auto w-full">
          <div className={`inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            🎉 Over 10,000+ Items Available
          </div>
          <h1 className={`text-5xl md:text-6xl font-bold text-gray-900 mb-5 leading-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Rent Anything,
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {' '}Anytime
            </span>
          </h1>
          <p className={`text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            From cameras to camping gear, find everything you need from verified vendors in your area. Save money, reduce waste, and get exactly what you need when you need it.
          </p>

          {/* Search Bar */}
          <div className={`max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for items, categories, or vendors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-32 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 text-base bg-white shadow-sm transition-all"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all font-medium">
                Search
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-5 justify-center">
              {['Cameras', 'Tools', 'Party Decor', 'Bikes', 'Speakers'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 cursor-pointer transition-all shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        ref={(el) => (sectionRefs.current['categories'] = el)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className={`mb-10 transition-all duration-700 ${visibleSections['categories'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Browse by Category</h2>
          <p className="text-gray-600 text-lg">Explore our wide range of rental categories</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={`bg-white p-5 rounded-2xl hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer group border border-gray-200/50 hover:border-emerald-300 hover:-translate-y-1 ${visibleSections['categories']
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
                }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1.5 group-hover:text-emerald-600 transition-colors text-sm md:text-base">{category.name}</h3>
              <p className="text-xs md:text-sm text-gray-500">{category.count} items</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        ref={(el) => (sectionRefs.current['features'] = el)}
        className="bg-gradient-to-b from-white to-emerald-50/30 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${visibleSections['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Choose RentHub?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We make renting easy, safe, and affordable for everyone
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center bg-white p-6 rounded-2xl hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 border border-gray-200/50 group hover:-translate-y-1 ${visibleSections['features']
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-5 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section
        id="popular"
        ref={(el) => (sectionRefs.current['popular'] = el)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4 transition-all duration-700 ${visibleSections['popular'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Popular Items</h2>
            <p className="text-gray-600">Trending rentals in your area</p>
          </div>
          <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center font-semibold group">
            View All <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {popularItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 group border border-gray-200/50 hover:-translate-y-1 ${visibleSections['popular']
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {item.image}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-base md:text-lg">{item.name}</h3>
                  <div className="flex items-center text-sm bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                    <span className="ml-1 text-gray-700 font-semibold">{item.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-3 font-medium">{item.vendor}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl md:text-2xl font-bold text-emerald-600">{item.price}</span>
                  <button className="px-5 py-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all font-medium text-sm md:text-base">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Have Items to Rent Out?
          </h2>
          <p className="text-emerald-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of vendors making money by renting out their items. Start earning today with zero upfront costs.
          </p>
          <button className="px-10 py-4 bg-white text-emerald-600 rounded-xl font-bold hover:bg-emerald-50 hover:shadow-2xl transition-all transform hover:scale-105">
            Become a Vendor Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center space-x-2 mb-5">
                <div className="w-9 h-9 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">RentHub</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Rent anything, anytime from trusted vendors in your community.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5">Company</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5">Support</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5">Legal</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            © 2025 RentHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}