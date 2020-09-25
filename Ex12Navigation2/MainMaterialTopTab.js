import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import FirstTab from './screen_material_top_tab/FirstTab';
import SecondTab from './screen_material_top_tab/SecondTab';
import ThirdTab from './screen_material_top_tab/ThirdTab';
import { Image } from 'react-native';






const TopTab= createMaterialTopTabNavigator();

export default class MainMaterialTopTab extends Component{
    render(){
        return(
            <NavigationContainer>
                <TopTab.Navigator
                    initialRouteName='second'
                    tabBarPosition='top'
                    swipeEnabled={true}
                    tabBarOptions={{
                        activeTintColor:'blue',
                        inactiveTintColor:'grey',
                        showLabel:true,
                        indicatorStyle:{
                            backgroundColor:'green',
                            height:6
                        },
                        showIcon:true
                    }}>
                    <TopTab.Screen name="first" component={FirstTab}></TopTab.Screen>
                    <TopTab.Screen 
                        name="second" 
                        component={SecondTab}
                        options={{
                            tabBarLabel:'두번째',
                            tabBarIcon:()=><Image source={require('./icons/RN_logo.png')} style={{width:24, height:24}}></Image>
                        }}>
                        </TopTab.Screen>
                    <TopTab.Screen name="third" component={ThirdTab}></TopTab.Screen>
                </TopTab.Navigator>
            </NavigationContainer>
        );
    }
}
