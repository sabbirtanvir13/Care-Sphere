// components/Newsletter.jsx
export default function Newsletter() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl text-[#1f6f63]  font-bold mb-4">
          Stay Updated with Care.xyz
        </h2>
        <p className="mb-8 text-[#1f6f63] ">
          Subscribe to get caregiving tips, service updates & special offers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 border rounded-lg w-full sm:w-80 text-[#1f6f63] outline-none"
          />
          <button className="bg-white text-teal-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
