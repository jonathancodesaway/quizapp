import axios from 'axios';

//action types
export const SUBMIT = "SUBMIT";
export const RENDERQUIZ = "RENDERQUIZ";

//action creators
export const submitAnswers = () => {
  return {
    type: "SUBMIT",
    resultRender: true
  }
}

export const renderQuiz = (title, id, qAndAs, results) => {
  return {
    type: "RENDERQUIZ",
    quizTitle: title,
    quizID: id,
    quizQuestionsAndAnswers: qAndAs,
    resultRender: false,
    quizResults: results
  }
}

//thunk creator
export const quizThunk = (quizId) => (dispatch) => {
  //axios call - uses quizId
  axios.get(`http://localhost:3001/quizans?id=1`)
  //using async await or .then, dispatch renderQuiz
  //with result from axios call
  .then(res => {
    console.log(res.data)
    // this.setState({});
  })
}

//initial state
const initialState = {
  quizTitlesAndIds: [
    {"title":"Which Disney princess are you?", "id":"1"}, 
    {"title":"Which one of Ilana's pets are you?", "id":"2"}
  ],
  quizTitle: "Which Disney princess are you?",
  quizID: 1,
  quizQuestionsAndAnswers: [
    {"question":"Do you like China?", "answers":{"yes":"1", "no":"2", "maybe":"3"}}, 
    {"question":"Do you like animals?", "answers":{"yes":"1", "no":"2", "maybe":"3"}}, 
    {"question":"Are you outdoorsy?", "answers":{"yes":"1", "no":"2", "maybe":"3"}}
  ],
  resultRender: false,
  quizResults: [
    {"result":"Ariel", "gif": "giphy.com/ariel"},
    {"result":"Jasmine", "gif": "giphy.com/jasmine"},
    {"result":"Cinderella", "gif": "giphy.com/cinderella"}
  ]
}

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT":
      return Object.assign({}, state, {
        resultRender: action.resultRender
      })
    case "RENDERQUIZ":
      return Object.assign({}, state, {
        resultRender: action.resultRender,
        quizTitle: action.quizTitle,
        quizID: action.quizID
      })
    default:
      return state;
  }
}