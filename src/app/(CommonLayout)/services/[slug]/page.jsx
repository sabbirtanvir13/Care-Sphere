import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { getSingleServiceBySlug } from "@/actions/server/services";
import Bookingbtn from "../Bookingbtn";

export default async function ServiceDetailsPage({ params }) {
  const { slug } = await params;
  const service = await getSingleServiceBySlug(slug);

  if (!service?.name) {
    return <p className="text-center py-20">Service not found</p>;
  }

  const {
    name,
    description,
    image,
    pricePerHour,
    pricePerDay,
    features,
    category,
    _id,
  } = service;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow">
          <Image
            src={image}
            alt={name}
            width={600}
            height={420}
            className="w-full h-[420px] object-cover"
            priority
          />
        </div>

        {/* Info */}
        <div>
          <span className="inline-block mb-3 bg-[#1f6f63]/10 text-[#1f6f63] px-4 py-1 rounded-full text-sm">
            {category}
          </span>

          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <p className="text-gray-600 mb-6">{description}</p>

          <div className="flex gap-6 mb-6">
            <div>
              <p className="text-sm text-gray-500">Per Hour</p>
              <p className="text-2xl font-bold text-primary">
                ৳{pricePerHour}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Per Day</p>
              <p className="text-2xl font-bold text-primary">
                ৳{pricePerDay}
              </p>
            </div>
          </div>

       <Bookingbtn  service={ service}></Bookingbtn>
        </div>
      </div>

      {features?.length > 0 && (
        <div className="mt-14">
          <h2 className="text-2xl font-semibold mb-6">
            Why Choose This Service?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex gap-3 p-5 border rounded-xl">
                <CheckCircle className="text-primary mt-1" />
                <p>{f}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
