import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
   
  constructor(props) {
    super(props);

    //necessary???
    this.state = {
      answers: [["yes" , 1] , ["no" , 0] ],
      //this.props.answers
    }
  }
  
  render() {
    return (
      <div className="question">
        {this.props.question} 
        {this.state.answers.map(
          function(answer) {
            return (
              <div className="answer">
                {answer[0]}
                <input type="radio"></input>
              </div>
            );
          }
        )};
      </div>
    );
    }
  }
  
  export default Question;