export const courses = [{
    courseTitle: 'Когнитивные искажения',
    courseDescription: 'Когнитивное искажение — это систематические ошибки в мышлении. Под воздействием когнитивных искажений формируется «субъективная социальная реальность», которая влияет на поведение человека. Умение определять когнитивные искажения и очищать от них свои мысли помогает значительно снизить количество и силу негативных эмоций. ',
    courseArticles: [
        {
            id: 'Catastrophizing',
            title: 'Катастрофизация',
            imgLink: 'https://images.pexels.com/photos/6246136/pexels-photo-6246136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            engName: 'Magnification (Catastrophizing) / Minimization / Binocular Trick',
            description: 'Когда человек преувеличивает или приуменьшает значение, важность и вероятность событий. Он верит в самый худший сценарий и считает его наиболее вероятным исходом. Приравнивает свою гипотезу к факту. Он постоянно думает «Что, если произойдет худшее?»',
            examples: [
                '«Если я начну играть в футбол, то сломаю ногу»',
                '«Если выступлю публично — меня раскритикуют, я опозорюсь перед всеми»',
                '«Она опаздывает, а на улице дождь, видимо она попала в аварию и разбилась насмерть»',
                '«У меня не получится сделать этот проект»',
                '«Я никогда не буду успешным и всю свою жизнь буду работать в фаст-фуде»'
            ]
        },
        {
            id: 'Black-and-white-thinking',
            title: 'Черно-белое мышление',
            imgLink: 'https://images.unsplash.com/photo-1472566316349-bce77aa2a778?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            engName: 'All-or-Nothing Thinking / Polarized Thinking / Black-and-White Thinking',
            description: 'Когда человек мыслит экстремумами и впадает в крайности: либо всё, либо ничего; либо всегда, либо никогда; либо плохо, либо хорошо; я или совершенен, или неудачник; этот объект либо абсолютно восхитителен, либо ужасен. ',
            examples: [
                '«Если я не могу сделать это идеально / если я не смогу починить всё за раз — тогда вообще нет смысла пытаться и что-то делать»',
                'Женщина съедает ложку мороженого. Она считает себя полной неудачницей из-за нарушения диеты. В конце концов съедает целое ведро мороженого',
                '«Я всегда проваливаюсь, когда пробую делать что-то новое»',
                'Когда студент получает тройку по высшей математике он думает, что завалил сессию',
                '«Ты никогда меня не слушаешь»',
                '«Я единственный человек в этой комнате, который доводит дела до конца»',
                '«Мой руководитель — некомпетентный придурок, так как грубит мне и сам не может нормально сделать даже простейшую задачу. Ненавижу свою работу, это худшая работа в мире»'
            ]
        },
        {
            id: 'Emotional-Reasoning',
            title: 'Эмоциональное рассуждение',
            imgLink: 'https://images.pexels.com/photos/6199708/pexels-photo-6199708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            engName: 'Emotional Reasoning',
            description: 'Когда человек считает, что его чувства  в точности отражают реальность: «Я чувствую, что это так, следовательно, это правда»',
            examples: [
                '«Я чувствую сильную тревогу, следовательно, у меня паническая атака»»',
                'Человек чувствует себя глупо, и думает «я - тупица»',
                'Ребенок испытывает стресс в школе, и думает «учитель дает нам слишком много домашней работы»',
                'Чувствуете себя тревожно в обществе других людей и думаете «со мной что-то не так, я ненормальный человек, никто не хочет со мной общаться»'
            ]
        },
        {
            id: 'Labeling',
            title: 'Навешивание ярлыков',
            imgLink: 'https://images.pexels.com/photos/6199708/pexels-photo-6199708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            engName: 'Labeling / Mislabeling',
            description: 'Когда на основе небольшой выборки ситуаций мы оцениваем личность в целом. Негативные ярлыки связаны с применением высоко-эмоциональной, неточной и необоснованной оценки.',
            examples: [
                'Человек допустил ошибку. Вы думаете «он полный идиот»',
                'Ребенок принимает неудачное решение. Вы думаете «он плохой ребенок»',
                'Вы не можете найти работу и думаете про себя «я бесполезный, некомпетентный и никто меня не возьмет на эту должность» ',
                '«Он не поблагодарил меня за приготовленную еду, следовательно, он эгоист»'
            ]
        },
        {
            id: 'Mental-filtering',
            title: 'Ментальный фильтр',
            imgLink: 'https://images.pexels.com/photos/4178738/pexels-photo-4178738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            engName: 'Magnification of negative / Minimization of the positive',
            description: 'Когда человек фокусируется на негативной стороне и минимизирует позитивную. Он уделяет больше внимания возможным неудачам, слабостям или угрозам. И недооценивает успехи, возможности, сильные стороны.  Это приводит к чрезмерно пессимистичному взгляду на окружающий мир.',
            examples: [
                '«Во время презентации я допустил пару ошибок и чувствую себя неловко из-за того, что напортачил. Коллеги похвалили меня просто из вежливости»',
                '«Я сделал этот проект, но можно было сделать его намного быстрее»',
                'Девушка за день получила несколько комплиментов, но один человек дал негативную обратную связь. Следующие несколько дней она думает только о критике, забывая обо всех комплиментах. ',
                'Сотрудник игнорирует хорошие поступки своего руководителя и замечает только ошибки. ',
                'Мужчина сожалеете о своем поступке в последних отношениях и считает себя подлецом, хотя в предыдущих отношениях всё было хорошо. '
            ]
        },
        {
            id: 'Fortune-Telling',
            title: 'Предсказание будущего',
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
            description: 'Когда человек уверен, что знает, о чем думают и что чувствуют другие люди по отношению к нему. Например, предполагает, что, поскольку он сидит за обедом один, все остальные считают его неудачником. Это может стать само-исполняющимся пророчеством — он не инициирует социальный контакт из-за своего страха, и из-за этого окружающие воспринимают его негативно.',
            examples: [
                '«У человека неприятное выражение лица, потому что он плохо обо мне думает»',
                '«Соседка со мной не поздоровалась. Я абсолютно уверен, что она меня ненавидит»',
                '«Мой босс думает, что я некомпетентный и хочет меня уволить»',
                '«Меня все осуждают»'
            ]
        },
        {
            id: 'Overgeneralization',
            title: 'Чрезмерное обобщение',
            imgLink: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            engName: 'Generalising / Categorising / Overgeneralization',
            description: 'Когда человек по одной частной ситуации делает чрезмерно обобщенный вывод. Случилось что-то плохое — значит, это будет происходить снова и снова. Чрезмерное обобщение может привести к чрезмерно негативным мыслям о себе и своем окружении, основанным только на одном или двух переживаниях.',
            examples: [
                'Молодую женщину приглашают на первое свидание, но не зовут на второе. Она в отчаянии говорит подруге: «со мной всегда так! Я никогда не найду любви!»',
                'Сотрудник допускает ошибку на работе и думает, что он «некомпетентен» и «непрофессионал»',
                '«Я проиграл в теннисном матче два раза подряд, значит теннис — не для меня»',
                '«Мне вечно не везет»'
            ]
        },
        {
            id: 'Personalization',
            title: 'Персонализация',
            imgLink: 'https://images.unsplash.com/photo-1520206319821-0496cfdeb31e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            engName: 'Personalization / Blaming',
            description: 'Когда человек принимает все на личный счет и приписывает себе вину за ситуации, где нет логических оснований полагать, что виноват именно он. Если происходит что-то плохое — это из-за его ошибок. Если кто-то расстроился — то из-за его поступков. Человек берет на себя ответственность за обстоятельства, на которые вне его контроля и на которые он даже не влияет. ',
            examples: [
                '«Они в плохом настроении, потому что я их раздражаю» (а не потому, что они перегружены работой)',
                '«У него пригорела еда из-за моего опоздания»  (а не потому, что он не уследил за приготовлением)',
                '«Если мой ребенок плохо себя ведет, это потому что я — плохая мать» (а не потому, что у него переходный возраст и конфликт с друзьями) ',
                '«Если мой босс кричит на меня, это потому что я облажался» (а не потому, что  у него плохие навыки менеджмента) ',
                '«Если кассирша нагрубила мне, это потому что она меня не уважает» (а не потому, что у нее сегодня умер домашний питомец) '
            ]
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
}]