import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = 'lois';
  render() {
    return (
      <div>
        hello my first class based component {this.c}
      </div>
    )
  }
}
