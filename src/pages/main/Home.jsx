import React, { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Assets } from "../../assets/Asset";
import {
  ArrowRight,
  Brain,
  ChartPie,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Cloud,
  Headset,
  Layers,
  Server,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
// import ContactSection from "../../components/common/ContactSection";
// import ChatAssistant from "../../components/common/ChatAssistant";

function Home() {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);
  const { setIsChatOpen } = useOutletContext();
  const { hash } = useLocation();

  const dir = i18n.dir();

  useEffect(() => {
    const isReload = window.performance
      .getEntriesByType("navigation")
      .map((nav) => nav.type)
      .includes("reload");

    if (isReload) {
      window.scrollTo(0, 0);
      window.history.replaceState(null, "", window.location.pathname);
      return;
    }

    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen" dir={dir}>
      {/* HERO */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={Assets.Images.Home.BG1}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center text-white max-w-6xl mx-auto gap-10 md:gap-14 lg:gap-16">
          <button
            className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-full text-white px-6 py-2 transition-all duration-300 hover:bg-white/10 text-sm md:text-base shadow-xl"
            onClick={() => setIsChatOpen(true)}
          >
            <span className="text-yellow-400">✦</span> {t("hero.pill")}
          </button>

          <div className="space-y-8 md:space-y-10">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold font-Popine leading-[1.1]">
              <Trans
                i18nKey="hero.title"
                components={{
                  italic: <span className="font-instrumentSerif italic font-light" />,
                }}
              />
            </h1>

            <p className="text-base font-light max-w-6xl mx-auto">
              {t("hero.description")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-YellowGreen text-black font-bold rounded-full px-10 py-4 hover:brightness-110 transition-all shadow-lg text-lg"
            >
              {t("hero.cta_start")}
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto border border-white/40 backdrop-blur-sm rounded-full px-16 py-4 hover:bg-white/10 transition-all text-lg"
            >
              {t("hero.cta_about")}
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-WhiteBg py-10 px-6 text-center text-black md:max-w-[80%] mx-auto space-y-5">
        <div className="space-y-3">
          <h6 className="uppercase text-xs">{t("services.label")}</h6>
          <h1 className="font-Inter md:text-4xl">
            <Trans
              i18nKey="services.title"
              components={{
                italic: <span className="font-instrumentSerif italic" />,
              }}
            />
          </h1>
          <p className="text-black opacity-70 font-Inter pt-3">
            {t("services.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto py-4 gap-4">
          {/* Machine learning & AI */}
          <div className="group relative p-5 px-6 w-full md:w-[320px] h-[380px] md:h-[438px] rounded-[12px] bg-BgGreen text-white text-start flex flex-col overflow-hidden transition-all duration-500 hover:shadow-2xl mx-auto">
            <div className="relative z-10 space-y-2">
              <h3 className="text-xl md:text-2xl font-bold font-Popine">
                {t("service_items.ml_ai.name")}
              </h3>
              <p className="text-white/60 text-xs">
                {t("service_items.ml_ai.desc")}
              </p>
            </div>

            <div className="relative mt-[15%] sm:mt-[20%] md:mt-[25%] w-full h-full flex items-center justify-center">
              <div className="relative w-full max-w-[180px] sm:max-w-[220px] md:max-w-[240px] aspect-square flex items-center justify-center">
                <img
                  src={Assets.Images.Home.ML}
                  alt={t("service_items.ml_ai.alt")}
                  className="w-[80%] h-auto object-contain z-10"
                />
                <div className="absolute inset-0 bg-[#D9FF7E]/5 blur-[60px] rounded-full"></div>
              </div>

              <div className="absolute inset-0 z-20 pointer-events-none">
                <span className="absolute -top-3 sm:-top-4 md:-top-5 -left-3 sm:-left-4 md:-left-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[9px] md:text-[10px] flex items-center gap-1">
                  <Layers className="w-2 sm:w-2.5 md:w-3" />
                  <span className="hidden sm:inline">
                    {t("service_items.ml_ai.tag_automation")}
                  </span>
                  <span className="sm:hidden">{t("service_items.service_tags.automation")}</span>
                </span>

                <span className="absolute top-[25%] sm:top-[28%] md:top-[30%] -left-3 sm:-left-4 md:-left-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[9px] md:text-[10px] flex items-center gap-1">
                  <Users className="w-2 sm:w-2.5 md:w-3" />
                  <span className="hidden sm:inline">{t("service_items.ml_ai.tag_users")}</span>
                  <span className="sm:hidden">{t("service_items.service_tags.users")}</span>
                </span>

                <span className="absolute bottom-[8%] sm:bottom-[10%] md:bottom-[8%] -left-3 sm:-left-4 md:-left-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[9px] md:text-[10px] flex items-center gap-1">
                  <ChartPie className="w-2 sm:w-2.5 md:w-3" />
                  {t("service_items.ml_ai.tag_scalability")}
                </span>

                <span className="absolute -top-3 sm:-top-4 md:-top-5 -right-2 sm:-right-3 md:-right-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[9px] md:text-[10px] flex items-center gap-1">
                  <Brain className="w-2 sm:w-2.5 md:w-3" />
                  <span className="hidden sm:inline">{t("service_items.ml_ai.tag_realtime")}</span>
                  <span className="sm:hidden">{t("service_items.service_tags.realtime")}</span>
                </span>

                <span className="absolute top-[25%] sm:top-[28%] md:top-[30%] -right-2 sm:-right-3 md:-right-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[9px] md:text-[10px] flex items-center gap-1">
                  <Headset className="w-2 sm:w-2.5 md:w-3" />
                  <span className="hidden sm:inline">{t("service_items.ml_ai.tag_support")}</span>
                  <span className="sm:hidden">{t("service_items.service_tags.support")}</span>
                </span>

                <span className="absolute bottom-[8%] sm:bottom-[10%] md:bottom-[8%] -right-1 sm:-right-4 md:-right-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[9px] md:text-[10px] flex items-center gap-1">
                  <ShieldCheck className="w-2 sm:w-2.5 md:w-3" />
                  <span className="hidden sm:inline">{t("service_items.ml_ai.tag_security")}</span>
                  <span className="sm:hidden">{t("service_items.service_tags.security")}</span>
                </span>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#D9FF7E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Software Development */}
          <div
            className="group relative p-5 px-6 w-full md:w-[320px] h-[380px] md:h-[438px] rounded-[12px] bg-BgGreen text-white text-start flex flex-col bg-center overflow-hidden transition-all duration-500 hover:shadow-2xl"
            style={{ backgroundImage: `url(${Assets.Images.Home.Techno})` }}
          >
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-bold font-Popine">
                {t("service_items.software.name")}
              </h3>
              <p className="text-white/60 text-xs">
                {t("service_items.software.desc")}
              </p>
            </div>
          </div>

          {/* E-Commerce */}
          <div className="group relative p-5 px-6 w-full md:w-[320px] h-[380px] md:h-[438px] rounded-[12px] bg-BgGreen text-white text-start flex flex-col">
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-bold font-Popine">
                {t("service_items.ecommerce.name")}
              </h3>
              <p className="text-white/60 text-xs">
                {t("service_items.ecommerce.desc")}
              </p>
            </div>
            <div className="mt-auto flex items-end justify-center pb-4">
              <img
                src={Assets.Images.Home.BuyNow}
                alt={t("service_items.ecommerce.alt")}
                className="w-[85%] sm:w-[90%] md:w-full max-w-[280px] mx-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Creative Design */}
          <div className="group relative sm:w-[80%] p-5 px-6 bg-BgGreen h-[380px] md:h-[438px] rounded-[12px] text-white text-start flex flex-col overflow-hidden transition-all duration-500">
            <div className="space-y-2 relative z-10">
              <h3 className="text-xl md:text-2xl font-bold font-Popine text-white">
                {t("service_items.creative.name")}
              </h3>
              <p className="text-white/60 text-xs">
                {t("service_items.creative.desc")}
              </p>
            </div>

            <div className="flex flex-col justify-between gap-5 mt-5 items-center">
              <div className="w-[50%]">
                <img
                  src={Assets.Images.Home.CD}
                  alt={t("service_items.creative.alt")}
                  className="w-full h-full object-contain object-bottom"
                />
              </div>
              <div className="w-full">
                <img
                  src={Assets.Images.Home.CreativeChat}
                  alt={t("service_items.creative.alt_chat")}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* MSP */}
          <div className="group relative p-5 px-6 w-full md:col-span-1 lg:col-span-2 bg-BgGreen rounded-[12px] text-white text-start flex flex-col">
            <div className="space-y-4 sm:space-y-2 relative z-10">
              <h3 className="text-xl md:text-2xl font-bold font-Popine">
                {t("service_items.msp.name")}
              </h3>
              <p className="text-white/60 text-xs">
                {t("service_items.msp.desc")}
              </p>
            </div>

            <div className="relative flex-1 mt-12 sm:mt-8 flex items-end justify-center">
              <div className="grid grid-cols-7 gap-3 w-full items-center">
                <div className="flex flex-col gap-3">
                  <img src={Assets.Icons.Home.Icon1} className="w-full rounded-xl" />
                  <img src={Assets.Icons.Home.Icon2} className="w-full rounded-xl" />
                </div>
                <div className="flex flex-col gap-3 -translate-y-6 md:-translate-y-8">
                  <img src={Assets.Icons.Home.Icon3} className="w-full rounded-xl" />
                  <img src={Assets.Icons.Home.Icon4} className="w-full rounded-xl" />
                </div>
                <div className="flex flex-col gap-3">
                  <img src={Assets.Icons.Home.Icon5} className="w-full rounded-2xl" />
                  <img src={Assets.Icons.Home.Icon6} className="w-full rounded-xl" />
                </div>
                <div className="flex flex-col gap-3 -translate-y-6 md:-translate-y-8">
                  <img src={Assets.Icons.Home.Icon7} className="w-full rounded-xl" />
                  <img src={Assets.Icons.Home.Icon8} className="w-full rounded-xl" />
                </div>
                <div className="flex flex-col gap-3">
                  <img src={Assets.Icons.Home.Icon9} className="w-full rounded-xl" />
                  <img src={Assets.Icons.Home.Icon10} className="w-full rounded-xl" />
                </div>
                <div className="flex flex-col gap-3 -translate-y-6 md:-translate-y-8">
                  <img src={Assets.Icons.Home.Icon11} className="w-full rounded-xl" />
                  <img src={Assets.Icons.Home.Icon12} className="w-full rounded-xl" />
                </div>
                <div className="flex flex-col gap-3">
                  <img src={Assets.Icons.Home.Icon13} className="w-full rounded-2xl" />
                  <img src={Assets.Icons.Home.Icon14} className="w-full rounded-xl" />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-500/10 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS + Agriculture showcase */}
      <section className="bg-WhiteBg py-10 px-6 text-center text-black md:max-w-[80%] mx-auto space-y-8">
        <div className="space-y-3">
          <h6 className="uppercase text-xs">{t("solutions.label")}</h6>
          <h1 className="font-Inter md:text-4xl">
            <Trans
              i18nKey="solutions.title"
              components={{
                italic: <span className="font-instrumentSerif italic" />,
              }}
            />
          </h1>
          <p className="text-black opacity-70 font-Inter pt-3 px-10">
            {t("solutions.description")}
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 items-center">
          {[
            { key: "agriculture", path: "/industry/agriculture" },
            { key: "satellite", path: "/industry/satellite" },
            { key: "law_immigration", path: "/industry/law-immigration" },
            { key: "healthcare", path: "/industry/healthcare" },
            { key: "government", path: "/industry/government" },
            { key: "intelligence", path: "/industry/intelligence" },
          ].map((item) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 rounded-[12px] shadow-md">
          <div className="bg-white p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-10 space-y-3">
            <h3 className="text-2xl md:text-3xl font-medium font-Inter text-black leading-tight">
              {t("agriculture_showcase.title")}
            </h3>
            <p
              className="text-black opacity-70 text-sm leading-relaxed font-Inter text-start"
              dangerouslySetInnerHTML={{ __html: t("agriculture_showcase.description") }}
            />
            <Link className="inline-flex items-center gap-2 text-gray-900 font-semibold text-sm hover:gap-3 transition-all duration-300 group/button w-fit">
              {t("agriculture_showcase.view_details")}
              <ChevronRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="relative md:h-auto">
            <img
              src={Assets.Images.Industries.Agriculture}
              alt="Agriculture AI App"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* OUR WORK + Recent Projects + Process + Templates */}
      <section
        id="work"
        className="bg-PrimaryGreen py-16 text-center text-white w-full mx-auto space-y-10 scroll-mt-24"
      >
        <div className="space-y-4 px-6">
          <h6 className="uppercase text-xs">{t("work.label")}</h6>
          <h1 className="font-Inter md:text-4xl">
            <Trans
              i18nKey="work.title"
              components={{
                italic: <span className="font-instrumentSerif italic" />,
              }}
            />
          </h1>
        </div>

        <div className="flex justify-center gap-[12px] md:gap-4 md:px-4 overflow-x-auto pb-10 scrollbar-hide">
          {[
            {
              image: Assets.Images.Home.HealthCr,
              path: "case-study/healthcare",
              nameKey: "work.projects.0.name",
              italicKey: "work.projects.0.italic",
            },
            {
              image: Assets.Images.Home.Car,
              path: "case-study/smartcar",
              nameKey: "work.projects.1.name",
              italicKey: "work.projects.1.italic",
            },
            {
              image: Assets.Images.Home.SmartSec,
              path: "case-study/security",
              nameKey: "work.projects.2.name",
              italicKey: "work.projects.2.italic",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 w-[85vw] md:w-[400px] snap-start cursor-pointer transition-all duration-500"
            >
              <div className="rounded-2xl p-4 border border-transparent group-hover:border-white/30 transition-all duration-500">
                <div className="rounded-xl overflow-hidden aspect-[4/3] md:aspect-video mb-4">
                  <img
                    src={project.image}
                    alt={t(project.nameKey) + t(project.italicKey)}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-3 text-start">
                  <h3 className="text-white text-xl md:text-2xl font-medium leading-tight">
                    <Trans i18nKey={project.nameKey} />{" "}
                    <span className="font-instrumentSerif italic">
                      <Trans i18nKey={project.italicKey} />
                    </span>
                  </h3>

                  <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-500">
                    <Link
                      to={project.path}
                      className="flex items-center gap-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    >
                      {t("work.view_case")}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PROCESS */}
        <div className="space-y-3 px-12">
          <h6 className="uppercase text-xs">{t("process.label")}</h6>
          <h1 className="font-Inter md:text-4xl text-white">
            <Trans
              i18nKey="process.title"
              components={{
                italic: <span className="font-instrumentSerif italic" />,
              }}
            />
          </h1>
        </div>

        <div dir="ltr" className="relative mx-auto max-w-6xl space-y-12 md:space-y-20 mt-14 px-6 md:px-0">
          {t("processes", { returnObjects: true }).map((process, idx) => {
            const isRight = process.side === "right" || idx % 2 === 1;
            return (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-0"
              >
                {isRight ? (
                  <div className="relative flex justify-start md:justify-end md:pr-10 order-2 md:order-1">
                    <div className={`max-w-md rounded-xl bg-[#eaf7f2] p-6 shadow-lg ${isRight ? "text-right" : "text-left"}`}>
                      <h3 className="mb-2 text-lg font-semibold text-emerald-900">{process.title}</h3>
                      <p className="text-sm leading-relaxed text-emerald-800">{process.desc}</p>
                    </div>
                    <span className="hidden md:block absolute right-0 top-1/2 h-[2px] w-10 bg-emerald-900" />
                  </div>
                ) : (
                  <div className="hidden md:block md:order-1" />
                )}

                <div className="relative z-10 flex flex-col items-center order-1 md:order-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
                    {idx + 1}
                  </div>
                </div>

                {!isRight ? (
                  <div className="relative flex justify-start md:pl-10 order-2 md:order-3">
                    <div className={`max-w-md rounded-xl bg-[#eaf7f2] p-6 shadow-lg ${!isRight ? "text-left" : "text-right"}`}>
                      <h3 className="mb-2 text-lg font-semibold text-emerald-900">{process.title}</h3>
                      <p className="text-sm leading-relaxed text-emerald-800">{process.desc}</p>
                    </div>
                    <span className="hidden md:block absolute left-0 top-1/2 h-[2px] w-10 bg-emerald-900" />
                  </div>
                ) : (
                  <div className="hidden md:block md:order-3" />
                )}
              </div>
            );
          })}
        </div>

        <div className="w-full flex justify-center mt-5">
          <Link
            to="/contact"
            className="rounded-full bg-YellowGreen px-14 py-2 text-black font-Inter"
          >
            {t("process.connect")}
          </Link>
        </div>

        {/* TEMPLATES */}
        <div className="space-y-3 px-12 mx-auto py-5">
          <h6 className="uppercase text-xs">{t("templates.label")}</h6>
          <h1 className="font-Inter md:text-4xl">
            <Trans
              i18nKey="templates.title"
              components={{
                italic: <span className="font-instrumentSerif italic" />,
              }}
            />
          </h1>
          <p className="text-sm text-white/70">{t("templates.description")}</p>
        </div>

        <div dir="ltr" className="overflow-hidden w-full py-5 space-y-8">
          <div className="ticker-track">
            <img src={Assets.Images.Home.Row1} alt="" />
            <img src={Assets.Images.Home.Row1} alt="" />
          </div>
          <div className="ticker-trackR">
            <img src={Assets.Images.Home.Row2} alt="" />
            <img src={Assets.Images.Home.Row2} alt="" />
          </div>
          <div className="ticker-track">
            <img src={Assets.Images.Home.Row2} alt="" />
            <img src={Assets.Images.Home.Row2} alt="" />
          </div>
        </div>
      </section>

      {/* TALENT */}
      <section className="bg-YellowBg py-16 px-6 md:pl-16 text-PrimaryGreen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <p className="uppercase tracking-[0.1em] text-[10px] md:text-xs font-bold text-PrimaryGreen opacity-70">
                  {t("talent.label")}
                </p>
                <div className="w-full border-t border-1 border-PrimaryGreen pt-8">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]">
                    <Trans
                      i18nKey="talent.title"
                      components={{
                        italic: <span className="font-serif italic font-light" />,
                      }}
                    />
                  </h2>
                </div>
              </div>

              <p className="text-PrimaryGreen text-base md:text-lg leading-relaxed max-w-xl opacity-90 font-light">
                {t("talent.description")}
              </p>

              <div className="pt-10">
                <button className="bg-PrimaryGreen text-white px-10 py-3.5 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg">
                  {t("talent.cta")}
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="rounded-[12px] md:rounded-tr-none md:rounded-br-none overflow-hidden shadow-2xl">
                <img
                  src={Assets.Images.Home.ExceptionalTalent}
                  alt="Our Team working together"
                  className="w-full h-full object-cover aspect-[4/3] lg:aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CANCER CASE */}
      <section className="bg-white sm:py-12 px-3 md:px-10">
        <div className="max-w-8xl mx-auto">
          <div className="relative group overflow-hidden rounded-[12px] cursor-pointer">
            <div className="w-full bg-cover">
              <img
                src={Assets.Images.Home.CancerDetection}
                alt={t("cancer_case.alt")}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            <div className="absolute top-28 inset-0 flex flex-col justify-end px-10 py-6 sm:py-20 space-y-2 sm:space-y-4">
              <h2 className="text-white text-lg md:text-3xl lg:text-5xl font-Inter max-w-2xl leading-relaxed">
                {t("cancer_case.title")}
              </h2>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-6">
                <p className="text-white/80 text-xs md:text-md max-w-lg font-Popine">
                  {t("cancer_case.description")}
                </p>

                <button className="flex items-center gap-2 text-white border-b border-[#931145] pb-1 hover:border-white transition-all group/btn self-start md:self-auto">
                  <span className="text-xs font-semibold tracking-wider">
                    {t("cancer_case.view_case")}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US / FEATURES ACCORDION */}
      <section className="bg-white pt-10 px-3 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="rounded-[12px] order-2 md:order-1 overflow-hidden shadow-2xl sticky top-24">
              <img
                src={Assets.Images.Home.Hardware}
                alt={t("why_us.alt")}
                className="w-full h-full object-cover aspect-square md:aspect-[4/5] lg:aspect-square"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="uppercase tracking-[0.3em] text-[10px] font-bold text-black mb-6">
                {t("why_us.label")}
              </p>

              <h2 className="text-2xl md:text-3xl text-PrimaryGreen mb-5 leading-tight">
                <Trans
                  i18nKey="why_us.title"
                  components={{
                    italic: <span className="font-instrumentSerif italic font-light" />,
                  }}
                />
              </h2>

              <div className="divide-y divide-black/10">
                {t("why_us.features", { returnObjects: true }).map((feature, index) => (
                  <div key={index} className="py-6">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                      className="w-full flex justify-between items-center text-left group"
                    >
                      <span
                        className={`text-lg md:text-xl font-bold transition-colors ${openIndex === index ? "text-PrimaryGreen" : "text-black/80 group-hover:text-PrimaryGreen"
                          }`}
                      >
                        {feature.title}
                      </span>
                      {openIndex === index ? (
                        <ChevronUp className="text-black" size={24} />
                      ) : (
                        <ChevronDown className="text-black" size={24} />
                      )}
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                        }`}
                    >
                      <p className="text-black/70 leading-relaxed font-light text-sm md:text-md">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;