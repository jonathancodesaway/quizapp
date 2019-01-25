import React, { Component } from 'react';
import './App.css';
import { VisibleQuiz, Footer } from './components';
import { connect } from 'react-redux';
import { initialRender } from './store/reducer'
import axios from 'axios';
const api_key = "gyXFuKBr6kwEzWHJN1VHVq4oY2hI17E4"

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      gifs: [],
      canDisplay: false
    }
  }
  componentDidMount() {
    this.props.initialRender()
    let url = `http://api.giphy.com/v1/gifs/trending?api_key=${api_key}`;
    axios.get(url)
    .then(response => {
      this.setState({
        gifs: response.data,
        canDisplay: true
      })
    })
  }

  render() {
    if (this.state.canDisplay) {
      return (
        <div className="App">
          <header className="App-header">
            <button className="buton" onClick={this.props.initialRender}>Quiz App</button>
            <div className="dropdown">
              <button className="drop-button">=Menu=</button>
              <div className="dropdown-content">
                <p>Login</p>
                <p>Contact</p>
                <p>Logout</p>
              </div>
            </div>  
          </header>
          <VisibleQuiz />
          <div className="Show-gifs">
            {this.state.gifs.data.map( (curGif, index) => {
              return <img src={curGif.images.fixed_height_downsampled.url}></img>
            })}
          </div>
          <Footer />
        </div>
      );
    }
    else {
      return(<div>Loading...</div>)
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initialRender: () => { dispatch(initialRender()) }
  } 
}  

const appContainer = connect(null, mapDispatchToProps)(App)
export default appContainer;
