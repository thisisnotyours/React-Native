import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//Drawer Navigator에 의해 전환될 스크린(컴포넌트) or Navigator 들 import
import MovieStackNav from './MovieStackNav';
import CommunityTabNav from './CommunityTabNav';

//Drawer Navigator 객체 생성
const Drawer= createDrawerNavigator();

//단순 Navigator이기에 간단한 함수형 컴포넌트 제작
export default function MainDrawerNav(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="MovieStackNav" component={ MovieStackNav }></Drawer.Screen>            
            <Drawer.Screen name="CommunityTabNav" component={ CommunityTabNav }></Drawer.Screen>
        </Drawer.Navigator>
    );
}