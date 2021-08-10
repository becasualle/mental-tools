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

// const url = 'https://spreadsheets.google.com/feeds/cells/1EWnNdrY6GIjxPb6LOAMvr4mePyIDqaJ4Ph1D4qcLDeE/od6/public/basic?alt=json';

const AppProvider = ({ children }) => {
    const [notes, setNotes] = useState(getLocalStorage());
    const [articles, setArticles] = useState([]);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         console.log(data)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => { fetchData() }, [url, fetchData]);

    const deleteCards = () => {
        setNotes([]);
    }

    const deleteSingleCard = id => {
        setNotes(notes.filter(note => note.noteID !== id))
    }

    useEffect(() => { localStorage.setItem('notes', JSON.stringify(notes)) }, [notes]);

    return <AppContext.Provider value={{ notes, setNotes, deleteCards, deleteSingleCard, articles, setArticles }}> {children} </AppContext.Provider>
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };