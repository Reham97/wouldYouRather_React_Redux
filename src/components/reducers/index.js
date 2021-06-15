
import { LOGOUT, LOGIN, CURRENT_PAGE, QUESTIONS, USERS } from '../actions/types'

export const InitialState = {
    user: null,
    users:null,
    questions: null,
    votes: 0,
    currentPage: null
}

export const rootReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                user: action.payload,
                currentPage: "home"
            }
        }
        case LOGOUT: {
            return InitialState
        }
        case CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case QUESTIONS: {
            return {
                ...state,
                questions: action.payload
            }
        }
        case USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        default: {
            return state;
        }
    }

}