'use client'

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-emerald-600 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Trusted by Thousands of Families
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white/10 p-8 rounded-2xl">
            <h3 className="text-4xl font-bold">10K+</h3>
            <p className="mt-2 text-sm">Happy Families</p>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl">
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="mt-2 text-sm">Verified Caregivers</p>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl">
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="mt-2 text-sm">Positive Reviews</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
