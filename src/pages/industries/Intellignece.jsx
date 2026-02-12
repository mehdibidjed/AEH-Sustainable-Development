import React from "react";
import { Assets } from "../../assets/Asset";
import { Link } from "react-router-dom";

function Intellignece() {
  return (
    <section className="py-14  bg-white overflow-hidden px-6 md:px-8 lg:px-12">
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
          <div className="group bg-white  rounded-[12px] border border-1 border-black/50 overflow-hidden hover:shadow-lg p-2 max-w-md mx-auto lg:mx-0">
            <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-video">
              {/* Placeholder for Dashboard Image */}
              <div className="absolute inset-0 flex items-center justify-center ">
                <img src={Assets.Images.Home.Car} alt="" />
              </div>
            </div>
            <div className="p-6 font-semibold text-xl ">
              <h3 className=" font-bold text-black mb-7 leading-tight">
                Redefining Vehicle Connectivity
              </h3>
              <Link
                to="/case-study/smartcar"
                className="px-8 py-3 bg-[#013934] text-white rounded-full text-sm  font-Inter hover:bg-[#002a22] transition-colors"
              >
                View Case Studies
              </Link>
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
}

export default Intellignece;
