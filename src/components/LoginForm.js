import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { 
    emailChanged, 
    passwordChanged, 
    loginUser,
} from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';
/** manage login form */
class LoginForm extends Component {
    /** fire action creator when email typed*/
    onEmailChange(email) {
        this.props.emailChanged(email);
    }
    /** fire action creator when password typed*/
    onPassworChange(password) {
        this.props.passwordChanged(password);
    }
    /** fire action creator when login clicked*/  
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    renderError() {
        if (this.props.error) {
            return ( 
                <View style={{ backgroundColor: '#FF5858' }}>
                    <Text 
                    style={{
                         alignSelf: 'center', 
                         fontSize: 20, 
                         color: 'blue' }}
                    >
                         {this.props.error}</Text>
                </View>
            );
        }
    }
    /**display spinner when processing request */
    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        }
        return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;       
    }
    render() {
        const { email, password } = this.props;
        return ( 
            <ImageBackground style={{ flex: 1 }} source={require('../../assets/emp-payroll.png')}>
            <ScrollView>
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
            </ScrollView>
            </ImageBackground>
        );
    }
}
/**map typed in values and process state */
const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth; 
    return ({ 
        email,
        password,
        error,
        loading
    });
};
/**action creator for input fields attached */
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
