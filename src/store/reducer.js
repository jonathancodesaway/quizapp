//action types
export const SUBMIT = "SUBMIT";

//action creators
export const submitAnswers = () => {
    return {
        type: "SUBMIT",
        resultRender: true
    }
}

//initial state
const initialState = {
    quizTitlesAndIds: [
        {"title":"Which Disney princess are you?", "id":1}, 
        {"title":"Which one of Ilana's pets are you?", "id":2}
    ],
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
                resultRender: action.resultRender
            })
        default:
            return state;
    }
}