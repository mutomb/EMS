import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {  
    onRowPress() {
        const { employee } = this.props;
        Actions.employeeEdit({ employee });
    }

    render() {
        const { name } = this.props.employee;
        return (
            <TouchableOpacity
                onPress={this.onRowPress.bind(this)}
            >
            <CardSection>
                <Text style={styles.titleStyle}>
                    {name}
                </Text>
            </CardSection>
            </TouchableOpacity>
        );
    }
}
export default ListItem;

const styles = {
    titleStyle: {
        paddingLeft: 15,
        fontSize: 18,
    }
};
