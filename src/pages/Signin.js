import React, {Component} from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  StatusBar,
  TouchableOpacity,} from 'react-native';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';

type Props = {};
class Signin extends Component<Props> {
  render() {
    onSignup = () => {
      this.props.navigation.navigate('SignUp');
    }
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#607D8B'
          barStyle="light-content" />
        <Logo/>
        <LoginForm
         buttonText="Sign In"
         navigation={this.props.navigation}
         />
         <View style={styles.registerContainer}>
               <Text
                style={
                    {color: 'rgba(255, 255, 255, .7)', 
                    marginRight: 10, fontSize: 16}}>
                      Don't have an account yet?
                    </Text>
               <TouchableOpacity 
               style={{cursor: 'pointer'}}
               onPress ={() => this.props.navigation.navigate('SignUp')}
               >
                   <Text
                   style={
                       {color: '#fff', 
                       marginRight: 10, fontSize: 16}}>
                       Sign Up
                    </Text></TouchableOpacity>
           </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-around',
    backgroundColor: '#607D8B',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
}
});

export default Signin;