import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Intro from './Intro';
import LoginStackNav from './navigators/LoginStackNav';

const RootStack= createStackNavigator();

export default class Main extends Component{
    render(){
        return(
            <NavigationContainer>
                <RootStack.Navigator screenOptions={{headerShown:false}}>
                    <RootStack.Screen name="Intro" component={Intro}></RootStack.Screen>
                    <RootStack.Screen name="LoginStackNav" component={LoginStackNav}></RootStack.Screen>
                </RootStack.Navigator>
            </NavigationContainer>
        );
    }
}