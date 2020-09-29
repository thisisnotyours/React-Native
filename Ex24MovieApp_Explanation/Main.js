
// ## 앱 제작의 주요 작업 순서 #####################################################################################################
// 1) Intro 화면 컴포넌트 제작  [ Intro.js ]
// 2) Login 관련 화면 컴포넌트와 Navigator 제작 [ screen_login폴더, commponents폴더, navigators폴더 ]
// 3) 앱의 주요기능 및 서브기능 관련 작업
//   3.1) 앱의 주요기능(영화정보제공) 화면 컴포넌트들과 Navigator 제작  [ screen_movie폴더, commponents_movie폴더, navigators폴더 ]
//   3.2) 앱의 서브기능(커뮤니티 등) 화면 컴포넌트들과 Navigator 제작   [ screen_community폴더, navigators폴더 ]
// ################################################################################################################################


import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


//최상위 Navigator에 의해 전환될 스크린(컴포넌트) or Navigator 사용을 위한 import
import Intro from './Intro';  // 기존 로그인 여부를 체크하는 Intro 화면 Component
import LoginNav from './navigators/LoginNav'; // 로그인 관련 스크린들을 가지고 있는 Navigator
import MainDrawerNav from './navigators/MainDrawerNav'; // 앱의 주요화면들을 가지고 있는 Navigator


//앱 전체 화면(스크린 : 컴포넌트)들을 전환할 수 있는 최상위 Stack Navigator 객체 생성
const RootStack= createStackNavigator();

//NavigationContainer를 가진 root 컴포넌트 - 앱의 시작 컴포넌트(index.js에서 설정)
export default class Main extends Component{
    render(){
        return (
            <NavigationContainer>
                {/* 1. 우선 로그인 관련화면 작업부터 제작시작 - 우선 screenOptions 지정 없이 */}
                {/* <RootStack.Navigator>
                    <RootStack.Screen name="intro" component={ Intro }></RootStack.Screen>
                    <RootStack.Screen name="loginNav" component={ LoginNav }></RootStack.Screen>
                </RootStack.Navigator> */}

                {/* 제목줄 없이 이동할 것이기에 screenOptions 지정 */}
                <RootStack.Navigator screenOptions={ {headerShown:false}}>
                    <RootStack.Screen name="intro" component={ Intro }></RootStack.Screen>
                    <RootStack.Screen name="LoginNav" component={ LoginNav }></RootStack.Screen>
                    <RootStack.Screen name="MainDrawerNav" component={ MainDrawerNav }></RootStack.Screen>
                </RootStack.Navigator>

            </NavigationContainer>
        );
    }
}
