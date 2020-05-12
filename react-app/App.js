import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import { StyleSheet , View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity,SafeAreaView, ScrollView, Dimensions, AsyncStorage} from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text} from 'native-base';

import ScreenNavigator from "./screen/Modules/Video/Drawer.js";



const AppNavigator = createStackNavigator({
	
  drawerNavigator: {
      screen: ScreenNavigator,
      navigationOptions: {
          header: () => null
      }
  },
 
});

class App extends Component {
	constructor() {
      super();
      this.state = {
        isReady : false,
        isLogin : false
      }
  }
  render(){
    const AppNav = createAppContainer(AppNavigator);
    return(<AppNav/>);
  }
}
export default App;