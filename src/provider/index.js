import BookingContextProvider from '@/context/booking.context';
import UserContextProvider from '@/context/user.context';
import React from 'react';

const Provider = ({ children }) => {
    return <UserContextProvider>
        <BookingContextProvider>
             {children}
        </BookingContextProvider>
        </UserContextProvider>


};

export default Provider;