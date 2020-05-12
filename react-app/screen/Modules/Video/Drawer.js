import React, { Component } from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {  Dimensions} from 'react-native';
import { Icon} from 'native-base';
const deviceWidth = Dimensions.get("window").width;

import HomeScreen from "./../../Home.js";
import Navigator  from "./../../Navigator.js";

module.exports = createDrawerNavigator({
    Home : {
          screen : (props) => <HomeScreen {...props}/>,
          navigationOptions: {
            drawerLabel: 'Dashboard',
            drawerIcon:<Icon name="ios-speedometer" style={{ fontSize: 24 }} />
          }
      }
  },{
      initialRouteName: 'Home',
      contentComponent :(props) => <Navigator {...props}/>,
      drawerOpenRoute : 'DrawerOpen',
      drawerCloseRoute : 'DrawerClose',
      drawerToggleRoute : 'DrawerToggle',
      drawerWith : deviceWidth * 2/3
  });