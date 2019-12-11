import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';
import EmployeeSearchReducer from './EmployeeSearchReducer';
/** facilitate access to all reducers */
export default combineReducers({
    auth: AuthReducer, 
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer,
    employeeQuery: EmployeeSearchReducer
});
