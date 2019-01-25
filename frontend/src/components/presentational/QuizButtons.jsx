import React, { Component } from 'react';
import './QuizButtons.css'

class QuizButtons extends Component {

  //when a QuizButton is clicked it's ID
  //is used to find the quiz to render
  handleSubmit = (event) => {
    this.props.quizThunk(event.target.id, event.target.value)
  }

  render() {
    if (this.props.quizTitlesAndIds.length) {
      return (
        <div className="quiz-buttons" onClick={(event) => {this.handleSubmit(event)}}>
          {this.props.quizTitlesAndIds.map( (quiz) => {
            return (
              <button onClick={this.props.handleClick} className="btn" value={JSON.parse(quiz.info).title} id={JSON.parse(quiz.info).id}>
                {JSON.parse(quiz.info).title}
              </button>
            )
          })}
        </div>
      )
    }
    else {
      return (
        <div className="quiz-buttons"></div>
      )
    }
  }
}

export default QuizButtons;