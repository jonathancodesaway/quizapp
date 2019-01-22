import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
   
  constructor(props) {
    super(props);

    this.state = {

    }

  }

  handleChange = (weight) => {
    this.props.updateUserResult(weight)
  }

  render() {
    return (
      <div className="question">
        {this.props.question} 
        {this.props.answers.map( (answer) => {
            return (
              <div className="answer">
                {answer[0]}
                <input 
                  type="radio" 
                  name="selection" 
                  onChange={
                    () => {this.handleChange(answer[1])}
                  }>
                </input>
              </div>
            )
        })}
      </div>
    );
  }
}
  
  export default Question;