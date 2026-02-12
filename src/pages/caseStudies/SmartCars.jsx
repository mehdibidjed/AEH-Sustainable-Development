import React from "react";
import { Assets } from "../../assets/Asset";
import {
  ShieldCheck,
  Database,
  Lock,
  Server,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Layers,
  Building2,
  Zap,
  AlertTriangle,
  Hospital,
  ArrowLeft,
  Brain,
  Upload,
  Cpu,
  Download,
  Workflow,
  Columns2,
  ArrowLeftRight,
  Rows2,
  Scale,
  TrendingUp,
  ArrowUpDown,
  Layout,
} from "lucide-react";

function SmartCars() {
  const problems = [
    {
      icon: <Database className="w-6 h-6 text-slate-600" />,
      title: "No Real-Time Visibility",
      description:
        "Users can't monitor vehicle status when away, leading to uncertainty about security, battery levels, and system health.",
    },
    {
      icon: <Layers className="w-6 h-6 text-slate-600" />,
      title: "Fragmented Controls",
      description:
        "Critical functions scattered across physical buttons and multiple interfaces create a disjointed user experience.",
    },
    {
      icon: <Zap className="w-6 h-6 text-slate-600" />,
      title: "Poor System Visualization",
      description:
        "Complex vehicle systems lack intuitive representation, making it difficult to understand car status at a glance.",
    },
  ];

  const designPrinciples = [
    {
      icon: <Layout className="text-blue-400 w-5 h-5" />,
      title: "Dark UI with Neon Accents",
      desc: "High-tech automotive aesthetic with cyan highlights",
    },
    {
      icon: <Layers className="text-blue-400 w-5 h-5" />,
      title: "Action-First Controls",
      desc: "Immediate access to essential vehicle functions",
    },
    {
      icon: <Zap className="text-blue-400 w-5 h-5" />,
      title: "Real-Time Feedback",
      desc: "Clear status indicators and system health monitoring",
    },
  ];
  const features = [
    {
      title: "Complete Vehicle Control Center",
      desc: "A four-step cycle that enables continuous learning across institutions while maintaining complete data privacy.",
      image: Assets.Images.CaseStudy.Right1,
      imageSide: "right",
    },
    {
      title: "Interior Comfort Management",
      desc: "Control seat heating and positioning for both driver and passenger zones.",
      image: Assets.Images.CaseStudy.Left1,
      imageSide: "left",
    },
    {
      title: "Vehicle Dashboard & Status",
      desc: "Real-time monitoring of all vehicle systems with intuitive visualizations.",
      image: Assets.Images.CaseStudy.Right2,
      imageSide: "right",
    },
  ];
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-emerald-100">
      {/* HERO SECTION */}
      <section className="relative h-[100vh] flex items-center justify-start px-6 md:px-24   overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          {/* Placeholder for high-tech dashboard image */}
          <img
            src={Assets.Images.CaseStudy.CarHero}
            className=" h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl text-white">
          <nav className="flex items-center space-x-2 text-xs uppercase tracking-widest  mb-8">
            <span>Home</span> <ChevronRight size={12} />
            <span>Case Studies</span> <ChevronRight size={12} />
            <span className="text-white">Federated Learning for E-Health</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold  mb-6 leading-tight">
            Federated Learning for E-Health
          </h1>
          <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
            Enabling privacy-preserving AI collaboration between healthcare
            institutions—training intelligent models without ever sharing
            sensitive patient data.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-24 max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Heading & Context */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 font-Inter py-1 text-[#EF4444] rounded-full bg-[#EF4444]/20  border border-[#EF4444]/20  ">
              <AlertTriangle className="w-4 h-4 text-r" />
              <span className="text-xs  tracking-wider">The Problem</span>
            </div>

            <h2 className="text-4xl font-medium font-Inter  text-[#1D2530] tracking-tight">
              Traditional Vehicle Limitations
            </h2>

            <p className="text-lg text-[#627084] leading-relaxed max-w-xl">
              Limitations Modern drivers expect their vehicles to behave like
              smart devices, but current systems fall short of delivering a
              truly connected experience.
            </p>
          </div>

          {/* Right Column: Problem Cards */}
          <div className="space-y-2">
            {problems.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 px-8 py-4  rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 bg-white group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#13476C]/10 text-[#13476C] flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#1D2530]">
                    {item.title}
                  </h3>
                  <p className="text-[#627084] leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Text */}
          <div className="text-center mb-12 md:mb-20">
            <h6 className="text-emerald-500 uppercase tracking-widest text-xs font-bold mb-3">
              The Solution
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Connected Smart Vehicle Ecosystem
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
              A futuristic, system-driven interface that mirrors your car's
              digital architecture and puts control at your fingertips.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Futuristic Vehicle Interface */}
            <div className="relative group flex justify-center order-2 lg:order-1">
              <div className=" rounded-3xl  w-full max-w-md  flex items-center justify-center relative overflow-hidden shadow-2xl">
                {/* Car Illustration Placeholder */}
                <img src={Assets.Images.CaseStudy.Car1} alt="" />
              </div>
            </div>

            {/* Right Side: Key Design Principles */}
            <div className="space-y-8 sm:pr-14  order-1 lg:order-2">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Key Design Principles
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Our approach combines intuitive interaction patterns with a
                  futuristic visual language that feels both premium and
                  functional.
                </p>
              </div>

              <div className="space-y-4">
                {designPrinciples.map((principle, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300"
                  >
                    <div className="p-3 bg-blue-50 rounded-lg shrink-0">
                      {principle.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm md:text-base">
                        {principle.title}
                      </h4>
                      <p className="text-slate-500 text-xs md:text-sm mt-1">
                        {principle.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h6 className="text-emerald-500 uppercase tracking-widest text-[10px] md:text-xs font-bold mb-3">
              Core Features
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Complete Vehicle Control Center
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
              A four-step cycle that enables continuous learning across
              institutions while maintaining complete data privacy.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-24 md:space-y-32">
            {features.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* Image Column - On mobile, always comes first */}
                <div
                  className={`flex justify-center order-1 ${
                    feature.imageSide === "right" ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative w-full max-w-[550px]">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* Text Column */}
                <div
                  className={`space-y-6 text-center lg:text-left order-2 ${
                    feature.imageSide === "right" ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-slate-900 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* RESULTS SECTION */}
      <section className="py-20 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">
            Outcomes & Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Measurable Results
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#EDECE8] p-12 rounded-3xl text-center border border-emerald-100">
            <div className="flex justify-center items-center p-3 mb-6 ">
              <ShieldCheck
                className="text-white bg-[#013934] px-2 rounded-xl"
                size={52}
              />
            </div>
            <div className="text-5xl font-bold bg-gradient-to-r from-[#13476C]  to-[#2E9E8F] bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="font-bold text-sm mb-4">Unified Interface</p>
            <p className="text-xs text-slate-500">
              All vehicle controls in a single mobile experience
            </p>
          </div>

          <div className="bg-[#EDECE8] p-12 rounded-3xl text-center border border-emerald-100">
            <div className="flex justify-center mb-6 items-center p-3 ">
              <ShieldCheck
                className="text-white bg-[#013934] px-2 rounded-xl"
                size={52}
              />
            </div>
            <div className="text-5xl font-bold bg-gradient-to-r from-[#13476C]  to-[#2E9E8F] bg-clip-text text-transparent mb-2">
              98%
            </div>
            <p className="font-bold text-sm mb-4">User Satisfaction</p>
            <p className="text-xs text-slate-500">
            Rated highly for intuitive design and reliability
            </p>
          </div>

          <div className="bg-[#EDECE8] p-12 rounded-3xl text-center border border-emerald-100">
            <div className="flex justify-center mb-6 items-center p-3 ">
              <ShieldCheck
                className="text-white bg-[#013934] px-2 rounded-xl"
                size={52}
              />
            </div>
            <div className="text-5xl font-bold bg-gradient-to-r from-[#13476C]  to-[#2E9E8F] bg-clip-text text-transparent mb-2">
              80%
            </div>
            <p className="font-bold text-sm mb-4">Reduced Anxiety</p>
            <p className="text-xs text-slate-500">
            Users feel more confident about vehicle status
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default SmartCars;
