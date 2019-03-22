import React, { Component } from 'react'
import {
  View,
  Image,
  StyleSheet,
  Text
} from 'react-native';

type Props = {};
export class Logo extends Component<Props> {
  render() {
    return (
      <View style={styles.logoContainer}>
        <Image source={require('../images/logo.png')} style={styles.logoImage}/>
        <Text style={styles.logoText}>Movie Listing App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  logoImage: {
    width: 150,
    height: 45,
    marginVertical: 20
  },
  logoText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '600'
  }
})

export default Logo
