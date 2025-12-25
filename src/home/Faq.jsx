
const faqs = [
  {
    q: "How do I book a care service?",
    a: "Simply choose a service, select duration & location, and confirm booking."
  },
  {
    q: "Are caretakers verified?",
    a: "Yes, all caregivers are trained, background-checked and verified."
  },
  {
    q: "Can I cancel a booking?",
    a: "Yes, you can cancel from My Bookings page before confirmation."
  },
  {
    q: "Is emergency care available?",
    a: "Yes, we provide emergency home care services 24/7."
  }
];

export default function Faq() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <details
              key={index}
              className="bg-white p-5 rounded-lg shadow cursor-pointer"
            >
              <summary className="font-semibold text-lg">
                {item.q}
              </summary>
              <p className="mt-3 text-gray-600">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
