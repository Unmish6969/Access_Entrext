import React from 'react';
import { Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pricing = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-sky-100 to-purple-100 py-20 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Choose the perfect Access plan.
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Simple, transparent pricing built for growth.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                        Get Started Free
                    </button>
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-200">
                        Compare Plans
                    </button>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Starter Plan */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Starter Plan</h3>
                        <div className="text-4xl font-bold text-gray-900 mb-6">₹0<span className="text-lg text-gray-500 font-normal">/month</span></div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-center text-gray-600">
                                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                                Basic features
                            </li>
                            <li className="flex items-center text-gray-600">
                                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                                Limited usage
                            </li>
                            <li className="flex items-center text-gray-600">
                                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                                Community access
                            </li>
                            <li className="flex items-center text-gray-600">
                                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                                Email support
                            </li>
                        </ul>
                        <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                            Start Free
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-white rounded-2xl shadow-lg border-2 border-emerald-500 p-8 flex flex-col relative transform md:-translate-y-4">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            MOST POPULAR
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Pro Plan</h3>
                        <div className="text-4xl font-bold text-gray-900 mb-6">₹499<span className="text-lg text-gray-500 font-normal">/month</span></div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-center text-gray-600">
                                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                                Unlimited access
                            </li>
                            <li className="flex items-center text-gray-600">
                                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                                Analytics & insights
                            </li>
                            <li className="flex items-center text-gray-600">
                                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                                Priority support
                            </li>
                            <li className="flex items-center text-gray-600">
                                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                                Early access to features
                            </li>
                        </ul>
                        <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                            Upgrade to Pro
                        </button>
                    </div>

                    {/* Ultimate Plan */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Ultimate Plan</h3>
                        <div className="text-4xl font-bold text-gray-900 mb-6">₹999<span className="text-lg text-gray-500 font-normal">/month</span></div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-center text-gray-600">
                                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                                Everything in Pro
                            </li>
                            <li className="flex items-center text-gray-600">
                                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                                VIP assistance
                            </li>
                            <li className="flex items-center text-gray-600">
                                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                                Deep AI insights
                            </li>
                            <li className="flex items-center text-gray-600">
                                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                                Special requests
                            </li>
                        </ul>
                        <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                            Go Ultimate
                        </button>
                    </div>
                </div>
            </div>

            {/* Money-Back Guarantee */}
            <div className="bg-gray-100 py-12 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Money-Back Guarantee</h2>
                    <p className="text-gray-600">
                        We offer a 14-day refund policy through Paddle. If you're not satisfied, we'll refund your purchase, no questions asked.
                    </p>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I cancel?</h3>
                        <p className="text-gray-600">You can cancel your subscription anytime through the Paddle portal or by contacting our support team.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">How do refunds work?</h3>
                        <p className="text-gray-600">Refunds are processed within 5-10 business days. We follow Paddle's 14-day refund policy.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I upgrade?</h3>
                        <p className="text-gray-600">Yes, you can upgrade your plan at any time. The price difference will be prorated.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my data safe?</h3>
                        <p className="text-gray-600">Yes, we use industry-standard encryption and security measures to protect your data.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Pricing;
