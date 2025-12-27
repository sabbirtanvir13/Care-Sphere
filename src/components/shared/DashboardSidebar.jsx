// import Link from 'next/link';
// import React from 'react';

// const DashboardSidebar = () => {
//     return (
//         <div className='w-[200px] bg-amber-600 px-3 py-4 h-screen fixed top-0 left-0'>
//               <h2>Care Sphere</h2>

//                <Link href={'/'}>
//                    <img  className='h-[60px] w-[60px]' 
//                     src="https://media.licdn.com/dms/image/v2/C4E0BAQF99DX_ZaqL6Q/company-logo_200_200/company-logo_200_200/0/1630639730826/carespherehc_logo?e=2147483647&v=beta&t=GdS2HNKaYFAuepJGnugra8XTAmxhmr8GQtFD9ks5EjM" 
//                     alt="" />

//                </Link>
//                {/* https://ibb.co/cK3b8nZ6 */}

//             <div className="flex flex-col gap-2 mt-7">
//                 <Link href={'/'}>Home</Link>
//                 <Link href={'/'}>Profile </Link>
//                 <Link href={'/My-bookings '}>My-booking</Link>
//             </div>
//         </div>
//     );
// };

// export default DashboardSidebar;


import Link from "next/link";
import {
    Home,
    User,
    CalendarCheck,
    LogOut,
} from "lucide-react";
import Image from "next/image";

const DashboardSidebar = () => {
    return (
        <aside className="fixed top-0 left-0 h-screen w-[240px] bg-gradient-to-b from-[#1f6f63] to-[#134e4a] text-white shadow-xl">

            {/* Logo Section */}
            <div className="flex items-center gap-3 px-5 py-6 border-b border-white/20">
                <Image
                    src="https://i.ibb.co/cK3b8nZ6/care-logo.png"
                    alt="CareSphere"
                    width={40}
                    height={40}
                    className="rounded-full bg-white p-1"
                />

                <h2 className="text-xl font-bold tracking-wide">
                    CareSphere
                </h2>
            </div>

            {/* Menu */}
            <nav className="flex flex-col gap-2 px-4 py-6 text-sm font-medium">

                <Link
                    href="/"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition"
                >
                    <Home size={18} />
                    Home
                </Link>

                <Link
                    href="/dashboard/profile"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition"
                >
                    <User size={18} />
                    Profile
                </Link>

                <Link
                    href={'/My-bookings '}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition"
                >
                    <CalendarCheck size={18} />
                    My Bookings
                </Link>
            </nav>

            {/* Bottom */}
            <div className="absolute bottom-6 left-0 w-full px-4">
                <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm font-semibold">
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default DashboardSidebar;
