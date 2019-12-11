import React, { Component } from 'react';
import { ImageBackground, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
/** employee updating/deleting component */
class EmployeeEdit extends Component {
    state ={
        showModal: false
    }
    componentWillMount() {
        /**props from listItem, pre-fill EmployeeFrom via its mapStateToProps*/
        _.each(this.props.employee, (value, prop) => this.props.employeeUpdate({ prop, value }));
    }
    /**fire action creator to save new record */
    onSavePress() {
        /** props from mapStateToProps */
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid }); 
    }
    /**send text message to employee */
    onTextSchedulePress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `you're next shift is on ${shift}.`);
    }
    /** decline employee removal act*/
    onDecline() {
        this.setState({ showModal: false });
    }
    /**fire action creator for deleting employee record */
    onAccept() {
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid });
        this.setState({ showModal: false });
    }
    render() {
        return (
        <ImageBackground style={{ flex: 1 }} source={require('../../assets/emp-payroll.png')}>
        <ScrollView>
        <Card>
            <EmployeeForm />
            <CardSection>
                <Button onPress={this.onSavePress.bind(this)}>
                    Save
                </Button>
            </CardSection>
            <CardSection>
                <Button onPress={this.onTextSchedulePress.bind(this)}>
                    Text Schedule
                </Button>
            </CardSection>
            <CardSection>
                <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                    Fire Employee
                </Button>
            </CardSection>
            <Confirm
                visible={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
            >
                Are you sure you want to delete this
            </Confirm>
        </Card>
        </ScrollView>
        </ImageBackground>
        );
    }
}
/** map typed in text inputs*/
const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};
/**connect employee updating, saving, and deleting action creators */
export default connect(mapStateToProps, { 
employeeUpdate, employeeSave, employeeDelete 
})(EmployeeEdit);
