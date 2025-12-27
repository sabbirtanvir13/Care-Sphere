

import { getAllServices } from "@/actions/server/services";
import ServicesSearching from "./ServicesSearching";
import ServicesCard from "./_component/ServicesCard";

export const metadata = {
  title: "Services",
  description: "care service system",
};


const ServicesPage = async ({ searchParams }) => {
  // ✅ Promise unwrap
  const params = await searchParams;
  const searchTerm = params?.searchTerm || "";

  const services = await getAllServices(searchTerm);
   


  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">
        Our Care Services
      </h2>

      {/* ✅ Search bar */}
      <ServicesSearching />

      {services.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No services found
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {services.map((service) => (
            <ServicesCard key={service._id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
