import React, { Component } from 'react';
import Question from '../presentational/Question';
import './Quiz.css';

class Quiz extends Component {
    
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="quiz">
        <h1>{this.props.quizTitle}</h1>
        <Question />
        {this.props.quizQuestionsAndAnswers.map( 
          function(question, answers) { 
            return <Question question={question} answers={answers}/> 
          }
        )};

        {this.props.resultRender ? <div className="result">{this.props.quizResult}</div> : null }
      </div>
    );
    }
  }
  
  export default Quiz;