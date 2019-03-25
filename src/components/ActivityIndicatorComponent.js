import React, {Component} from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet
}from 'react-native';

export default function ActivityIndicatorComponent() {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container]}>
        <ActivityIndicator size="large" color="#0000ff"/>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, .35)',
      alignItems: 'center',
      height: 50,
      width: '100%'
    },
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: -400,
      left: 0,
      height: 1200,
      width: '100%'
    }
  })