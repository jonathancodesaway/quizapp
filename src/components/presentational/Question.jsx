import React, { Component } from 'react';
import './Question.css';

class Question extends Component {

  handleChange = (weightIndex) => {
    //find weight of answer in weights array - answers
    //and their weights are at same indices in each array
    this.props.updateUserResult(this.props.weights[weightIndex])
  }

  render() {
    return (
      <div className="question">
        {this.props.question} 
        {this.props.answers.map( (answer, index) => {
            return (
              <div className="answer">
                {answer}
                <input 
                  type="radio" 
                  name="selection" 
                  onChange={() => {this.handleChange(index)}}>
                </input>
              </div>
            )
        })}
      </div>
    );
  }
}
  
  export default Question;