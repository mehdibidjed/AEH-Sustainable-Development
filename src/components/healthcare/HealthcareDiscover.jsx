import React, { useState } from 'react';
import { Assets } from '../../assets/Asset';

const HealthcareDiscover = () => {
    const [activeTab, setActiveTab] = useState('Agriculture');

    const tabs = [
        'Agriculture',
        'Satellite',
        'Law & Immigration',
        'Healthcare',
        'Government',
        'Intelligence'
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Discover More Industries We Help
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        We design and build complete digital solutions that simplify complexity and elevate every interaction. Driven by transparency, advanced research, and skilled professionals, we work collaboratively to deliver products that are intelligent, scalable, and impactful.
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="flexflex-wrap justify-center items-center gap-x-8 gap-y-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-lg lg:text-xl whitespace-nowrap px-2 py-2 border-b-2 transition-all duration-300 ${activeTab === tab
                                    ? 'border-[#009B7C] text-slate-900 font-medium'
                                    : 'border-transparent text-slate-500 hover:text-slate-700 font-normal'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden border border-slate-100">
                    <div className="grid lg:grid-cols-2">
                        {/* Text Content */}
                        <div className="p-8 lg:p-16 flex flex-col justify-center">
                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                                {activeTab} AI App
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                The {activeTab.toLowerCase()} app is designed to simplify daily farm management by bringing essential tools into one easy-to-use platform. From monitoring crop health and tracking irrigation schedules to analyzing soil data and weather conditions...
                            </p>

                            <button className="flex items-center text-slate-900 font-bold group w-fit">
                                View Details
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Image */}
                        <div className="h-64 lg:h-auto relative">
                            <img
                                src={Assets.Images.Home.Agriculture}
                                alt={`${activeTab} Industry`}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HealthcareDiscover;
