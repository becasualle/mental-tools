import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from './Pages/Error';
import Notes from './Pages/Notes';
import Note from './Pages/Note';
import Guide from "./Components/Guide";
import Home from './Pages/Home';
import Navigation from './Components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/guide">
          <Guide />
        </Route>
        <Route exact path="/notes">
          <Notes />
        </Route>
        <Route exact path="/note/:id" children={<Note />}>
        </Route>
        <Route path="*">
          <Error />
        </Route>

      </Switch>
    </Router>


  );
}

export default App;
