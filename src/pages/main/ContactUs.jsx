import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { CircleCheck, X } from "lucide-react";
import { Assets } from "../../assets/Asset";

function Contact() {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle the progress bar animation
  useEffect(() => {
    let interval;
    if (showPopup && !isSuccess) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => (prev < 90 ? prev + 10 : prev));
      }, 200);
    }
    return () => clearInterval(interval);
  }, [showPopup, isSuccess]);

  const sendEmail = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setIsSuccess(false);

    emailjs
      .sendForm(
        "service_aeh",        // Replace with your EmailJS service ID
        "template_fu3q9bh",   // Replace with your EmailJS template ID
        form.current,
        "9BPIUnTb9XqLruRrk"   // Replace with your EmailJS public key
      )
      .then(
        () => {
          setProgress(100);
          setTimeout(() => {
            setIsSuccess(true);
          }, 500);
        },
        (error) => {
          alert("Failed to send message: " + error.text);
          setShowPopup(false);
          setIsSuccess(false);
          setProgress(0);
        }
      );
  };

  const closePopup = () => {
    setShowPopup(false);
    setIsSuccess(false);
    setProgress(0);
    form.current.reset();
  };

  return (
    <div className="min-h-screen min-w-full">
      {/* POPUP OVERLAY */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-sm text-center relative animate-in fade-in zoom-in duration-300">
            {!isSuccess ? (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-black">
                  Sending Message...
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-PrimaryGreen h-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  {progress}% Complete
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <CircleCheck className="w-16 h-16 text-green-500 animate-bounce" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">Message Sent!</h3>
                  <p className="text-gray-600 mt-2">
                    We'll get back to you shortly.
                  </p>
                </div>
                <button
                  onClick={closePopup}
                  className="bg-PrimaryGreen text-white px-8 py-2 rounded-full font-semibold hover:bg-black transition-colors w-full"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden px-20 py-20 md:py-32">
        {/* Background Layer */}
        <div className="absolute h-full inset-0 z-0">
          <img
            src={Assets.Images.ContactUs.Background}
            alt="Background"
            className="w-full h-screen object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="z-10 flex justify-start items-center">
          <h3 className="text-white z-10 font-bold font-Popine text-3xl md:text-6xl">
            Contact
          </h3>
        </div>
      </section>

      {/* Contact Form Section */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pt-5">
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

            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div className="relative border-b border-black/10 pb-2 focus-within:border-PrimaryGreen transition-colors">
                <label className="block text-PrimaryGreen text-sm font-bold mb-4">
                  Your Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  required
                  className="w-full bg-transparent outline-none py-2 text-lg placeholder-gray-400 font-light"
                />
              </div>

              <div className="relative border-b border-black/10 pb-2 focus-within:border-PrimaryGreen transition-colors">
                <label className="block text-PrimaryGreen text-sm font-bold mb-4">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent outline-none py-2 text-lg placeholder-gray-400 font-light"
                />
              </div>

              <div className="relative border-b border-black/10 pb-2 focus-within:border-PrimaryGreen transition-colors">
                <label className="block text-PrimaryGreen text-sm font-bold mb-4">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-transparent outline-none py-2 text-lg placeholder-gray-400 font-light"
                />
              </div>

              <div className="relative border-b border-black/10 pb-2 focus-within:border-PrimaryGreen transition-colors">
                <label className="block text-PrimaryGreen text-sm font-bold mb-4">
                  Project Description
                </label>
                <textarea
                  name="message"
                  required
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