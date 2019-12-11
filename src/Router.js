import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import ManagerAdmin from './components/ManagerAdmin';
import { AppLogo } from './components/common';

/** determinets screen flows  #04B8FF*/
const RouterComponent = () => (
    <Router>
        <Scene key='root' hideNavBar>
            <Scene key='auth' renderTitle={() => <AppLogo />}>
                <Scene 
                key='login' 
                component={LoginForm} 
                title="Please Login" 
                navigationBarStyle={{ backgroundColor: '#114854' }}
                />
            </Scene>
            <Scene key='main' renderTitle={() => <AppLogo />}>
                 <Scene 
                 key='managerAdmin'
                 component={ManagerAdmin}
                 title='Admin'
                 navigationBarStyle={{ backgroundColor: '#114854' }}
                 initial 
                 />
                <Scene 
                onRight={() => Actions.employeeCreate()}
                rightTitle="Add"
                rightButtonImage
                key='employeeList' 
                component={EmployeeList} 
                title='Employees'
                navigationBarStyle={{ backgroundColor: '#114854' }}
                />
                <Scene 
                title="Create Employee"
                key="employeeCreate"
                component={EmployeeCreate}
                navigationBarStyle={{ backgroundColor: '#114854' }}
                />
                <Scene 
                title="Edit Employee"
                key="employeeEdit"
                component={EmployeeEdit}
                navigationBarStyle={{ backgroundColor: '#114854' }}
                />
            </Scene>
        </Scene>
    </Router>
);
export default RouterComponent;
