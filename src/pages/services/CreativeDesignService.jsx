import React from "react";
import { creativeDesignProcessData } from "../../data/service_data";
import ProcessTimeline from "../../components/service/ProcessTimline";

function CreativeDesignService() {
  return (
    <ProcessTimeline
      sectionTitle={creativeDesignProcessData.sectionTitle}
      mainTitle={creativeDesignProcessData.mainTitle}
      subtitle={creativeDesignProcessData.subtitle}
      steps={creativeDesignProcessData.steps}
    />
  );
}

export default CreativeDesignService;
