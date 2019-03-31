import React, { Component } from 'react'
import {
  View,
  Image,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

type Props = {};
export class Logo extends Component<Props> {
  render() {
    return (
      <View style={styles.logoContainer}>
        <StatusBar backgroundColor='#607D8B'
        barStyle="light-content" />
        <Image source={require('../images/logo.png')} style={styles.logoImage}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 5,
  },
  logoImage: {
    width: 100,
    height: 30,
    marginVertical: 5
  },
  logoText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '600'
  }
})

export default Logo
