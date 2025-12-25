"use client";

import Link from 'next/link';

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">Care.xyz</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Care.xyz একটি নির্ভরযোগ্য caregiving প্ল্যাটফর্ম যেখানে আপনি শিশু,
            বৃদ্ধ ও অসুস্থ ব্যক্তির জন্য নিরাপদ ও trusted care service বুক করতে পারবেন।
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/my-bookings" className="hover:text-white">My Bookings</Link></li>
            <li><Link href="/login" className="hover:text-white">Login</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>👶 Baby Sitting</li>
            <li>🧓 Elderly Care</li>
            <li>🏥 Sick Patient Care</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@care.xyz</li>
            <li>Phone: +880 1XXX-XXXXXX</li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-5 text-center text-sm">
        © {new Date().getFullYear()} Care.xyz — All Rights Reserved
      </div>
    </footer>
    );
};

export default Footer;