import React, {Component} from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  StatusBar,
  Image,
  TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';

type Props = {};
class HomePage extends Component<Props> {
  render() {
    getMovieList = () => {
      const url = "https://user-api-intern.herokuapp.com/movies"
    }
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#607D8B'
          barStyle="light-content" />
        <Logo/>
        <View style={styles.homeContainer}>
        <Text style={styles.homeHeader}>see amazing movie lists</Text>
        <Image style={styles.homeImage} source={require('../images/home.jpeg')}/>
         <TouchableOpacity style={styles.listingButton}>
            <Text style={styles.listingButtonText}>Goto movie listing</Text> 
          </TouchableOpacity> 
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
  homeContainer: {
    flex: 1,  
    alignItems: 'center',
  },
  homeHeader: {
      marginVertical: 20,
      fontSize: 20,
      color: '#fff'
  },
  homeImage: {
    width: 300,
    height: 200,
    marginVertical: 20,
  },
  listingButton: {
    marginVertical: 30,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  listingButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '300'
  }
});

export default HomePage;