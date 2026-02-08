import React from "react";
import TechStack from "../components/industry/TechStack";
import ConnectWithExpert from "../components/industry/ConnectWithExpert";
import Contact from "../pages/main/ContactUs";
import HealthcareServiceCard from "../components/industry/HealthCareServiceCard";
import { Assets } from "../assets/Asset";

function IndustryLayout({ industryData }) {
  return (
    <div className="flex flex-col w-full   min-h-screen bg-white pt-12  ">
      <section className="relative py-20 lg:py-32 px-6 bg-white overflow-hidden px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-7 items-start">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-3xl lg:text-5xl font-Inter text-slate-900 mb-8 leading-relaxed">
              <span className="font-light block">
                Pioneering{" "}
                <span className="font-instrumentSerif italic font-medium  mt-2">
                  Healthcare Innovation
                </span>{" "}
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Technology is revolutionizing the healthcare landscape, enabling
              more efficient, patient-centered care and operational excellence.
              Organizations that integrate digital strategies report enhanced
              revenue growth, higher patient satisfaction, and improved health
              outcomes. At Techno, innovation is our core strength—we excel at
              evaluating needs, crafting strategies, and deploying cutting-edge
              solutions that drive real impact.
            </p>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              From emerging startups to established healthcare giants, Techno
              delivers expert, scalable software solutions—on time, on budget,
              and tailored to your vision.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-[#013934] text-white rounded-full font-medium hover:bg-[#002a22] transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white text-[#013934] border border-[#013934] rounded-full font-medium hover:bg-slate-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={industryData.heroImage}
              alt="Healthcare Innovation"
              className="w-full h-auto rounded-3xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
      {industryData.title == "Pioneering Healthcare Innovation" && (
        <HealthcareServiceCard />
      )}
      <section className="py-20  bg-white overflow-hidden px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Solutions We’ve Delivered
            </h2>
            <p className="text-slate-600 text-lg">
              We help businesses grow by delivering impactful, user-centered
              digital solutions
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Card */}
            <div className="group bg-white rounded-[12px] border border-1 border-black/50 overflow-hidden hover:shadow-lg p-2 max-w-md mx-auto lg:mx-0">
              <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-video">
                {/* Placeholder for Dashboard Image */}
                <div className="absolute inset-0 flex items-center justify-center ">
                 <img src={Assets.Images.Industries.Dashboard} alt="" />
                </div>
              </div>
              <div className="p-6 font-semibold text-xl">
                <h3 className=" font-bold text-black mb-2 leading-tight">
                  An AI-Driven Predictive System for Early Cancer Detection and
                  Risk Assessment
                </h3>
                <p className="text-black mb-6">
                  A Comprehensive Medical Case Study
                </p>
                <button className="px-8 py-3 bg-[#013934] text-white rounded-full text-sm  font-Inter hover:bg-[#002a22] transition-colors">
                  View Case Studies
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
      <TechStack />

      <ConnectWithExpert />
    </div>
  );
}

export default IndustryLayout;
