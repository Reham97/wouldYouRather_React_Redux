import { LOGOUT, LOGIN, CURRENT_PAGE, QUESTIONS, USERS, USER,REDIRECT_PAGE_PATH } from '../actions/types'

export const InitialState = {
    user: null,
    users: {},
    questions: null,
    votes: 0,
    currentPage: null,
    redirectPagePath: ""
}

export const rootReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                user: action.payload.user,
                currentPage: action.payload.page
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
        case USER: {
            return {
                ...state,
                user: state.users[state.user.id]
            }
        }
        case REDIRECT_PAGE_PATH: {
            return {
                ...state,
                redirectPagePath: action.payload
            }
        }
        default: {
            return state;
        }
    }
}