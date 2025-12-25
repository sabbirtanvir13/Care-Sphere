"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function CommonLayout({ children }) {
  return (
    <>
      <Navbar />
    <div className="m-h-[90vh]">{children}</div>
      <Footer />
    </>
  );
}
