import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import DetailedPost from './Components/DetailedPost/DetailedPost';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/','/posts']}>
          <Home></Home>
        </Route>
        <Route path="/posts/:id">
          <DetailedPost></DetailedPost>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
