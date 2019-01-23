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
        <QuizButtons 
          quizTitlesAndIds={this.props.quizTitlesAndIds} 
          quizThunk={this.props.quizThunk}
        />
        <div className="quiz">
          <h1>{this.props.quizTitle}</h1>
          <form onSubmit={(e) => {this.handleSubmit(e)}}>
          BEGIN FORM
          {this.props.quizQuestionsAndAnswers.map( (qAndA) => { 
            return (
              <Question 
                question={qAndA.question} 
                answers={JSON.parse(qAndA.answers)} 
                weights={Object.values(JSON.parse(qAndA.answers))}
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