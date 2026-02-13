import { Link, Outlet } from "react-router-dom";
import { Assets } from "../assets/Asset";
import ServiceCard from "../components/service/ServiceCard";
import OtherServices from "../components/service/OtherService";
import Contact from "../components/common/ContactSection";
import { useState } from "react";

const ServiceLayout = ({ serviceData }) => {
  return (
    <div className="flex flex-col w-full   min-h-screen bg-white pt-24 md:pt-32 ">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-xl md:text-3xl lg:text-4xl  pt-10 sm:pt-8 font-bold text-black mb-12 leading-tight px-6 md:px-8 lg:px-12">
          {serviceData.title}
        </h1>

        <div className="flex flex-col lg:flex-row  items-start  mb-16 px-6 md:px-8 lg:px-12">
          <p className="text-2xl md:text-3xl lg:text-6xl italic font-instrumentSerif  text-black leading-snug max-w-2xl text-start flex-shrink-0">
            {serviceData.subtitle}
          </p>
          <div className="flex-1 min-w-0">
            <p className="text-base md:text-lg leading-relaxed text-black/80 mb-8">
              {serviceData.description}
            </p>
            <Link to="/contact" className="bg-DarkGreen hover:bg-black text-white rounded-full px-8 py-3 font-semibold transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>

        <img
          src={serviceData.serviceImage}
          className="mt-12 mb-8 w-full object-cover rounded-2xl px-6 md:px-8 lg:px-12"
          alt="AI Service"
        />

        {/* The tech bar */}
        {serviceData.title == "IT managed services providers (MSP)" && (
          <div className="overflow-hidden max-w-6xl rounded-[12px ] mx-auto bg-[#F5F5F5] py-5 ">
            <div className="ticker-track">
              {/* Row 1 */}
              <div className="flex justify-center items-center pr-28">
                <div className="flex items-center justify-between gap-28  ">
                  {serviceData.icons.map((icon, index) => (
                    <div
                      key={`second-${index}`}
                      className="flex items-center justify-center gap-4 text-[#6F6F6F] whitespace-nowrap"
                    >
                      <img
                        src={icon.icon}
                        alt={icon.label}
                        className="w-6 h-6 md:w-10 md:h-10"
                      />
                      <p className="text-xs md:text-sm font-Inter">
                        {icon.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Row2 */}
              <div className="flex justify-center items-center pr-28">
                <div className="flex items-center justify-between gap-28  ">
                  {serviceData.icons.map((icon, index) => (
                    <div
                      key={`second-${index}`}
                      className="flex items-center justify-center gap-4 text-[#6F6F6F] whitespace-nowrap"
                    >
                      <img
                        src={icon.icon}
                        alt={icon.label}
                        className="w-6 h-6 md:w-10 md:h-10"
                      />
                      <p className="text-xs md:text-sm font-Inter">
                        {icon.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {serviceData.title == "E-Commerce Solutions" && (
          <div className="overflow-hidden max-w-6xl rounded-[12px] mx-auto bg-[#F5F5F5] py-5 ">
            <div className="ticker-track">
              {/* Row 1 */}
              <div className="flex justify-center items-center pr-28">
                <div className="flex items-center justify-between gap-28  ">
                  {serviceData.icons.map((icon, index) => (
                    <div
                      key={`second-${index}`}
                      className="flex items-center justify-center gap-4 text-[#6F6F6F] whitespace-nowrap"
                    >
                      <img
                        src={icon.icon}
                        alt={icon.label}
                        className="w-6 h-6 md:w-10 md:h-10"
                      />
                      <p className="text-xs md:text-sm font-Inter">
                        {icon.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Row2 */}
              <div className="flex justify-center items-center pr-28">
                <div className="flex items-center justify-between gap-28  ">
                  {serviceData.icons.map((icon, index) => (
                    <div
                      key={`second-${index}`}
                      className="flex items-center justify-center gap-4 text-[#6F6F6F] whitespace-nowrap"
                    >
                      <img
                        src={icon.icon}
                        alt={icon.label}
                        className="w-6 h-6 md:w-10 md:h-10"
                      />
                      <p className="text-xs md:text-sm font-Inter">
                        {icon.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {(serviceData.title == "Machine Learning & AI" ||
          serviceData.title == "Creative Design") && (
          <div className="overflow-hidden w-screen bg-black py-5 px-0">
            <div className="ticker-track">
              {/* First row */}
              <div className="flex ">
                <div className="flex items-center  justify-between  gap-20  pr-20">
                  {serviceData.icons.map((icon, index) => (
                    <div
                      key={`first-${index}`}
                      className="flex items-center gap-4 text-white/80 whitespace-nowrap"
                    >
                      <img
                        src={icon.icon}
                        alt={icon.label}
                        className="w-6 h-6 md:w-10 md:h-10"
                      />
                      <p className="text-xs md:text-sm font-medium">
                        {icon.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Second row (required) */}
                <div className="flex items-center justify-between gap-20  pr-20">
                  {serviceData.icons.map((icon, index) => (
                    <div
                      key={`second-${index}`}
                      className="flex items-center gap-4 text-white/80 whitespace-nowrap"
                    >
                      <img
                        src={icon.icon}
                        alt={icon.label}
                        className="w-6 h-6 md:w-10 md:h-10"
                      />
                      <p className="text-xs md:text-sm font-medium">
                        {icon.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* The Hero Section */}
        <div className="flex flex-col  items-center text-center mt-24 md:mt-32 mb-16 md:mb-20 px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-6 leading-tight">
            {serviceData.heroTitle}
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-4xl leading-relaxed">
            {serviceData.heroDescription}
          </p>
        </div>

        {/* Cards and Image Grid */}

        {serviceData.cardsType == "2-2" && (
          <div className="flex flex-col lg:flex-row gap-8 mb-20 md:mb-24 px-6 md:px-8 lg:px-12">
            {/* LEFT SIDE (first 2 cards) */}
            <div className="flex-1 flex flex-col gap-8">
              {serviceData.cards.slice(0, 2).map((card, index) => (
                <ServiceCard
                  key={index}
                  title={card.title}
                  description={card.description}
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
              {serviceData.cards.slice(2, 4).map((card, index) => (
                <ServiceCard
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        )}
        {serviceData.cardsType == "2-3" && (
          <div className="flex flex-col lg:flex-row gap-8 mb-20 md:mb-24 px-6 md:px-8 lg:px-12">
            {/* LEFT SIDE (first 2 cards) */}
            <div className="flex-1 flex flex-col gap-8">
              {serviceData.cards.slice(0, 2).map((card, index) => (
                <ServiceCard
                  key={index}
                  title={card.title}
                  description={card.description}
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
              {serviceData.cards.slice(2, 5).map((card, index) => (
                <ServiceCard
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        )}
        {serviceData.cardsType == "3-3" && (
          <div className="flex flex-col lg:flex-row gap-8 mb-20 md:mb-24 px-6 md:px-8 lg:px-12">
            {/* LEFT SIDE (first 2 cards) */}
            <div className="flex-1 flex flex-col gap-8">
              {serviceData.cards.slice(0, 3).map((card, index) => (
                <ServiceCard
                  key={index}
                  title={card.title}
                  description={card.description}
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
              {serviceData.cards.slice(3, 6).map((card, index) => (
                <ServiceCard
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Process TimeLine */}
      <div className="w-screen  ">
        <Outlet />
      </div>

      {/* Other Services */}
      <div className="w-screen ">
        <OtherServices actual_service={serviceData.title} />
      </div>

      {/* Contact Section */}
      {/* <div className="max-w-7xl mx-auto w-full mb-12 px-6 md:px-8 lg:px-12">
        <Contact />
      </div> */}
    </div>
  );
};

export default ServiceLayout;
