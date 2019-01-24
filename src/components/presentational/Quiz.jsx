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
    this.setState({ userResult: this.state.userResult + weight })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //use this.state.userResult to find result in results array
    //pass result to submitanswers
    //if this array includes userResult:
    this.props.quizResults.forEach(res => {
      res.search == this.state.userResult ? this.props.submitAnswers(res.result) : console.log("nope")
    });
  }

  render() {
    return (
      <div>
        <QuizButtons 
          quizTitlesAndIds={this.props.quizTitlesAndIds} 
          quizThunk={this.props.quizThunk}
          handleClick={this.handleClick}
        />
        <div className="quiz">
          <h1>{this.props.quizTitle}</h1>
          <form onSubmit={(e) => {this.handleSubmit(e)}}>
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
          </form>
          {this.props.submitButton ? <button className="btn">Submit</button> : null}
          {this.props.resultRender ? <div className="result">Result ==>{this.props.returnUserResult}</div> : null}
        </div>
      </div>
    );
  }
}
  
  export default Quiz;