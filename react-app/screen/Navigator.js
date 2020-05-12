import React,{ Component } from 'react';
import {createDrawerNavigator, DrawerItems, DrawerContentScrollView} from 'react-navigation-drawer';
import { StyleSheet , View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity,SafeAreaView, ScrollView, Dimensions, AsyncStorage} from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text} from 'native-base';

class NavigatorScreen extends Component {
	
	constructor(props) {
		  super();
		  
		  //props.screenProps("conbo");
	 }
    
    render() {
        return (
		    <Container>
                <Content style={{flex:1, backgroundColor: "#fff", top: -1 }}>
                    <View style={{height: 110,marginBottom: 10,backgroundColor : "#3f51b5",color : "#FFF",flexDirection: "row",flexGrow:1}}>
                            <View style={{flex:0.4}}>
                                <Image
                                square
                                style={{width: 85,
                                    height: 85,
                                    resizeMode: "cover",
                                    backgroundColor:"#FFF",
                                    margin:10,
                                    borderRadius:8}}
                                source={{uri : "http://vsmart.ltd/"}}
                                />
                            </View>
                            <View style={{flex:0.6, paddingTop:15, color:'#FFF'}}>
                                <View><Text style={{color:'#FFF'}}>Welcome, Back</Text></View>
                                <View><Text style={{color:'#FFF'}} onPress={() => {this.props.screenProps.logout()}}>Logout</Text></View>
                            </View>
                            </View>
                    <ScrollView>
                        <DrawerItems {...this.props} />
                    </ScrollView>
                </Content>
            </Container>
			  
		  );
    }
}


export default NavigatorScreen;