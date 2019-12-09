/**action creators for the login form */
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';


/**user typing emai */
export const emailChanged = email => (
    {
        type: EMAIL_CHANGED,
        payload: email
    }
);
/**user typing password */
export const passwordChanged = password => (
    {
        type: PASSWORD_CHANGED,
        payload: password
    }
);
/**asynchrous dispatch with redux thunk method dispatch */
/** athenticate user*/
export const loginUser = ({ email, password }) => (dispatch) => { 
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
};
/**helper user logged in */
const loginUserSuccess = (dispatch, user) => {
    Actions.main();
    dispatch({
        type: LOGIN_USER_SUCCESS, 
        payload: user
    });
};
/**helper user login failed*/
const loginUserFail = (dispatch) => dispatch({
    type: LOGIN_USER_FAIL
});
