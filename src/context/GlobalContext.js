import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [currentMenu, setCurrentMenu] = useState("Dashboard");

    return (
        <GlobalContext.Provider value={{ isSideBarOpen, setIsSideBarOpen, currentMenu, setCurrentMenu  }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobal = () => useContext(GlobalContext);
