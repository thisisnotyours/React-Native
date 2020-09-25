import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Screen1 from './screen_drawer/Screen1';
import Screen2 from './screen_drawer/Screen2';
import Screen3 from './screen_drawer/Screen3';
import { Image } from 'react-native';

const Drawer= createDrawerNavigator();

export default class MainDrawer extends Component{
    render(){
        return(
            <NavigationContainer>
                <Drawer.Navigator
                    drawerPosition='right'
                    // 풀스크린 모드같은..-hideStatusBar
                    hideStatusBar={false}
                    drawerType='front'
                    // drawerType='slide'
                    drawerStyle={{
                        backgroundColor:'lightblue',
                        width:'40%'
                    }}
                    drawerContentOptions={{
                        activeTintColor:'red',
                        itemStyle:{
                            marginVertical:16
                        }
                    }}
                    openByDefault={true}>
                    <Drawer.Screen name='one' component={Screen1}></Drawer.Screen>
                    <Drawer.Screen 
                        name="two" 
                        component={Screen2}
                        options={{
                            drawerLabel:'두번째',
                            // obj가 기본내장- obj안에 focused, size, color..들어있음
                            drawerIcon:(obj)=>{return <Image style={{width:obj.size, height:obj.size}} source={require('./icons/RN_logo.png')}></Image>}
                        }}>    
                        </Drawer.Screen>
                    <Drawer.Screen 
                        name='three' 
                        component={Screen3}
                        options={{
                            //obj를 쓰지말고 구조분해 할당으로 사용하기
                            drawerIcon: ({focused, size, color})=><Image style={{width:size, height:size}} source={require('./icons/RN_logo.png')}></Image>
                        }}>
                        </Drawer.Screen>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
} 


