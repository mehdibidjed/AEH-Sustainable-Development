import React, { useState } from "react";
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
  ShieldCheckIcon,
  Users,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "../../components/common/ContactSection";
function Home() {
  const [openIndex, setOpenIndex] = useState(0);
  const features = [
    {
      title: "Experienced, multidisciplinary experts",
      desc: "Our team brings together designers, engineers, and technologists with deep experience across product design, development, and intelligent systems ready to integrate seamlessly with your workflow.",
    },
    {
      title: "Practical solutions, not theory",
      desc: "We focus on what works in production. Every solution is designed to be usable, scalable, and cost-efficient—built to solve real operational challenges, not just look good on paper.",
    },
    {
      title: "Progress you can measure",
      desc: "We apply modern technologies where they create real value—improving efficiency, unlocking insights, and helping businesses move faster without unnecessary complexity.",
    },
    {
      title: "Credibility through execution",
      desc: "From internal platforms to customer-facing products, our work supports growth, trust, and long-term performance in competitive digital environments.",
    },
  ];
  const serviceData = [
    {
      name: "Machine learning & AI",
      desc: "Choose from 100+ expert-made templates.Use your brand colors and custom fonts.",
    },
    {
      name: "Software Development",
      desc: "Share your presentation with a live link. Present with notes, a timer, and other aids.",
    },
    {
      name: "E-Commerce Solutions",
      desc: "Create, craft and share stories together with real time collaboration. .",
    },
    {
      name: "Creative Design",
      desc: "Choose from 100+ expert-made templates.Use your brand colors and custom fonts.",
    },
    {
      name: "IT managed services provider (MSP)",
      desc: ".Quickly add visuals to slides, import your data, and keep your team in sync.",
    },
  ];
  const TechSolutions = [
    "Agriculture",
    "Satellite",
    "Law & Immigration",
    "Healthcare",
    "Goverment",
    "Intelligence",
  ];
  const RecentProjects = [
    {
      name: "AI-Driven Healthcare Solutions",
      image: Assets.Images.Home.HealthCr,
    },
    {
      name: "Smart Retail Security with AI",
      image: Assets.Images.Home.SmartSec,
    },
    {
      name: "Smart Retail Security with AI",
      image: Assets.Images.Home.SmartSec,
    },
    {
      name: "Smart Retail Security with AI",
      image: Assets.Images.Home.SmartSec,
    },
    {
      name: "Smart Retail Security with AI",
      image: Assets.Images.Home.SmartSec,
    },
  ];
  const processes = [
    {
      id: 2,
      title: "Planning & Architecture",
      duration: "1 week",
      desc: "We translate insights into structured plans, workflows, and system architecture. Every solution is thoughtfully designed to fit real needs and scale efficiently.",
      side: "left",
    },
    {
      id: 1,
      title: "Strategy & Research",
      duration: "1 week",
      desc: "We start by understanding your goals, challenges, and constraints. Through research and stakeholder alignment, we define a clear direction that turns complexity into opportunity.",
      side: "right",
    },
    {
      id: 3,
      title: "Creative Design",
      duration: "1 week",
      desc: "Our team crafts intuitive, engaging experiences that balance usability and aesthetics. Every interface is designed to feel natural, clear, and purposeful.",
      side: "left",
    },
    {
      id: 4,
      title: "Development",
      duration: "1 week",
      desc: "We build secure, scalable, and high-performance solutions using modern technologies. Clean code, reliability, and long-term maintainability are always priorities.",
      side: "right",
    },
    {
      id: 5,
      title: "Launch & Optimization",
      duration: "1 week",
      desc: "We deploy with confidence and continue optimizing post-launch. Ongoing support, monitoring, and improvements help your solution grow and evolve.",
      side: "left",
    },
    {
      id: 6,
      title: "Quality Assurance",
      duration: "1 week",
      desc: "Each product is rigorously tested for performance, security, and stability to ensure stability, compliance, and a seamless user experience.",
      side: "right",
    },
  ];
  const ProcessCard = ({ process, align }) => {
    return (
      <div
        className={`max-w-md rounded-xl bg-[#eaf7f2] p-6 shadow-lg ${
          align === "right" ? "text-right" : "text-left"
        }`}
      >
        <h3 className="mb-2 text-lg font-semibold text-emerald-900">
          {process.title}
        </h3>
        <p className="text-sm leading-relaxed text-emerald-800">
          {process.desc}
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Changed h-screen to min-h-screen and added pt-20 to account for Navbar height */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 py-20 md:py-32">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={Assets.Images.Home.BG1}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay to match the second image's depth */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content Container - Using flex-col and gap for precise vertical spacing */}
        <div className="relative z-10 flex flex-col items-center text-center text-white max-w-6xl mx-auto gap-10 md:gap-14 lg:gap-16">
          {/* Top Pill Button - Added glassmorphism style from image 2 */}
          <button className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-full text-white px-6 py-2 transition-all duration-300 hover:bg-white/10 text-sm md:text-base shadow-xl">
            <span className="text-yellow-400">✦</span> What Is AEH Sustainable
            Development?
          </button>

          {/* Title and Paragraph Group */}
          <div className="space-y-8 md:space-y-10">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold font-Popine leading-[1.1]">
              Building Practical{" "}
              <span className="font-Instrument_Serif italic font-light">
                Technology
              </span>{" "}
              for Sustainable Growth
            </h1>

            <p className="text-base  font-light max-w-6xl mx-auto ">
              We deliver practical tech solutions that solve real business
              challenges across industries from agriculture to healthcare. We
              help overcome limited AI access, high costs, and regulatory
              constraints with clear, effective implementation.
            </p>
          </div>

          {/* Action Buttons - Fully Responsive */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-YellowGreen text-black font-bold rounded-full px-10 py-4 hover:brightness-110 transition-all shadow-lg text-lg">
              Start Your Project
            </button>
            <button className="w-full sm:w-auto border border-white/40 backdrop-blur-sm rounded-full px-16 py-4 hover:bg-white/10 transition-all text-lg">
              About Us
            </button>
          </div>
        </div>
      </section>

      <section className="bg-WhiteBg py-10 text-center text-black md:max-w-[80%] mx-auto space-y-5">
        <div className="space-y-3">
          <h6 className="uppercase text-xs">solutions</h6>
          <h1 className="font-Inter md:text-4xl">
            What AEH{" "}
            <span className="font-instrumentSerif italic">
              Sustainable Development
            </span>{" "}
            Can Do For You
          </h1>
          <p className="text-black opacity-70 font-Inter pt-3 ">
            Our technology solutions help businesses adapt, optimize, and grow
            in an evolving digital environment. By combining thoughtful design,
            intelligent systems, and scalable development, we turn complex
            challenges into efficient, future-ready solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto py-4 gap-4 ">
          {serviceData.map((item, index) => {
            // Software Development Card
            if (item.name === "Software Development") {
              return (
                <div
                  key={index}
                  className="group relative p-5 px-6 w-full md:w-[320px] h-[380px] md:h-[438px] rounded-[12px] bg-BgGreen text-white text-start flex flex-col bg-center overflow-hidden transition-all duration-500 hover:shadow-2xl "
                  style={{
                    backgroundImage: `url(${Assets.Images.Home.Techno})`,
                  }}
                >
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold font-Popine">
                      {item.name}
                    </h3>
                    <p className="text-white/60 text-xs">{item.desc}</p>
                  </div>
                </div>
              );
            }

            // Machine Learning & AI Card
            if (item.name === "Machine learning & AI") {
              return (
                <div
                  key={index}
                  className="group relative p-5 px-6 w-full md:w-[320px] h-[380px] md:h-[438px] rounded-[12px] bg-BgGreen text-white text-start flex flex-col overflow-hidden transition-all duration-500 hover:shadow-2xl mx-auto"
                >
                  {/* Text Content */}
                  <div className="relative z-10 space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold font-Popine">
                      {item?.name}
                    </h3>
                    <p className="text-white/60 text-xs">{item?.desc}</p>
                  </div>

                  {/* Central Illustration */}
                  <div className="relative mt-[15%] sm:mt-[20%] md:mt-[25%] w-full h-full flex items-center justify-center">
                    <div className="relative w-full max-w-[180px] sm:max-w-[220px] md:max-w-[240px] aspect-square flex items-center justify-center">
                      <img
                        src={Assets.Images.Home.ML}
                        alt="service illustration"
                        className="w-[80%] h-auto object-contain z-10"
                      />
                      <div className="absolute inset-0 bg-[#D9FF7E]/5 blur-[60px] rounded-full"></div>
                    </div>

                    {/* Floating Tags - Responsive positioning */}
                    <div className="absolute inset-0 z-20 pointer-events-none">
                      <span className="absolute -top-3 sm:-top-4 md:-top-5 -left-3 sm:-left-4 md:-left-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[9px] md:text-[10px] flex items-center gap-1">
                        <Layers className="w-2 sm:w-2.5 md:w-3" />
                        <span className="hidden sm:inline ">
                          Automation Integration
                        </span>
                        <span className="sm:hidden t">Automation</span>
                      </span>

                      <span className="absolute top-[25%] sm:top-[28%] md:top-[30%] -left-3 sm:-left-4 md:-left-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[9px] md:text-[10px] flex items-center gap-1">
                        <Users className="w-2 sm:w-2.5 md:w-3" />
                        <span className="hidden sm:inline">User Adoption</span>
                        <span className="sm:hidden">Users</span>
                      </span>

                      <span className="absolute bottom-[8%] sm:bottom-[10%] md:bottom-[8%] -left-3 sm:-left-4 md:-left-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[9px] md:text-[10px] flex items-center gap-1">
                        <ChartPie className="w-2 sm:w-2.5 md:w-3" />
                        Scalability
                      </span>

                      <span className="absolute -top-3 sm:-top-4 md:-top-5 -right-2 sm:-right-3 md:-right-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[9px] md:text-[10px] flex items-center gap-1">
                        <Brain className="w-2 sm:w-2.5 md:w-3" />
                        <span className="hidden sm:inline">Real-Time</span>
                        Monitoring
                      </span>

                      <span className="absolute top-[25%] sm:top-[28%] md:top-[30%] -right-2 sm:-right-3 md:-right-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[9px] md:text-[10px] flex items-center gap-1">
                        <Headset className="w-2 sm:w-2.5 md:w-3" />
                        <span className="hidden sm:inline">Proactive</span>
                        Support
                      </span>

                      <span className="absolute bottom-[8%] sm:bottom-[10%] md:bottom-[8%] -right-3 sm:-right-4 md:-right-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[9px] md:text-[10px] flex items-center gap-1">
                        <ShieldCheck className="w-2 sm:w-2.5 md:w-3" />
                        <span className="hidden sm:inline">Data</span>
                        Security
                      </span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#D9FF7E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            }

            // E-Commerce Solutions Card
            if (item.name === "E-Commerce Solutions") {
              return (
                <div
                  key={index}
                  className="group relative p-5 px-6 w-full md:w-[320px] h-[380px] md:h-[438px] rounded-[12px] bg-BgGreen text-white text-start flex flex-col "
                >
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold font-Popine">
                      {item.name}
                    </h3>
                    <p className="text-white/60 text-xs">{item.desc}</p>
                  </div>
                  <div className="mt-auto flex items-end justify-center pb-4">
                    <img
                      src={Assets.Images.Home.BuyNow}
                      alt="Buy Now"
                      className="w-[85%] sm:w-[90%] md:w-full max-w-[280px] mx-auto object-contain"
                    />
                  </div>
                </div>
              );
            }

            // Creative Design Card
          })}
        </div>

        <div className="flex gap-4">
          {serviceData.map((item, index) => {
            if (item.name == "Creative Design") {
              return (
                <div
                  key={index}
                  className="group relative w-[80%] p-5 px-6  bg-BgGreen  h-[380px] md:h-[438px] rounded-[12px]  text-white text-start flex flex-col overflow-hidden transition-all duration-500 "
                >
                  <div className="space-y-2 relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold font-Popine text-white">
                      {item.name}
                    </h3>
                    <p className="text-white/60 text-xs">{item.desc}</p>
                  </div>

                  {/* Creative Design Layout */}
                  <div className="flex flex-col justify-between  gap-5 mt-5 items-center">
                    {/* Woman Image - positioned on the left */}
                    <div className="w-[50%]">
                      <img
                        src={Assets.Images.Home.CD}
                        alt="Creative Designer"
                        className="w-full h-full object-contain object-bottom"
                      />
                    </div>

                    {/* Chat Interface - positioned on the right */}
                    <div className=" w-full">
                      <img
                        src={Assets.Images.Home.CreativeChat}
                        alt="Design Chat Interface"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Optional: Add decorative elements */}
                  </div>
                </div>
              );
            }
            if (item.name == "IT managed services provider (MSP)") {
              return (
                <div
                  key={index}
                  className="group relative  p-5 px-6 w-full md:col-span-1 lg:col-span-2 bg-BgGreen  rounded-[12px]  text-white text-start flex flex-col "
                >
                  <div className="space-y-2 relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold font-Popine">
                      {item.name}
                    </h3>
                    <p className="text-white/60 text-xs">{item.desc}</p>
                  </div>

                  {/* IT Services Icon Grid */}
                  <div className="relative flex-1 mt-6 sm:mt-8 flex items-end justify-center">
                    <div className="grid grid-cols-7 gap-3 w-full items-center">
                      {/* Colonne 1 : Normal */}
                      <div className="flex flex-col gap-3 ">
                        <img
                          src={Assets.Icons.Home.Icon1}
                          className="w-full rounded-xl"
                        />
                        <img
                          src={Assets.Icons.Home.Icon2}
                          className="w-full rounded-xl"
                        />
                      </div>

                      {/* Colonne 2 : Décalée vers le bas */}
                      <div className="flex flex-col gap-3  -translate-y-6 md:-translate-y-8">
                        <img
                          src={Assets.Icons.Home.Icon3}
                          className="w-full rounded-xl"
                        />
                        <img
                          src={Assets.Icons.Home.Icon4}
                          className="w-full rounded-xl"
                        />
                      </div>

                      {/* Colonne 3 : Normal */}
                      <div className="flex flex-col gap-3 ">
                        <img
                          src={Assets.Icons.Home.Icon5}
                          className="w-full rounded-2xl"
                        />
                        <img
                          src={Assets.Icons.Home.Icon6}
                          className="w-full rounded-xl"
                        />
                      </div>

                      {/* Colonne 4 : Décalée vers le bas (Le sommet de la vague) */}
                      <div className="flex flex-col gap-3 -translate-y-6 md:-translate-y-8">
                        <img
                          src={Assets.Icons.Home.Icon7}
                          className="w-full rounded-xl"
                        />
                        <img
                          src={Assets.Icons.Home.Icon8}
                          className="w-full rounded-xl"
                        />
                      </div>

                      {/* Colonne 5 : Normal */}
                      <div className="flex flex-col gap-3 ">
                        <img
                          src={Assets.Icons.Home.Icon9}
                          className="w-full rounded-xl"
                        />
                        <img
                          src={Assets.Icons.Home.Icon10}
                          className="w-full rounded-xl"
                        />
                      </div>

                      {/* Colonne 6 : Décalée vers le bas */}
                      <div className="flex flex-col gap-3 -translate-y-6 md:-translate-y-8 ">
                        <img
                          src={Assets.Icons.Home.Icon11}
                          className="w-full rounded-xl"
                        />
                        <img
                          src={Assets.Icons.Home.Icon12}
                          className="w-full rounded-xl"
                        />
                      </div>

                      {/* Colonne 7 : Normal */}
                      <div className="flex flex-col gap-3 ">
                        <img
                          src={Assets.Icons.Home.Icon13}
                          className="w-full rounded-2xl"
                        />
                        <img
                          src={Assets.Icons.Home.Icon14}
                          className="w-full rounded-xl"
                        />
                      </div>
                    </div>
                    {/* Floating particles effect */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-500/10 rounded-full blur-lg"></div>
                  </div>

                  {/* Hover gradient overlay */}
                </div>
              );
            }
          })}
        </div>
      </section>

      <section className="bg-WhiteBg py-10 text-center text-black md:max-w-[80%] mx-auto space-y-8">
        <div className="space-y-3">
          <h6 className="uppercase text-xs">solutions</h6>
          <h1 className="font-Inter md:text-4xl">
            Comprehensive{" "}
            <span className="font-instrumentSerif italic">
              Technology Solutions,
            </span>{" "}
            Built for impact
          </h1>
          <p className="text-black opacity-70 font-Inter pt-3 px-10 ">
            We design and build complete digital solutions that simplify
            complexity and elevate every interaction. Driven by transparency,
            advanced research, and skilled professionals, we work
            collaboratively to deliver products that are intelligent, scalable,
            and impactful.
          </p>
        </div>
        <div className="flex justify-between items-center">
          {TechSolutions.map((item, index) => (
            <Link
              key={index}
              to="#"
              className={`
              font-inter font-medium p-3
              ${item === "Agriculture" ? "border-b-2 border-[#06986F]" : ""}
            `}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  rounded-[12px] shadow-md">
          <div className=" bg-white p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-10 space-y-3">
            <h3 className="text-2xl md:text-3xl font-medium font-Inter text-black leading-tight">
              Agriculture AI App
            </h3>

            <p className="text-black opacity-70  text-sm  leading-relaxed font-Inter text-start">
              The agriculture app is designed to simplify daily farm management
              by bringing essential tools into one easy-to-use platform.
              <br /> From monitoring crop health and tracking irrigation
              schedules to analyzing soil data and weather conditions...
            </p>

            <Link className="inline-flex items-center gap-2 text-gray-900 font-semibold text-sm hover:gap-3 transition-all duration-300 group/button w-fit">
              View Details
              <ChevronRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="relative  md:h-auto m ">
            <img
              src={Assets.Images.Home.Agriculture}
              alt="AI"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-PrimaryGreen py-16  text-center text-white w-full mx-auto space-y-10">
        <div className="space-y-3">
          <h6 className="uppercase text-xs">our work</h6>
          <h1 className="font-Inter md:text-4xl">
            A Curated Selection Of Our{" "}
            <span className="font-instrumentSerif italic">Recent Projects</span>{" "}
            And Case Studies
          </h1>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-10 scrollbar-hide snap-x">
          {RecentProjects.map((project, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 w-[85vw] md:w-[450px] snap-start cursor-pointer transition-all duration-500"
            >
              {/* Inner Container for Border Effect */}
              <div className="rounded-2xl p-4 border border-transparent group-hover:border-white/30 transition-all duration-500">
                {/* Image Wrapper */}
                <div className="rounded-xl overflow-hidden aspect-[4/3] md:aspect-video mb-4">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Project Title */}
                <div className="space-y-3 text-start">
                  <h3 className="text-white text-xl md:text-2xl font-medium leading-tight">
                    {/* Logic to italicize part of the name based on your image */}
                    {project.name.split(project.italicPart)[0]}
                    <span className="font-Instrument_Serif italic font-light">
                      {project.italicPart}
                    </span>
                    {project.name.split(project.italicPart)[1]}
                  </h3>

                  {/* Hidden "View Case Study" Link (appears on hover) */}
                  <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-500">
                    <button className="flex items-center gap-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      View Case Study
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3 px-12">
          <h6 className="uppercase text-xs">our process</h6>
          <h1 className="font-Inter md:text-4xl">
            Turning Complex Challenges Into Reliable Digital Solutions
          </h1>
        </div>
        <div className="mt-10">
          {/*Processes */}
          <div className="relative mx-auto max-w-6xl space-y-20 mt-14">
            {processes.map((process) => (
              <div
                key={process.id}
                className="grid grid-cols-[1fr_auto_1fr] items-center"
              >
                {/* LEFT CARD */}
                {process.side === "left" ? (
                  <div className="relative flex justify-end pr-10">
                    <ProcessCard process={process} align="right" />
                    {/* horizontal line */}
                    <span className="absolute right-0 top-1/2 h-[2px] w-10 bg-emerald-900" />
                  </div>
                ) : (
                  <div />
                )}

                {/* CENTER DOT */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
                    {process.id}
                  </div>
                  <span className="mt-4 rounded-full bg-emerald-700 px-4 py-1 text-xs text-white">
                    {process.duration}
                  </span>
                </div>

                {/* RIGHT CARD */}
                {process.side === "right" ? (
                  <div className="relative flex justify-start pl-10">
                    <ProcessCard process={process} align="left" />
                    {/* horizontal line */}
                    <span className="absolute left-0 top-1/2 h-[2px] w-10 bg-emerald-900" />
                  </div>
                ) : (
                  <div />
                )}
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center mt-5">
            {" "}
            <button className="rounded-full bg-YellowGreen px-14 py-2 text-black font-Inter">
              Let's Connect
            </button>
          </div>
        </div>
        <div className="space-y-3 px-12 mx-auto py-5">
          <h6 className="uppercase text-xs">our templates</h6>
          <h1 className="font-Inter md:text-4xl">
            Ready-Made{" "}
            <span className="font-instrumentSerif italic">Tempaltes</span> Fir
            Instance Success
          </h1>
          <p className="text-sm text-white/70">
            Our library of 500+ ready-to-use templates lets you test ideas,
            launch campaigns, and ship professional assets fast — while your
            team stays focused on strategy and growth instead of pixel-by-pixel
            grunt work. Drag, drop, customize, go live in hours. Built for real
            businesses, not just pretty mockups.
          </p>
        </div>
        <div className="overflow-hidden w-full py-5 space-y-8">
          <div className="ticker-track">
            {/* First row */}
            <img src={Assets.Images.Home.Row1} alt="" />
            {/* Second row  */}
            <img src={Assets.Images.Home.Row1} alt="" />
          </div>
          <div className="ticker-trackR">
            {/* First row */}
            <img src={Assets.Images.Home.Row2} alt="" />
            {/* Second row  */}
            <img src={Assets.Images.Home.Row2} alt="" />
          </div>
          <div className="ticker-track">
            {/* First row */}
            <img src={Assets.Images.Home.Row2} alt="" />
            {/* Second row  */}
            <img src={Assets.Images.Home.Row2} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-YellowBg py-16 px-6 md:pl-16 pr-0   text-PrimaryGreen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content Side */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <p className="uppercase tracking-[0.1em] text-[10px] md:text-xs font-bold text-PrimaryGreen opacity-70">
                  Work With Us
                </p>
                {/* Using border-t to simulate the divider line in the image */}
                <div className="w-full border-t border-1 border-PrimaryGreen pt-8">
                  <h2 className="text-42xl md:text-3xl lg:text-4xl font-bold leading-[1.1]">
                    Exceptional Talent, <br />
                    Ready to{" "}
                    <span className="font-serif italic font-light">
                      Work With You
                    </span>
                  </h2>
                </div>
              </div>

              <p className="text-PrimaryGreen text-base md:text-lg leading-relaxed max-w-xl opacity-90 font-light">
                Collaborate with a trusted network of skilled professionals
                across design, development, strategy, and emerging technologies.
                Our team integrates seamlessly into your workflow, delivering
                high-quality work with clear communication, flexibility, and
                results you can rely on from start to finish.
              </p>

              <div className="pt-10">
                <button className="bg-PrimaryGreen text-white px-10 py-3.5 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Image Side */}
            <div className="order-1 lg:order-2 ">
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

      <section className="bg-white py-12 px-3 md:px-10">
        <div className="max-w-8xl mx-auto">
          <div className="relative group overflow-hidden rounded-[12px] cursor-pointer">
            {/* Main Image Container */}
            <div className="w-full bg-cover">
              <img
                src={Assets.Images.Home.CancerDetection}
                alt="Intelligent Cancer Data Preservation"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end  md:px-10 py-14 space-y-4">
              <h2 className="text-white text-xl md:text-3xl lg:text-5xl font-Inter max-w-2xl leading-relaxed">
                Intelligent Cancer Data <br /> Preservation
              </h2>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <p className="text-white/80 text-sm md:text-md max-w-lg font-Popine ">
                  Leveraging advanced AI algorithms, our platform seamlessly
                  captures, organizes, and preserves vital cancer patient
                  information across multiple touchpoints.
                </p>

                <button className="flex items-center gap-2 text-white border-b border-[#931145] pb-1 hover:border-white transition-all group/btn self-start md:self-auto">
                  <span className="text-sm font-semibold tracking-wider">
                    View Case Study
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
      
      <section className="bg-white   pt-10 px-3 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* Left Side: Hardware Image */}
            <div className="rounded-[12px] overflow-hidden shadow-2xl sticky top-24">
              <img
                src={Assets.Images.Home.Hardware}
                alt="Hardware Systems"
                className="w-full h-full object-cover aspect-square md:aspect-[4/5] lg:aspect-square"
              />
            </div>

            {/* Right Side: Accordion Content */}
            <div className="">
              <p className="uppercase tracking-[0.3em] text-[10px] font-bold text-black mb-6">
                Why Us
              </p>

              <h2 className="text-2xl md:text-3xl  text-PrimaryGreen  mb-5 leading-tight">
                What Sets{" "}
                <span className="font-instrumentSerif  italic font-light">
                  AEH S.D
                </span>{" "}
                Apart
              </h2>

              <div className="divide-y divide-black/10">
                {features.map((feature, index) => (
                  <div key={index} className="py-6">
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? -1 : index)
                      }
                      className="w-full flex justify-between items-center text-left group"
                    >
                      <span
                        className={`text-lg md:text-xl font-bold transition-colors ${
                          openIndex === index
                            ? "text-PrimaryGreen"
                            : "text-black/80 group-hover:text-PrimaryGreen"
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
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openIndex === index
                          ? "max-h-40 opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-black/70  leading-relaxed font-light text-sm md:text-md">
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
