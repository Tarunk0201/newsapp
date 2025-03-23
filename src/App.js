import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div>
         <Router>
        <NavBar />
        <Routes>
          <Route path='/business' element={<News key={"business"} pageSize={6} category="business" />} />
          <Route path='/entertainment' element={<News key={"entertainment"} pageSize={6} category="entertainment" />} />
          <Route path='/health' element={<News key={"health"} pageSize={6} category="health" />} />
          <Route path='/general' element={<News key={"home"} pageSize={6} category="general" />} />
          <Route path='/science' element={<News key={"science"} pageSize={6} category="science" />} />
          <Route path='/sports' element={<News key={"sports"} pageSize={6} category="sports" />} />
          <Route path='/technology' element={<News key={"technology"} pageSize={6} category="technology" />} />
        </Routes>
          </Router>
      </div>
    )
  }
}
