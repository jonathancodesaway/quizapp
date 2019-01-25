import Quiz from '../presentational/Quiz'
import { connect } from 'react-redux';
import { submitAnswers, quizThunk } from '../../store/reducer'

const mapStateToProps = (state) => {
  return {
    quizTitlesAndIds: state.quizTitlesAndIds,
    quizTitle: state.quizTitle,
    quizQuestionsAndAnswers: state.quizQuestionsAndAnswers,
    resultRender: state.resultRender,
    quizResults: state.quizResults,
    returnUserResult: state.returnUserResult,
    submitButton: state.submitButton
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitAnswers: (userResult) => { dispatch(submitAnswers(userResult)) },
    quizThunk: (id, title) => { dispatch(quizThunk(id, title)) }
  } 
}  

const VisibleQuiz = connect(mapStateToProps, mapDispatchToProps)(Quiz)

export default VisibleQuiz;