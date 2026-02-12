import React from "react";
import { Assets } from "../../assets/Asset";
import {
  ShieldCheck,
  Database,
  ChevronRight,
  Layers,
  Zap,
  AlertTriangle,
  Layout,
  Download,
  Cpu,
  Blocks,
} from "lucide-react";
function Security() {
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
            src={Assets.Images.CaseStudy.Security}
            className=" h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl text-white">
          <nav className="flex items-center space-x-2 text-xs uppercase tracking-widest  mb-8">
            <span>Home</span> <ChevronRight size={12} />
            <span>Case Studies</span> <ChevronRight size={12} />
            <span className="text-white">Smart Retail Security With AI </span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold  mb-6 leading-tight">
            Smart Retail Security With AI
          </h1>
          <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
            AIVILON transforms surveillance cameras into intelligent security
            agents that detect, analyze, and respond to dangerous behaviors in
            real time.
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
      <section className="py-20 px-6 md:px-24 max-w-7xl mx-auto ">
        <div className="text-center mb-16 space-y-5">
          <span className="text-emerald-600 font-bold uppercase tracking-tighter text-xs">
            Core nCapabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Intelligent Security at City Scale
          </h2>
          <p className="text-black/70 font-Inter ">
            A four-step cycle that enables continuous learning across
            institutions while maintaining complete data privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: <Download className="text-white" />,
              title: "AI Behavior Detection",
              desc: "Detect physical aggression, panic movement, suspicious loitering, and crowd anomalies with confidence scoring.",
            },
            {
              icon: <Cpu className="text-white" />,
              title: "Real-Time Video Intelligence",
              desc: "Continuous analysis of live camera feeds with visual overlays, bounding boxes, and timestamped event tracking.",
            },
            {
              icon: <Download className="text-white" />,
              title: "Regulatory Constraints",
              desc: "HIPAA, GDPR, and local healthcare regulations govern how data is shared.",
            },
            {
              icon: <Blocks className="text-white" />,
              title: "Alert & Decision Support",
              desc: "Real-time alerts prioritized by risk level with instant context review and behavioral scoring.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8F9F5] p-8 rounded-2xl border border-emerald-100/50 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#013934] rounded-xl flex items-center justify-center shadow-sm mb-6">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Security;
