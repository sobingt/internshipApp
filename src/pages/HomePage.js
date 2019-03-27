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
import Error from '../components/Error';
import RenderLoader from '../components/RenderLoader';

import {connect} from 'react-redux';
import {fetchMovies} from '../actions/movieActions';

type Props = {};
class HomePage extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      error: ''
    }
  }

  getMovieList = () => {
    this.setState({isLoading: true})
    const url = "https://user-api-intern.herokuapp.com/movies";
    axios.get(url)
    .then((response) => {
      this.props.fetchMovies(response.data)
      this.setState({error: ''})
      this.setState({isLoading: false})
      this.props.navigation.navigate('MovieList', {movies: this.props.movies});
    })
    .catch(err => {
      this.setState({error: 'Error occured please try again!'})
      this.setState({isLoading: false})
    });
  }
  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#607D8B'
          barStyle="light-content" />
        <Logo/>
        <Error error={this.state.error}/>
        <View style={styles.homeContainer}>
        <Text style={styles.homeHeader}>see amazing movie lists</Text>
        <Image style={styles.homeImage} source={require('../images/home.jpeg')}/>
        <RenderLoader isLoading={this.state.isLoading}/>
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
    justifyContent: 'space-evenly'
  },
  homeHeader: {
      marginVertical: 20,
      fontSize: 25,
      color: 'rgba(23, 66, 255, 0.8)',
      fontWeight: '500',
  },
  homeImage: {
    width: 320,
    height: 250,
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

const mapPropsToState = state => ({
  movies: state.movie.movies
})

export default connect(mapPropsToState, {fetchMovies})(HomePage);