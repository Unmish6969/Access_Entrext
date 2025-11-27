import React, { useState } from 'react';
import { Package, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-lg flex items-center justify-center shadow-md">
                            <Package className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                            Access
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/browse" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Browse</Link>
                        <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">How It Works</a>
                        <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Become a Vendor</a>
                        <Link to="/signin" className="px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all font-medium">
                            Sign In
                        </Link>
                        <Link to="/signup" className="px-6 py-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all font-medium">
                            Get Started
                        </Link>
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
                        <Link to="/browse" className="block text-gray-700 hover:text-emerald-600 py-2 font-medium">Browse</Link>
                        <a href="#" className="block text-gray-700 hover:text-emerald-600 py-2 font-medium">How It Works</a>
                        <a href="#" className="block text-gray-700 hover:text-emerald-600 py-2 font-medium">Become a Vendor</a>
                        <Link to="/signin" className="block w-full text-center px-4 py-2 text-emerald-600 border border-emerald-300 rounded-lg hover:bg-emerald-50 transition font-medium">
                            Sign In
                        </Link>
                        <Link to="/signup" className="block w-full text-center px-4 py-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition font-medium">
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
