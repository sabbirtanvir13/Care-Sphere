// "use client";

// import React, { createContext, useState } from 'react';
// const UserContext= createContext(null)
// const UserContextProvider = ({children}) => {
//     const [user,setUser]=useState(null)
//     const value={
//         user,
//         setUser
//     }
   
//     // return <UserContext.Provider value={value}> {children}</userContext.Provider>

// };

// export default UserContextProvider;

"use client";
import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = {
    user,
    setUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;