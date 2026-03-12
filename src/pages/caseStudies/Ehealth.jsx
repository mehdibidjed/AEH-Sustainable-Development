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
import { useTranslation } from "react-i18next";

const Ehealth = () => {
  const { t } = useTranslation();

  const problems = [
    {
      icon: <Database className="w-6 h-6 text-slate-600" />,
      title: t("case_studies.ehealth.problems.centralization.title"),
      description: t("case_studies.ehealth.problems.centralization.desc"),
    },
    {
      icon: <Layers className="w-6 h-6 text-slate-600" />,
      title: t("case_studies.ehealth.problems.silos.title"),
      description: t("case_studies.ehealth.problems.silos.desc"),
    },
    {
      icon: <Zap className="w-6 h-6 text-slate-600" />,
      title: t("case_studies.ehealth.problems.collaborative.title"),
      description: t("case_studies.ehealth.problems.collaborative.desc"),
    },
  ];

  const nodes = [
    { name: t("case_studies.ehealth.architecture.nodes.hospital_a"), icon: <Hospital className="w-6 h-6" /> },
    { name: t("case_studies.ehealth.architecture.nodes.hospital_b"), icon: <Hospital className="w-6 h-6" /> },
    { name: t("case_studies.ehealth.architecture.nodes.hospital_c"), icon: <Hospital className="w-6 h-6" /> },
    { name: t("case_studies.ehealth.architecture.nodes.hospital_d"), icon: <Hospital className="w-6 h-6" /> },
    { name: t("case_studies.ehealth.architecture.nodes.hospital_e"), icon: <Hospital className="w-6 h-6" /> },
    { name: t("case_studies.ehealth.architecture.nodes.health_app"), icon: <Hospital className="w-6 h-6" /> },
  ];

  const stepsList = [
    { id: 1, text: t("case_studies.ehealth.architecture.steps.distribute") },
    { id: 2, text: t("case_studies.ehealth.architecture.steps.training") },
    { id: 3, text: t("case_studies.ehealth.architecture.steps.updates") },
    { id: 4, text: t("case_studies.ehealth.architecture.steps.aggregate") },
  ];

  const processSteps = [
    {
      icon: <Download className="w-6 h-6 text-white" />,
      title: t("case_studies.ehealth.process.distribution.title"),
      description: t("case_studies.ehealth.process.distribution.desc"),
    },
    {
      icon: <Cpu className="w-6 h-6 text-white" />,
      title: t("case_studies.ehealth.process.training.title"),
      description: t("case_studies.ehealth.process.training.desc"),
    },
    {
      icon: <Upload className="w-6 h-6 text-white" />,
      title: t("case_studies.ehealth.process.transmission.title"),
      description: t("case_studies.ehealth.process.transmission.desc"),
    },
    {
      icon: <Workflow className="w-6 h-6 text-white" />,
      title: t("case_studies.ehealth.process.improvement.title"),
      description: t("case_studies.ehealth.process.improvement.desc"),
    },
  ];

  const approachHighlights = [
    t("case_studies.ehealth.approach.vfl.highlights.contribution"),
    t("case_studies.ehealth.approach.vfl.highlights.encryption"),
    t("case_studies.ehealth.approach.vfl.highlights.sovereignty"),
    t("case_studies.ehealth.approach.vfl.highlights.learning"),
  ];

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-emerald-100">
      {/* HERO SECTION */}
      <section className="relative h-[100vh] flex items-center justify-start px-6 md:px-24 py-10 overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <img src={Assets.Images.CaseStudy.HealthHero} className="object-cover h-full w-full" alt="Hero" />
        </div>
        <div className="relative z-10 max-w-3xl text-white">
          <nav className="flex items-center space-x-2 text-xs uppercase tracking-widest mb-8">
            <span>{t("case_studies.common.breadcrumbs.home")}</span> <ChevronRight size={12} />
            <span>{t("case_studies.common.breadcrumbs.case_studies")}</span> <ChevronRight size={12} />
            <span className="text-white">{t("case_studies.ehealth.title")}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t("case_studies.ehealth.title")}
          </h1>
          <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
            {t("case_studies.ehealth.subtitle")}
          </p>
        </div>
      </section>

      {/* CONTEXT SECTION */}
      <section className="py-20 px-6 md:px-24 max-w-7xl mx-auto ">
        <div className="text-center mb-16 space-y-5">
          <span className="text-emerald-600 font-bold uppercase tracking-tighter text-xs">
            {t("case_studies.common.sections.context")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            {t("case_studies.ehealth.context.title")}
          </h2>
          <p className="text-black/70 font-Inter ">
            {t("case_studies.ehealth.context.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Building2 className="text-white" />,
              title: t("case_studies.ehealth.context.collaboration.title"),
              desc: t("case_studies.ehealth.context.collaboration.desc"),
            },
            {
              icon: <Database className="text-white" />,
              title: t("case_studies.ehealth.context.data.title"),
              desc: t("case_studies.ehealth.context.data.desc"),
            },
            {
              icon: <Lock className="text-white" />,
              title: t("case_studies.ehealth.context.regulatory.title"),
              desc: t("case_studies.ehealth.context.regulatory.desc"),
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

      {/* PROBLEM SECTION */}
      <section className="py-20 px-6 md:px-24 max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 font-Inter py-1 text-[#EF4444] rounded-full bg-[#EF4444]/20 border border-[#EF4444]/20">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-xs tracking-wider">{t("case_studies.common.sections.problem")}</span>
            </div>

            <h2 className="text-4xl font-medium font-Inter text-[#1D2530] tracking-tight">
              {t("case_studies.ehealth.problem.title")}
            </h2>

            <p className="text-lg text-[#627084] leading-relaxed max-w-xl">
              {t("case_studies.ehealth.problem.desc")}
            </p>

            <div className="bg-[#172A45]/5 border border-[#172A45]/10 rounded-2xl p-8 italic text-[#1D2530] text-sm leading-relaxed max-w-lg">
              {t("case_studies.ehealth.problem.quote")}
            </div>
          </div>

          <div className="space-y-2">
            {problems.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 px-8 py-4 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 bg-white group"
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

      {/* ARCHITECTURE SECTION */}
      <section className="bg-[#F8F7F9] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <header className="mb-16">
            <p className="text-[#2E9E8F] uppercase tracking-widest text-xs font-bold mb-3">
              {t("case_studies.common.sections.architecture")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D2530] mb-4">
              {t("case_studies.ehealth.architecture.title")}
            </h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              {t("case_studies.ehealth.architecture.subtitle")}
            </p>
          </header>

          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="hidden md:flex flex-col gap-6">
                {nodes.slice(0, 3).map((node, i) => (
                  <NodeCard key={i} node={node} t={t} />
                ))}
              </div>

              <div className="flex flex-col items-center z-10">
                <div className="flex md:hidden justify-center gap-2 sm:gap-4 mb-8">
                  {nodes.slice(0, 3).map((node, i) => (
                    <NodeCard key={i} node={node} isSmall t={t} />
                  ))}
                </div>

                <div className="relative group">
                  <div className="w-32 h-32 md:w-36 md:h-36 bg-[#013934] text-[#F8FaFC] rounded-2xl flex flex-col items-center justify-center group-hover:scale-105 px-5">
                    <Server className="w-10 h-10 mb-2" />
                    <span className="text-[14px] font-bold font-Inter uppercase tracking-tighter text-center px-4">
                      {t("case_studies.ehealth.architecture.server")}
                    </span>
                  </div>
                  <div className="absolute -bottom-10 left-1/2 font-bold font-Inter -translate-x-1/2 bg-[#172A45] text-white text-[10px] py-2 px-4 rounded-full flex items-center gap-2 border border-white/10 whitespace-nowrap">
                    <Brain className="w-3 h-3 text-white" />
                    {t("case_studies.ehealth.architecture.global_model")}
                  </div>
                </div>

                <div className="flex md:hidden justify-center gap-2 sm:gap-4 mt-12">
                  {nodes.slice(3).map((node, i) => (
                    <NodeCard key={i} node={node} isSmall t={t} />
                  ))}
                </div>
              </div>

              <div className="hidden md:flex flex-col gap-6">
                {nodes.slice(3).map((node, i) => (
                  <NodeCard key={i} node={node} t={t} />
                ))}
              </div>
            </div>

            <div className="hidden md:block absolute top-1/2 left-[35%] -translate-y-1/2">
              <div className="flex flex-col gap-4">
                <div className="flex justify-center items-center gap-3">
                  <span className="bg-[#13476C]/10 text-[#13476C] px-3 py-2 text-sm rounded-full">1</span>
                  <ArrowRight className="w-8 h-8" />
                </div>
                <div className="flex justify-start items-center gap-3">
                  <ArrowLeft className="w-8 h-8" />
                  <span className="bg-[#13476C]/10 text-[#13476C] px-3 py-2 text-sm rounded-full">3</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 right-[35%] -translate-y-1/2">
              <div className="flex flex-col gap-4">
                <div className="flex justify-center items-center gap-3">
                  <span className="bg-[#13476C]/10 text-[#13476C] px-3 py-2 text-sm rounded-full">2</span>
                  <ArrowRight className="w-8 h-8" />
                </div>
                <div className="flex justify-start items-center gap-3">
                  <ArrowLeft className="w-8 h-8" />
                  <span className="bg-[#13476C]/10 text-[#13476C] px-3 py-2 text-sm rounded-full">4</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stepsList.map((step) => (
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
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#10B981] uppercase tracking-[0.2em] text-xs font-bold mb-4">
              {t("case_studies.common.sections.process")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t("case_studies.ehealth.process.title")}
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed">
              {t("case_studies.ehealth.process.subtitle")}
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-[#13476C] via-[#2E9E8F] to-[#172A45] -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col h-full">
                  <div className="bg-[#F3F2EE] rounded-3xl p-8 flex flex-col items-start space-y-6 h-full border border-transparent hover:border-slate-200 transition-all hover:shadow-xl group">
                    <div className="w-14 h-14 bg-[#013934] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold font-Inter text-[#1D2530] leading-tight">
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

          <div className="mt-16 flex justify-center">
            <div className="bg-[#F0F2F4] border border-[#E0E0EB] rounded-full px-6 py-3 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#2E9E8F] animate-pulse" />
              <p className="text-black/70 text-sm font-medium">
                {t("case_studies.ehealth.process.cycle_msg")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="bg-[#F0F2F4]/30 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <p className="text-[#2E9E8F] uppercase tracking-widest text-xs font-bold mb-3">
                  {t("case_studies.ehealth.approach.title")}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1D2530] mb-6">
                  {t("case_studies.ehealth.approach.vfl.title")}
                </h2>
                <p className="text-black/70 text-lg leading-relaxed">
                  {t("case_studies.ehealth.approach.vfl.desc")}
                </p>
              </div>

              <ul className="space-y-4 text-[#1D2530]">
                {approachHighlights.map((text, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-[#2E9E8F] mt-1 flex-shrink-0" />
                    <span className="text-slate-600 leading-snug group-hover:text-slate-900 transition-colors">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-[#2E9E8F]/5 border border-[#2E9E8F]/30 rounded-3xl p-8 transition-all hover:shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#051610] rounded-xl flex items-center justify-center">
                    <Columns2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{t("case_studies.ehealth.approach.vfl.label")}</h3>
                    <p className="text-[#10B981] text-xs font-bold uppercase">
                      {t("case_studies.ehealth.approach.vfl.status")}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-8">
                  {t("case_studies.ehealth.approach.vfl.example")}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-8">
                  <DataBlock title={t("case_studies.ehealth.approach.vfl.diagram.patient_x")} rows={[t("case_studies.ehealth.approach.vfl.diagram.labs"), t("case_studies.ehealth.approach.vfl.diagram.vitals")]} />
                  <ArrowLeftRight className="w-5 h-5 hidden sm:block text-[#2E9E8F]" />
                  <ArrowUpDown className="w-5 h-5 text-[#2E9E8F] sm:hidden" />
                  <DataBlock title={t("case_studies.ehealth.approach.vfl.diagram.patient_x")} rows={[t("case_studies.ehealth.approach.vfl.diagram.imaging"), t("case_studies.ehealth.approach.vfl.diagram.notes")]} />
                </div>
              </div>

              <div className="bg-white border border-slate-100 rounded-3xl p-8 transition-all hover:border-slate-20 opacity-60">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#051610] rounded-xl flex items-center justify-center">
                    <Rows2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{t("case_studies.ehealth.approach.hfl.label")}</h3>
                    <p className="text-slate-400 text-xs font-bold uppercase">
                      {t("case_studies.ehealth.approach.hfl.status")}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mb-8">
                  {t("case_studies.ehealth.approach.hfl.example")}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-8 opacity-50">
                  <DataBlock title={t("case_studies.ehealth.approach.hfl.diagram.patients_am")} rows={[t("case_studies.ehealth.approach.hfl.diagram.all_features")]} />
                  <ArrowLeftRight className="w-5 h-5 hidden sm:block text-slate-300" />
                  <ArrowUpDown className="w-5 h-5 text-[#2E9E8F] sm:hidden" />
                  <DataBlock title={t("case_studies.ehealth.approach.hfl.diagram.patients_nz")} rows={[t("case_studies.ehealth.approach.hfl.diagram.all_features")]} />
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
            {t("case_studies.common.sections.results")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            {t("case_studies.ehealth.results.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#EDECE8] p-12 rounded-3xl text-center border border-emerald-100">
            <div className="flex justify-center items-center p-3 mb-6 ">
              <TrendingUp className="text-white bg-[#013934] px-2 rounded-xl" size={52} />
            </div>
            <div className="text-5xl font-bold bg-gradient-to-r from-[#13476C] to-[#2E9E8F] bg-clip-text text-transparent mb-2">
              {t("case_studies.ehealth.results.accuracy.value")}
            </div>
            <p className="font-bold text-sm mb-4">{t("case_studies.ehealth.results.accuracy.label")}</p>
            <p className="text-xs text-slate-500">
              {t("case_studies.ehealth.results.accuracy.desc")}
            </p>
          </div>

          <div className="bg-[#EDECE8] p-12 rounded-3xl text-center border border-emerald-100">
            <div className="flex justify-center mb-6 items-center p-3 ">
              <ShieldCheck className="text-white bg-[#013934] px-2 rounded-xl" size={52} />
            </div>
            <div className="text-5xl font-bold bg-gradient-to-r from-[#13476C] to-[#2E9E8F] bg-clip-text text-transparent mb-2">
              {t("case_studies.ehealth.results.privacy.value")}
            </div>
            <p className="font-bold text-sm mb-4">{t("case_studies.ehealth.results.privacy.label")}</p>
            <p className="text-xs text-slate-500">
              {t("case_studies.ehealth.results.privacy.desc")}
            </p>
          </div>

          <div className="bg-[#EDECE8] p-12 rounded-3xl text-center border border-emerald-100">
            <div className="flex justify-center mb-6 items-center p-3 ">
              <Scale className="text-white bg-[#013934] px-2 rounded-xl" size={52} />
            </div>
            <div className="text-5xl font-bold bg-gradient-to-r from-[#13476C] to-[#2E9E8F] bg-clip-text text-transparent mb-2">
              {t("case_studies.ehealth.results.collaboration.value")}
            </div>
            <p className="font-bold text-sm mb-4">{t("case_studies.ehealth.results.collaboration.label")}</p>
            <p className="text-xs text-slate-500">
              {t("case_studies.ehealth.results.collaboration.desc")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const NodeCard = ({ node, isSmall = false, t }) => (
  <div
    className={`border-[#E0E6E8] bg-[#F0F2F4] rounded-2xl border flex flex-col items-center justify-center transition-all hover:bg-white hover:shadow-md ${isSmall ? "p-4 w-24" : "p-6 w-full"
      }`}
  >
    <div className="text-[#13476C] bg-[#13476C]/10 px-3 py-3 rounded-[12px] mb-2">
      {node.icon}
    </div>
    <p className={`font-bold text-[#1D2530] ${isSmall ? "text-[10px]" : "text-md"}`}>
      {node.name}
    </p>
    <div className="flex text-[#2E9E8F] items-center gap-1 mt-1 bg-[#2E9E8F]/10 rounded-full px-2 py-1 text-xs">
      <Brain className="w-3 h-3 " />
      {t("case_studies.ehealth.architecture.global_model")}
    </div>
  </div>
);

const DataBlock = ({ title, rows }) => (
  <div className="flex flex-col items-center gap-2 bg-[#2E9E8F]/10 px-4 py-2 rounded-[12px]">
    <div className={`px-4 py-1.5 text-[14px] font-bold text-[#2E9E8F] `}>
      {title}
    </div>
    <div className="space-y-1 w-28 text-[#1D2530]">
      {rows.map((row, i) => (
        <div
          key={i}
          className={`h-6 flex items-center justify-center rounded-lg text-[12px] font-medium bg-[#2E9E8F]/20 `}
        >
          {row}
        </div>
      ))}
    </div>
  </div>
);

export default Ehealth;
