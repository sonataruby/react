import React,{ Component } from 'react';
import { StyleSheet , View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity,SafeAreaView, ScrollView, Dimensions, AsyncStorage} from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text} from 'native-base';

class HomeScreen extends Component {
	
	constructor(props) {
		  super();
		  
		  //props.screenProps("conbo");
	 }
    
    render() {
        return (
		    <Container>
		    	
        		<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }} >
	                
					<Text>Welcome</Text>
		        </View>
				
		      </Container>
			  
		  );
    }
}


export default HomeScreen;