import React from "react";
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
} from "lucide-react";
import { Assets } from "../../assets/Asset";

const Ehealth = () => {
  const problems = [
    {
      icon: <Database className="w-6 h-6 text-slate-600" />,
      title: "Data Cannot Be Centralized",
      description:
        "Healthcare regulations and patient consent requirements prohibit moving sensitive data to external servers for training.",
    },
    {
      icon: <Layers className="w-6 h-6 text-slate-600" />,
      title: "Data Exists in Silos",
      description:
        "Each hospital, clinic, and healthcare app maintains its own isolated database with no mechanism for secure data sharing.",
    },
    {
      icon: <Zap className="w-6 h-6 text-slate-600" />,
      title: "Need for Collaborative Intelligence",
      description:
        "Despite these barriers, there's an urgent need to leverage collective insights across institutions to improve patient outcomes.",
    },
  ];
  const nodes = [
    { name: "Hospital A", icon: <Hospital className="w-6 h-6" /> },
    { name: "Hospital B", icon: <Hospital className="w-6 h-6" /> },
    { name: "Hospital C", icon: <Hospital className="w-6 h-6" /> },
    { name: "Hospital D", icon: <Hospital className="w-6 h-6" /> },
    { name: "Hospital E", icon: <Hospital className="w-6 h-6" /> },
    { name: "Health App", icon: <Hospital className="w-6 h-6" /> },
  ];

  const steps = [
    { id: 1, text: "Distribute Global Model" },
    { id: 2, text: "Local Training" },
    { id: 3, text: "Send Model Updates" },
    { id: 4, text: "Aggregate & Improve" },
  ];
  const gaps = [
    {
      icon: <Download className="w-6 h-6 text-white" />,
      title: "Global Model Distribution",
      description:
        "The central aggregation server sends the current global model to all participating healthcare institutions. Each hospital receives the same starting point.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-white" />,
      title: "Local Training",
      description:
        "Each hospital trains the model on its own private patient data. The data never leaves the institution—only the learning happens locally.",
    },
    {
      icon: <Upload className="w-6 h-6 text-white" />,
      title: "Secure Model Update Transmission",
      description:
        "Hospitals send only their model updates (gradients or weights) back to the server. No raw patient data is transmitted—just the learned patterns.",
    },
    {
      icon: <Workflow className="w-6 h-6 text-white" />,
      title: "Aggregation & Model Improvement",
      description:
        "The server combines all updates using secure aggregation techniques, creating an improved global model that benefits from everyone's data without exposing any of it.",
    },
  ];
  const highlights = [
    "Institutions contribute different features (lab results, imaging, prescriptions)",
    "Patient identifiers are encrypted and matched securely",
    "Each institution maintains sovereignty over their data domain",
    "Model learns from complementary data sources",
  ];
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-emerald-100">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-start px-6 md:px-24  overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          {/* Placeholder for high-tech dashboard image */}
          <img src={Assets.Images.CaseStudy.HealthHero} />
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

      {/* CONTEXT SECTION */}
      <section className="py-20 px-6 md:px-24 max-w-7xl mx-auto ">
        <div className="text-center mb-16 space-y-5">
          <span className="text-emerald-600 font-bold uppercase tracking-tighter text-xs">
            The Context
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Collaborative Healthcare AI
          </h2>
          <p className="text-black/70 font-Inter ">
            In modern healthcare, multiple institutions hold valuable patient
            data that could revolutionize AI-driven diagnostics and treatment.
            However, the path to collaboration is blocked by fundamental privacy
            and regulatory challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Building2 className="text-white" />,
              title: "Multi-institution Collaboration",
              desc: "Hospitals, clinics, and health apps work together to build smarter AI systems.",
            },
            {
              icon: <Database className="text-white" />,
              title: "Sensitive Patient Data",
              desc: "Medical records and diagnostic imaging require the highest level of data protection.",
            },
            {
              icon: <Lock className="text-white" />,
              title: "Regulatory Constraints",
              desc: "HIPAA, GDPR, and local healthcare regulations govern how data is shared.",
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
      <section className="py-20 px-6 md:px-24 max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Heading & Context */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 font-Inter py-1 text-[#EF4444] rounded-full bg-[#EF4444]/20  border border-[#EF4444]/20  ">
              <AlertTriangle className="w-4 h-4 text-r" />
              <span className="text-xs  tracking-wider">The Problem</span>
            </div>

            <h2 className="text-4xl font-medium font-Inter  text-[#1D2530] tracking-tight">
              Healthcare Data Is Trapped
            </h2>

            <p className="text-lg text-[#627084] leading-relaxed max-w-xl">
              Traditional machine learning requires aggregating all training
              data in one location. In healthcare, this approach is
              fundamentally incompatible with privacy requirements and
              regulatory frameworks.
            </p>

            <div className="bg-[#172A45]/5 border border-[#172A45]/10 rounded-2xl p-8   italic text-[#1D2530] text-sm leading-relaxed max-w-lg">
              "How do we train AI models that benefit from millions of patient
              records across hundreds of institutions—without ever seeing a
              single patient's data?"
            </div>
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
      {/* ARCHITECTURE SECTION - IMAGE PLACEHOLDER */}
      <section className="bg-[#F8F7F9] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <header className="mb-16">
            <p className="text-[#2E9E8F] uppercase tracking-widest text-xs font-bold mb-3">
              Architecture
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D2530] mb-4">
              Federated Learning System Design
            </h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              A decentralized architecture where intelligence travels to data,
              not data to intelligence.
            </p>
          </header>

          {/* Main Diagram Area */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Left Nodes (Desktop) */}
              <div className="hidden md:flex flex-col gap-6">
                {nodes.slice(0, 3).map((node, i) => (
                  <NodeCard key={i} node={node} />
                ))}
              </div>

              {/* Central Aggregation Server */}
              <div className="flex flex-col items-center z-10">
                {/* Mobile Only: Show some nodes above server */}
                <div className="flex md:hidden  justify-center gap-2 sm:gap-4  mb-8">
                  {nodes.slice(0, 3).map((node, i) => (
                    <NodeCard key={i} node={node} isSmall />
                  ))}
                </div>

                <div className="relative group">
                  <div className="w-32 h-32 md:w-36 md:h-36 bg-[#013934] text-[#F8FaFC] rounded-2xl flex flex-col items-center justify-center   group-hover:scale-105 px-5">
                    <Server className="w-10 h-10 mb-2" />
                    <span className="text-[14px] font-bold font-Inter uppercase tracking-tighter text-center px-4">
                      Aggregation Server
                    </span>
                  </div>
                  {/* Global Model Badge */}
                  <div className="absolute -bottom-10 left-1/2 font-bold font-Inter -translate-x-1/2 bg-[#172A45] text-white text-[10px] py-2 px-4 rounded-full flex items-center gap-2 border border-white/10 whitespace-nowrap">
                    <Brain className="w-3 h-3 text-white" />
                    Global Model
                  </div>
                </div>

                {/* Mobile Only: Show remaining nodes below server */}
                <div className="flex md:hidden justify-center gap-2 sm:gap-4 mt-12">
                  {nodes.slice(3).map((node, i) => (
                    <NodeCard key={i} node={node} isSmall />
                  ))}
                </div>
              </div>

              {/* Right Nodes (Desktop) */}
              <div className="hidden md:flex flex-col gap-6">
                {nodes.slice(3).map((node, i) => (
                  <NodeCard key={i} node={node} />
                ))}
              </div>
            </div>

            {/* Decorative Arrows (Desktop only) */}
            <div className="hidden md:block absolute top-1/2 left-[35%] -translate-y-1/2">
              <div className="flex flex-col  gap-4">
                <div className="flex justify-center items-center gap-3">
                  <span className="bg-[#13476C]/10 text-[#13476C]  px-3 py-2 text-sm rounded-full">
                    1
                  </span>
                  <ArrowRight className="w-8 h-8" />
                </div>
                <div className="flex justify-start  items-center gap-3">
                  <ArrowLeft className="w-8 h-8" />
                  <span className="bg-[#13476C]/10 text-[#13476C]  px-3 py-2 text-sm rounded-full">
                    3
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 right-[35%] -translate-y-1/2  ">
              <div className="flex flex-col gap-4">
                <div className="flex justify-center items-center gap-3">
                  <span className="bg-[#13476C]/10 text-[#13476C]  px-3 py-2 text-sm rounded-full">
                    2
                  </span>
                  <ArrowRight className="w-8 h-8" />
                </div>
                <div className="flex justify-start  items-center gap-3">
                  <ArrowLeft className="w-8 h-8" />
                  <span className="bg-[#13476C]/10 text-[#13476C]  px-3 py-2 text-sm rounded-full">
                    4
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex items-center gap-3 bg-[#F0F2F4] p-4 rounded-xl border border-slate-100"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-[#2E9E8F] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.id}
                  </span>
                  <span className="text-xs font-semibold text-[#1D2530] text-left leading-tight">
                    {step.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Steps Footer */}
        </div>
      </section>
      <section className="bg-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-[#10B981] uppercase tracking-[0.2em] text-xs font-bold mb-4">
              The Process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How It Works
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed">
              A four-step cycle that enables continuous learning across
              institutions while maintaining complete data privacy.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-[#13476C] via-[#2E9E8F] to-[#172A45] -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {gaps.map((step, index) => (
                <div key={index} className="flex flex-col h-full">
                  <div className="bg-[#F3F2EE] rounded-3xl p-8 flex flex-col items-start space-y-6 h-full border border-transparent hover:border-slate-200 transition-all hover:shadow-xl group">
                    {/* Icon Box */}
                    <div className="w-14 h-14 bg-[#013934] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold font-Inter  text-[#1D2530] leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-[#627084] text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Continuous Loop Badge */}
          <div className="mt-16 flex justify-center">
            <div className="bg[#F0F2F4] border border-[#E0E0EB] rounded-full px-6 py-3 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#2E9E8F] animate-pulse" />
              <p className="text-black/70 text-sm font-medium">
                This cycle repeats continuously, improving the model with each
                iteration
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F0F2F4]/30 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Text & Features */}
            <div className="space-y-8">
              <div>
                <p className="text-[#2E9E8F] uppercase tracking-widest text-xs font-bold mb-3">
                  Technical Approach
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1D2530] mb-6">
                  Vertical Federated Learning
                </h2>
                <p className="text-black/70 text-lg leading-relaxed">
                  Our implementation uses Vertical Federated Learning (VFL),
                  specifically designed for healthcare scenarios where different
                  institutions hold different types of data about the same
                  patients.
                </p>
              </div>

              <ul className="space-y-4 text-[#1D2530]">
                {highlights.map((text, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-[#2E9E8F  ] mt-1 flex-shrink-0" />
                    <span className="text-slate-600 leading-snug group-hover:text-slate-900 transition-colors">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Comparison Cards */}
            <div className="space-y-6">
              {/* Vertical FL Card (Highlighted) */}
              <div className="bg-[#2E9E8F]/5 border border-[#2E9E8F]/30 rounded-3xl p-8 transition-all hover:shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#051610] rounded-xl flex items-center justify-center">
                    <Columns2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Vertical FL</h3>
                    <p className="text-[#10B981] text-xs font-bold uppercase">
                      Used in this project
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-8">
                  Different features for the same patients. Example: Hospital A
                  has lab data, Hospital B has imaging, both for Patient X.
                </p>

                {/* Diagram Placeholder */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-8">
                  <DataBlock title="Patient X" rows={["Labs", "Vitals"]} />
                  <ArrowLeftRight className="w-5 h-5  hidden sm:block text-[#2E9E8F]" />
                  <ArrowUpDown className="w-5 h-5 text-[#2E9E8F] sm:hidden" />
                  <DataBlock title="Patient X" rows={["Imaging", "Notes"]} />
                </div>
              </div>

              {/* Horizontal FL Card */}
              <div className="bg-white border border-slate-100 rounded-3xl p-8 transition-all hover:border-slate-20 opacity-60">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#051610] rounded-xl flex items-center justify-center">
                    <Rows2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Horizontal FL</h3>
                    <p className="text-slate-400 text-xs font-bold uppercase">
                      Alternative approach
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-500 mb-8">
                  Same features for different patients. Example: All hospitals
                  have the same data types but for different patient
                  populations.
                </p>

                <div className="flex flex-col sm:flex-row  items-center justify-between gap-4 md:gap-8 opacity-50">
                  <DataBlock title="Patients A-M" rows={["All Features"]} />
                  <ArrowLeftRight className="w-5 h-5 hidden sm:block text-slate-300" />
                  <ArrowUpDown className="w-5 h-5 text-[#2E9E8F] sm:hidden" />
                  <DataBlock title="Patients N-Z" rows={["All Features"]} />
                </div>
              </div>
            </div>
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
              <TrendingUp
                className="text-white bg-[#013934] px-2 rounded-xl"
                size={52}
              />
            </div>
            <div className="text-5xl font-bold bg-gradient-to-r from-[#13476C]  to-[#2E9E8F] bg-clip-text text-transparent mb-2">
              40%
            </div>
            <p className="font-bold text-sm mb-4">Improved AI Accuracy</p>
            <p className="text-xs text-slate-500">
              Models trained on federated data outperformed single-institution
              models significantly.
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
              Zero
            </div>
            <p className="font-bold text-sm mb-4">Patient Data Exposure</p>
            <p className="text-xs text-slate-500">
              Full privacy maintained through entire training process; data
              never left hospital premises.
            </p>
          </div>

          <div className="bg-[#EDECE8] p-12 rounded-3xl text-center border border-emerald-100">
            <div className="flex justify-center mb-6 items-center p-3 ">
              <Scale
                className="text-white bg-[#013934] px-2 rounded-xl"
                size={52}
              />
            </div>
            <div className="text-5xl font-bold bg-gradient-to-r from-[#13476C]  to-[#2E9E8F] bg-clip-text text-transparent mb-2">
              6+
            </div>
            <p className="font-bold text-sm mb-4">Institutions Collaborating</p>
            <p className="text-xs text-slate-500">
              Scalable architecture supporting hospitals and clinics across
              different regions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
const NodeCard = ({ node, isSmall = false }) => (
  <div
    className={`border-[#E0E6E8] bg-[#F0F2F4]  rounded-2xl border  flex flex-col items-center justify-center transition-all hover:bg-white hover:shadow-md ${
      isSmall ? "p-4 w-24" : "p-6 w-full"
    }`}
  >
    <div className="text-[#13476C] bg-[#13476C]/10 px-3 py-3 rounded-[12px]  mb-2">
      {node.icon}
    </div>
    <p
      className={`font-bold text-[#1D2530]  ${
        isSmall ? "text-[10px]" : "text-md"
      }`}
    >
      {node.name}
    </p>
    <div className="flex text-[#2E9E8F] items-center gap-1 mt-1 bg-[#2E9E8F]/10  rounded-full px-2 py-1 text-xs">
      <Brain className="w-3 h-3 " />
      Global Model
    </div>
  </div>
);
const DataBlock = ({ title, rows }) => (
  <div className="flex flex-col items-center gap-2 bg-[#2E9E8F]/10 px-4 py-2 rounded-[12px]">
    <div className={`px-4 py-1.5 text-[14px] font-bold text-[#2E9E8F] `}>
      {title}
    </div>
    <div className="space-y-1 w-28  text-[#1D2530]">
      {rows.map((row, i) => (
        <div
          key={i}
          className={`h-6 flex items-center  justify-center rounded-lg text-[12px] font-medium bg-[#2E9E8F]/20 `}
        >
          {row}
        </div>
      ))}
    </div>
  </div>
);
export default Ehealth;
