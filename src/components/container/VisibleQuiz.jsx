// import React, { Component } from 'react';
import '../../App.css';
import Quiz from '../presentational/Quiz'
import { connect } from 'react-redux';

/* grab things from state*/
const mapStateToProps = (state) => {
    return {
        quizTitle: state.quizTitle,
        quizID: state.quizID,
        quizQuestionsAndAnswers: state.quizQuestionsAndAnswers,
        resultRender: state.resultRender,
        quizResult: state.quizResult
    } 
}

/* grab creators */
const mapDispatchToProps = (dispatch) => {
    return {
        submitAnswers: (result) => { dispatch({type: "SUBMIT", quizResult: result}) }
    } 
}  

const VisibleQuiz = connect(mapStateToProps, mapDispatchToProps)(Quiz)

export default VisibleQuiz;