import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Intro from './Intro';
import MainDrawerNav from './Navigators/MainDrawerNav';

const RootStack= createStackNavigator();

export default class Main extends Component{
    render(){
        return(
            <NavigationContainer>
                <RootStack.Navigator>
                    <RootStack.Screen name="Intro" component={Intro}></RootStack.Screen>
                    <RootStack.Screen name="MainDrawerNav" component={MainDrawerNav}></RootStack.Screen>
                </RootStack.Navigator>
            </NavigationContainer>
        );
    }
}