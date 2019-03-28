import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    Image
}from 'react-native'

import ImagePicker from 'react-native-image-picker'

export class AddMovieList extends Component {
  constructor(props){
    super(props);
    this.state = {
      photo: null
    }
  }

  choosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
          this.setState({
            photo: response,
          });
    })
  }

  render() {
    const Img = this.state.photo? <Image source={{uri:this.state.photo.data}}/> : null;
    return (
      <View>
          <Text>Add movie list</Text>
          <Button title="pick" onPress={this.choosePhoto}/>
          {Img}
      </View>
    )
  }
}

export default AddMovieList
