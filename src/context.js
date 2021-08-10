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

const cognitiveDistortionCourse = {
    courseTitle: 'Когнитивные искажения',
    courseDescription: 'Когнитивное искажение — это систематические ошибки в мышлении. Под воздействием когнитивных искажений формируется «субъективная социальная реальность», которая влияет на поведение человека. Умение определять когнитивные искажения и очищать от них свои мысли помогает значительно снизить количество и силу негативных эмоций. ',
    courseArticles: [
        {
            id: 'Catastrophizing',
            title: 'Катастрофизация',
            imgLink: 'https://images.pexels.com/photos/6246136/pexels-photo-6246136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            engName: 'Magnification (Catastrophizing) / Minimization / Binocular Trick',
            description: 'Когда человек преувеличивает или приуменьшает значение, важность и вероятность событий. ',
            examples: ['«Если я начну играть в футбол — я обязательно сломаю ногу.»', 'Спортсмен, который обычно хорошо выступает, допускает ошибку и делает вывод, что он отвратительный участник команды', 'Спортсмен получает значимую награду, но преуменьшает ее значение и продолжает верить в то, что он посредственный игрок. ']
        },
        {
            id: 'Black-and-white-thinking',
            title: 'Черно-белое мышление',
            imgLink: 'https://images.unsplash.com/photo-1472566316349-bce77aa2a778?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            engName: 'All-or-Nothing Thinking / Polarized Thinking / Black-and-White Thinking',
            description: 'Когда человек в своей оценке впадает в крайности и оценивает объект либо как совершенно восхитительный, либо как совершенно ужасный и исключает из восприятия множество оттенков серого. ',
            examples: ['«Я всегда проваливаюсь, когда пробую делать что-то новое»', 'Женщина съедает ложку мороженого. Она считает себя полной неудачницей из-за нарушения диеты. В конце концов съедает целое ведро мороженого']
        },
        {
            id: 'Emotional-Reasoning',
            title: 'Эмоциональное рассуждение',
            imgLink: 'https://images.pexels.com/photos/6199708/pexels-photo-6199708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            engName: 'Emotional Reasoning',
            description: 'Когда человек приравнивает свои эмоции к фактам: «Я чувствую, что это так, следовательно, это правда»',
            examples: ['«Я испуган, следовательно, у меня паническая атака»', '«Если я чувствую себя глупым, значит я глупый»']
        },
        {
            id: 'Magnification-of-negative',
            title: 'Усиление негатива',
            imgLink: 'https://images.pexels.com/photos/4178738/pexels-photo-4178738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            engName: 'Magnification of negative',
            description: 'Когда человек уделяет чрезмерное внимание возможным неудачам, слабостям или угрозам ',
            examples: ['«Во время презентации я допустил пару ошибок и чувствую себя неловко из-за того, что напортачил»', '«Если я откликнусь на эту вакансию мне точно откажут»']
        },
        {
            id: 'Minimization-of-the-positive',
            title: 'Минимизация позитива',
            imgLink: 'https://images.unsplash.com/photo-1582079768176-2f3305fe11f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            engName: 'Minimization of the positive',
            description: 'Когда человек уделяет недостаточное внимание своим актуальным и потенциальным успехам, возможностям, сильным сторонам',
            examples: ['«Хотя они сделали комплимент моей внешности, наверняка, сказали это из вежливости. На самом деле, я выгляжу ужасно»', '«Ну да, я сделал этот проект, но можно было сделать намного лучше»']
        },
        {
            id: 'Fortune-Telling',
            title: 'Поспешные выводы и предсказание будущего',
            imgLink: 'https://images.unsplash.com/photo-1611721323888-279a6b09960f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            engName: 'Jumping to Conclusions / Fortune Telling',
            description: 'Когда человек склонен делать выводы и прогнозы, основанные на незначительных доказательствах или их отсутствии, и считающие их истиной в последней истанции.  ',
            examples: ['«Я не понравлюсь ей, что бы я ни делал»', '«Я никогда не поправлюсь и всегда буду в депрессии»', 'Одинокая женщина уверена, что никогда не найдет любви, не будет иметь преданных и счастливых отношений, только на основании того факта, что она еще не нашла таких отношений']
        },
        {
            id: 'Mind-Reading',
            title: 'Чтение мыслей',
            imgLink: 'https://images.unsplash.com/photo-1531537571171-a707bf2683da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80',
            engName: 'Jumping to Conclusions / Mind Reading',
            description: 'Когда человек уверен, что знает, о чем думают другие люди. Например, предполагает, что, поскольку он сидит за обедом один, все остальные думают, что он неудачник. Это может стать самоисполняющимя пророчеством — он не инициирует социальный контакт из-за своего страха, и из-за этого окружающие воспринимают его негативно.',
            examples: ['«У человека неприятное выражение лица, потому что он плохо обо мне думает»', '«Соседка со мной не поздоровалась. Я абсолютно уверен, что она меня ненавидит»']
        },
        {
            id: 'Overgeneralization',
            title: 'Чрезмерное обобщение',
            imgLink: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            engName: 'Generalising / Categorising / Overgeneralization',
            description: 'Когда однажды случилось что-то плохое, человек ожидает, что это будет происходить снова и снова. Чрезмерное обобщение может привести к чрезмерно негативным мыслям о себе и своем окружении, основанным только на одном или двух переживаниях.',
            examples: ['«Я проиграл в теннисном матче, значит теннис — не для меня»', '«Я получил тройку на экзамене, значит я провалился, я неудачник»', 'Молодую женщину приглашают на первое свидание, но не зовут на второе. Она в отчаянии говорит подруге: «со мной всегда так! Я никогда не найду любви!»', 'Одинокая женщина проводит большую часть своего времени дома. Друзья иногда приглашают ее на ужин и знакомят с новыми людьми. Она чувствует, что эти попытки бесполезны. На самом деле, она никому не понравится. И вообще, все люди одинаковые — они мелочные и эгоистичные.']
        },
        {
            id: 'Personalization',
            title: 'Обвинение себя',
            imgLink: 'https://images.unsplash.com/photo-1520206319821-0496cfdeb31e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            engName: 'Personalization / Blaming',
            description: 'Когда человек принимает все на личный счет и приписывает себе вину за ситуации, где нет логических оснований полагать, что виноват именно он. ',
            examples: ['«Из-за моего опоздания он не уследил за приготовлением еды»', '«Они в плохом настроении, потому что я их раздражаю»', '«Из-за меня другу не понравилась вечеринка».']
        },
        {
            id: 'Blaming',
            title: 'Обвинение других',
            imgLink: 'https://images.pexels.com/photos/6383206/pexels-photo-6383206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            engName: 'Personalization / Blaming',
            description: 'Когда человек склонен обвинять других людей в том, как устроена его жизнь: это X виноват, что у них проблемы с самооценкой, это Y виноват, что они чувствуют себя подавленными, это Z виноват, что все пошло не по плану.',
            examples: ['«Мой босс виноват, что я не получил повышение»', '«Власть виновата, что я так плохо живу»', '«Из-за мужа у меня проблемы с самооценкой»', '«Мои родители нанесли мне травму и теперь у меня панические атаки из-за них»']
        }
    ]
}


const AppContext = React.createContext();

// const url = 'https://spreadsheets.google.com/feeds/cells/1EWnNdrY6GIjxPb6LOAMvr4mePyIDqaJ4Ph1D4qcLDeE/od6/public/basic?alt=json';

const AppProvider = ({ children }) => {
    const [notes, setNotes] = useState(getLocalStorage());
    const [courses, setCourses] = useState([cognitiveDistortionCourse]);

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


    // useEffect(() => setCourses([cognitiveDistortionCourse]), [])

    return <AppContext.Provider value={{ notes, setNotes, deleteCards, deleteSingleCard, courses, setCourses, cognitiveDistortionCourse }}> {children} </AppContext.Provider>
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };