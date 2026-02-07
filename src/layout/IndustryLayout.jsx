import React from "react";
import TechStack from "../components/industry/TechStack";
import ConnectWithExpert from "../components/industry/ConnectWithExpert";
import Contact from '../pages/main/ContactUs';

function IndustryLayout({ industryData }) {
  return (
    <div className="flex flex-col w-full   min-h-screen bg-white pt-24 md:pt-32 px-6 md:px-8 lg:px-12">
      <section className="relative py-20 lg:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-5xl lg:text-7xl text-slate-900 mb-8 leading-tight">
              <span className="font-light block">Pioneering</span>
              <span className="font-instrumentSerif italic font-medium block mt-2">
                Healthcare Innovation
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
      {/*if  service .name = healthcare randr somethign else something else  */}
      {/* if service.name = healthcassrd we render something else no  */}
      {/* <TechStack/>  stack categories param */}
      {/* <section className="bg-WhiteBg py-10 text-center text-black md:max-w-[80%] mx-auto space-y-8">
        <div className="space-y-3">
          <h6 className="uppercase text-xs">solutions</h6>
          <h1 className="font-Inter md:text-4xl">
            Comprehensive{" "}
            <span className="font-instrumentSerif italic">
              Technology Solutions,
            </span>{" "}
            Built for impact
          </h1>
          <p className="text-black opacity-70 font-Inter pt-3 px-10 ">
            We design and build complete digital solutions that simplify
            complexity and elevate every interaction. Driven by transparency,
            advanced research, and skilled professionals, we work
            collaboratively to deliver products that are intelligent, scalable,
            and impactful.
          </p>
        </div>
        <div className="flex justify-between items-center">
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
             {industry.name}
            </h3>

            <p className="text-black opacity-70  text-sm  leading-relaxed font-Inter text-start">
              {industry.desc}
            </p>

            <Link className="inline-flex items-center gap-2 text-gray-900 font-semibold text-sm hover:gap-3 transition-all duration-300 group/button w-fit">
              View Details
              <ChevronRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="relative  md:h-auto m ">
            <img
              src={Industry.Image}
              alt="AI"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>  
 */}
      <ConnectWithExpert />
      <Contact/>
    </div>
  );
}

export default IndustryLayout;
