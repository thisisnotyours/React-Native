import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FirstTab from './screen_bottom_tab/FirstTab';
import SecondTab from './screen_bottom_tab/SecondTab';
import ThirdTab from './screen_bottom_tab/ThirdTab';
import {Image} from 'react-native';

//네비게이터 객체만들기
const BottomTab= createBottomTabNavigator();

export default class MainBottomTab extends Component{
    render(){
        return(
            <NavigationContainer>
                <BottomTab.Navigator
                    initialRouteName="second"
                    tabBarOptions={{
                        activeTintColor:'red',
                        inactiveTintColor:'grey',
                        activeBackgroundColor:'lightgrey',
                        showLabel:true,
                        labelPosition:'below-icon'
                    }}>
                    <BottomTab.Screen 
                        name="first" 
                        component={FirstTab}
                        // 개별적으로 스타일주기- options
                        options={{
                            tabBarLabel:'첫번째',
                            tabBarIcon: ()=>{return <Image source={require('./icons/RN_logo.png')} style={{width:24, height:24}}></Image>},
                            // badge는 아이콘이 있어야 나옴
                            tabBarBadge:'new'
                        }}>
                        </BottomTab.Screen>
                    <BottomTab.Screen name="second" component={SecondTab}></BottomTab.Screen>
                    <BottomTab.Screen name="third" component={ThirdTab}></BottomTab.Screen>
                </BottomTab.Navigator>
            </NavigationContainer>
        );
    }
} 