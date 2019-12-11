import React, { Component } from 'react';
import { Searchbar } from 'react-native-paper';
import { connect } from 'react-redux';
import { searchTextChanged } from '../actions';
import { Card, CardSection } from './common';

class SearchBar extends Component {
    /** search bar input field handler */
    onSearchTextChange(query) {
        this.props.searchTextChanged(query); /**fire action creator for input field */
        this.props.searchText(query); /** pass query to datasource filter */
    }
    
    render() {
        return (
            <Card>
                <CardSection style={styles.cardStyle}>
                <Searchbar
                    placeholder="Search Employees"
                    onChangeText={query => this.onSearchTextChange(query)}
                    value={this.props.query}
                    style={styles.searchBoxStyle}
                /> 
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    searchBoxStyle: {
        flex: 1, 
        fontSize: 12, 
        elevation: 0,
         borderRadius: 20, 
         height: 50, 
         fontStyle: 'italic', 
         backgroundColor: '#D4E9FF'
    },
    cardStyle: {
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.7,
        shadowColor: '#00A7E9'
    }
};
const mapStateToProps = (state) => {
    const { query } = state.employeeQuery;
    return { query };
};
export default connect(mapStateToProps, { searchTextChanged })(SearchBar);
