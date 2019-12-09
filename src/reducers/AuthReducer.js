import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER 
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};  
/** reducer that deals with user authentications */
/** previous state should not be null */
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }; /** always return new State object*/
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed', password: '', loading: false };
        case LOGIN_USER: 
            return { ...state, error: '', loading: true };
        default:
            return state; 
    }
};
