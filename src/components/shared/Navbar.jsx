"use client";

import Link from 'next/link';
import React from 'react';
import logo from '../../assest/img/Colorful Illustration Foundation Logo.png'
const Navbar = () => {

    
    const link=(
      <>
      
        <li className="text-black">  <Link href="/">Home</Link></li>
            <li className="text-black"><Link href="/services">services</Link></li>
            <li className="text-black"><Link href="/reviews">Reviews</Link></li>
            <li className="text-black"><Link href="/AboutUs">About us</Link></li>

      
      </>
    )
      
    

     
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {
        link
       }
      </ul>
    </div>
    <img src='https://media.licdn.com/dms/image/v2/C4E0BAQF99DX_ZaqL6Q/company-logo_200_200/company-logo_200_200/0/1630639730826/carespherehc_logo?e=2147483647&v=beta&t=GdS2HNKaYFAuepJGnugra8XTAmxhmr8GQtFD9ks5EjM' className="btn h-[60px] w-[60px] btn-ghost text-xl"></img>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        link
      }
    </ul>
  </div>
  <div className="navbar-end">
  <Link href={'/login'}>
   <button className=' btn btn-primary'>Login</button>
  </Link>
  </div>
</div>
    );
};

export default Navbar;