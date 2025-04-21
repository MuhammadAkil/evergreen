import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <main className="min-h-screen bg-[#3F503B]" data-aos="fade-up"
      data-aos-anchor-placement="top-bottom">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-white mb-8 ml-10 text-center md:text-left">
          <p className="text-sm md:text-base">EFFECTIVE MAY 1, 2023</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">PRICING LIST</h1>
          <p className="text-xl md:text-2xl mt-1">PRICE PER GALLON</p>
        </div>

        {/* Estimate Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-3xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-4 flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-[#3b5741]">Get Your Estimate!</h2>
              <p className="text-gray-600">Get your own estimate by finding best offer for you!</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium">Category</p>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-md p-3">
                    <span className="flex-1">Holding</span>
                    <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-medium">Quantity</p>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-md p-3">
                    <span className="flex-1">3600 Gallons</span>
                    <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="text-[#4CAF50] text-3xl md:text-4xl font-bold">$ 195.00</div>
              <Button className="bg-[#4CAF50] hover:bg-green-600 text-white px-8">Get Now</Button>
            </div>
          </div>
        </div>

        {/* Pricing Tables */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Holding Tanks Table */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="bg-[#4CAF50] text-white p-4 text-center font-bold text-xl">
              <div className="flex justify-between">
                <span>HOLDING</span>
                <span>TANKS</span>
              </div>
            </div>
            <div className="divide-y">
              {[
                { gallons: "3000 OR LESS", price: "150.00" },
                { gallons: "3200", price: "155.00" },
                { gallons: "3400", price: "160.00" },
                { gallons: "3600", price: "165.00" },
                { gallons: "3800", price: "170.00" },
                { gallons: "4000", price: "175.00" },
                { gallons: "4200", price: "180.00" },
              ].map((item, index) => (
                <div key={index} className={`flex justify-between p-4 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
                  <span>{item.gallons}</span>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
            <div className="p-4 flex justify-center">
              <Button variant="ghost" className="text-gray-500 flex items-center gap-1">
                View More <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Septic Tanks Table */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="bg-[#4CAF50] text-white p-4 text-center font-bold text-xl">
              <div className="flex justify-between">
                <span>SEPTIC</span>
                <span>TANKS</span>
              </div>
            </div>
            <div className="divide-y">
              {[
                { gallons: "1000 OR LESS", price: "250.00" },
                { gallons: "1200", price: "270.00" },
                { gallons: "1400", price: "290.00" },
                { gallons: "1600", price: "310.00" },
                { gallons: "1800", price: "330.00" },
                { gallons: "2000", price: "350.00" },
                { gallons: "2200", price: "370.00" },
              ].map((item, index) => (
                <div key={index} className={`flex justify-between p-4 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
                  <span>{item.gallons}</span>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
            <div className="p-4 flex justify-center">
              <Button variant="ghost" className="text-gray-500 flex items-center gap-1">
                View More <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

    </main>

  )
}
