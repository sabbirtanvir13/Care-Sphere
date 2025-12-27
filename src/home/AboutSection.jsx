const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          About <span className="text-emerald-600">CareSphere</span>
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          CareSphere is built with one mission — to provide safe, trusted and
          professional care services for your loved ones. From baby care to
          elderly and sick patient support, we connect families with verified
          caregivers who truly care.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Trusted Care</h3>
            <p className="text-gray-500">
              Background-verified and trained caregivers.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-500">
              Care available whenever your family needs it.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Affordable</h3>
            <p className="text-gray-500">
              Quality care at reasonable pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
