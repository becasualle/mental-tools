import { useState } from "react";
import { Container } from "react-bootstrap"
import SingleFeature from "./SingleFeature";

const Featurette = () => {

    const [featuresContent, setFeatureContent] = useState([{
        title: 'Практикуйтесь. ',
        titleMuted: 'Вместо чтения очередной книги.',
        para: 'Написано множество замечательных книг по психологии, переговорам, публичным выступлениям. Проблема лишь в том, что книга не дает вам навыков. Вы прочитали книгу, узнали новую информацию, но в вашей жизни по-большому счету ничего не изменилось. SoftSkill - это игровая площадка для тренировки ваших навыков. Регулярно делайте упражнения, чтобы увидеть изменения. ',
        img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
        imageLeft: false
    }, {
        title: 'Научно обоснованные знания. ',
        titleMuted: 'Вместо некомпетентных коучей, психологов и шарлатанов',
        para: 'Ваш коуч заставляет вас читать стихи в метро и бегать голым вокруг собственного дома, чтобы перестать бояться людей? Ваш психоаналитик уже два года копается в ваших историях из детства и отношениях с родителями, но вы не чувствуете прогресса? В наших психологических упражнениях мы используем подходы из научно доказанного направления когнитивно-поведенческой терапии. А упражнения и статьи по другим темам подкрепляем ссылками на мета-анализы и свежие научные исследования.',
        img: 'https://images.pexels.com/photos/7089290/pexels-photo-7089290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        imageLeft: true
    }, {
        title: 'Бесплатно. ',
        titleMuted: 'Вместо десятков тысяч рублей за тренинги, кусы и сеансы',
        para: 'Мы хотим, чтобы любой человек мог получить помощь и улучшить свои гибкие навыки. Большинство материалов на платформе бесплатны, а дополнительные модули стоят дешевле, чем один сеанс у психотерапевта',
        img: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        imageLeft: false
    }])


    return (
        <Container className="marketing">
            {featuresContent.map((feature, index) => {
                return (
                    <SingleFeature key={index} {...feature} />
                );
            })}
        </Container>
    );
}

export default Featurette;