import { LOGOUT, LOGIN, CURRENT_PAGE, QUESTIONS, USERS, REDIRECT_PAGE_PATH } from './types'

export const logout = () => {
    return {
        type: LOGOUT
    }
}
export const login = (user, page) => {
    return {
        type: LOGIN,
        payload: { user, page }
    }
}
export const changeCurrentPage = (pageName) => {
    return {
        type: CURRENT_PAGE,
        payload: pageName
    }
}
export const setQuestions = (questions) => {
    return {
        type: QUESTIONS,
        payload: questions
    }
}
export const setUsers = (users) => {
    return {
        type: USERS,
        payload: users
    }
}
export const setRedirectPagePath = (path) => {
    return {
        type: REDIRECT_PAGE_PATH,
        payload: path
    }
}
