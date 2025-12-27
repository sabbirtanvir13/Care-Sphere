import { Baby, HeartPulse, Stethoscope } from "lucide-react";

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our <span className="text-emerald-600">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Baby Care */}
          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition text-center">
            <Baby className="mx-auto text-emerald-600" size={40} />
            <h3 className="text-xl font-semibold mt-4 mb-2">Baby Care</h3>
            <p className="text-gray-500">
              Loving and professional care for infants and children.
            </p>
          </div>

          {/* Elderly Care */}
          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition text-center">
            <HeartPulse className="mx-auto text-emerald-600" size={40} />
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Elderly Care
            </h3>
            <p className="text-gray-500">
              Compassionate assistance for senior citizens at home.
            </p>
          </div>

          {/* Sick Care */}
          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition text-center">
            <Stethoscope className="mx-auto text-emerald-600" size={40} />
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Sick Patient Care
            </h3>
            <p className="text-gray-500">
              Skilled caregivers for patients recovering at home.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
