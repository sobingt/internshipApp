//task one completed
import React, {Component} from 'react';
import { 
  createStackNavigator,
  createAppContainer, 
  createMaterialTopTabNavigator } from "react-navigation"; 

import Signin from './src/pages/Signin';
import Signup from './src/pages/Signup';
import HomePage from './src/pages/HomePage';
import Profile from './src/pages/Profile';
import MovieList  from './src/pages/MovieList';
import MovieDetails from './src/pages/MovieDetails';
import AddMovieList from './src/pages/AddMovieList';
import Comments from './src/pages/Comments';

import {Icon} from 'react-native-elements';

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: HomePage,
  },
  Profile:{
    screen: Profile
  }
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      header: null,
    }
  },
  SignIn:{
    screen: Signin,
    navigationOptions: {
      header: null,
    }
  },
  SignUp:{
    screen: Signup,
    navigationOptions: {
      header: null,
    }
  },
  MovieList: {
    screen: MovieList,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#607D8B',
      },
    }
  },
  MovieDetails: {
    screen: MovieDetails,
    navigationOptions: {
      header: null,
    }
  },
  AddMovieList: {
    screen: AddMovieList,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#607D8B',
      },
    }
  },
  Comments: {
    screen: Comments,
    navigationOptions: {
      header: null,
    }
  }

},{
  initialRouteName: "SignIn",
    navigationOptions: {
      headerVisible: false,
    }
});



const AppContainer = createAppContainer(AppNavigator);

export default App;