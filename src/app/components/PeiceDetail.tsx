import { Mail, Phone, CheckSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Link from "next/link";

export default function PricingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <>
      <div className="max-w-3xl mx-auto p-6 mt-10 mb-10 font-sans" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
        <div className="text-center mb-8">
          <h1 className="text-center text-[#00BD00] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter font-bold mb-2" style={{ fontWeight: 700, letterSpacing: '0%' }}>
            STDHT - $165.00
          </h1>


          <p className="text-gray-800 text-base md:text-lg font-inter font-medium leading-[30px]">
            STDHT counts as any septic tank pumped within 6 months of a pumping.
          </p>

        </div>

        <div className="space-y-4 text-center mb-8">
          <div className="font-instrument text-[40px] sm:text-lg md:text-2xl leading-tight md:leading-[95px]">
            <span className="font-bold">Grease Trap</span> - $150.00/service call and $0.21 per gallon
          </div>

          <div className="font-instrument text-[40px] sm:text-lg md:text-2xl leading-tight md:leading-[95px]">
            <span className="font-bold">Catch Basin</span> - $175.00/service call and $0.28 per gallon
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-center font-inter font-medium text-2xl sm:text-[28px] md:text-[31.4px] leading-[40px] sm:leading-[50px] md:leading-[60.19px] mb-4">
            Emergency Fees
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center">
              <CheckSquare className="h-5 w-5 text-[#00BD00] mr-2" />
              <span>Same-day fee: $50.00</span>
            </div>
            <div className="flex items-center">
              <CheckSquare className="h-5 w-5 text-[#00BD00] mr-2" />
              <span>Nights & weekends: $75.00</span>
            </div>
            <div className="flex items-center">
              <CheckSquare className="h-5 w-5 text-[#00BD00] mr-2" />
              <span>Holiday fee: $150.00</span>
            </div>
          </div>
        </div>

      </div>

      <section className='max-w-4xl mx-auto p-6 mt-10 mb-10 font-sans'>
        <div className="bg-[#F0F0F0] rounded-lg p-4 md:p-6 mb-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

            <div className="flex items-start p-3 rounded-md w-full md:w-auto bg-[#F0F0F0]">
              <div className="bg-[#e9f3e6] p-2 rounded-md mr-3 flex-shrink-0">
                <Mail className="h-7 w-7 text-[#3F503B]" />
              </div>
              <div className="flex flex-col w-full overflow-hidden">
                <div className="font-semibold text-base md:text-lg">
                  Mail Us
                </div>
                <div className="text-gray-700 text-sm md:text-base break-words overflow-wrap break-word w-full">
                  evergreensepticservicellc@gmail.com
                </div>

              </div>
            </div>


            <div className="flex items-center p-3 rounded-md w-full md:w-auto">
              <div className="bg-[#e9f3e6] p-2 rounded-md mr-3">
                <Phone className="h-7 w-7 text-[#3F503B]" />
              </div>
              <div>
                <div className="font-semibold text-base md:text-lg">Call Us</div>
                <div className="text-gray-700 text-sm md:text-base">+1 262-248-4711</div>
              </div>
            </div>

            <Link href="/contact-us" className="w-full md:w-auto">
              <Button className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2">
                <Rocket className="h-5 w-5" /> GET A FREE QUOTE
              </Button>
            </Link>

          </div>
        </div>


        <div className="text-center font-inter font-medium text-base sm:text-lg md:text-[24px] leading-[26px] sm:leading-[28px] md:leading-[30px] text-gray-700">
          <p>Phone: 262-248-4711 (during normal business hours, Monday-Friday, 8 AM to 4 PM)</p>
          <p>Emergency Number: 262-949-3555</p>
        </div>

      </section>

    </>
  )
}
