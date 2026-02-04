import ProcessTimeline from "../../components/service/ProcessTimline";
import { aiDeliveryProcessData } from "../../data/service_data";

const MlService = () => {
  return (
    <ProcessTimeline
      sectionTitle={aiDeliveryProcessData.sectionTitle}
      mainTitle={aiDeliveryProcessData.mainTitle}
      subtitle={aiDeliveryProcessData.subtitle}
      steps={aiDeliveryProcessData.steps}
    />
  );
};

export default MlService;
