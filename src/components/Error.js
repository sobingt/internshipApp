import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
}from 'react-native';
class Error extends Component {
  render() {
      if(!this.props.error){
        return null;
      }
      else{
        return (
            <View>
                <Text style={styles.errorMessage}>{this.props.error}</Text>
            </View>
        )
    }
    
  }
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginVertical: 5,
      }
})

export default Error
