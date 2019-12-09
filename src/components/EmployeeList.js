import _ from 'lodash';  /**collection to array */
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props); /**{} on first call*/
    }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps); /**re-creates datasource with new props */
    }
    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.datasource = ds.cloneWithRows(employees); /** requires array */
    }
    renderRow(employee) {
        return <ListItem employee={employee} />;
    }
    render() {
        return (
            <ListView 
             enableEmptySections
             dataSource={this.datasource}
             renderRow={this.renderRow}
            />
        ); 
    }
}

const mapStateToProps = state => { /** state.employees===uid:{{shift},{name},{phone}}*/
    /**  {shift: 'Y', name:'X', phone: 'Z, uid:'W'} */
    const employees = _.map(state.employees, (value, uid) => ({ ...value, uid }));
    return { employees };
};
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
