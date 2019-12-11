import React from 'react';
import { View, Image } from 'react-native';

const AppLogo = () => (
      <View style={styles.viewStyle}>
        <Image 
        source={require('../../../assets/logo.png')}
        style={styles.imageStyle} 
        />
      </View>
    );
export { AppLogo };
const styles = {
  viewStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 2,
    marginRight: 2,
    shadowColor: '#1FCCFF',
    shadowOffset: {
        width: 0,
        height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 10,
  },
  imageStyle: {
    flex: 1, 
    width: null, 
    height: null 
  }
};
