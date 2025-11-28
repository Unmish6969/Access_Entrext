import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <div className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white shadow-sm rounded-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">1. TERMS & CONDITIONS</h1>
                    <p className="text-gray-500 mb-8">Last Updated: 26 November 2025</p>

                    <div className="prose prose-emerald max-w-none text-gray-600 space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">Introduction</h2>
                            <p>
                                Welcome to Access, a product operated by Entrext, a startup based in Mumbai, Maharashtra. By accessing or using our website, mobile application, or any service (“Services”), you agree to these Terms & Conditions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Definitions</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>“Company”, “we”, “our”</strong> → Entrext</li>
                                <li><strong>“App”</strong> → Access</li>
                                <li><strong>“User”, “you”</strong> → Anyone accessing or using the Services</li>
                                <li><strong>“Platform”</strong> → All websites, apps, dashboards, features, and tools operated by Entrext</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Eligibility & Use of Services</h2>
                            <p>Users must be at least 13 years old.</p>
                            <p className="mt-2">You agree not to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Reverse-engineer, copy, or misuse the app</li>
                                <li>Upload harmful or abusive content</li>
                                <li>Violate intellectual property rights</li>
                                <li>Attempt unauthorized access</li>
                            </ul>
                            <p className="mt-2">We may suspend or terminate accounts violating any terms.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. User Accounts</h2>
                            <p>You are responsible for:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Keeping your login secure</li>
                                <li>Providing accurate information</li>
                                <li>All activity under your account</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Intellectual Property Rights</h2>
                            <p>
                                All design, content, branding, code, and materials belong to Entrext and are protected by copyright and trademark laws.
                                You may not reproduce, copy, or distribute our content without permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Payments & Billing</h2>
                            <p>All payments are processed securely through Paddle, our Merchant of Record (MoR).</p>
                            <p className="mt-2">By making a purchase, you agree to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Paddle’s Buyer Terms</li>
                                <li>Taxes & VAT handled by Paddle</li>
                                <li>No card details stored by Entrext</li>
                            </ul>
                            <p className="mt-2">Subscriptions renew automatically unless cancelled.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Subscription Rules</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Cancel anytime through Paddle</li>
                                <li>Access remains active until period ends</li>
                                <li>No partial refunds after the 14-day window</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Refund Policy</h2>
                            <p>
                                We follow Paddle’s standard 14-day refund policy.
                                Refund may be requested if claimed within 14 days of purchase.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Limitation of Liability</h2>
                            <p>Entrext is not responsible for:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Indirect losses</li>
                                <li>Data loss</li>
                                <li>Third-party issues</li>
                                <li>Service outages or interruptions</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Changes to Terms</h2>
                            <p>
                                Terms may be updated anytime.
                                Continued use of the platform = acceptance of changes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact Information</h2>
                            <p>Email: support@entrext.in</p>
                            <p>Location: Mumbai, Maharashtra</p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;
