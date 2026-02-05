import React from 'react';
import HealthcareServiceCard from "../../components/healthcare/HealthcareServiceCard";
import HealthcareCaseStudy from "../../components/healthcare/HealthcareCaseStudy";
import { healthcareServiceData } from "../../data/HealthCare_data.js";

const HealthCare = () => {
  return (
    <>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareServiceData.steps.map((service, index) => (
              <HealthcareServiceCard 
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <HealthcareCaseStudy />
    </>
  );
};

export default HealthCare;