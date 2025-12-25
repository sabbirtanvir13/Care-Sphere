// components/Emergency.jsx
import { PhoneCall, Clock, Ambulance, MapPin, Stethoscope } from "lucide-react";

export default function Emergency() {
  return (
    <section className="bg-[#F3FAF8] py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            Emergency Home Care Service
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Need immediate care for your loved one? Our trained professionals
            are available <span className="font-semibold">24/7</span> to support you during
            emergency situations at home.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Ambulance className="text-red-500" size={22} />
              <span>Rapid Response Care</span>
            </li>

            <li className="flex items-center gap-3">
              <Stethoscope className="text-green-600" size={22} />
              <span>Trained Medical Professionals</span>
            </li>

            <li className="flex items-center gap-3">
              <Clock className="text-blue-600" size={22} />
              <span>24/7 Availability</span>
            </li>
          </ul>

          <button className="mt-8 inline-flex items-center gap-2 bg-red-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
            <PhoneCall size={20} />
            Call Emergency Care
          </button>
        </div>

        {/* Right Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-red-100">
          <h3 className="text-2xl font-semibold mb-5 text-gray-800">
            Emergency Contact
          </h3>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <PhoneCall className="text-red-600" />
              <span>
                Hotline:{" "}
                <span className="font-bold text-gray-900">
                  +880 1234-567890
                </span>
              </span>
            </p>

            <p className="flex items-center gap-3">
              <MapPin className="text-green-600" />
              <span>Available in all major cities</span>
            </p>
          </div>

          <div className="mt-6 bg-red-50 p-4 rounded-lg text-sm text-red-700">
            ⚠️ For life-threatening emergencies, please contact local emergency
            services immediately.
          </div>
        </div>

      </div>
    </section>
  );
}
