import React, { Component } from 'react'
import {
    TextInput,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Keyboard
} from 'react-native'; 

import axios from 'axios';
import RenderLoader from './RenderLoader';
import Error from './Error';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
              email: '',
              password: '',
              error: '',
              isLoading: false,
        };
    }  
    
    loginUser = () => {
        const {email, password} = this.state;
        this.setState({error: ''});
        if(email.length === 0 || password.length === 0){
        this.setState({error: "both email and password can not be empty!"})
        }
        else{
            Keyboard.dismiss();
            this.setState({isLoading: true})
            const url = 'https://user-api-intern.herokuapp.com/users/login';
            axios.post(url,{email, password})
            .then(response => {
                this.setState({isLoading: false})
                this.setState({email: '', password: '', error: ''})
                this.props.loginUser(response.data.user)
            })
            .catch(err =>{
                this.setState({isLoading: false})
                this.setState({error: "Invalid user detail please try again!"})  
            })
        }  
    }    

  render() {
        const error = this.state.error;
    return (
      <View style={styles.loginContainer}>
        <Error error = {error}/>
          <TextInput style={styles.InputContainer}
           placeholder='Email'
           placeholderTextColor='#fff'
           underlineColorAndroid='rgba(0,0,0,0)'
           onChangeText = { (text) => this.setState({email: text})}
           onSubmitEditing={()=> this.password.focus()}
           value={this.state.email}
           autoFocus={true}/>
           <TextInput style={styles.InputContainer}
           placeholder='password'
           placeholderTextColor='#fff'
           underlineColorAndroid='rgba(0,0,0,0)'
           onChangeText = { (password) => this.setState({password: password})}
           secureTextEntry={true}
           value={this.state.password}
           ref={(input) => this.password = input}/>
           <TouchableOpacity style={styles.signinButton}
           onPress={this.loginUser}>
           <Text style={styles.buttonText}>Sign In</Text>
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
        marginVertical: 10
    },
    signinButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: 300,
        borderRadius: 25,
        paddingVertical: 12,
        alignItems: 'center',
        marginVertical: 10,
        overlayColor: 'transparent'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
})

export default LoginForm
