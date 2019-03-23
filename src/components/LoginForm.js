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
           onPress={() => this.props.navigation.navigate('Home')}>
           <Text style={styles.buttonText}>{this.props.buttonText}</Text>
           </TouchableOpacity>
           
      </View>
    )
  }
}

const styles = StyleSheet.create({
    loginContainer: {
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
        overlayColor: 'rgba(0,0,0,0)'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
})

export default LoginForm
