import React from 'react';
import { Package } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-400 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-10">
                    <div>
                        <div className="flex items-center space-x-2 mb-5">
                            <div className="w-9 h-9 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                                <Package className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">Access</span>
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
                    © 2025 Access. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
