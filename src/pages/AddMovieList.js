import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    Image,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Keyboard
}from 'react-native'

import ImagePicker from 'react-native-image-picker'

import Logo from '../components/Logo'
import RenderLoader from '../components/RenderLoader';
import Error from '../components/Error';


const createFormData = (Poster, body) => {
  const data = new FormData();

  data.append("image", {
    name: Poster.fileName,
    type: Poster.type,
    uri: Poster.uri
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
      Poster: null,
      Title: '',
      Year: '',
      Type: '',
      error: '',
      isLoading: false,
    }
  }

  choosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, (response) => {
          this.setState({
            Poster: response,
          });
    })
  }

  addNewList = () => {
    this.setState({isLoading: true});
    this.setState({error: ''});
    const {Title, Year, Type, Poster} = this.state;
    const body = {Title, Year, Type};

    //validate form data
    if(!Title || !Year || !Type || !Poster){
      this.setState({error: 'All Fields are required!'});
      this.setState({isLoading: false});
    }
    else{
      Keyboard.dismiss();
      const { navigation } = this.props;
      const navigateToDetails = navigation.getParam('navigateToDetails', () => console.log('no data'));
      const bodyWithPhoto = createFormData(Poster, body);
      const url = "https://user-api-intern.herokuapp.com/movies";
      fetch(url, {
        method: 'POST',
        body: bodyWithPhoto
      })
        .then(response => response.json())
        .then(movie => {
          this.setState({error: ''});
          this.setState({isLoading: false});
          navigateToDetails(movie)
        })
        .catch(err=> {
            this.setState({error: 'Error ocurred while adding the list please try again!'});
            this.setState({isLoading: false});
        })
    }
    
  }

  render() {
    const Img = this.state.Poster? (<Image 
      source={{uri:this.state.Poster.uri}}
       style={{width: 100, height: 100, alignItems: 'center'}}/>) : null;
    return (
      <View style={styles.container}>
        <Logo style={{marginVertical: 20}}/>
        <Error error={this.state.error}/>
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
                {Img}
            <TouchableOpacity style={styles.submitButton} onPress={this.addNewList} >
              <Text style={styles.buttonText}>Add Movie</Text>
            </TouchableOpacity>
        </View>
        <RenderLoader isLoading={this.state.isLoading}/>     
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


export default AddMovieList;
