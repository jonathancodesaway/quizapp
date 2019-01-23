import '../../App.css';
import Quiz from '../presentational/Quiz'
import { connect } from 'react-redux';
import { submitAnswers, quizThunk } from '../../store/reducer'
//import submitAnswers action creator

/* grab things from state*/
const mapStateToProps = (state) => {
  return {
    quizTitlesAndIds: state.quizTitlesAndIds,
    quizTitle: state.quizTitle,
    quizID: state.quizID,
    quizQuestionsAndAnswers: state.quizQuestionsAndAnswers,
    resultRender: state.resultRender,
    quizResults: state.quizResults
  } 
}

/* grab action creators */
const mapDispatchToProps = (dispatch) => {
  return {
    submitAnswers: () => { dispatch(submitAnswers()) },
    quizThunk: (id, title) => { dispatch(quizThunk(id, title)) }
  } 
}  

const VisibleQuiz = connect(mapStateToProps, mapDispatchToProps)(Quiz)

export default VisibleQuiz;