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
import { useTranslation } from "react-i18next";

function Security() {
  const { t } = useTranslation();

  const problems = [
    {
      icon: <Database className="w-6 h-6 text-slate-600" />,
      title: t("case_studies.security.problems.visibility.title"),
      description: t("case_studies.security.problems.visibility.desc"),
    },
    {
      icon: <Layers className="w-6 h-6 text-slate-600" />,
      title: t("case_studies.security.problems.fragmentation.title"),
      description: t("case_studies.security.problems.fragmentation.desc"),
    },
    {
      icon: <Zap className="w-6 h-6 text-slate-600" />,
      title: t("case_studies.security.problems.visualization.title"),
      description: t("case_studies.security.problems.visualization.desc"),
    },
  ];

  const designPrinciples = [
    {
      icon: <Layout className="text-blue-400 w-5 h-5" />,
      title: t("case_studies.security.design_principles.ui.title"),
      desc: t("case_studies.security.design_principles.ui.desc"),
    },
    {
      icon: <Layers className="text-blue-400 w-5 h-5" />,
      title: t("case_studies.security.design_principles.controls.title"),
      desc: t("case_studies.security.design_principles.controls.desc"),
    },
    {
      icon: <Zap className="text-blue-400 w-5 h-5" />,
      title: t("case_studies.security.design_principles.feedback.title"),
      desc: t("case_studies.security.design_principles.feedback.desc"),
    },
  ];

  const features = [
    {
      title: t("case_studies.security.features.control_center.title"),
      desc: t("case_studies.security.features.control_center.desc"),
      image: Assets.Images.CaseStudy.Right1,
      imageSide: "right",
    },
    {
      title: t("case_studies.security.features.comfort.title"),
      desc: t("case_studies.security.features.comfort.desc"),
      image: Assets.Images.CaseStudy.Left1,
      imageSide: "left",
    },
    {
      title: t("case_studies.security.features.status.title"),
      desc: t("case_studies.security.features.status.desc"),
      image: Assets.Images.CaseStudy.Right2,
      imageSide: "right",
    },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-emerald-100">
      {/* HERO SECTION */}
      <section className="relative h-[100vh] flex items-center justify-start px-6 md:px-24 overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <img
            src={Assets.Images.CaseStudy.Security}
            className="h-full w-full object-cover"
            alt="Hero"
          />
        </div>
        <div className="relative z-10 max-w-3xl text-white">
          <nav className="flex items-center space-x-2 text-xs uppercase tracking-widest mb-8">
            <span>{t("case_studies.common.breadcrumbs.home")}</span> <ChevronRight size={12} />
            <span>{t("case_studies.common.breadcrumbs.case_studies")}</span> <ChevronRight size={12} />
            <span className="text-white">{t("case_studies.security.title")}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t("case_studies.security.title")}
          </h1>
          <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
            {t("case_studies.security.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-24 max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Heading & Context */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 font-Inter py-1 text-[#EF4444] rounded-full bg-[#EF4444]/20 border border-[#EF4444]/20">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-xs tracking-wider">{t("case_studies.common.sections.problem")}</span>
            </div>

            <h2 className="text-4xl font-medium font-Inter text-[#1D2530] tracking-tight">
              {t("case_studies.security.problem.title")}
            </h2>

            <p className="text-lg text-[#627084] leading-relaxed max-w-xl">
              {t("case_studies.security.problem.desc")}
            </p>
          </div>

          {/* Right Column: Problem Cards */}
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

      <section className="py-20 px-6 md:px-24 max-w-7xl mx-auto ">
        <div className="text-center mb-16 space-y-5">
          <span className="text-emerald-600 font-bold uppercase tracking-tighter text-xs">
            {t("case_studies.security.capabilities.title")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            {t("case_studies.security.capabilities.highlight")}
          </h2>
          <p className="text-black/70 font-Inter ">
            {t("case_studies.security.capabilities.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: <Download className="text-white" />,
              title: t("case_studies.security.capabilities.detection.title"),
              desc: t("case_studies.security.capabilities.detection.desc"),
            },
            {
              icon: <Cpu className="text-white" />,
              title: t("case_studies.security.capabilities.intelligence.title"),
              desc: t("case_studies.security.capabilities.intelligence.desc"),
            },
            {
              icon: <Download className="text-white" />,
              title: t("case_studies.security.capabilities.regulatory.title"),
              desc: t("case_studies.security.capabilities.regulatory.desc"),
            },
            {
              icon: <Blocks className="text-white" />,
              title: t("case_studies.security.capabilities.alert.title"),
              desc: t("case_studies.security.capabilities.alert.desc"),
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
