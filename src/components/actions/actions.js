import { LOGOUT, LOGIN, CURRENT_PAGE, QUESTIONS, USERS, USER, REDIRECT_PAGE_PATH } from './types';

import { _saveQuestionAnswer, _getUsers, _getQuestions, _saveQuestion } from '../../_DATA';

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
export const getUsers = async (dispatch) => {
    await _getUsers().then(res => {
        dispatch({ type: USERS, payload: res })
    })
}
export const getQuestions = async (dispatch) => {
    await _getQuestions().then(res => {
        dispatch({ type: QUESTIONS, payload: res })
    })
}
export const setUser = async (dispatch) => {
    dispatch({ type: USER, payload: {} })
}
export const saveQuestion = async (dispatch,question, user) => {
    await _saveQuestion(question)
    await getUsers(dispatch);
    await getQuestions(dispatch);
    await setUser(dispatch);
}
export const saveQuestionAnswer = async (dispatch,answer,user) => {
    await _saveQuestionAnswer(answer)
    await getUsers(dispatch);
    await getQuestions(dispatch);
    await setUser(dispatch);
    
   
}