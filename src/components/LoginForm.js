import React, { Component } from 'react'
import {
    TextInput,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'; 
class LoginForm extends Component {
  render() {
    return (
      <View style={styles.loginContainer}>
          <TextInput style={styles.InputContainer}
           placeholder='Email'
           placeholderTextColor='#fff'
           underlineColorAndroid='rgba(0,0,0,0)'
           keyboardType="email-address"
           onSubmitEditing={()=> this.password.focus()}/>
           <TextInput style={styles.InputContainer}
           placeholder='password'
           placeholderTextColor='#fff'
           underlineColorAndroid='rgba(0,0,0,0)'
           secureTextEntry={true}
           ref={(input) => this.password = input}/>
           <TouchableOpacity style={styles.signinButton}
           underlineColorAndroid='rgba(0,0,0,0)'>
           <Text style={styles.buttonText}>{this.props.buttonText}</Text>
           </TouchableOpacity>
           <View style={styles.registerContainer}>
               <Text
                style={
                    {color: 'rgba(255, 255, 255, .7)', 
                    marginRight: 10, fontSize: 16}}>
                    {this.props.checkText}
                    </Text>
               <TouchableOpacity style={{cursor: 'pointer'}}>
                   <Text
                   style={
                       {color: '#fff', 
                       marginRight: 10, fontSize: 16}}>
                       {this.props.checkAction}
                    </Text></TouchableOpacity>
           </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    loginContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: 300,
        borderRadius: 25,
        paddingHorizontal: 30,
        fontSize: 18,
        color: '#fff',
        marginVertical: 10
    },
    signinButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: 300,
        borderRadius: 25,
        paddingVertical: 12,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
    registerContainer: {
        flexDirection: 'row',
        marginTop: 20,
    }
})

export default LoginForm
