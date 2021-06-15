import { LOGOUT, LOGIN, CURRENT_PAGE, QUESTIONS, USERS, SUBMITQUESTION } from './types'

export const logout = () => {
    return {
        type: LOGOUT
    }
}
export const login = (user) => {
    return {
        type: LOGIN,
        payload: user
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