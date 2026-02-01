import React from "react";
import { Assets } from "../assets/Asset";

function Home() {
  return (
    <div className="min-h-screen">
      {/* Changed h-screen to min-h-screen and added pt-20 to account for Navbar height */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 py-20 md:py-32">
        
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={Assets.Images.Home.BG1}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay to match the second image's depth */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content Container - Using flex-col and gap for precise vertical spacing */}
        <div className="relative z-10 flex flex-col items-center text-center text-white max-w-6xl mx-auto gap-10 md:gap-14 lg:gap-16">
          
          {/* Top Pill Button - Added glassmorphism style from image 2 */}
          <button className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-full text-white px-6 py-2 transition-all duration-300 hover:bg-white/10 text-sm md:text-base shadow-xl">
            <span className="text-yellow-400">✦</span> What Is AEH Sustainable Development?
          </button>

          {/* Title and Paragraph Group */}
          <div className="space-y-8 md:space-y-10">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold font-Popine leading-[1.1]">
              Building Practical{" "}
              <span className="font-Instrument_Serif italic font-light">Technology</span>{" "}
              for Sustainable Growth
            </h1>
            
            <p className="text-base  font-light max-w-6xl mx-auto ">
              We deliver practical tech solutions that solve real business
              challenges across industries from agriculture to healthcare. We
              help overcome limited AI access, high costs, and regulatory
              constraints with clear, effective implementation.
            </p>
          </div>

          {/* Action Buttons - Fully Responsive */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-YellowGreen text-black font-bold rounded-full px-10 py-4 hover:brightness-110 transition-all shadow-lg text-lg">
              Start Your Project
            </button>
            <button className="w-full sm:w-auto border border-white/40 backdrop-blur-sm rounded-full px-16 py-4 hover:bg-white/10 transition-all text-lg">
              About Us
            </button>
          </div>
          
        </div>
      </section>

      <section className="bg-white py-20 text-center text-black">
        <h2 className="text-3xl font-bold">Section 2 Content</h2>
      </section>
    </div>
  );
}

export default Home;