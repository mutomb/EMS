import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
/** determinets screen flows */
const RouterComponent = () => (
    <Router>
        <Scene key='root' hideNavBar>
            <Scene key='auth'>
                <Scene key='login' component={LoginForm} title="Please Login" initial />
            </Scene>
            <Scene key='main'>
                <Scene 
                onRight={() => Actions.employeeCreate()}
                rightTitle="Add"
                key='employeeList' 
                component={EmployeeList} 
                title='Employees'
                initial 
                />
                <Scene 
                title="Create Employee"
                key="employeeCreate"
                component={EmployeeCreate}
                />
                <Scene 
                title="Edit Employee"
                key="employeeEdit"
                component={EmployeeEdit}
                />
            </Scene>
        </Scene>
    </Router>
);
export default RouterComponent;
