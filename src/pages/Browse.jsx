import React, { useState } from 'react';
import { Search, Filter, Star, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Browse() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Electronics', 'Tools', 'Party', 'Sports', 'Photography', 'Vehicles'];

    const items = [
        {
            id: 1,
            image: '🎥',
            name: 'Professional Camera Kit',
            price: '$45/day',
            rating: 4.9,
            vendor: 'TechRent Pro',
            category: 'Photography'
        },
        {
            id: 2,
            image: '⛺',
            name: 'Camping Gear Set',
            price: '$30/day',
            rating: 4.8,
            vendor: 'Outdoor Ventures',
            category: 'Sports'
        },
        {
            id: 3,
            image: '🎸',
            name: 'Electric Guitar',
            price: '$25/day',
            rating: 4.7,
            vendor: 'Music Hub',
            category: 'Electronics'
        },
        {
            id: 4,
            image: '🚲',
            name: 'Mountain Bike',
            price: '$35/day',
            rating: 4.9,
            vendor: 'Bike Rentals',
            category: 'Sports'
        },
        {
            id: 5,
            image: '🔊',
            name: 'PA System',
            price: '$60/day',
            rating: 4.6,
            vendor: 'Party Pros',
            category: 'Party'
        },
        {
            id: 6,
            image: '🔧',
            name: 'Power Drill Set',
            price: '$15/day',
            rating: 4.8,
            vendor: 'Tool Time',
            category: 'Tools'
        },
        {
            id: 7,
            image: '🎮',
            name: 'VR Headset',
            price: '$40/day',
            rating: 4.7,
            vendor: 'TechRent Pro',
            category: 'Electronics'
        },
        {
            id: 8,
            image: '🛶',
            name: 'Kayak',
            price: '$25/day',
            rating: 4.9,
            vendor: 'Outdoor Ventures',
            category: 'Sports'
        }
    ];

    const filteredItems = items.filter(item => {
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header & Search */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Browse Rentals</h1>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-grow">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search for items..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white shadow-sm"
                            />
                        </div>

                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <div className="w-full lg:w-64 flex-shrink-0 space-y-6">
                        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-gray-900">Filters</h3>
                                <Filter className="w-4 h-4 text-gray-500" />
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                                    <div className="flex items-center gap-2">
                                        <input type="number" placeholder="Min" className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm" />
                                        <span className="text-gray-400">-</span>
                                        <input type="number" placeholder="Max" className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                                    <div className="space-y-2">
                                        {[4, 3, 2].map((stars) => (
                                            <label key={stars} className="flex items-center gap-2 cursor-pointer">
                                                <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500" />
                                                <div className="flex items-center text-sm text-gray-600">
                                                    {Array.from({ length: stars }).map((_, i) => (
                                                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                                                    ))}
                                                    <span className="ml-1">& Up</span>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="flex-grow">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group border border-gray-200/50 hover:-translate-y-1"
                                >
                                    <div className="h-48 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                                        {item.image}
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-bold text-gray-900 text-base">{item.name}</h3>
                                            <div className="flex items-center text-sm bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                                                <Star className="w-3 h-3 text-amber-500 fill-current" />
                                                <span className="ml-1 text-gray-700 font-semibold">{item.rating}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-3 font-medium">{item.vendor}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xl font-bold text-emerald-600">{item.price}</span>
                                            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                                                Rent
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredItems.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
                                <button
                                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                                    className="mt-4 text-emerald-600 font-medium hover:text-emerald-700"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
