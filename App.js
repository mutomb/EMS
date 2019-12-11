import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; /** tells redux to use a middleware */
import ReduxThunk from 'redux-thunk'; /** middleware for asynchrous/AJAX redux 
                                          by allowing action creators to return a function */
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  state={
    loggedIn: null,
    isSplashReady: false,
    isAppReady: false,
  }
  componentWillMount() {
    firebase.initializeApp({ /** configure connection to firebase-server*/
      apiKey: 'AIzaSyCuNfG-_kpa6JkSCZ0O8cW8X-Ky-GwYUyE',
      authDomain: 'authenticationproject-5d001.firebaseapp.com',
      databaseURL: 'https://authenticationproject-5d001.firebaseio.com',
      projectId: 'authenticationproject-5d001',
      storageBucket: 'authenticationproject-5d001.appspot.com',
      messagingSenderId: '1067947283017',
      appId: '1:1067947283017:web:b3e271b586f93146bfa598',
      measurementId: 'G-QT20SK11GM'
    });
    /** state auth state changes whenever user login or log out */
    firebase.auth().onAuthStateChanged(user => { 
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }); 
  }

  render() {
    /** can add initial State on 2nd arg */
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); 
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}
export default App;

