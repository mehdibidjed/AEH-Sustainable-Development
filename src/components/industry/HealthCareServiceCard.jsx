import React from "react";

const services = [
  {
    title: "Custom Healthcare Software Development",
    description:
      "As a custom healthcare software development company, we create and implement specialized healthcare platforms that fit your specific operations—be it an AI-supported clinical application, a full hospital operations system, or a niche SaaS for medical professionals. Our custom healthcare software development guarantees adherence to HIPAA, GDPR, and HL7/FHIR protocols throughout the process.",
  },
  {
    title: "Healthcare CRM & Patient Engagement Systems",
    description:
      "Our skilled healthcare software developers design CRMs that surpass simple booking functions, featuring elements like individualized health monitoring, reminder automation, protected messaging, and audience grouping. These tools enable providers to enhance patient commitment, simplify communications, and offer scaled, personalized support.",
  },
  {
    title: "Healthcare E-Commerce Development",
    description:
      "As a medical software development company, we build protected, HIPAA-aligned e-commerce sites for drugstores, health brands, and digital wellness ventures. This covers user-specific permissions (for patients, doctors, managers), PCI DSS-secure transactions, electronic script management, and adapted product handling for the medical field.",
  },
  {
    title: "Healthcare Data Analytics Platforms",
    description:
      "Our software development services for healthcare include robust data systems—from collecting EMR/EHR info, device data, and test outputs to building protected visualizations. Uses span clinical guidance, community health oversight, payment reviews, and immediate notifications for unusual patterns.",
  },
  {
    title: "Healthcare Software Integration Services",
    description:
      "As a medical software development firm, we specialize in linking outdated and new setups—through HL7 connections, FHIR interfaces, outside applications, testing gear, and connected gadgets. These services ensure smooth information sharing, less hands-on work, and better teamwork in care delivery.",
  },
  {
    title: "Healthcare Chatbots & AI Assistants",
    description:
      "Our healthcare software developers craft smart dialogue systems trained on medical data sets for handling initial assessments, common questions, reservations, notifications, and treatment follow-ups. These assistants handle various languages, follow HIPAA rules, and connect easily with EHRs, websites, and mobile tools.",
  },
  {
    title: "Healthcare Workflow Automation Software",
    description:
      "We optimize everyday tasks such as payment handling, booking verifications, document intake, and coverage checks using clever processes. Our solutions ease staff duties, maintain standards, and boost operational speed for medical groups.",
  },
  {
    title: "Healthcare Legacy Software Modernization",
    description:
      "From initial ideas to modernized outputs, we deliver complete healthcare software development, featuring fast models, protected core structures, adaptive user interfaces, and cloud-ready implementations. We also add AI/ML elements like forecast-based evaluations or health risk calculations.",
  },
  {
    title: "Patient Monitoring Healthcare Software",
    description:
      "As a custom software healthcare development company, we construct remote patient oversight (RPM) platforms that gather live data from trackers, wireless tools, and sensors. Capabilities include health metric logging, limit-triggered warnings, staff alerts, and EHR merging for complete patient overviews.",
  },
];

const HealthcareServiceCard = () => {
  return (
    <section className="py-14  bg-white px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center  mx-auto mb-10">
          <h2 className="text-2xl lg:text-4xl font-Inter font-medium  text-black mb-6">
            Our Custom{" "}
            <span className="font-instrumentSerif italic ">
              Healthcare
            </span>{" "}
            Software Development Services
          </h2>
          <p className="text-slate-600 text-sm lg:text-base max-w-4xl mx-auto leading-relaxed">
            From virtual health systems to intelligent diagnostic tools — we
            develop custom software solutions for healthcare that are completely
            compliant, flexible, and geared toward achieving tangible outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-[#F2F4F0] hover:bg-PrimaryGreen  rounded-[12px] transition-all duration-300 hover:shadow-xl border border-transparent hover:border-slate-100"
            >
              <div className="w-10 h-10 bg-[#003B30] group-hover:bg-white  group-hover:text-PrimaryGreen rounded-[6px] flex items-center justify-center mb-6 text-white font-semibold text-md">
                1
              </div>
              <h3 className="text-xl font-bold text-[#1C1917] group-hover:text-white mb-4 leading-tight min-h-[56px]">
                {service.title}
              </h3>
              <p className="text-sm text-black/70 group-hover:text-white   leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareServiceCard;
