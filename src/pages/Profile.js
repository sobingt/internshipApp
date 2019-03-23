import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

type Props = {};

class Profile extends Component<Props>{
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/user.jpeg')} style={styles.profileImage}/>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>username</Text>
          <Text style={styles.textValue}>{'Ermyas Fekadu'}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Email</Text>
          <Text style={styles.textValue}>{'ermyas.fekadu@gmail.com'}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>phone number</Text>
          <Text style={styles.textValue}>{'09900090090'}</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  profileImage: {
  
  },
  textContainer: {
    marginVertical: 2,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  textValue: {
    fontSize: 18,
    color: 'rgba(96,125,139,0.5)'
  },
  textStyle: {
    fontSize: 20,
    color: '#607D8B'
  },
  editButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    paddingVertical: 10,
    backgroundColor: '#607D8B',
    width: 300 
  },
  editText:{
    color: '#fff',
    fontSize: 18
  }
})

export default Profile
