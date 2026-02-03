import { services } from "../../data/service_data";
import { Assets } from "../../assets/Asset";

const OtherServices = () => {
  return (
    <div className="bg-black text-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Other Services
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Technical solutions built to bring designs to life with performance,
            scalability, and reliability in mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              {/* Vertical line on the left */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/40 to-white/10 group-hover:from-white/60 transition-colors duration-300" />

              <div className="pl-8">
                {/* Service Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
                  {service.name}
                </h3>

                {/* Gradient Card */}
                <img
                  src={service.image}
                  className="mb-8 rounded-lg"
                  alt={service.name}
                />

                {/* Sub-services List */}
                <ul className="space-y-3">
                  {service.subServices.map((subService, subIndex) => (
                    <li key={subIndex} className="flex items-start gap-3">
                      <span className="text-white/50 mt-1.5 flex-shrink-0">
                        •
                      </span>
                      <span className="text-sm md:text-base text-white/90 leading-relaxed">
                        {subService}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
