import React from "react";
import { Assets } from "../../assets/Asset";

function Contact() {
  return (
    <div className="min-h-screen min-w-full">
      <section className="relative min-h-screen w-full flex item-center justify-start overflow-hidden px-20 py-20 md:py-32">
        {/* Background Layer */}
        <div className="absolute h-full inset-0 z-0">
          <img
            src={Assets.Images.ContactUs.Background}
            alt="Background"
            className="w-full h-screen object-cover"
          />
          {/* Subtle overlay to match the second image's depth */}
        </div>

        {/* Content Container - Using flex-col and gap for precise vertical spacing */}

        {/* Top Pill Button - Added glassmorphism style from image 2 */}
        <div className="z-10 flex  justify-start items-center">

        <h3 className="text-white z-10 font-bold font-Popine text-3xl md:text-6xl">
          Contact
        </h3>
        </div>
      </section>
      <section className="bg-white py-20 px-6 md:px-16 lg:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Information */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-PrimaryGreen leading-tight">
                Collaborate With Us To <br />
                Create Meaningful, <br />
                <span className="font-serif italic font-light">
                  Innovative Solutions
                </span>
              </h2>
              <p className="text-gray-600 text-sm max-w-md font-light">
                Are you driven by collaboration and business growth? We believe
                the best solutions are created when talented people work
                together.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20  pt-5">
              <div className="space-y-2">
                <p className="text-sm font-bold uppercase tracking-widest text-PrimaryGreen">
                  Email Address
                </p>
                <div className="w-8 h-[2px] bg-PrimaryGreen mb-4"></div>
                <p className="text-black font-bold text-sm">
                  aehsustainabledevelopment@info.com
                </p>
                <p className="text-black text-sm">
                  Assistance hours:
                  <br />
                  Monday - Friday 9 am to <br /> 8 pm EST
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-bold uppercase tracking-widest text-PrimaryGreen">
                  Number
                </p>
                <div className="w-8 h-[2px] bg-PrimaryGreen mb-4"></div>
                <p className="text-black font-bold">(808) 986-34259</p>
                <p className="text-black text-sm">
                  Assistance hours:
                  <br />
                  Monday - Friday 9 am to <br /> 8 pm EST
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="bg-YellowBg px-8 py-1 md:px-8 md:py-10 rounded-[12px] shadow-sm">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-PrimaryGreen mb-2">
                Get In Touch
              </h3>
              <p className="text-gray-600 text-sm font-light">
                Built on collaboration. Powered by talented teams. Designed for
                growth.
              </p>
            </div>

            <form className="space-y-8">
              <div className="relative border-b border-black/10 pb-2 focus-within:border-PrimaryGreen transition-colors">
                <label className="block text-PrimaryGreen text-sm font-bold mb-4">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent outline-none py-2 text-lg placeholder-gray-400 font-light"
                />
              </div>

              <div className="relative border-b border-black/10 pb-2 focus-within:border-PrimaryGreen transition-colors">
                <label className="block text-PrimaryGreen text-sm font-bold mb-4">
                  Email Adresse
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent outline-none py-2 text-lg placeholder-gray-400 font-light"
                />
              </div>

              <div className="relative border-b border-black/10 pb-2 focus-within:border-PrimaryGreen transition-colors">
                <label className="block text-PrimaryGreen text-sm font-bold mb-4">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent outline-none py-2 text-lg placeholder-gray-400 font-light"
                />
              </div>

              <div className="relative border-b border-black/10 pb-2 focus-within:border-PrimaryGreen transition-colors">
                <label className="block text-PrimaryGreen text-sm font-bold mb-4">
                  Project Description
                </label>
                <textarea
                  rows="1"
                  className="w-full bg-transparent outline-none pb-20 text-lg placeholder-gray-400 font-light resize-none"
                />
              </div>

              <div className="pt-6 text-center">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-PrimaryGreen text-white px-24 py-3 rounded-full text-sm font-bold hover:brightness-110 transition-all active:scale-95 shadow-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
