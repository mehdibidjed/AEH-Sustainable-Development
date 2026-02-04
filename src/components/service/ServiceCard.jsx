import { Assets } from "../../assets/Asset";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="flex flex-col p-8 md:p-10 bg-gradient-to-br from-[#EDECE8] to-[#F5F4F0] rounded-2xl h-full hover:shadow-lg transition-shadow duration-300">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 bg-white/60 group-hover:bg-white transition-colors">
        <img src={Assets.Images.Services.ML.CardIcon} className="w-8 h-8" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug text-black">
        {title}
      </h2>
      <p className="text-base text-black/70 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
