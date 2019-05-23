import axios from 'axios';
//Endpoint
const URL = 'https://lambda-wedding-planner.herokuapp.com';
//registering
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const USERPOST_START = 'USERPOST_START';
//log-in
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
//logout 
export const LOGOUT = 'LOGOUT'
//get-data
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAIL = 'GET_DATA_FAIL';
//update 
export const UPDATE_FAIL = 'UPDATE_FAIL';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_DATA = 'UPDATE_DATA';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
export const UPDATE_PASSWORD_FAIL = 'UPDATE_PASSWORD_FAIL';
//delete account 
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';
export const DELETE_ACCOUNT_FAIL = 'DELETE_ACCOUNT_FAIL';
//actions

export const register = (credentials) => dispatch => {
    console.log(credentials);
    dispatch({ type: REGISTER_START });
    return axios.post(`${URL}/api/auth/register`, credentials)
        .then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('id', res.data.id);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data.token, id: res.data.id });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: REGISTER_FAIL, payload: err });
        })
}

export const login = (credentials) => dispatch => {
    dispatch({ type: LOGIN_START});
    return axios.post(`${URL}/api/auth/login`, credentials )
        .then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token, id: res.data.id });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: LOGIN_FAIL,  payload: err });
        })
}

export const updateData = (userpost) => dispatch => {
    dispatch({type: USERPOST_START});
    return axios.post(`${URL}/api/post`, userpost)
    .then((res) => {
        console.log(res);
        dispatch({type: UPDATE_SUCCESS, payload: res.data, id: res.data.id});
    })
    .catch(err => {
        dispatch({type: UPDATE_FAIL, payload: err});

    })
}
export const updatePassword = (password) => dispatch => {
    dispatch({ type: UPDATE_PASSWORD })
    return axios.put(`${URL}/api/auth/users`, password, {headers: {Authorization:localStorage.getItem('token')}})
        .then((res) => {
            console.log(res);
            dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: UPDATE_PASSWORD_FAIL, payload: err});
        })
}

export const deleteAccount = () => dispatch => {
    dispatch({ type: DELETE_ACCOUNT })
    return axios.delete(`${URL}/api/auth/users`, {headers: {Authorization:localStorage.getItem('token')}})
        .then((res) => {
            console.log(res);
            dispatch({ type: DELETE_ACCOUNT_SUCCESS, payload: res.data});
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: DELETE_ACCOUNT_FAIL, payload: err });
        })
}

export const logout = (credentials) => dispatch => {
    dispatch({ type: LOGOUT });
    return axios.put(`${URL}/api/auth/logout`, credentials)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}