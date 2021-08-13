import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from './Pages/Error';
import Notes from './Pages/Notes';
import Note from './Pages/Note';
import Guide from "./Components/Guide";
import Home from './Pages/Home';
import Course from './Pages/Course';
import Article from './Pages/Article';
import ArticleStandard from './Pages/ArticleStandard';
import SingleCourse from './Pages/SingleCourse';
import Navigation from './Components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/mental-tools">
          <Home />
        </Route>
        <Route exact path="/mental-tools/course">
          <Course />
        </Route>
        <Route exact path="/mental-tools/course/:id" children={<SingleCourse />} />
        <Route exact path="/mental-tools/course/tackling-negative-thoughts/:id" children={<ArticleStandard />} />
        <Route exact path="/mental-tools/course/cognitive-distortions/:id" children={<Article />} />
        <Route exact path="/mental-tools/guide">
          <Guide />
        </Route>
        <Route exact path="/mental-tools/notes">
          <Notes />
        </Route>
        <Route exact path="/mental-tools/note/:id" children={<Note />} />

        <Route path="*">
          <Error />
        </Route>

      </Switch>
    </Router>


  );
}

export default App;
