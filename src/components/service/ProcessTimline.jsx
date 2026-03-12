import { useTranslation } from "react-i18next";

const ProcessTimeline = ({ i18nKey }) => {
  const { t } = useTranslation();

  const sectionTitle = t("process.label", "OUR PROCESS");
  const mainTitle = t(`${i18nKey}.process_title`);
  const subtitle = t(`${i18nKey}.process_description`);
  const steps = t(`${i18nKey}.process_steps`, { returnObjects: true });

  // For the highlighted part "AEH Sustainable Development", we can assume it's at the end or handle it specially.
  // Given the layout, we might want to split the title if it contains a specific marker or just use a standard highlighted part.
  const companyName = "AEH Sustainable Development";
  const displayTitle = mainTitle.replace(companyName, "");

  return (
    <div className="bg-[#E6ECD6] py-8 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-16 px-4 md:px-6">
        {/* LEFT SIDE - Header */}
        <div className="flex-1">
          <p className="text-base md:text-lg tracking-wider text-black/70 mb-4 uppercase">
            {sectionTitle}
          </p>
          <div className="w-20 h-[2px] bg-black/20 mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl italic mb-6">
            {displayTitle}
            <span className="italic font-serif">{companyName}</span>
          </h2>
          <p className="text-base md:text-xl text-black/70 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* RIGHT SIDE - Timeline */}
        <div className="flex-1 relative">
          {/* Vertical line - shown on lg */}
          <div className=" absolute left-[10px] top-0 bottom-0 w-[1px] bg-[#1a4d3d]" />
          <div className="space-y-8 md:space-y-12 lg:space-y-12">
            {Array.isArray(steps) && steps.map((step, index) => (
              <div key={index} className="relative lg:pl-12">
                {/* Circle indicator */}
                <div className="absolute left-0 top-1 w-5 h-5 bg-white border-4 border-[#1a4d3d] rounded-full" />

                {/* Content */}
                <div className="pl-12 lg:pl-0">
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-black/70 leading-relaxed">
                    {step.desc || step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
