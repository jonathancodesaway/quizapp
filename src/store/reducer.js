//action types
export const SUBMIT = "SUBMIT";

//action creators
export const submitAnswers = (text) => {
    return {
        type: "SUBMIT",
        quizResult: text
    }
}

//initialize state with this variable in reducer
const initialState = {
    quizTitle: "Which Disney princess are you?",
    quizID: 1,
    quizQuestionsAndAnswers: [],
    resultRender: false,
    quizResult: 55
}

//reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT':
            return Object.assign({}, state, {
                quizResult: action.quizResult
            })
        default:
            return state;
    }
}