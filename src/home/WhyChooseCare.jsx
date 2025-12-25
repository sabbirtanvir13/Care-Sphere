import {
  ShieldCheck,
  UserCheck,
  Clock,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: <UserCheck className="w-10 h-10 text-teal-600" />,
    title: "Experienced Caregivers",
    desc: "Our caregivers are professionally trained, verified, and experienced in providing high-quality care services.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-teal-600" />,
    title: "Personalized Care Plans",
    desc: "We design care plans tailored to the unique needs of children, elderly, and sick individuals.",
  },
  {
    icon: <Clock className="w-10 h-10 text-teal-600" />,
    title: "24/7 Support",
    desc: "Our support team is available around the clock to ensure continuous care and emergency assistance.",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-teal-600" />,
    title: "Trusted by Families",
    desc: "Thousands of families trust Care.xyz for reliable, safe, and compassionate home care services.",
  },
];

const WhyChooseCare = () => {
  return (
    <section className="bg-[#F3FAF8] py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose <span className="text-teal-600">Care.xyz</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence and compassionate care ensures your loved
            ones receive the attention and respect they deserve.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-teal-100 p-4 rounded-full">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCare;
