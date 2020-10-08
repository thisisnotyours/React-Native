import React,{Component} from 'react';
import {View, Text} from 'react-native';
import Pefam from './Screen/Pefam';
import Home from './Screen/Home';
import SignUp from './Screen/SignUp';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack= createStackNavigator();

export default class Main extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerTitleStyle:{fontWeight:'bold',color:'#1266FF'},
                        headerStyle:{backgroundColor:'#F3F3F3'},
                        headerTitleAlign:'center'
                    }}>
                    <Stack.Screen name="Pefam" component={Pefam}></Stack.Screen>
                    <Stack.Screen name="HOME" component={Home}></Stack.Screen>
                    <Stack.Screen name="SIGN UP" component={SignUp}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}