import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';
/** facilitate access to all reducers */
export default combineReducers({
    auth: AuthReducer, 
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer
});
