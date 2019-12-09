import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { 
    emailChanged, 
    passwordChanged, 
    loginUser,
} from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    
    onEmailChange(email) {
        this.props.emailChanged(email);  
    }
    onPassworChange(password) {
        this.props.passwordChanged(password);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    renderError() {
        if (this.props.error) {
            return ( 
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 20 }}>{this.props.error}</Text>
                </View>
            );
        }
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        }
        return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;       
    }
    render() {
        const { email, password } = this.props;
        return (
            <Card>
                <CardSection>
                    <Input 
                    label='email' 
                    value={email}
                    onChangeText={this.onEmailChange.bind(this)}
                    placeholder="user@gmail.com"
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder='password'
                        label='Password'
                        onChangeText={this.onPassworChange.bind(this)}
                        value={password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
                
            </Card>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth; 
    return ({ 
        email,
        password,
        error,
        loading
    });
};
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
