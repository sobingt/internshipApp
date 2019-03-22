import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Logo from '../components/Logo';
type Props = {};
class HomePage extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#607D8B'
          barStyle="light-content" />
        <Logo/>
        <View style={styles.listContainer}>
        <Text style={styles.listHeader}>List of movies goes here</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#607D8B',
  },
  listContainer: {
    flex: 1,  
    alignItems: 'center',
  },
  listHeader: {
      marginVertical: 20,
      fontSize: 20,
      color: '#fff'
  }
});

export default HomePage;