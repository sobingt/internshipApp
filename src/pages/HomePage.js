import React, {Component} from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  StatusBar,
  Image,
  TouchableOpacity} from 'react-native';
import axios from 'axios';  
import Logo from '../components/Logo';

import {connect} from 'react-redux';
import {fetchMovies} from '../actions/movieActions';

type Props = {};
class HomePage extends Component<Props> {
  getMovieList = () => {
    console.log(this.props)
    console.log("fetching.....");
    const url = "https://user-api-intern.herokuapp.com/movies";
    axios.get(url)
    .then((response) => {
      this.props.fetchMovies(response.data)
      console.log(this.props)
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#607D8B'
          barStyle="light-content" />
        <Logo/>
        <View style={styles.homeContainer}>
        <Text style={styles.homeHeader}>see amazing movie lists</Text>
        <Image style={styles.homeImage} source={require('../images/home.jpeg')}/>
         <TouchableOpacity style={styles.listingButton} onPress={this.getMovieList}>
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

const mapPropsToState = state => {
  return state;
}

export default connect(mapPropsToState, {fetchMovies})(HomePage);