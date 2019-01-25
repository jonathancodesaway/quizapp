import axios from 'axios';

//action types
export const SUBMIT = "SUBMIT";
export const RENDERQUIZ = "RENDERQUIZ";
export const INITIALIZE = "INITIALIZE";

//action creators
export const initialize = (titles) => {
  return {
    type: "INITIALIZE",
    quizTitlesAndIds: titles
  }
}

export const submitAnswers = (userResult) => {
  return {
    type: "SUBMIT",
    resultRender: true,
    returnUserResult: userResult
  }
}

export const renderQuiz = (questions, results, title) => {
  return {
    type: "RENDERQUIZ",
    quizTitle: title,
    quizQuestionsAndAnswers: questions,
    quizResults: results
  }
}

//thunk creators
export const quizThunk = (quizId, title) => (dispatch) => {
  return (
    axios.all([
      axios.get(`http://18.191.160.220/api/quizques?id=${quizId}`),
      axios.get(`http://18.191.160.220/api/quizres?id=${quizId}`)
    ]) 
    .then(axios.spread( (questionResp, resultResp) => {
      dispatch(renderQuiz(questionResp.data, resultResp.data, title))
    }))
  )
  //this thunk fetches quiz questions, answers and results
  //from db when a QuizButton button is clicked
}

export const initialRender = () => (dispatch) => {
  return (
    axios.get(`http://18.191.160.220/api/quizlist`)
    .then(response => {
      console.log("response: ", response)
      dispatch(initialize(response.data))
    })
  )
}

//initial state
const initialState = {
  quizTitlesAndIds: [],
  quizTitle: "^^^ Choose a Quiz ^^^",
  quizQuestionsAndAnswers: [],
  resultRender: false,
  quizResults: [],
  returnUserResult: "",
  submitButton: false
}

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return Object.assign({}, state, {
        // can i just put initialState here since
        // it's declared as a const variable??
        quizTitlesAndIds: action.quizTitlesAndIds,
        quizTitle: "^^^ Choose a Quiz ^^^",
        quizQuestionsAndAnswers: [],
        resultRender: false,
        quizResults: [],
        returnUserResult: "",
        submitButton: false
      })
    case "SUBMIT":
      return Object.assign({}, state, {
        resultRender: action.resultRender,
        returnUserResult: action.returnUserResult
      })
    case "RENDERQUIZ":
      return Object.assign({}, state, {
        resultRender: false,
        quizTitle: action.quizTitle,
        quizQuestionsAndAnswers: action.quizQuestionsAndAnswers,
        quizResults: action.quizResults,
        submitButton: true
      })
    default:
      return state;
  }
}