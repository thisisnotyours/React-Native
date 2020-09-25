import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Screen/Home';
import Second from './Screen/Second'


const Stack= createStackNavigator();

export default class MainStack extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="home" component={Home}></Stack.Screen>
                    <Stack.Screen name="second" component={Second}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}