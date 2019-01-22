import React, { Component } from 'react';
import './QuizButtons.css'
import { renderQuiz } from '../../store/reducer';

class QuizButtons extends Component {

  //when a QuizButton is clicked it's ID
  //is used to find the quiz to render
  handleSubmit = (event) => {
    //console.log(event.target.id)
    this.props.quizThunk(event.target.id)
  }

  render() {
    return (
      <div className="quiz-buttons" onClick={(event) => {this.handleSubmit(event)}}>
        {this.props.quizTitlesAndIds.map((quiz) => {
          return (
            <button id={quiz.id}>{quiz.title}</button>
          )
        })}
      </div>
    )
  }
}

export default QuizButtons;