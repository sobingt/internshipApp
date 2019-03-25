import React, { Component } from 'react'
import {
    TextInput,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'; 
import axios from 'axios';

class SignupForm extends Component { 
  constructor(props){
      super(props);
      this.state = {
            username: '',
            email: '',
            password: '',
            error: '',
            loading: false,
      };
  }  
  
  registerUser = () => {
      const {username, email, password} = this.state;
      if(!this.state.loading) this.setState({loading: true});
      if(password.length < 6){
        console.log("minimum password length should be 6");
      }

      else if(username.length > 0 && email.length > 0 && password.length > 5 && this.state.loading)
      {
          console.log({username, email, password});
          const url = 'https://user-api-intern.herokuapp.com/users';
          axios.post(url,{username, email, password})
        .then(response => {
            this.setState({loading: false})
            this.props.registerUser(response.data.user)
        })
        .catch(err =>{
            this.setState({loading: false})
            console.log("email should be unique and valid!")
            this.setState({error: "email should be unique and valid!"})   
        })
      }

      else{
        console.log("All fields are required!")  
        this.setState({error: 'All fields are required'}) 
      }
  }
  
  render() {
    return (
      <View style={styles.loginContainer}>
          <TextInput style={styles.InputContainer}
           placeholder='username'
           placeholderTextColor='#fff'
           underlineColorAndroid='rgba(0,0,0,0)'
           onChangeText = {(text) => this.setState({username: text})}
           onSubmitEditing={() => this.email.focus()}/>  
          <TextInput style={styles.InputContainer}
           placeholder='Email'
           placeholderTextColor='#fff'
           underlineColorAndroid='rgba(0,0,0,0)'
           keyboardType="email-address"
           onChangeText = {(text) => this.setState({email: text})}
           ref={(input) => this.email = input}
           onSubmitEditing={()=> this.password.focus()}/>
           <TextInput style={styles.InputContainer}
           placeholder='password'
           placeholderTextColor='#fff'
           underlineColorAndroid='rgba(0,0,0,0)'
           secureTextEntry={true}
           onChangeText = {(text) => this.setState({password: text})}
           ref={(input) => this.password = input}/>
           <TouchableOpacity style={styles.signinButton}
           onPress={this.registerUser}>
           <Text style={styles.buttonText}>Sign Up</Text>
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
        marginVertical: 10,
        // overlayColor: 'transparent'
    },
    signinButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: 300,
        borderRadius: 25,
        paddingVertical: 12,
        alignItems: 'center',
        marginVertical: 10,
        // overlayColor: 'transparent'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
})

export default SignupForm
