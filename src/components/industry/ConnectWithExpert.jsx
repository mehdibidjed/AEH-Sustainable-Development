import React from 'react';
import { Assets } from '../../assets/Asset';

const ConnectWithExpert = () => {
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
             alt="Expert" 
             className="absolute inset-0 w-full h-full object-cover"
           /> 
                </div>

                {/* Right Content Section */}
                <div className="flex flex-col justify-center p-16  text-white font-normalx  ">
                    <h2 className="text-3xl lg:text-4xl  mb-6 leading-relaxed ">
                    Make The Most Of Goverment  Technology Solutions With AEH Sustainable Development
                    </h2>
                    <p className="text-gray-300 text-sm mb-10 leading-10">
                        Our experts are two clicks away and ready to join your healthcare IT project.
                    </p>

                    <button className="px-8 py-4 bg-[#013934] hover:bg-[#013940] text-white rounded-full font-medium transition-colors w-fit">
                        Connect With Our Experts
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ConnectWithExpert;   