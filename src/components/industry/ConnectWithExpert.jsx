import React from 'react';
import { Assets } from '../../assets/Asset';
import { useTranslation } from "react-i18next";

const ConnectWithExpert = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-[#001D21] w-screen">
            <div className="grid lg:grid-cols-2 min-h-[500px]">
                {/* Left Image Section */}
                <div className="relative h-[400px] lg:h-auto ">
                    {/* Placeholder for Expert Image */}
                    {/* <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                        Expert Image Placeholder
                    </div> */}
                    {/* If an image was available:
           */}
                    <img
                        src={Assets.Images.Common.Moussa2}
                        alt={t("service_pages.common.connect_expert_button")}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                {/* Right Content Section */}
                <div className="flex flex-col justify-center p-16  text-white font-normalx  ">
                    <h2 className="text-3xl lg:text-4xl  mb-6 leading-relaxed ">
                        {t("service_pages.common.connect_expert_title")}
                    </h2>
                    <p className="text-gray-300 text-sm mb-10 leading-10">
                        {t("service_pages.common.connect_expert_desc")}
                    </p>

                    <button className="px-8 py-4 bg-[#013934] hover:bg-[#013940] text-white rounded-full font-medium transition-colors w-fit">
                        {t("service_pages.common.connect_expert_button")}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ConnectWithExpert;