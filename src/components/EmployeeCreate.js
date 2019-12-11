import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImageBackground, ScrollView } from 'react-native';
import { Card, CardSection, Button } from './common';
import { employeeCreate, reset } from '../actions';
import EmployeeForm from './EmployeeForm';
/**employee creation component */
class EmployeeCreate extends Component {

    componentWillMount() {
        /**input field initally empty */
        this.props.reset(); 
    }
    /** fire action creator for creating employee*/
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }
    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../../assets/emp-payroll.png')}>
            <ScrollView>
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button 
                    onPress={this.onButtonPress.bind(this)}
                    >
                        Create
                    </Button>
                </CardSection>
            </Card>
            </ScrollView>     
            </ImageBackground>       
        );
    }
}

const mapStateToProps = state => { /**map text typed in */
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift }; 
};
/**connect employee creating action creator */
export default connect(mapStateToProps, { employeeCreate, reset })(EmployeeCreate);

