import React, { Component } from 'react';
import Question from '../presentational/Question';
import './Quiz.css';

class Quiz extends Component {
    
  //Quiz component calculates userResult and upon submit
  //finds final answer in quizResults array and shows
  //user their result
  constructor() {
    super();

    this.state = {
      //quizQuestionsAndAnswers: [ ["question1", [["yes",0], ["no", 1]] ] ]
    }
  }

  render() {
    return (
      <div className="quiz">
        <h1>{this.props.quizTitle}</h1>
        {this.props.quizQuestionsAndAnswers.map( function(qAndA) { 
            return <Question question={qAndA[0]} answers={qAndA[1]}/> 
        })};
        {this.props.resultRender ? <div className="result">{this.props.quizResult}</div> : null }
      </div>
    );
  }
}
  
  export default Quiz;