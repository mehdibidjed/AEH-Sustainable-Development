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
import { useTranslation } from "react-i18next";

function SmartCars() {
  const { t } = useTranslation();

  const problems = [
    {
      icon: <Database className="w-6 h-6 text-slate-600" />,
      title: t("case_studies.smartcars.problems.visibility.title"),
      description: t("case_studies.smartcars.problems.visibility.desc"),
    },
    {
      icon: <Layers className="w-6 h-6 text-slate-600" />,
      title: t("case_studies.smartcars.problems.fragmentation.title"),
      description: t("case_studies.smartcars.problems.fragmentation.desc"),
    },
    {
      icon: <Zap className="w-6 h-6 text-slate-600" />,
      title: t("case_studies.smartcars.problems.visualization.title"),
      description: t("case_studies.smartcars.problems.visualization.desc"),
    },
  ];

  const designPrinciples = [
    {
      icon: <Layout className="text-blue-400 w-5 h-5" />,
      title: t("case_studies.smartcars.design_principles.ui.title"),
      desc: t("case_studies.smartcars.design_principles.ui.desc"),
    },
    {
      icon: <Layers className="text-blue-400 w-5 h-5" />,
      title: t("case_studies.smartcars.design_principles.controls.title"),
      desc: t("case_studies.smartcars.design_principles.controls.desc"),
    },
    {
      icon: <Zap className="text-blue-400 w-5 h-5" />,
      title: t("case_studies.smartcars.design_principles.feedback.title"),
      desc: t("case_studies.smartcars.design_principles.feedback.desc"),
    },
  ];

  const features = [
    {
      title: t("case_studies.smartcars.features.control_center.title"),
      desc: t("case_studies.smartcars.features.control_center.desc"),
      image: Assets.Images.CaseStudy.Right1,
      imageSide: "right",
    },
    {
      title: t("case_studies.smartcars.features.comfort.title"),
      desc: t("case_studies.smartcars.features.comfort.desc"),
      image: Assets.Images.CaseStudy.Left1,
      imageSide: "left",
    },
    {
      title: t("case_studies.smartcars.features.status.title"),
      desc: t("case_studies.smartcars.features.status.desc"),
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
            src={Assets.Images.CaseStudy.CarHero}
            className="h-full w-full object-cover"
            alt="Hero"
          />
        </div>
        <div className="relative z-10 max-w-3xl text-white">
          <nav className="flex items-center space-x-2 text-xs uppercase tracking-widest mb-8">
            <span>{t("case_studies.common.breadcrumbs.home")}</span> <ChevronRight size={12} />
            <span>{t("case_studies.common.breadcrumbs.case_studies")}</span> <ChevronRight size={12} />
            <span className="text-white">{t("case_studies.smartcars.title")}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t("case_studies.smartcars.title")}
          </h1>
          <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
            {t("case_studies.smartcars.subtitle")}
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
              {t("case_studies.smartcars.problem.title")}
            </h2>

            <p className="text-lg text-[#627084] leading-relaxed max-w-xl">
              {t("case_studies.smartcars.problem.desc")}
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

      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Text */}
          <div className="text-center mb-12 md:mb-20">
            <h6 className="text-emerald-500 uppercase tracking-widest text-xs font-bold mb-3">
              {t("case_studies.common.sections.solution")}
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t("case_studies.smartcars.solution.title")}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
              {t("case_studies.smartcars.solution.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Futuristic Vehicle Interface */}
            <div className="relative group flex justify-center order-2 lg:order-1">
              <div className="rounded-3xl w-full max-w-md flex items-center justify-center relative overflow-hidden shadow-2xl">
                <img src={Assets.Images.CaseStudy.Car1} alt="Car Illustration" />
              </div>
            </div>

            {/* Right Side: Key Design Principles */}
            <div className="space-y-8 sm:pr-14 order-1 lg:order-2">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t("case_studies.smartcars.design_principles.title")}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {t("case_studies.smartcars.design_principles.subtitle")}
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
              {t("case_studies.common.sections.features")}
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t("case_studies.smartcars.features.title")}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
              {t("case_studies.smartcars.features.subtitle")}
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-24 md:space-y-32">
            {features.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                <div
                  className={`flex justify-center order-1 ${feature.imageSide === "right" ? "lg:order-2" : "lg:order-1"
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

                <div
                  className={`space-y-6 text-center lg:text-left order-2 ${feature.imageSide === "right" ? "lg:order-1" : "lg:order-2"
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
            {t("case_studies.common.sections.results")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            {t("case_studies.smartcars.results.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              value: t("case_studies.smartcars.results.unified.value"),
              label: t("case_studies.smartcars.results.unified.label"),
              desc: t("case_studies.smartcars.results.unified.desc"),
            },
            {
              value: t("case_studies.smartcars.results.satisfaction.value"),
              label: t("case_studies.smartcars.results.satisfaction.label"),
              desc: t("case_studies.smartcars.results.satisfaction.desc"),
            },
            {
              value: t("case_studies.smartcars.results.anxiety.value"),
              label: t("case_studies.smartcars.results.anxiety.label"),
              desc: t("case_studies.smartcars.results.anxiety.desc"),
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#EDECE8] p-12 rounded-3xl text-center border border-emerald-100">
              <div className="flex justify-center items-center p-3 mb-6 ">
                <ShieldCheck className="text-white bg-[#013934] px-2 rounded-xl" size={52} />
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-[#13476C] to-[#2E9E8F] bg-clip-text text-transparent mb-2">
                {item.value}
              </div>
              <p className="font-bold text-sm mb-4">{item.label}</p>
              <p className="text-xs text-slate-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SmartCars;
