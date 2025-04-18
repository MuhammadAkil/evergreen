import React from 'react';

export default function Hero() {
    return (
        <>
            {/* Stats Card */}
            <div className="relative w-full bg-[#3F503B] py-10">
                <div className="relative mx-auto max-w-4xl -mt-16 px-4">
                    <div className="bg-white rounded-lg shadow-lg p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="flex flex-col">
                            <span className="text-3xl md:text-4xl font-bold text-gray-800">3400+</span>
                            <span className="text-sm text-gray-500 mt-1">Complete Projects</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-3xl md:text-4xl font-bold text-gray-800">6,820</span>
                            <span className="text-sm text-gray-500 mt-1">Happy Clients</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-3xl md:text-4xl font-bold text-gray-800">270+</span>
                            <span className="text-sm text-gray-500 mt-1">Dealer Equipments</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-3xl md:text-4xl font-bold text-gray-800">15+</span>
                            <span className="text-sm text-gray-500 mt-1">Years of Experience</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Completed Section */}
            <div className="relative w-full bg-[#3F503B] py-10 text-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Project Completed</h2>
                    <p className="text-sm mb-8">
                        We have successfully completed numerous septic projects, ensuring reliable and efficient systems for homeowners and businesses. Our team works with precision and dedication, delivering top-quality results that meet industry standards. Customer satisfaction and environmental responsibility remain our top priorities.
                    </p>
                </div>
            </div>

            {/* Image Gallery */}
           <div className="relative w-full bg-[#3F503B] py-10">
    <div className="px-4 grid grid-cols-3 gap-4">
        <img src="/assets/PNG/image 8.png" alt="Project 2" className="w-[80%] h-[80%] object-cover ml-auto" />
        <img src="/assets/PNG/Group.png" alt="Project 1" className="w-full h-[80%] object-cover mx-auto" />
        <img src="/assets/PNG/Group (1).png" alt="Project 3" className="w-[80%] h-[80%] object-cover mr-auto" />
    </div>
    <div className="pl-[607px] mt-[-172px] px-4 mt-4">
        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg inline-block text-green-600">
            <h3 className="text-lg font-bold">20,000 Gallons Septic System</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonum-</p>
        </div>
    </div>
</div>
        </>
    );
}