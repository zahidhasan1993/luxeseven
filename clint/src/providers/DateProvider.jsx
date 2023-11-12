import { createContext, useState } from "react";

export const BookingProvider = createContext();
const DateProvider = ({children}) => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    
    const data = {
        checkIn,
        checkOut,
        setCheckIn,
        setCheckOut
    }

    return (
        <BookingProvider.Provider value={data}>
            {children}
        </BookingProvider.Provider>
    );
};

export default DateProvider;