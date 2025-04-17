import Image from "next/image"
import { Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SepticHero() {
  return (
    <div className="relative">
      <div className="relative h-[500px] w-full">
        <Image
          src="/assets/PNG/Group 39285.png"
          alt="Septic system maintenance"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />

        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 hidden md:block">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.6947 13.7H15.7037M15.6947 16.7H15.7037M11.9955 13.7H12.0045M11.9955 16.7H12.0045M8.29431 13.7H8.30329M8.29431 16.7H8.30329"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-16">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight">
            Maintain your septic system with our reliable and efficient solutions.
          </h1>

          <div className="mt-8">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-6 rounded-md text-lg font-medium">
              <Rocket className="mr-2 h-5 w-5" />
              GET A FREE QUOTE
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
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
  )
}
