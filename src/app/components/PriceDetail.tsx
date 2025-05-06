'use client';

import { CheckSquare } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Seo from '@/Seo';

export default function PricingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <Seo
          title="Pricing"
          description="View pricing details for septic services at Evergreen Septic Services, including STDHT ($165.00), grease trap ($150.00 + $0.21/gallon), catch basin ($175.00 + $0.28/gallon), and emergency fees."
          keywords={[
              'Evergreen Septic Pricing',
              'Septic service costs',
              'STDHT pricing',
              'Emergency septic fees',
              'Septic pumping rates',
          ]}
          ogTitle="Pricing | Evergreen Septic Services"
          ogDescription="View pricing details for septic services at Evergreen Septic Services, including STDHT ($165.00), grease trap ($150.00 + $0.21/gallon), catch basin ($175.00 + $0.28/gallon), and emergency fees."
          ogUrl="https://www.evergreensepticsvc.com/pricing"
          ogImage="https://www.evergreensepticsvc.com/assets/images/Pricing.png"
          twitterCard="summary_large_image"
          twitterTitle="Pricing | Evergreen Septic Services"
          twitterDescription="View pricing details for septic services at Evergreen Septic Services, including STDHT ($165.00), grease trap ($150.00 + $0.21/gallon), catch basin ($175.00 + $0.28/gallon), and emergency fees."
          twitterImage="https://www.evergreensepticsvc.com/assets/images/Pricing.png"
      />
      <div className="max-w-3xl mx-auto p-6 mt-10 mb-10 font-sans" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
        <div className="text-center mb-6">
          <h1 className="text-center text-[#00BD00] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter font-bold mb-2" style={{ fontWeight: 700, letterSpacing: '0%' }}>
            STDHT - $165.00
          </h1>
          <p className="text-gray-800 text-base md:text-lg font-inter font-medium mt-5">
            STDHT counts as any septic tank pumped within 6 months of a pumping.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-center mb-6 bg-[#3f503b] p-3 rounded-lg">
          {[
            {
              title: "Grease Trap",
              description: "$150.00/service call and $0.21 per gallon",
            },
            {
              title: "Catch Basin",
              description: "$175.00/service call and $0.28 per gallon",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-5 border border-[#00BD00] rounded-lg shadow-lg bg-white min-w-[250px] font-instrument"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="text-lg md:text-2xl font-bold mb-2 text-[#00BD00]">
                {item.title}
              </div>
              <strong className="text-sm md:text-lg leading-tight">
                {item.description}
              </strong>
            </div>
          ))}
        </div>
        <div className="mb-8">
          <h2 className="text-center font-inter font-medium text-2xl sm:text-[28px] md:text-[31.4px] leading-[40px] sm:leading-[50px] md:leading-[60.19px] mb-4">
            Emergency Fees
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Same-day fee", price: "$50.00" },
              { label: "Nights & weekends", price: "$75.00" },
              { label: "Holiday fee", price: "$150.00" }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center shadow-lg p-4 border border-dashed border-[#00BD00] rounded-lg bg-white min-w-[220px] justify-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CheckSquare className="h-5 w-5 text-[#00BD00] mr-2" />
                <span className="text-sm sm:text-base font-medium">
                  {item.label}: {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}