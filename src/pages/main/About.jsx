import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Assets } from "../../assets/Asset";

function About() {
  const { t } = useTranslation();

  const contentVM = [
    {
      title: t("about.mission_vision.cards.vision.title"),
      desc: t("about.mission_vision.cards.vision.desc"),
      image: Assets.Images.About.VisonL,
    },
    {
      title: t("about.mission_vision.cards.mission.title"),
      desc: t("about.mission_vision.cards.mission.desc"),
      image: Assets.Images.About.VisionR,
    },
  ];

  const features = t("about.why_us.features", { returnObjects: true });
  console.log(features);
  return (
    <div className="min-h-screen">
      <section className="bg-PrimaryGreen   pt-36  px-6 md:px-16 ">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-white text-3xl md:text-5xl font-medium font-Inter mb-12 md:mb-12">
            {t("about.leadership.label")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Side: Portrait Image */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className=" overflow-hidden shadow-2xl">
                <img
                  src={Assets.Images.Common.Moussa}
                  alt="Moussa Abdallah El Hirtsi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side: Bio Content */}
            <div className="lg:col-span-7 px-2 md:px-16  xl:col-span-8 text-white space-y-8">
              <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold">
                  {t("about.leadership.name")}
                </h3>
                <p className="text-lg opacity-80 font-light">
                  {t("about.leadership.role")}
                </p>
              </div>

              <div className="space-y-6 text-sm  leading-relaxed font-light opacity-90 max-w-3xl">
                <p>
                  {t("about.leadership.bio_p1")}
                </p>

                <p>
                  {t("about.leadership.bio_p2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full font-Inter  py-32 bg-PrimaryGreen px-10 md:px-32 space-y-5 text-center  mx-auto  overflow-hidden">
        <h1 className=" text-2xl md:text-4xl lg:text-6xl text-center font-medium text-white  ">
          <Trans
            i18nKey="about.agency.title"
            components={{
              italic: <span className="font-instrumentSerif italic" />,
              br: <br />,
            }}
          />
        </h1>
        <p className="text-sm md:text-[18px] leading-relaxed  text-white/70">
          {t("about.agency.description")}
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
      <section className="bg-white  pb-24  text-black mx-auto md:pt-10   space-y-10 px-5 md:px-32">
        <div className="space-y-5">
          <div className=" grid grid-cols-1 md:grid-cols-3  mx-auto">
            <div className="px-10 py-10  flex justify-start  items-center">
              <h3 className="text-2xl md:text-4xl font-Inter font-medium">
                {t("about.who_we_are.title")}
              </h3>
            </div>
            <div className="text-sm space-y-5 col-span-2  text-black/70">
              <p>
                {t("about.who_we_are.p1")}
              </p>
              <p>
                {t("about.who_we_are.p2")}
              </p>
              <p>
                {t("about.who_we_are.p3")}
              </p>
            </div>
          </div>
          <img
            src={Assets.Images.About.Team}
            alt=""
            className="object-cover "
          />
        </div>
        <div className="space-y-4 text-center font-Inter ">
          <h2 className="font-medium text-2xl md:text-4xl ">
            {t("about.mission_vision.title")}
          </h2>
          <p className="font-normal text-xs md:text-sm">
            {t("about.mission_vision.description")}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6 lg:gap-4 py-12">
          {contentVM.map((item, index) => (
            <div
              key={index}
              className="relative w-full md:w-1/2 group overflow-hidden rounded-[12px]"
            >
              {/* Image Layer: 
          Added 'aspect-[4/5]' for mobile so the image is tall enough to host the card.
          Added 'md:aspect-square' or 'lg:aspect-video' for desktop layout.
      */}
              <div className="w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-square lg:aspect-video">
                <img
                  src={item.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={item.title}
                />
              </div>

              {/* White Card Overlay: 
          Adjusted padding 'p-4' on mobile to prevent the card from feeling too bulky.
      */}
              <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6 bg-white p-5 md:p-8 rounded-xl lg:rounded-2xl shadow-xl">
                <h3 className="text-lg md:text-2xl font-bold text-PrimaryGreen mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-black/70 font-Inter text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-center font-Inter ">
          <h2 className="font-medium text-2xl md:text-4xl ">{t("about.why_us.title")}</h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {Object.entries(features).map(([key, feature], index) => (
                <div  
                  key={index}
                  className="bg-[#EDECE8] px-8 py-10  md:px-10 md:py-12 rounded-[12px] flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 text-start"
                >
                  {/* Icon Container */}
                  <div className="w-12 h-12 bg-[#051610] rounded-lg flex items-center justify-center mb-8">
                    <img
                      src={Assets.Icons.Common.CardIcon}
                      className="text-white"
                      size={20}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Text Content */}
                  <h3 className="text-2xl font-bold text-[#051610] mb-6 leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-black/70 font-Inter text-sm md:text-base leading-relaxed font-light">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Pink Indicator Line from Image */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
