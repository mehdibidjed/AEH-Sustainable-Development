import React, { useState } from "react";
import TechStack from "../components/industry/TechStack";
import ConnectWithExpert from "../components/industry/ConnectWithExpert";
import Contact from "../pages/main/ContactUs";
import HealthcareServiceCard from "../components/industry/HealthCareServiceCard";
import { Assets } from "../assets/Asset";
import { Link, Outlet } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ServiceCard from "../components/service/ServiceCard";
import { useTranslation } from "react-i18next";

function IndustryLayout({ industryData }) {
  const { t } = useTranslation();
  const key = industryData.i18nKey || "healthcare";

  const TechSolutions = [
    { key: "agriculture", path: "/industry/agriculture" },
    { key: "satellite", path: "/industry/satellite" },
    { key: "law_immigration", path: "/industry/law-immigration" },
    { key: "healthcare", path: "/industry/healthcare" },
    { key: "government", path: "/industry/government" },
    { key: "intelligence", path: "/industry/intelligence" },
  ];

  return (
    <div className="flex flex-col w-full   min-h-screen bg-white pt-12  ">
      <section className="relative py-20 lg:pt-32  pb-0 bg-white overflow-hidden px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 space-y-5" >
          <div className="text-left space-y-10">
            <h1 className="text-3xl lg:text-5xl font-Inter text-slate-900 mb-8 leading-relaxed">
              <span className="font-light font-instrumentSerif italic  block">
                {t(`industry_pages.${key}.title`)}
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed whitespace-pre-line">
              {t(`industry_pages.${key}.description`)}
              {t(`industry_pages.${key}.description_p2`) && `\n\n${t(`industry_pages.${key}.description_p2`)}`}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link to="/contact" className="px-8 py-3 bg-[#013934] text-white rounded-full font-medium hover:bg-[#002a22] transition-colors">
                {t("service_pages.common.get_started")}
              </Link>
              <Link to="/about" className="px-8 py-3 bg-white text-[#013934] border border-[#013934] rounded-full font-medium hover:bg-slate-50 transition-colors">
                {t("service_pages.common.learn_more")}
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className=" h-full md:h-[75%] w-full flex justify-center md:justify-end">
            <img
              src={industryData.heroImage}
              alt={t(`industry_pages.${key}.title`)}
              className="w-[90%] h-full rounded-[12px] object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
      {key !== "healthcare" && (
        <section>
          <div className="flex flex-col pt-16 items-center text-center  mb-16 px-6 md:px-8 lg:px-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black mb-6 leading-tight">
              {t(`industry_pages.${key}.card_title`)}
            </h2>
            <p className="text-base md:text-lg text-black/70 max-w-4xl leading-relaxed">
              {t(`industry_pages.${key}.card_description`)}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 mb-20 md:mb-24 px-6 md:px-8 lg:px-12">
            {/* LEFT SIDE (first 2 cards) */}
            <div className="flex-1 flex flex-col gap-8">
              {industryData.cards.slice(0, 2).map((_, index) => (
                <ServiceCard
                  key={index}
                  title={t(`industry_pages.${key}.cards.${index}.title`)}
                  description={t(`industry_pages.${key}.cards.${index}.description`)}
                />
              ))}
            </div>

            {/* IMAGE */}
            <div className="flex-1 flex justify-center items-center overflow-hidden">
              <img
                src={Assets.Images.Services.ML.WomenImage}
                className="w-full h-full object-cover rounded-2xl"
                alt="AI Illustration"
              />
            </div>

            {/* RIGHT SIDE (last 2 cards) */}
            <div className="flex-1 flex flex-col gap-8">
              {industryData.cards.slice(2, 4).map((_, index) => (
                <ServiceCard
                  key={index + 2}
                  title={t(`industry_pages.${key}.cards.${index + 2}.title`)}
                  description={t(`industry_pages.${key}.cards.${index + 2}.description`)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {key === "healthcare" && (
        <HealthcareServiceCard />
      )}
      {/* outlet */}
      <Outlet />

      <TechStack />
      <section className="bg-white py-10 text-center text-black px-6 md:px-8 lg:px-12  mx-auto space-y-8">
        <div className="space-y-3">
          <h1 className="font-Inter text-2xl md:text-3xl lg:text-4xl">
            {t("industry_pages.common.discover_more_industries")}
          </h1>
          <p className="text-black opacity-70 font-Inter pt-3 px-10 ">
            {t("industry_pages.common.industries_desc")}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 md:gap-6  md:grid-cols-6 text-sm   ">
          {TechSolutions.map((item, index) => (
            <Link
              key={item.key}
              to={item.path}
              className={`font-inter font-medium p-3 ${item.key === "agriculture" ? "border-b-2 border-[#06986F]" : ""
                }`}
            >
              {t(`industries.${item.key}`)}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  rounded-[12px] shadow-md">
          <div className=" bg-white p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-10 space-y-3">
            <h3 className="text-2xl md:text-3xl font-medium font-Inter text-black leading-tight">
              {t(`industry_pages.${key}.more_title`)}
            </h3>

            <p className="text-black opacity-70  text-sm  leading-relaxed whitespace-pre-line font-Inter text-start">
              {t(`industry_pages.${key}.more_text`)}
            </p>

            <Link className="inline-flex items-center gap-2 text-gray-900 font-semibold text-sm hover:gap-3 transition-all duration-300 group/button w-fit">
              {t("industry_pages.common.view_details")}
              <ChevronRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="relative  md:h-[450px] ">
            <img
              src={industryData.moreIndustrieImage}
              alt="AI"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <ConnectWithExpert />
    </div>
  );
}

export default IndustryLayout;
