import React from "react";
import { Assets } from "../../assets/Asset";

function About() {
  return (
    <div className="min-h-screen">
      {/* Changed h-screen to min-h-screen and added pt-20 to account for Navbar height */}
      {/* Changed h-screen to min-h-screen and added pt-20 to account for Navbar height */}
      <section className="min-h-screen w-full font-Inter  py-24 sm:py-28 md:py-28  lg:py-32 bg-PrimaryGreen px-10 md:px-32 space-y-5 text-center  mx-auto  overflow-hidden">
        <h1 className=" text-2xl md:text-4xl lg:text-6xl text-center font-medium text-white  ">
          We’re a Strategy-First Digital <br /> Product Agency.
        </h1>
        <p className="text-sm md:text-[18px] leading-relaxed  text-white/70">
          AEH Sustainable Development is a technology and AI development company
          focused on delivering real, production-ready solutions for
          organizations operating in complex and regulated environments.{" "}
        </p>
        <div className="flex flex-col md:flex-row  justify-center items-center gap-5 ">
          <img
            src={Assets.Images.About.Men1}
            className="object-cover h-[300px]"
            alt=""
          />
          <img
            src={Assets.Images.About.Men2}
            className="object-cover h-[300px]"
            alt=""
          />
          <img
            src={Assets.Images.About.Woman}
            className="object-cover h-[300px]"
            alt=""
          />
        </div>
      </section>
      <section className="bg-white  py-24  text-black mx-auto max-w-[95%] space-y-10">
        <div className="space-y-5">

        <div className=" grid grid-cols-1 md:grid-cols-3  mx-auto">
          <div className="px-10 py-10  flex justify-start  items-center">
            <h3 className="text-2xl md:text-4xl font-Inter font-medium">
              Who We Are
            </h3>
          </div>
          <div className="text-sm space-y-5 col-span-2  text-black/70">
            <p>
              AEH Sustainable Development is a multidisciplinary technology firm
              combining software engineering, artificial intelligence,
              automation, and strategic design. Our work spans industries where
              reliability, compliance, and long-term performance matter.
            </p>
            <p>
              We don't chase trends. We focus on clarity, execution, and systems
              that work in the real world — from day one and long after launch.
            </p>
            <p>
              Our teams collaborate closely with stakeholders to translate
              complex requirements into clean architecture, secure systems, and
              scalable digital products.
            </p>
          </div>
        </div>
        <img src={Assets.Images.About.Team} alt="" className="object-cover " />
        </div>
        <div className="space-y-4 text-center font-Inter ">

        <h2 className="font-medium text-2xl md:text-4xl ">Missions And Vison</h2>
        <p className="font-normal text-xs md:text-sm">
          AEH Sustainable Development was founded to turn bold ideas into
          technology that works in the real world. We saw organizations held
          back by overcomplicated systems, inaccessible AI, and solutions that
          failed beyond the concept stage. Today, we focus on practical
          strategy, clear design, and reliable execution, partnering with
          organizations in complex and regulated industries to build technology
          that scales, performs, and lasts.
        </p>
        </div>
      </section>
    </div>
  );
}

export default About;
