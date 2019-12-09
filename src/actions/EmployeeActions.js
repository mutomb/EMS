/**action creators for the updating employees*/
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMPLOYEE_UPDATE, 
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS,
    RESET_TO_INITIAL 
} from './types';

/** provide values typed on input forms*/
export const employeeUpdate = ({ prop, value }) => ({
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
});

/** add new employee collection to db*/
export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({
                    type: EMPLOYEE_CREATE
                });
                /** or Actions.pop() prevent back button from appearing */
                Actions.employeeList({ type: 'reset' });
            }); 
    };    
};
/**fetch employees collection from db*/
export const employeesFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => { /**read data from firebase, monitor changes*/
                dispatch({
                    type: EMPLOYEES_FETCH_SUCCESS,
                    payload: snapshot.val()
                });
            });
    };
};
/** update employee collection in db*/
export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, shift, phone })
            .then(() => {
                dispatch({
                    type: EMPLOYEE_SAVE_SUCCESS
                });
                Actions.employeeList({ type: 'reset' });
            });
    };
};
/** clear form input */
export const reset = () => ({ type: RESET_TO_INITIAL });

/** remove employee collection from db */
export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => Actions.employeeList({ type: 'reset' }));
    };
};
