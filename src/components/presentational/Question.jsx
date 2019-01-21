import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
   
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  
  render() {
    return (
      <div className="question">
        {this.props.question} 
        {this.props.answers.map( function(answer) {
            return (
              <div className="answer">
                {answer[0]}
                <input type="radio" name="selection"></input>
              </div>
            );
        })};
      </div>
    );
  }
}
  
  export default Question;