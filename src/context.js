import React, { useState, useContext } from 'react';
import { useEffect } from 'react';

// get data from local storage and use as initial state
const getLocalStorage = () => {
    let notes = localStorage.getItem('notes');
    if (notes) {
        return JSON.parse(localStorage.getItem('notes'));
    } else {
        return []
    }

};

// Provide context data to the App (wrapping in index.js)
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    console.log(children);
    // create state for notes that user creates (adding new values logic in Guide.js)
    const [notes, setNotes] = useState(getLocalStorage());

    // user can delete one or all note-cards (logic in Note.js)
    const deleteCards = () => {
        setNotes([]);
    }

    const deleteSingleCard = id => {
        setNotes(notes.filter(note => note.noteID !== id))
    }

    // after first render and each time notes states changes, update data in local storage
    useEffect(() => { localStorage.setItem('notes', JSON.stringify(notes)) }, [notes]);

    return <AppContext.Provider value={{ notes, setNotes, deleteCards, deleteSingleCard }}> {children} </AppContext.Provider>
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };