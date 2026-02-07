import { Assets } from "../../assets/Asset";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="flex flex-col p-8 md:p-6 bg-ServiceCardColor rounded-2xl h-full hover:shadow-lg transition-shadow duration-300">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8">
        <img src={Assets.Icons.Common.CardIcon} className="w-full h-full" />
      </div>
      <h2 className="text-lg md:text-xl font-bold mb-4 leading-snug text-black">
        {title}
      </h2>
      <p className="text-base text-black/70 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
