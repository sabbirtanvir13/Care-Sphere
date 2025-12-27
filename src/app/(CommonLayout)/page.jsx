import AboutSection from "@/home/AboutSection";
import Banner from "@/home/Banner";
import Emergency from "@/home/Emergency";
import Faq from "@/home/Faq";

import Newsletter from "@/home/Newsletter";
import ServicesOverview from "@/home/ServicesOverview";
import TestimonialsSection from "@/home/TestimonialsSection";
import WhyChooseCare from "@/home/WhyChooseCare";

export default function HomePage() {
  return (
    <div className="min-h-screen p-10">
      <section>
        <Banner />
      <WhyChooseCare />
      <ServicesOverview />
      <AboutSection />
      <TestimonialsSection />
      <Emergency />
      <Faq />
      <Newsletter />
      </section>
    </div>
  );
}
