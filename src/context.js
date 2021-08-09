import React, { useState, useContext } from 'react';
import { useEffect } from 'react';


const getLocalStorage = () => {
    let notes = localStorage.getItem('notes');
    if (notes) {
        return JSON.parse(localStorage.getItem('notes'));
    } else {
        return []
    }

};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [notes, setNotes] = useState(getLocalStorage());

    const deleteCards = () => {
        setNotes([]);
    }

    const deleteSingleCard = id => {
        setNotes(notes.filter(note => note.noteID !== id))
    }

    useEffect(() => { localStorage.setItem('notes', JSON.stringify(notes)) }, [notes]);

    return <AppContext.Provider value={{ notes, setNotes, deleteCards, deleteSingleCard }}> {children} </AppContext.Provider>
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };