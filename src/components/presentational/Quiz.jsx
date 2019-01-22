import React, { Component } from 'react';
import { Question, QuizButtons } from '../index';
import './Quiz.css';

class Quiz extends Component {
    
  //Quiz component keeps track of userResult by
  //passing updateUserResult to Question component.
  //On submit Question uses Quiz's submitFinalResult
  //to render quiz result to user
  constructor() {
    super();

    this.state = {
      userResult: 0,
      quizQuestionsAndAnswers: [ 
        ["question1", [["yes",1], ["no", 2], ["maybe", 3]] ], 
        ["question2", [["yes",1], ["no", 2], ["maybe", 3]] ], 
        ["question3", [["yes",1], ["no", 2], ["maybe", 3]] ] 
      ]
    }
  }

  updateUserResult = (weight) => {
    this.setState({userResult: this.state.userResult + weight})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.submitAnswers()
  }

  render() {
    return (
      <div>
        <QuizButtons quizTitlesAndIds={this.props.quizTitlesAndIds}/>
        <div className="quiz">
          <h1>{this.props.quizTitle}</h1>
          <form onSubmit={(e) => {this.handleSubmit(e)}}>
          BEGIN FORM
          {this.state.quizQuestionsAndAnswers.map( (qAndA) => { 
              return (
                <Question 
                  question={qAndA[0]} 
                  answers={qAndA[1]} 
                  updateUserResult={this.updateUserResult}
                /> 
              )
          })}
          <button>Submit</button>
          END FORM
          </form>
          {this.props.resultRender ? <div className="result">Result:{this.props.quizResult}</div> : null }
        </div>
      </div>
    );
  }
}
  
  export default Quiz;