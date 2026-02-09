import React from "react";
import TechStack from "../components/industry/TechStack";
import ConnectWithExpert from "../components/industry/ConnectWithExpert";
import Contact from "../pages/main/ContactUs";
import HealthcareServiceCard from "../components/industry/HealthCareServiceCard";
import { Assets } from "../assets/Asset";
import { Link, Outlet } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ServiceCard from "../components/service/ServiceCard";

function IndustryLayout({ industryData }) {
  const TechSolutions = [
    "Agriculture",
    "Satellite",
    "Law & Immigration",
    "Healthcare",
    "Goverment",
    "Intelligence",
  ];
  return (
    <div className="flex flex-col w-full   min-h-screen bg-white pt-12  ">
      <section className="relative py-20 lg:py-32  bg-white overflow-hidden px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2  ">
          {/* Left Content */}
          <div className="text-left space-y-10">
            <h1 className="text-3xl lg:text-5xl font-Inter text-slate-900 mb-8 leading-relaxed">
              <span className="font-light font-instrumentSerif italic  block">
                {industryData.title}
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed whitespace-pre-line">
              {industryData.desc}
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
          <div className=" h-full flex justify-end">
            <img
              src={industryData.heroImage}
              alt="Healthcare Innovation"
              className="w-[90%] h-full rounded-[12px] object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
      {industryData.title!="Pioneering Healthcare Innovation" && (<section>
        <div className="flex flex-col  items-center text-center  mb-16 px-6 md:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black mb-6 leading-tight">
            {industryData.cardTitle}
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-4xl leading-relaxed">
            {industryData.cardDescription}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 mb-20 md:mb-24 px-6 md:px-8 lg:px-12">
          {/* LEFT SIDE (first 2 cards) */}
          <div className="flex-1 flex flex-col gap-8">
            {industryData.cards.slice(0, 2).map((card, index) => (
              <ServiceCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

          {/* IMAGE */}
          <div className="flex-1 flex justify-center items-center overflow-hidden">
            <img
              src={Assets.Images.Services.ML.WomenImage}
              className="w-full h-full object-cover rounded-2xl"
              alt="AI Illustration"
            />
          </div>

          {/* RIGHT SIDE (last 2 cards) */}
          <div className="flex-1 flex flex-col gap-8">
            {industryData.cards.slice(2, 4).map((card, index) => (
              <ServiceCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>)}
      
      {industryData.title == "Pioneering Healthcare Innovation" && (
        <HealthcareServiceCard />
      )}
      {/* outlet */}
      <Outlet/>

      <TechStack />
      <section className="bg-white py-10 text-center text-black px-6 md:px-8 lg:px-12  mx-auto space-y-8">
        <div className="space-y-3">
          <h1 className="font-Inter md:text-4xl">
            Discover More Industries We Help
          </h1>
          <p className="text-black opacity-70 font-Inter pt-3 px-10 ">
            We design and build complete digital solutions that simplify
            complexity and elevate every interaction. Driven by transparency,
            advanced research, and skilled professionals, we work
            collaboratively to deliver products that are intelligent, scalable,
            and impactful.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 md:gap-6  md:grid-cols-6 text-sm   ">
          {TechSolutions.map((item, index) => (
            <Link
              key={index}
              to="#"
              className={`
              font-inter font-medium p-3
              ${item === "Agriculture" ? "border-b-2 border-[#06986F]" : ""}
            `}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  rounded-[12px] shadow-md">
          <div className=" bg-white p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-10 space-y-3">
            <h3 className="text-2xl md:text-3xl font-medium font-Inter text-black leading-tight">
              Agriculture AI App
            </h3>

            <p className="text-black opacity-70  text-sm  leading-relaxed font-Inter text-start">
              The agriculture app is designed to simplify daily farm management
              by bringing essential tools into one easy-to-use platform.
              <br /> From monitoring crop health and tracking irrigation
              schedules to analyzing soil data and weather conditions...
            </p>

            <Link className="inline-flex items-center gap-2 text-gray-900 font-semibold text-sm hover:gap-3 transition-all duration-300 group/button w-fit">
              View Details
              <ChevronRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="relative  md:h-auto m ">
            <img
              src={Assets.Images.Home.Agriculture}
              alt="AI"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <ConnectWithExpert />
    </div>
  );
}

export default IndustryLayout;
