'use client';

import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';

const pricingData = {
  holding: {
    3000: 150,
    3200: 155,
    3400: 160,
    3600: 165,
    3800: 170,
    4000: 175,
    4200: 180,
    4400: 185,
    4600: 190,
    4800: 195,
    5000: 200,
    5200: 205,
    5400: 210,
    5600: 215,
    5800: 220,
    6000: 225,
    6200: 230,
    6400: 235,
  },
  septic: {
    1000: 250,
    1200: 270,
    1400: 290,
    1600: 310,
    1800: 330,
    2000: 350,
    2200: 370,
    2400: 390,
    2600: 410,
    2800: 430,
    3000: 450,
    3200: 470,
    3400: 490,
    3600: 510,
    3800: 530,
    4000: 550,
    4200: 570,
    4400: 590,
  },
};

export default function Pricing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const [category, setCategory] = useState('holding');
  const [quantity, setQuantity] = useState('');
  const [quantityError, setQuantityError] = useState('');
  const [price, setPrice] = useState<number | null>(null);
  const [showMoreHolding, setShowMoreHolding] = useState(false);
  const [showMoreSeptic, setShowMoreSeptic] = useState(false);

  const handleEstimate = () => {
    const qty = parseInt(quantity);
    if (!qty) return setPrice(null);

    const table = pricingData[category as 'holding' | 'septic'];

    const entries = Object.entries(table)
      .map(([key, value]) => [parseInt(key), value] as [number, number])
      .sort((a, b) => a[0] - b[0]);

    const matched = entries.find(([gallons]) => gallons >= qty);

    if (matched) {
      setPrice(matched[1]);
    } else {
      const len = entries.length;
      if (len >= 2) {
        const [x1, y1] = entries[len - 2];
        const [x2, y2] = entries[len - 1];

        const slope = (y2 - y1) / (x2 - x1);
        const estimated = y2 + slope * (qty - x2);

        setPrice(Math.round(estimated));
      } else {
        setPrice(null);
      }
    }
  };

  const holdingData = [
    { gallons: "3000 OR LESS", price: "150.00" },
    { gallons: "3200", price: "155.00" },
    { gallons: "3400", price: "160.00" },
    { gallons: "3600", price: "165.00" },
    { gallons: "3800", price: "170.00" },
    { gallons: "4000", price: "175.00" },
    { gallons: "4200", price: "180.00" },
    { gallons: "4400", price: "185.00" },
    { gallons: "4600", price: "190.00" },
    { gallons: "4800", price: "195.00" },
    { gallons: "5000", price: "200.00" },
    { gallons: "5200", price: "205.00" },
    { gallons: "5400", price: "210.00" },
    { gallons: "5600", price: "215.00" },
    { gallons: "5800", price: "220.00" },
    { gallons: "6000", price: "225.00" },
    { gallons: "6200", price: "230.00" },
    { gallons: "6400", price: "235.00" },
  ];

  const septicData = [
    { gallons: "1000 OR LESS", price: "250.00" },
    { gallons: "1200", price: "270.00" },
    { gallons: "1400", price: "290.00" },
    { gallons: "1600", price: "310.00" },
    { gallons: "1800", price: "330.00" },
    { gallons: "2000", price: "350.00" },
    { gallons: "2200", price: "370.00" },
    { gallons: "2400", price: "390.00" },
    { gallons: "2600", price: "410.00" },
    { gallons: "2800", price: "430.00" },
    { gallons: "3000", price: "450.00" },
    { gallons: "3200", price: "470.00" },
    { gallons: "3400", price: "490.00" },
    { gallons: "3600", price: "510.00" },
    { gallons: "3800", price: "530.00" },
    { gallons: "4000", price: "550.00" },
    { gallons: "4200", price: "570.00" },
    { gallons: "4400", price: "590.00" },
  ];

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length > 5) {
      setQuantityError('Maximum 5 digits allowed');
      return;
    } else {
      setQuantityError('');
    }

    setQuantity(value);
  };

  return (
    <>
     <main className="min-h-screen bg-[#3F503B] " data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 ml-4 md:ml-10">
            <div className="text-white text-left w-full">
              <p className="text-sm md:text-base font-instrument font-semibold leading-[100%] tracking-[0%] sm:text-[16px] md:text-[20px]">
                Effective April 1, 2025
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl capitalize font-instrument my-2 leading-[100%]">
                Pricing List
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl mt-2 font-instrument font-medium leading-[100%]">
                Price Per Gallon
              </p>
            </div>

            <div className="flex flex-col w-full">
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 max-w-full md:max-w-3xl mx-auto mb-8 md:mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="space-y-4 flex-1 w-full">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-instrument font-semibold text-[#3b5741] leading-[100%] tracking-[0%]">
                      Get Your Estimate!
                    </h2>

                    <p className="text-gray-600 font-instrument font-normal text-[16px] sm:text-[18px] leading-[100%]">
                      Get your own estimate by finding best offer for you!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="font-instrument font-normal text-[20px] sm:text-[24px] leading-[100%] tracking-[0%]">
                          Category
                        </p>

                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-full p-3 rounded-md bg-gray-100"
                        >
                          <option value="holding">Holding Tanks</option>
                          <option value="septic">Septic Tanks</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <p className="font-instrument font-normal text-[20px] sm:text-[24px] leading-[100%] tracking-[0%] whitespace-nowrap">
                          Quantity (Gallons)
                        </p>

                        <input
                          type="number"
                          value={quantity}
                          className="w-full p-3 rounded-md bg-gray-100"
                          placeholder="Enter gallons"
                          onChange={handleQuantityChange}
                        />

                        {quantityError && (
                          <p className="text-red-500 text-sm">{quantityError}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4 w-full md:w-auto">
                    <div className="text-[#4CAF50] text-2xl sm:text-3xl md:text-4xl font-bold">
                      {price !== null ? `$ ${price.toFixed(2)}` : '--'}
                    </div>
                    <Button
                      onClick={handleEstimate}
                      className="bg-[#4CAF50] hover:bg-green-600 text-white px-6 sm:px-8 w-full md:w-auto"
                    >
                      Get Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg self-start">
              <div className="bg-[#4CAF50] text-white p-4 text-center font-bold text-xl">
                <div className="flex justify-between">
                  <span className="font-inter font-semibold text-[20px] sm:text-[24px] leading-[30px] tracking-[0%]">
                    HOLDING
                  </span>
                  <span className="font-inter font-semibold text-[20px] sm:text-[24px] leading-[30px] tracking-[0%]">
                    TANKS
                  </span>
                </div>
              </div>
              <div className="divide-y">
                {holdingData.slice(0, showMoreHolding ? holdingData.length : 7).map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between p-4 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                  >
                    <span className="font-medium text-sm sm:text-base">{item.gallons}</span>
                    <span className="font-medium text-sm sm:text-base">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 flex justify-center">
                <Button
                  variant="ghost"
                  className="text-gray-500 flex items-center gap-1"
                  onClick={() => setShowMoreHolding(!showMoreHolding)}
                >
                  {showMoreHolding ? "View Less" : "View More"}
                  {showMoreHolding ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg self-start">
              <div className="bg-[#4CAF50] text-white p-4 text-center font-bold text-xl">
                <div className="flex justify-between">
                  <span className="font-inter font-semibold text-[20px] sm:text-[24px] leading-[30px] tracking-[0%]">
                    SEPTIC
                  </span>
                  <span className="font-inter font-semibold text-[20px] sm:text-[24px] leading-[30px] tracking-[0%]">
                    TANKS
                  </span>
                </div>
              </div>
              <div className="divide-y">
                {septicData.slice(0, showMoreSeptic ? septicData.length : 7).map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between p-4 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                  >
                    <span className="font-medium text-sm sm:text-base">{item.gallons}</span>
                    <span className="font-medium text-sm sm:text-base">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 flex justify-center">
                <Button
                  variant="ghost"
                  className="text-gray-500 flex items-center gap-1"
                  onClick={() => setShowMoreSeptic(!showMoreSeptic)}
                >
                  {showMoreSeptic ? "View Less" : "View More"}
                  {showMoreSeptic ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}