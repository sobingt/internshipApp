import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Signin from './src/pages/Signin';
import Signup from './src/pages/Signup';
import HomePage from './src/pages/HomePage';
type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
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