import React from "react";

function ContactSection() {
  return (
    <section className="bg-YellowBg py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 text-black">
          <p className="uppercase  text-[10px] md:text-xs font-medium font-Inter  ">
            Contact Us
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-regular  ">
            Ready To Move Forward?
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-12">
          {/* Top Row: Name, Email, Phone */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <div className="relative  transition-colors">
              <input
                type="text"
                className="w-full bg-transparent outline-none py-5  text-xl placeholder-black font-light border-b border-black/20  focus-within:border-black"
                placeholder="Your Name"
              />
            </div>

            <div className="relative  transition-colors">

              <input
                type="email"
                className="w-full bg-transparent outline-none py-5  text-xl placeholder-black font-light border-b border-black/20  focus-within:border-black"
                placeholder="Email Address"
              />
            </div>

            <div className="relative border-b transition-colors">

              <input
                type="tel"
                className="w-full bg-transparent outline-none py-5 text[#C1C1C1]  text-xl placeholder-black font-light border-b border-black/20  focus-within:border-black"
                placeholder="Phone Number"
              />
            </div>
          </div>

          {/* Bottom Row: Project Description */}
          <div className="relative transition-colors">

            <textarea
              rows="1"
              className="w-full bg-transparent outline-none pb-16 pt-5  text-xl placeholder-black font-light border-b border-black/20  focus-within:border-black resize-none overflow-hidden"
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
              placeholder="Project Description"
            />
          </div>    

          {/* Submit Button */}
          <div className="pt-8">
            <button
              type="submit"
              className="bg-SecondaryBlue text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-black transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
