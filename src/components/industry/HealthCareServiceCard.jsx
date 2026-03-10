import React from "react";
import { useTranslation } from "react-i18next";

const HealthcareServiceCard = () => {
  const { t } = useTranslation();

  const services = t("industry_pages.healthcare.services", { returnObjects: true }) || [];

  return (
    <section className="py-14 bg-white px-6 md:px-8 lg:px-12" id="healthcare-services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mx-auto mb-10">
          <h2 className="text-2xl lg:text-4xl font-Inter font-medium text-black mb-6">
            {t("industry_pages.healthcare.service_section_title_before", "Our Custom")}{" "}
            <span className="font-instrumentSerif italic">
              {t("industry_pages.healthcare.service_section_title_highlight", "Healthcare")}
            </span>{" "}
            {t("industry_pages.healthcare.service_section_title_after", "Software Development Services")}
          </h2>
          <p className="text-slate-600 text-sm lg:text-base max-w-4xl mx-auto leading-relaxed">
            {t("industry_pages.healthcare.service_section_desc", "From virtual health systems to intelligent diagnostic tools — we develop custom software solutions for healthcare that are completely compliant, flexible, and geared toward achieving tangible outcomes.")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(services) && services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-[#F2F4F0] hover:bg-PrimaryGreen rounded-[12px] transition-all duration-300 hover:shadow-xl border border-transparent hover:border-slate-100"
            >
              <div className="w-10 h-10 bg-[#003B30] group-hover:bg-white group-hover:text-PrimaryGreen rounded-[6px] flex items-center justify-center mb-6 text-white font-semibold text-md">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-[#1C1917] group-hover:text-white mb-4 leading-tight min-h-[56px]">
                {service.title}
              </h3>
              <p className="text-sm text-black/70 group-hover:text-white leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareServiceCard;
