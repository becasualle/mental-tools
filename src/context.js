import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    return <AppContext.Provider value={{ notes, setNotes }}> {children} </AppContext.Provider>
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };