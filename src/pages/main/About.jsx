import React from "react";
import { Assets } from "../../assets/Asset";

const contentVM = [
  {
    title: "Our Vision",
    desc: "To make advanced technology practical, scalable, and accessible for organizations building long-term, sustainable growth.",
    image: Assets.Images.About.VisonL,
  },
  {
    title: "Our Mission",
    desc: "We design and deliver production-ready software and automation that solve real-world challenges in complex and regulated environments.",
    image: Assets.Images.About.VisionR,
  },
];
const features = [
  {
    title: "Results That Matter",
    desc: "Success is measured by outcomes, not activity. We focus on achieving the specific goals defined with our clients and delivering solutions that create real operational and business impact. Through disciplined project execution and experienced technical teams, we move efficiently from concept to deployment.",
  },
  {
    title: "Adaptable By Design",
    desc: "Our teams are built to adjust as projects evolve. We scale resources up or down as needed, respond quickly to changing requirements, and remain flexible throughout the engagement to ensure progress stays aligned with business priorities.",
  },
  {
    title: "Open And Transparent Collaboration",
    desc: "We believe trust is built through visibility. Clients stay informed through clear communication, consistent updates, and shared tracking tools. This approach ensures alignment, accountability, and full clarity at every stage of the project.",
  },
];
function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-PrimaryGreen   pt-36  px-6 md:px-16 ">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-white text-3xl md:text-5xl font-medium font-Inter mb-12 md:mb-12">
            Leadership
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
                  Moussa Abdallah El Hirtsi
                </h3>
                <p className="text-lg opacity-80 font-light">
                  CEO And Founder Of AEH Sustainable Development
                </p>
              </div>

              <div className="space-y-6 text-sm  leading-relaxed font-light opacity-90 max-w-3xl">
                <p>
                  Moussa's core expertise brings over 14 years of combined
                  experience in the energy, real estate, and international
                  business sectors, with 5 years focused on oil and gas
                  operations and 9 years specializing in international
                  negotiations, sales strategy, and cross-border partnerships.
                  As the lead Negotiation Specialist for the Middle East and
                  Africa region, he plays a pivotal role in forging strategic
                  alliances and securing high-value deals across the region.
                </p>

                <p>
                  With expertise spanning both technical and commercial aspects
                  of the energy and real estate industries, Moussa excels in
                  diplomatic engagement with government and private sector
                  entities. His contributions have been instrumental in
                  expanding the company's footprint through multinational
                  partnerships, helping position Star of Texas as a competitive
                  player in well entry and revitalization projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full font-Inter  py-32 bg-PrimaryGreen px-10 md:px-32 space-y-5 text-center  mx-auto  overflow-hidden">
        <h1 className=" text-2xl md:text-4xl lg:text-6xl text-center font-medium text-white  ">
          We’re a Strategy-First Digital <br /> Product Agency.
        </h1>
        <p className="text-sm md:text-[18px] leading-relaxed  text-white/70">
          AEH Sustainable Development is a technology and AI development company
          focused on delivering real, production-ready solutions for
          organizations operating in complex and regulated environments.{" "}
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
      <section className="bg-white  pb-24  text-black mx-auto    space-y-10 px-5 md:px-32">
        <div className="space-y-5">
          <div className=" grid grid-cols-1 md:grid-cols-3  mx-auto">
            <div className="px-10 py-10  flex justify-start  items-center">
              <h3 className="text-2xl md:text-4xl font-Inter font-medium">
                Who We Are
              </h3>
            </div>
            <div className="text-sm space-y-5 col-span-2  text-black/70">
              <p>
                AEH Sustainable Development is a multidisciplinary technology
                firm combining software engineering, artificial intelligence,
                automation, and strategic design. Our work spans industries
                where reliability, compliance, and long-term performance matter.
              </p>
              <p>
                We don't chase trends. We focus on clarity, execution, and
                systems that work in the real world — from day one and long
                after launch.
              </p>
              <p>
                Our teams collaborate closely with stakeholders to translate
                complex requirements into clean architecture, secure systems,
                and scalable digital products.
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
            Missions And Vison
          </h2>
          <p className="font-normal text-xs md:text-sm">
            AEH Sustainable Development was founded to turn bold ideas into
            technology that works in the real world. We saw organizations held
            back by overcomplicated systems, inaccessible AI, and solutions that
            failed beyond the concept stage. Today, we focus on practical
            strategy, clear design, and reliable execution, partnering with
            organizations in complex and regulated industries to build
            technology that scales, performs, and lasts.
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
          <h2 className="font-medium text-2xl md:text-4xl ">Why Us ?</h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
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
