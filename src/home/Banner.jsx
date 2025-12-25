import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-[#f5f8f7]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1f6f63] leading-tight">
            Trusted Home Care <br />
            For Your Loved Ones
          </h1>

          <p className="mt-5 text-slate-600 max-w-xl">
            We provide reliable baby care, elderly care, and sick patient support
            so your family can live safely and comfortably at home. Our trained
            caregivers ensure compassion, dignity, and peace of mind every day.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className="bg-[#1f6f63] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#18594f] transition"
            >
              Book a Free Consultation
            </Link>

            <Link
              href="/services"
              className="border border-[#1f6f63] text-[#1f6f63] px-6 py-3 rounded-md font-semibold hover:bg-[#1f6f63] hover:text-white transition"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://parentishealth.com/wp-content/uploads/2022/04/Making-the-Most-of-Home-Care-Feature-1024x716.jpeg"
            alt="Home Care Service"
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
