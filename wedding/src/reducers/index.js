//actions 
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL,
    UPDATE_PASSWORD,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    DELETE_ACCOUNT,
    DELETE_ACCOUNT_SUCCESS,
    DELETE_ACCOUNT_FAIL
} from '../actions';

//The source of all truth
const initialState = {
    data: [],
    title: '',
    body: '',
    fetchingData: false,
    isLoggedIn: false,
    error: '',
    token: '',
    id: ''
}

//Reducer
export const rootReducer = (state=initialState, action) => {
    //switch statement
    switch(action.type) {
        case REGISTER_START:
        return {
            ...state,
            fetchingData: true,
            token: action.payload,
            id: action.id
        }
        case REGISTER_SUCCESS:
        return {
            ...state,
            fetchingData: false,
            isLoggedIn: true
        }
        case REGISTER_FAIL:
        return {
            error: action.payload
        }
        case LOGIN_START:
        return {
            ...state,
            fetchingData: true, 
            token: action.payload,
            id: action.id
        }
        case LOGIN_SUCCESS:
        return {
            ...state,
            fetchingData: false,
            isLoggedIn: true,
            token: action.payload
        }
        case LOGIN_FAIL:
        return {
            error: action.payload
        }
        case GET_DATA:
        return {
            ...state, 
            fetchingData: true,
            isLoggedIn: true
        }
        case GET_DATA_SUCCESS: 
        return {
            ...state,
            fetchingData: false,
            data: action.payload.response,

        }
        case GET_DATA_FAIL: 
        return {
            error: action.payload
        }
        case UPDATE_PASSWORD:
        return {
            ...state, 
            fetchingData: true
        }
        case UPDATE_PASSWORD_SUCCESS:
        return {
            
        }
        case UPDATE_PASSWORD_FAIL:
        return {
            error: action.payload
        }
        case DELETE_ACCOUNT:
        return {
            ...state, 
            fetchingData: true, 
        }
        case DELETE_ACCOUNT_SUCCESS:
        return {
            ...state,
        }
        case DELETE_ACCOUNT_FAIL:
        return {
            ...state, 
            error: action.payload
        }
        default: return state;
    }
}