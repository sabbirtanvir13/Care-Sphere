// "use client";

// import Link from 'next/link';

// import React from 'react';

// const Footer = () => {
//     return (
//         <footer className="bg-gray-900 text-gray-300 mt-20">
//       <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

//         {/* Brand Info */}
//         <div>
//           <h2 className="text-2xl font-bold text-white">Care.xyz</h2>
//           <p className="mt-4 text-sm leading-relaxed">
//             Care.xyz একটি নির্ভরযোগ্য caregiving প্ল্যাটফর্ম যেখানে আপনি শিশু,
//             বৃদ্ধ ও অসুস্থ ব্যক্তির জন্য নিরাপদ ও trusted care service বুক করতে পারবেন।
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><Link href="/" className="hover:text-white">Home</Link></li>
//             <li><Link href="/services" className="hover:text-white">Services</Link></li>
//             <li><Link href="/my-bookings" className="hover:text-white">My Bookings</Link></li>
//             <li><Link href="/login" className="hover:text-white">Login</Link></li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
//           <ul className="space-y-2 text-sm">
//             <li>👶 Baby Sitting</li>
//             <li>🧓 Elderly Care</li>
//             <li>🏥 Sick Patient Care</li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
//           <ul className="space-y-2 text-sm">
//             <li>Email: support@care.xyz</li>
//             <li>Phone: +880 1XXX-XXXXXX</li>
//             <li>Dhaka, Bangladesh</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-700 py-5 text-center text-sm">
//         © {new Date().getFullYear()} Care.xyz — All Rights Reserved
//       </div>
//     </footer>
//     );
// };

// export default Footer;



"use client";

import {
  Mail,
  Phone,
  MapPin,
  Baby,
  HeartPulse,
  UserRound,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-r from-[#0f766e] via-[#115e59] to-[#0f766e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold tracking-wide">
            Care.xyz
          </h2>
          <p className="text-white/80 text-sm leading-relaxed">
            Care.xyz একটি trusted caregiving platform যেখানে baby care,
            elderly care এবং patient care সহজ ও নিরাপদ।
          </p>

          <div className="flex gap-4 pt-2">
            <Facebook className="hover:text-blue-300 cursor-pointer transition" />
            <Instagram className="hover:text-pink-300 cursor-pointer transition" />
            <Twitter className="hover:text-sky-300 cursor-pointer transition" />
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Our Services</h3>

          <div className="flex items-center gap-3 text-white/80 hover:text-white transition">
            <Baby className="text-yellow-300" />
            <span>Baby Care Service</span>
          </div>

          <div className="flex items-center gap-3 text-white/80 hover:text-white transition">
            <UserRound className="text-green-300" />
            <span>Elderly Care</span>
          </div>

          <div className="flex items-center gap-3 text-white/80 hover:text-white transition">
            <HeartPulse className="text-red-300" />
            <span>Sick Patient Care</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">My Bookings</li>
            <li className="hover:text-white cursor-pointer">Login</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>

          <div className="flex items-center gap-3 text-white/80">
            <Mail />
            <span>support@care.xyz</span>
          </div>

          <div className="flex items-center gap-3 text-white/80">
            <Phone />
            <span>+880 1XXX-XXXXXX</span>
          </div>

          <div className="flex items-center gap-3 text-white/80">
            <MapPin />
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Care.xyz — All Rights Reserved
      </div>
    </footer>
  );
}
