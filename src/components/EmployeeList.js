import _ from 'lodash';  /**collection to array */
import React, { Component } from 'react';
import { ListView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Searchbar from './SearchBar';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import { ButtonRound } from './common';

/**managing display of employees list */
class EmployeeList extends Component {
    state = { searchedText: '' };
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
    /**go to create employee scene when add button pressed */
    onAddPress() {
        Actions.employeeCreate();
    }
    /**optimize list rendering */
    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.datasource = ds.cloneWithRows(employees); /** requires array */
    }
    /** get queried text */
    searchText(text) {
        this.setState({ searchedText: text });
    }
    /** render individual row */
    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render() {
        const employees = this.state.searchedText ? (
              this.props.employees.filter(
                employee => employee.name.indexOf(this.state.searchedText) > -1
              )) : this.props.employees;
                this.createDataSource({ employees });
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../../assets/emp-payroll.png')}> 
            
            <Searchbar searchText={this.searchText.bind(this)} />
            
            <ListView 
            enableEmptySections
            dataSource={this.datasource}
            renderRow={this.renderRow}
            />
            <ButtonRound
            icon={require('../../assets/add.png')}
            onPress={this.onAddPress.bind(this)}
            style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                position: 'absolute',                                          
                bottom: 10,                                                    
                right: 10
            }}
            />
            </ImageBackground>

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
