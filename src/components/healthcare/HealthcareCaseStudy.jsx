import React from 'react';

const HealthcareCaseStudy = () => {
  return (
    <section className="py-24 px-6 bg-[#E6ECD6]"> {/* Matches your ProcessTimeline background */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 lg:p-16 shadow-xl border border-black/5">
        <div className="flex flex-col items-center text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Case Study</span>
          <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-slate-900 leading-tight">
            An AI-Driven Predictive System for Early Cancer Detection and Risk Assessment 
          </h2>
          <p className="text-lg text-slate-600 mb-10 italic">
            A Comprehensive Medical Case Study focusing on impact and early detection.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition-transform hover:scale-105">
            Download Case Study
          </button>
        </div>
      </div>
    </section>
  );
};

export default HealthcareCaseStudy;