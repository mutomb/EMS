import _ from 'lodash';  /**collection to array */
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
/**managing display of employees list */
class EmployeeList extends Component {
    /**fire action creator for fectching employees */
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props); /**might have no employee before rendering*/
    }
    /**re-creates datasource with new props
    get update list of employees */
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }
    /**optimize list rendering */
    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.datasource = ds.cloneWithRows(employees); /** requires array */
    }
    /** render individual row */
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
/**map array of employees */
/** state.employees===uid:{{shift},{name},{phone}}*/
/**  {shift: 'Y', name:'X', phone: 'Z, uid:'W'} */
const mapStateToProps = state => { 
    const employees = _.map(state.employees, (value, uid) => ({ ...value, uid }));
    return { employees };
};
/**fecth employees action creator connected */
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
