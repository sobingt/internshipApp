import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    Image,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Platform
}from 'react-native'

import ImagePicker from 'react-native-image-picker'
import Logo from '../components/Logo'

const createFormData = (photo, body) => {
  const data = new FormData();

  data.append("Poster", {
    name: photo.fileName,
    type: photo.type,
    path: photo.path,
    uri: Platform.OS === "android"? photo.uri : photo.uri.replace("file://", "")
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });
  return data;
}

export class AddMovieList extends Component {
  constructor(props){
    super(props);
    this.state = {
      photo: null,
      Title: '',
      Year: '',
      Type: ''
    }
  }

  choosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, (response) => {
          this.setState({
            photo: response,
          });
    })
  }

  addNewList = () => {
    const {Title, Year, Type, photo} = this.state;
    const body = {Title, Year, Type};
    console.log(createFormData(photo, body));
  }

  render() {
    const Img = this.state.photo? <Image source={{uri:this.state.photo.uri}}/> : null;
    return (
      <View style={styles.container}>
          <Logo style={{marginVertical: 20}}/>
          <Text style={{fontSize: 25, color: '#fff', marginVertical: 20}}>Add New Movie List</Text>
          <View>
            <TextInput style={styles.InputContainer}
              placeholder='Title'
              placeholderTextColor='#fff'
              underlineColorAndroid='rgba(0,0,0,0)'
              onChangeText = { (text) => this.setState({Title: text})}
              onSubmitEditing={()=> this.Year.focus()}
              value={this.state.Title}
              autoFocus={true}/>

            <TextInput style={styles.InputContainer}
              placeholder='Year'
              placeholderTextColor='#fff'
              underlineColorAndroid='rgba(0,0,0,0)'
              onChangeText = { (text) => this.setState({Year: text})}
              onSubmitEditing={()=> this.Type.focus()}
              value={this.state.Year}
              />

            <TextInput style={styles.InputContainer}
              placeholder='movie or series'
              placeholderTextColor='#fff'
              underlineColorAndroid='rgba(0,0,0,0)'
              onChangeText = { (text) => this.setState({Type: text})}
              value={this.state.Type}
              />
              <TouchableOpacity style={styles.submitButton} onPress={this.choosePhoto}>
                <Text style={styles.buttonText}>Select Poster</Text>
              </TouchableOpacity>  
              <TouchableOpacity style={styles.submitButton} onPress={this.addNewList} >
                <Text style={styles.buttonText}>Add Movie</Text>
              </TouchableOpacity>
          </View>
          {Img}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#607D8B',
    alignItems: 'center',
    justifyContent: 'space-evenly'
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
  submitButton: {
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

export default AddMovieList
