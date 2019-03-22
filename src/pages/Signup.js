import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';
type Props = {};
class Signup extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#607D8B'
          barStyle="light-content" />
        <Logo/>
        <LoginForm buttonText="Sign Up" checkText="already have an account?" checkAction="Sign in"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#607D8B',
  },
});

export default Signup;