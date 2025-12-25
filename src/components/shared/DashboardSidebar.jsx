import Link from 'next/link';
import React from 'react';

const DashboardSidebar = () => {
    return (
        <div className='w-[200px] bg-amber-600 px-3 py-4 h-screen fixed top-0 left-0'>
              <h2>Care Sphere</h2>
           
               <Link href={'/'}>
                   <img  className='h-[60px] w-[60px]' 
                    src="https://media.licdn.com/dms/image/v2/C4E0BAQF99DX_ZaqL6Q/company-logo_200_200/company-logo_200_200/0/1630639730826/carespherehc_logo?e=2147483647&v=beta&t=GdS2HNKaYFAuepJGnugra8XTAmxhmr8GQtFD9ks5EjM" 
                    alt="" />
               
               </Link>
               {/* https://ibb.co/cK3b8nZ6 */}
            
            <div className="flex flex-col gap-2 mt-7">
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Profile </Link>
                <Link href={'/'}>My-booking</Link>
            </div>
        </div>
    );
};

export default DashboardSidebar;