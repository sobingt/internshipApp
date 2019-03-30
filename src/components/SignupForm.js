import React, { Component } from 'react'
import {
    TextInput,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Keyboard,
} from 'react-native'; 
import axios from 'axios';
import RenderLoader from './RenderLoader';
import Error from './Error';
class SignupForm extends Component { 
  constructor(props){
      super(props);
      this.state = {
            username: '',
            email: '',
            password: '',
            error: '',
            isLoading: false,
      };
  }  
  
  registerUser = () => {
      this.setState({isLoading: true})
      this.setState({error: ''});
      const {username, email, password} = this.state;
      Keyboard.dismiss();
      if(username.length === 0 || email.length === 0 || password.length ===0){
        this.setState({isLoading: false})  
        this.setState({error: 'All fields are required'}) 
      }

      else if(password.length < 6){
        this.setState({isLoading: false}) 
        this.setState({error: "minimum password length should be 6"});
      }

      else if(username.length > 0 && email.length > 0 && password.length > 5)
      {
        const url = 'https://user-api-intern.herokuapp.com/users';
        axios.post(url,{username, email, password})
        .then(response => {
            this.setState({isLoading: false})
            this.setState({username: '', email: '', password: '', error: ''})
            this.props.registerUser(response.data.user)
        })
        .catch(err =>{
            this.setState({isLoading: false})
            this.setState({error: "email should be unique and valid!"})  
        })
      }
  }
  render() { 
    const error = this.state.error;
    return (
        <View style={styles.loginContainer}>
          <Error error={error}/>
          <TextInput style={styles.InputContainer}
          placeholder='username'
          placeholderTextColor='#fff'
          underlineColorAndroid='transparent'
          onChangeText = {(text) => this.setState({username: text})}
          onSubmitEditing={() => this.email.focus()}
          value={this.state.username}
          autoFocus={true}/>  
          <TextInput style={styles.InputContainer}
          placeholder='Email'
          placeholderTextColor='#fff'
          underlineColorAndroid='transparent'
          keyboardType="email-address"
          onChangeText = {(text) => this.setState({email: text})}
          ref={(input) => this.email = input}
          onSubmitEditing={()=> this.password.focus()}
          value={this.state.email}/>
          <TextInput style={styles.InputContainer}
          placeholder='password'
          placeholderTextColor='#fff'
          underlineColorAndroid='transparent'
          secureTextEntry={true}
          onChangeText = {(text) => this.setState({password: text})}
          ref={(input) => this.password = input}
          value={this.state.password}/>
          <TouchableOpacity style={styles.signinButton}
          onPress={this.registerUser}>
          <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <RenderLoader isLoading={this.state.isLoading}/>
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
        marginVertical: 10,
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
    errorMessage: {
      fontSize: 18,
      color: 'red',
      textAlign: 'center',
      marginVertical: 5,
    }
})

export default SignupForm
