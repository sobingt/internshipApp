import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,} from 'react-native';
import Logo from '../components/Logo';
import SignupForm from '../components/SignupForm';

import {connect} from 'react-redux';
import {userActions} from '../actions';


type Props = {};
class Signup extends Component<Props>{
  onPress = () => {
    console.log(this.props)
    this.props.navigation.navigate('SignIn')
  }
  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#607D8B'
          barStyle="light-content"/>
        <Logo/>
        <SignupForm navigation={this.props.navigation}/>
         <View style={styles.registerContainer}>
               <Text
                style={
                    {color: 'rgba(255, 255, 255, .7)', 
                    marginRight: 10, fontSize: 16}}>
                      already have an account?
                    </Text>
               <TouchableOpacity 
               style={{cursor: 'pointer'}}
                onPress={this.onPress}>
                   <Text
                   style={
                       {color: '#fff', 
                       marginRight: 10, fontSize: 16}}>
                       Sign In
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
    justifyContent: 'center',
    alignItems: 'flex-start',
}
});

const mapStatesToProps = state => ({
  state
})

const mapActionsToProps = {
  addUser: userActions
}

export default connect(mapStatesToProps, mapActionsToProps)(Signup);