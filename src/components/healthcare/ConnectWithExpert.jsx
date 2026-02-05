import React from 'react';

const ConnectWithExpert = () => {
    return (
        <section className="bg-[#002A20] w-full">
            <div className="grid lg:grid-cols-2 min-h-[500px]">
                {/* Left Image Section */}
                <div className="relative h-[400px] lg:h-auto bg-slate-200">
                    {/* Placeholder for Expert Image */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                        Expert Image Placeholder
                    </div>
                    {/* If an image was available:
           <img 
             src={ExpertImage} 
             alt="Expert" 
             className="absolute inset-0 w-full h-full object-cover"
           /> 
           */}
                </div>

                {/* Right Content Section */}
                <div className="flex flex-col justify-center p-8 lg:p-24 text-white">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                        Make The Most Of Healthcare Technology Solutions With AEH Sustainable Development
                    </h2>
                    <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                        Our experts are two clicks away and ready to join your healthcare IT project.
                    </p>

                    <button className="px-8 py-4 bg-[#004D40] hover:bg-[#003B30] text-white rounded-full font-medium transition-colors w-fit">
                        Connect With Our Experts
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ConnectWithExpert;
