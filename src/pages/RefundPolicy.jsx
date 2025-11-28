import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RefundPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <div className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white shadow-sm rounded-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">3. REFUND & CANCELLATION POLICY</h1>
                    <p className="text-gray-500 mb-8">Last Updated: 26 November 2025</p>

                    <div className="prose prose-emerald max-w-none text-gray-600 space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Standard Refund Policy</h2>
                            <p>Entrext follows Paddle’s 14-day refund policy.</p>
                            <p>Refunds apply if requested within 14 days from date of purchase.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Subscription Cancellations</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Cancel anytime via Paddle</li>
                                <li>Access remains active till the end of the billing cycle</li>
                                <li>No prorated refunds after 14 days</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Refund Request Process</h2>
                            <p>You may request a refund via:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Paddle portal (link in your receipt)</li>
                                <li>Email: support@entrext.in</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Exceptional Cases</h2>
                            <p>Refunds may be granted for:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Duplicate charges</li>
                                <li>Accidental renewal</li>
                                <li>Technical issues preventing usage</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RefundPolicy;
