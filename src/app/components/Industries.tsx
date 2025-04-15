import React from 'react'
import { FaBuilding, FaHotel, FaSchool, FaHome } from "react-icons/fa";

const industryData = [
    { title: "Residential", icon: <FaHome /> },
    { title: "Commercial", icon: <FaBuilding /> },
    { title: "Hospitality", icon: <FaHotel /> },
    { title: "Education", icon: <FaSchool /> },
];

export default function Industries() {
    return (
        <>
            <section className="relative bg-white py-16 px-4">
                <img
                    src="/assets/PNG/fourthSection.svg"
                    alt="Industry Illustration"
                    className="absolute -top-24 md:-top-36 left-0 w-[80px] md:w-[120px] object-contain"
                />

                <div className="max-w-screen-xl mx-auto text-center">
                    <h4 className="text-sm font-semibold uppercase text-[#3F503B] mb-2">What We Do</h4>
                    <h2 className="text-3xl md:text-4xl text-black mb-10">Industries We Serve</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {industryData.map((item, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-lg shadow-md group hover:bg-[#3F503B] transition-all duration-300 p-6 text-center border-t-6  cursor-pointer"
                                style={{ borderTopColor: "#3F503B" }}
                            >
                                <div className="flex justify-center items-center text-[#3F503B] text-6xl mb-6 group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>

                                <h3 className="text-lg font-bold mb-2 text-[#3F503B] group-hover:text-white transition-all duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-600 group-hover:text-white transition-all duration-300">
                                    Just tell us what you need and we’ll take care of the rest.
                                </p>
                            </div>

                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}
