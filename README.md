# Overview

This project helps people to improve their soft-skills by learning courses and practice using interactive exercises. MVP contains couple of courses about Cognitive Behavioral Therapy and interactive diary for tackling negative thoughts.

Technologies: React v.17.0.2 + Bootstrap 5.0.2

Hooks: useState, useRef, useContext/Context API, useRef, useHistory

# Structure

There are several main sections: 

- HomePage
- Corses
- Tackling negative thoughts form
- Tackling negative thoughts diary notes

## Homepage

Homepage contains several content-based components: Hero, CustomCards, Featurette, Topics, HomeModal. Most of the content is static, but there are couple interactive parts — Topics (using [Bootstrap Accordion component](https://react-bootstrap.netlify.app/components/accordion/)) and HomeModal (using [Bootstrap Modal component](https://react-bootstrap.netlify.app/components/modal/#modals)).

## Courses

Courses section contains three levels: 

1. Courses overview (using [Bootstrap Jumbotron](https://getbootstrap.com/docs/5.1/migration/#jumbotron))
2. SingleCourse - cards for each article
3. Article Page - Article and Article standart.

There are 2 different components for articles, because they have different data structure. 

All content for those pages stored in data.js.

## Tackling Negative Thoughts

User can work with his negative thoughts using special form (Guide.js). After submitting the form, user can see his note (Note.js). Also he can see all of his notes (Notes.js) and delete them if needed.