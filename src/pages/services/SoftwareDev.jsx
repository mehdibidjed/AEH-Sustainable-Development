import React from "react";
import { SoftwareDevProcessData } from "../../data/service_data";
import ProcessTimeline from "../../components/service/ProcessTimline";

function SoftwareDev() {
  return (
    <div>
      <ProcessTimeline
        sectionTitle={SoftwareDevProcessData.sectionTitle}
        mainTitle={SoftwareDevProcessData.mainTitle}
        subtitle={SoftwareDevProcessData.subtitle}
        steps={SoftwareDevProcessData.steps}
      />
    </div>
  );
}

export default SoftwareDev;
