import React from "react";

function ContactSection() {
  return (
    <section className="bg-YellowBg rounded-[12px] py-16 px-8 md:px-20 lg:px-24 my-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-20 text-black">
          <p className="uppercase text-xs md:text-sm font-semibold tracking-widest text-black/60">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Ready To Move Forward?
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto">
            Let's discuss your project and how we can help bring your vision to
            life.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-10 md:space-y-14">
          {/* Top Row: Name, Email, Phone */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            <div className="relative group">
              <input
                type="text"
                className="w-full bg-transparent outline-none py-4 text-base md:text-lg placeholder-black/50 font-medium border-b-2 border-black/20 group-focus-within:border-black transition-colors duration-300"
                placeholder="Your Name"
              />
            </div>

            <div className="relative group">
              <input
                type="email"
                className="w-full bg-transparent outline-none py-4 text-base md:text-lg placeholder-black/50 font-medium border-b-2 border-black/20 group-focus-within:border-black transition-colors duration-300"
                placeholder="Email Address"
              />
            </div>

            <div className="relative group">
              <input
                type="tel"
                className="w-full bg-transparent outline-none py-4 text-base md:text-lg placeholder-black/50 font-medium border-b-2 border-black/20 group-focus-within:border-black transition-colors duration-300"
                placeholder="Phone Number"
              />
            </div>
          </div>

          {/* Bottom Row: Project Description */}
          <div className="relative group">
            <textarea
              rows="1"
              className="w-full bg-transparent outline-none py-4 text-base md:text-lg placeholder-black/50 font-medium border-b-2 border-black/20 group-focus-within:border-black resize-none overflow-hidden transition-colors duration-300"
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
              placeholder="Tell us about your project"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-6 flex justify-start">
            <button
              type="submit"
              className="bg-SecondaryBlue text-white px-10 md:px-12 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold hover:bg-black hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
