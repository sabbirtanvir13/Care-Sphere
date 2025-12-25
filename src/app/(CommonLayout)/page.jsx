import Banner from "@/home/Banner";
import Emergency from "@/home/Emergency";
import Faq from "@/home/Faq";

import Newsletter from "@/home/Newsletter";
import WhyChooseCare from "@/home/WhyChooseCare";

export default function HomePage() {
  return (
    <div className="min-h-screen p-10">
      <section>
        <Banner></Banner>
        <WhyChooseCare></WhyChooseCare>
           <Newsletter></Newsletter>
          <Faq></Faq>
           <Emergency></Emergency>

      </section>
    </div>
  );
}
