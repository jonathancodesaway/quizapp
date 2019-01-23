import React, { Component } from 'react';
import './App.css';
import { VisibleQuiz, Footer } from './components';
import { connect } from 'react-redux';
import { initialRender } from './store/reducer'

class App extends Component {
  
  componentDidMount() {
    this.props.initialRender()
    // let url = `http://localhost:3001/quizlist`
    // axios.get(url)
    // .then(response => {
    //   //this.props.quizTitlesAndIds: response.data
    //   response.data.map( (obj) => {
    //     console.log(JSON.parse(obj.info).title)
    //     this.props.quizTitlesAndIds.push(JSON.parse(obj.info))
    //   })
    //   // access titles from quizTitlesAndIds like so:
    //   // console.log(this.props.quizTitlesAndIds[0].title)
    //   // and IDS:
    //   // console.log(this.props.quizTitlesAndIds[0].id)
    // })
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    initialRender: () => { dispatch(initialRender()) }
  } 
}  

const appContainer = connect(null, mapDispatchToProps)(App)
export default appContainer;
