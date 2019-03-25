import React, {Component} from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  StatusBar,
  TouchableOpacity,} from 'react-native';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';

import {connect} from 'react-redux';
import {userActions} from '../actions';


type Props = {};
class Signin extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }
  loginUser = (user) => {
    this.setState({user: user})
    this.props.navigation.navigate('Home', {user: this.state.user})
  }
  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#607D8B'
          barStyle="light-content" />
        <Logo/>
        <LoginForm
         buttonText="Sign In"
         loginUser = {this.loginUser}
         />
         <View style={styles.registerContainer}>
               <Text
                style={
                    {color: 'rgba(255, 255, 255, .7)', 
                    marginRight: 10, fontSize: 16}}>
                      Don't have an account yet?
                    </Text>
               <TouchableOpacity 
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
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#607D8B',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    
}
});

const mapStatesToProps = state => ({
  state
})

const mapActionsToProps = {
  addUser: userActions
}

export default connect(mapStatesToProps, mapActionsToProps)(Signin);