import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeTabNav from './HomeTabNav';
import Reservation from '../Screens_home/Reservation';
import Gallery from '../Screens_home/Gallery';
import MY from '../Screens_home/MY';

const Drawer=createDrawerNavigator();

export default MainDrawerNav= ()=>{
    return(
        <Drawer.Navigator>
            {/* 꼭 TabNav먼저 연결해주기- 그래야 bottom에 Tab이 생김 */}
            <Drawer.Screen name="Home" component={HomeTabNav}></Drawer.Screen>
            <Drawer.Screen name="Reservation" component={Reservation}></Drawer.Screen>
            <Drawer.Screen name="Gallery" component={Gallery}></Drawer.Screen>
            <Drawer.Screen name="MY" component={MY}></Drawer.Screen>
        </Drawer.Navigator>
    );
}
