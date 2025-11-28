import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <div className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white shadow-sm rounded-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">2. PRIVACY POLICY</h1>
                    <p className="text-gray-500 mb-8">Last Updated: 26 November 2025</p>

                    <div className="prose prose-emerald max-w-none text-gray-600 space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">Introduction</h2>
                            <p>
                                This Privacy Policy explains how Entrext collects, uses, stores, and protects your data while using the Access app.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
                            <h3 className="text-lg font-medium text-gray-900 mt-4 mb-2">Personal Data</h3>
                            <p>Name, email, login credentials</p>

                            <h3 className="text-lg font-medium text-gray-900 mt-4 mb-2">Usage & Device Data</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>App interactions</li>
                                <li>Device type</li>
                                <li>Log data</li>
                            </ul>

                            <h3 className="text-lg font-medium text-gray-900 mt-4 mb-2">Financial Data</h3>
                            <p>Handled ONLY by Paddle.</p>
                            <p>Entrext does not store bank/card details.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
                            <p>We use your data to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Operate and improve Access</li>
                                <li>Provide personalised insights</li>
                                <li>Enhance user experience</li>
                                <li>Communicate updates</li>
                                <li>Maintain safety and security</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Sharing of Data</h2>
                            <p>We DO NOT sell your data.</p>
                            <p className="mt-2">We only share data with GDPR-compliant processors:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Paddle (billing)</li>
                                <li>Servers/hosting</li>
                                <li>Analytics tools</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Cookies</h2>
                            <p>We use cookies for:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Basic functionality</li>
                                <li>Preferences</li>
                                <li>Analytics</li>
                            </ul>
                            <p className="mt-2">Users may disable cookies anytime.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Protection & Security</h2>
                            <p>
                                We use strong security standards, but no system is fully immune from risks.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. User Rights</h2>
                            <p>You may request to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Delete your data</li>
                                <li>Access your data</li>
                                <li>Correct inaccurate data</li>
                            </ul>
                            <p className="mt-2">Contact: support@entrext.in</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Children’s Privacy</h2>
                            <p>
                                Access is not intended for users under 13.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
