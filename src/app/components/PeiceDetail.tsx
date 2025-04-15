import { Mail, Phone, CheckSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 mb-10 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#00BD00] mb-2">STDHT - $165.00</h1>
        <p className="text-gray-800">STDHT counts as any septic tank pumped within 6 months of a pumping.</p>
      </div>

      <div className="space-y-4 text-center mb-8">
        <div className="text-xl font-semibold">
          <span className="font-bold">Grease Trap</span> - $150.00/service call and $0.21 per gallon
        </div>

        <div className="text-xl font-semibold">
          <span className="font-bold">Catch Basin</span> - $175.00/service call and $0.28 per gallon
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-center text-xl font-semibold mb-4">Emergency Fees</h2>
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

      <div className="bg-gray-100 rounded-lg p-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center bg-gray-200/70 p-3 rounded-md">
            <Mail className="h-6 w-6 text-gray-700 mr-3" />
            <div>
              <div className="font-semibold">Mail Us</div>
              <div className="text-gray-700">evergreensepticservicellc@gmail.com</div>
            </div>
          </div>

          <div className="flex items-center bg-gray-200/70 p-3 rounded-md">
            <Phone className="h-6 w-6 text-gray-700 mr-3" />
            <div>
              <div className="font-semibold">Call Us</div>
              <div className="text-gray-700">+1 262-248-4711</div>
            </div>
          </div>

          <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">GET A FREE QUOTE</Button>
        </div>
      </div>

      <div className="text-center text-sm text-gray-700">
        <p>Phone: 262-248-4711 (during normal business hours, Monday-Friday, 8 AM to 4 PM)</p>
        <p>Emergency Number: 262-949-3555</p>
      </div>
    </div>
  )
}
