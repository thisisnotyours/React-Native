import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import Intro from './Intro';
import MainDrawerNav from './Navigators/MainDrawerNav';
import LoginStackNav from './Navigators/LoginStackNav';

const RootStack= createStackNavigator();

export default class Main extends Component{
    render(){
        return(
            <NavigationContainer>
                <RootStack.Navigator>
                    <RootStack.Screen 
                        name="Intro" 
                        component={Intro}
                        options={{
                            headerShown:false
                        }}>
                    </RootStack.Screen>


                    <RootStack.Screen 
                        name="LoginStackNav" 
                        component={LoginStackNav}
                        options={{
                            headerShown:false
                        }}></RootStack.Screen>


                    <RootStack.Screen 
                        name="MainDrawerNav" 
                        component={MainDrawerNav}
                        options={{
                            headerShown:false
                        }}></RootStack.Screen>
                </RootStack.Navigator>
            </NavigationContainer>
        );
    }
}