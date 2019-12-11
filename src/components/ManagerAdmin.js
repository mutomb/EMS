import React, { Component } from 'react';
import { ImageBackground, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, ButtonRound } from './common';

class ManagerAdmin extends Component {
    onEmployeesButtonPress() {
        Actions.employeeList();  
    }
    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../../assets/emp-payroll.png')}>
            <Card>
            <ScrollView>
                <CardSection style={{ justifyContent: 'center' }}>
                    <ButtonRound
                    onPress={this.onEmployeesButtonPress.bind(this)}
                    icon={require('../../assets/emp-team.png')}
                    >
                        Employees
                    </ButtonRound>
                </CardSection>
                <CardSection style={{ justifyContent: 'center' }}>
                    <ButtonRound
                    icon={require('../../assets/settings.png')}
                    >
                        Settings
                    </ButtonRound>
                </CardSection>
            </ScrollView>   
            </Card>
            </ImageBackground>
        );
    }
}
export default ManagerAdmin;

