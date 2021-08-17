import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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
  // set up routes using HashRouter in order to open and share each link in public version of App
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/course">
          <Course />
        </Route>
        <Route exact path="/course/:id" children={<SingleCourse />} />
        {/* use placeholder for dynamic url params values */}
        <Route exact path="/course/tackling-negative-thoughts/:id" children={<ArticleStandard />} />
        <Route exact path="/course/cognitive-distortions/:id" children={<Article />} />
        <Route exact path="/guide">
          <Guide />
        </Route>
        <Route exact path="/notes">
          <Notes />
        </Route>
        <Route exact path="/notes/note/:id" children={<Note />} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
