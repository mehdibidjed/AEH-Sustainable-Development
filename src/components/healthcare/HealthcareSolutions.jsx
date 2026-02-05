import React from 'react';

const HealthcareSolutions = () => {
    return (
        <section className="py-20 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Solutions We’ve Delivered
                    </h2>
                    <p className="text-slate-600 text-lg">
                        We help businesses grow by delivering impactful, user-centered digital solutions
                    </p>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Card */}
                    <div className="group bg-white rounded-2xl border border-blue-500 overflow-hidden shadow-lg p-2 max-w-md mx-auto lg:mx-0">
                        <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-video">
                            {/* Placeholder for Dashboard Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-200">
                                <span className="text-sm">Dashboard Image Placeholder</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                                An AI-Driven Predictive System for Early Cancer Detection and Risk Assessment
                            </h3>
                            <p className="text-slate-900 font-medium mb-6">
                                A Comprehensive Medical Case Study
                            </p>
                            <button className="px-6 py-2.5 bg-[#003B30] text-white rounded-full text-sm font-medium hover:bg-[#002a22] transition-colors">
                                Download Case Studies
                            </button>
                        </div>
                    </div>

                    {/* Right side spacer or additional content would go here if defined, 
              for now keeping it as a grid to allow future expansion or centering if needed. 
              The design showed one card, but referenced "Solutions" plural. 
              For now matching the single card visual. */}
                </div>
            </div>
        </section>
    );
};

export default HealthcareSolutions;
