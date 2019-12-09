import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {

    onInputChange({ prop, value }) {
        this.props.employeeUpdate({ prop, value });
    }
    render() {
        const { name, phone, shift } = this.props;
        return (
            <View>
            <CardSection>
                <Input 
                    placeholder='Tom'
                    label='Name'
                    value={name}
                    onChangeText={value => this.onInputChange({ prop: 'name', value })}
                />
            </CardSection>
            <CardSection>
                <Input 
                    placeholder='222-222-2222'
                    label='PhoneNumber'
                    value={phone}
                    onChangeText={value => this.onInputChange({ prop: 'phone', value })}
                />
            </CardSection>  
            <CardSection style={{ flexDirection: 'column' }}>
                <Text style={styles.pickerTextStyle}> Shift</Text>
                <Picker
                selectedValue={shift}
                onValueChange={value => this.onInputChange({ prop: 'shift', value })}
                style
                >
                    <Picker.Item label="Monday" value="Monday" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wednesday" value="Wednesday" />
                    <Picker.Item label="Thursday" value="Thursday" />
                    <Picker.Item label="Friday" value="Friday" />
                    <Picker.Item label="Saturday" value="Saturday" />
                    <Picker.Item label="Sunday" value="Sunday" />
                </Picker>
            </CardSection>
            </View>
        );
    }
}
const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift }; 
};
export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
    }
};
