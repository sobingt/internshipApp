import React, {Component} from 'react';
import { 
  createStackNavigator,
  createAppContainer, 
  createMaterialTopTabNavigator } from "react-navigation"; 
import Signin from './src/pages/Signin';
import Signup from './src/pages/Signup';
import HomePage from './src/pages/HomePage';
import Profile from './src/pages/Profile';
type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: HomePage
  },
  Profile:{
    screen: Profile
  }
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
  },
  SignIn:{
    screen: Signin,
  },
  SignUp:{
    screen: Signup,
    
  }
},{
  initialRouteName: "SignIn",
  headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
});



export default createAppContainer(AppNavigator);