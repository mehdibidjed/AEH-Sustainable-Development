import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { CircleCheck, X, Check } from "lucide-react"; // Make sure lucide-react is installed, added Check

function ContactSection() {
  const { t } = useTranslation();
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
    setIsSending(true);
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
          setIsSending(false);
          setIsSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error("Échec de l'envoi : ", error.text);
          setIsSending(false);
          setIsSuccess(false);
          setIsPopupOpen(false);
        }
      );
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsSuccess(false);
    setIsSending(false);
  };

  return (
    <section className="bg-YellowBg rounded-[12px] py-16 px-8 md:px-20 lg:px-24 my-20 relative">
      {/* POPUP OVERLAY */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-sm text-center relative animate-in fade-in zoom-in duration-300">
            {isSending ? (
              <div className="space-y-4">
                <div className="w-16 h-16 border-4 border-[#013934]/20 border-t-[#013934] rounded-full animate-spin mx-auto mb-4" />
                <p className="text-[#013934] font-medium">{t("contact.form.sending")}</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <CircleCheck className="w-16 h-16 text-green-500 animate-bounce" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">{t("contact.form.success_title")}</h3>
                  <p className="text-gray-600 mt-2">
                    {t("contact.form.success_msg")}
                  </p>
                </div>
                <button
                  onClick={closePopup}
                  className="bg-black text-white px-8 py-2 rounded-full font-semibold hover:bg-SecondaryBlue transition-colors w-full"
                >
                  {t("contact.form.close")}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-20 text-black">
          <p className="uppercase text-xs md:text-sm font-semibold tracking-widest text-black/60">
            {t("contact.title")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {t("contact.ready_to_move")}
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
              placeholder={t("contact.form.name")}
            />
            <input
              type="email"
              name="email"
              required
              className="w-full bg-transparent outline-none py-4 text-base border-b-2 border-black/20 focus:border-black transition-colors"
              placeholder={t("contact.form.email")}
            />
            <input
              name="phone"
              type="tel"
              className="w-full bg-transparent outline-none py-4 text-base border-b-2 border-black/20 focus:border-black transition-colors"
              placeholder={t("contact.form.phone")}
            />
          </div>

          <textarea
            name="message"
            required
            rows="1"
            className="w-full bg-transparent outline-none py-4 text-base border-b-2 border-black/20 focus:border-black resize-none"
            placeholder={t("contact.form.project")}
          />

          <div className="pt-6 flex justify-start">
            <button
              type="submit"
              className="bg-SecondaryBlue text-white px-10 md:px-12 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold hover:bg-black hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {t("contact.form.send")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
