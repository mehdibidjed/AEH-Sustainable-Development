import React from 'react';
import HeroImage from '../../assets/images/industries/womam_healthcare.svg';

const HealthcareHero = () => {
  return (
    <section className="relative py-20 lg:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-left">
          <h1 className="text-5xl lg:text-7xl text-slate-900 mb-8 leading-tight">
            <span className="font-light block">Pioneering</span>
            <span className="font-instrumentSerif italic font-medium block mt-2">Healthcare Innovation</span>
          </h1>

          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Technology is revolutionizing the healthcare landscape, enabling more efficient, patient-centered care and operational excellence.
            Organizations that integrate digital strategies report enhanced revenue growth, higher patient satisfaction, and improved health outcomes.
            At Techno, innovation is our core strength—we excel at evaluating needs, crafting strategies, and deploying cutting-edge solutions that drive real impact.
          </p>

          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            From emerging startups to established healthcare giants, Techno delivers expert, scalable software solutions—on time, on budget, and tailored to your vision.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-[#003B30] text-white rounded-full font-medium hover:bg-[#002a22] transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 bg-white text-[#003B30] border border-[#003B30] rounded-full font-medium hover:bg-slate-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={HeroImage}
            alt="Healthcare Innovation"
            className="w-full h-auto rounded-3xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HealthcareHero;