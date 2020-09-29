import React, { Component } from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//Tab에 의해 전환될 Screen 3개 import
import Community from '../screen_community/Community';
import Favor from '../screen_community/Favor';
import MAP from '../screen_community/MAP';

//MaterialTopTab Navigator 객체 생성
const Tab= createMaterialTopTabNavigator();

// //단순 Navigator인 만큼 함수형 컴포넌트로 제작
export default CommunityTabNav= ()=>{
    return ( 
        // TabBar의 위치를 아래쪽으로 [tabBarPosition]  
        <Tab.Navigator tabBarPosition="bottom">
            <Tab.Screen name="Community" component={Community}></Tab.Screen>
            <Tab.Screen name="Favor" component={Favor}></Tab.Screen>
            <Tab.Screen name="MAP" component={ MAP}></Tab.Screen>
        </Tab.Navigator>              
    );
}