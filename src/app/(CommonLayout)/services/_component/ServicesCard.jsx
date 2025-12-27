import Image from "next/image";
import { Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";

const ServicesCard = ({ service }) => {
  const {
    name,
    description,
    image,
    pricePerHour,
    pricePerDay,
    features,
    category,
  } = service;

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-[#1f6f63] text-white text-xs font-medium px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {name}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-1 text-sm text-gray-600">
          {features.slice(0, 2).map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <div className="flex items-center justify-between pt-3 border-t">
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="text-lg font-bold text-primary">
              ৳{pricePerHour}
              <span className="text-sm font-medium text-gray-500">/hr</span>
            </p>
          </div>
          <Link  href={`/services/${service.slug}`}>
            <button className="px-4 py-2 text-sm font-medium rounded-lg text-white bg-[#1f6f63] transition">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
