import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { CircleCheck, X } from "lucide-react"; // Make sure lucide-react is installed

function ContactSection() {
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
        "service_aeh",
        "template_fu3q9bh",
        form.current,
        "9BPIUnTb9XqLruRrk"
      )
      .then(
        () => {
          setProgress(100);
          setTimeout(() => {
            setIsSuccess(true);
          }, 500);
        },
        (error) => {
          alert("Échec de l'envoi : " + error.text);
          setShowPopup(false);
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
    <section className="bg-YellowBg rounded-[12px] py-16 px-8 md:px-20 lg:px-24 my-20 relative">
      {/* POPUP OVERLAY */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-sm text-center relative animate-in fade-in zoom-in duration-300">
            {!isSuccess ? (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-black">
                  Sending Email...
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-SecondaryBlue h-full transition-all duration-300 ease-out"
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
                  <h3 className="text-2xl font-bold text-black">Email Sent!</h3>
                  <p className="text-gray-600 mt-2">
                    We'll get back to you shortly.
                  </p>
                </div>
                <button
                  onClick={closePopup}
                  className="bg-black text-white px-8 py-2 rounded-full font-semibold hover:bg-SecondaryBlue transition-colors w-full"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* REST OF YOUR FORM COMPONENT */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-20 text-black">
          <p className="uppercase text-xs md:text-sm font-semibold tracking-widest text-black/60">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Ready To Move Forward?
          </h2>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-10 md:space-y-14"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            <input
              type="text"
              name="full_name"
              required
              className="w-full bg-transparent outline-none py-4 text-base border-b-2 border-black/20 focus:border-black transition-colors"
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              required
              className="w-full bg-transparent outline-none py-4 text-base border-b-2 border-black/20 focus:border-black transition-colors"
              placeholder="Email Address"
            />
            <input
              name="phone"
              type="tel"
              className="w-full bg-transparent outline-none py-4 text-base border-b-2 border-black/20 focus:border-black transition-colors"
              placeholder="Phone Number"
            />
          </div>

          <textarea
            name="message"
            required
            rows="1"
            className="w-full bg-transparent outline-none py-4 text-base border-b-2 border-black/20 focus:border-black resize-none"
            placeholder="Tell us about your project"
          />

          <div className="pt-6 flex justify-start">
            <button
              type="submit"
              className="bg-SecondaryBlue text-white px-10 md:px-12 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold hover:bg-black hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
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
