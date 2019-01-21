import React, { Component } from 'react';
import './App.css';
import { VisibleQuiz } from './components';
import { Footer } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Quiz App</header>
        <VisibleQuiz />
        <Footer />
      </div>
    );
  }
}

export default App;
