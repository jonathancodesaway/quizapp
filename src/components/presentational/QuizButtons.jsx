import React, { Component } from 'react';
import './QuizButtons.css'

class QuizButtons extends Component {

    handleClick = (id) => {
        console.log(id)
    }

    render() {
        return (
            <div className="quiz-buttons">
                {this.props.quizTitlesAndIds.map( (quiz) => {
                    return (
                        <button id={quiz.id} onclick={this.handleClick(this.id)}>{quiz.title}</button>
                    )
                })}
            </div>
        )
    }
}

export default QuizButtons;