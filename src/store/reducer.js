import axios from 'axios';

//action types
export const SUBMIT = "SUBMIT";
export const RENDERQUIZ = "RENDERQUIZ";
export const GET_TITLES = "GET_TITLES";

//action creators
export const getTitles = (titles) => {
  return {
    type: "GET_TITLES",
    quizTitlesAndIds: titles
  }
}

export const submitAnswers = () => {
  return {
    type: "SUBMIT",
    resultRender: true
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
  console.log("fetching quiz id: ", quizId)
  return (
    axios.all([
      axios.get(`http://localhost:3001/quizques?id=${quizId}`),
      axios.get(`http://localhost:3001/quizres?id=${quizId}`)
    ]) 
    .then(axios.spread( (questionResp, resultResp) => {
      console.log("question response: ", questionResp.data, "result response: ", resultResp.data)
      dispatch(renderQuiz(questionResp.data, resultResp.data, title))
    }))
  )
  //this thunk fetches quiz questions, answers and results
  //from db when a QuizButton button is clicked
}

export const initialRender = () => (dispatch) => {
  return (
    axios.get(`http://localhost:3001/quizlist`)
    .then(response => {
      dispatch(getTitles(response.data))
    })
  )
}

//initial state
const initialState = {
  quizTitlesAndIds: [
    // {"title":"Which Disney princess are you?", "id":"1"}, 
    // {"title":"Which one of Ilana's pets are you?", "id":"2"}
    // this should not be altered by action creators -
    // it should be loaded once when the website first loads
  ],
  quizTitle: "^^^ Choose a Quiz ^^^",
  quizQuestionsAndAnswers: [
  //   {"question":"Do you like China?", "answers":{"yes":"1", "no":"2", "maybe":"3"}}, 
  //   {"question":"Do you like animals?", "answers":{"yes":"1", "no":"2", "maybe":"3"}}, 
  //   {"question":"Are you outdoorsy?", "answers":{"yes":"1", "no":"2", "maybe":"3"}}
  ],
  resultRender: false,
  quizResults: [
  //   {"result":"Ariel", "gif": "giphy.com/ariel"},
  //   {"result":"Jasmine", "gif": "giphy.com/jasmine"},
  //   {"result":"Cinderella", "gif": "giphy.com/cinderella"}
  ]
}

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_TITLES":
      return Object.assign({}, state, {
        quizTitlesAndIds: action.quizTitlesAndIds
      })
    case "SUBMIT":
      return Object.assign({}, state, {
        resultRender: action.resultRender
      })
    case "RENDERQUIZ":
      return Object.assign({}, state, {
        resultRender: false,
        quizTitle: action.quizTitle,
        quizQuestionsAndAnswers: action.quizQuestionsAndAnswers,
        quizResults: action.quizResults
      })
    default:
      return state;
  }
}