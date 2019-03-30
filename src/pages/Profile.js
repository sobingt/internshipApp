import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux';
import {logoutAction} from '../actions/userActions';

type Props = {};

class Profile extends Component<Props>{
  logoutUser = () => {
    this.props.logoutUser()
    this.props.navigation.navigate('SignIn')
  }
  render() {
    const user = this.props.user;
    return (
      <View style={styles.container}>
        <Image source={require('../images/user.jpeg')} style={styles.profileImage}/>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>username</Text>
          <Text style={styles.textValue}>{user.username}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Email</Text>
          <Text style={styles.textValue}>{user.email}</Text>
        </View>
        <TouchableOpacity style={styles.editButton}
         onPress={this.logoutUser}>
          <Text style={styles.editText}>Sign Out</Text>
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
    marginBottom: 30
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
    marginVertical: 40,
    paddingVertical: 10,
    backgroundColor: '#607D8B',
    width: 300 
  },
  editText:{
    color: '#fff',
    fontSize: 18
  }
})

const mapStatesToProps = state => ({
  user: state.user.user
})

const mapActionsToProps = {
  logoutUser: logoutAction
}

export default connect(mapStatesToProps, mapActionsToProps)(Profile);