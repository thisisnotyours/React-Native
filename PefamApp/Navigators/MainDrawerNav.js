import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeTabNav from './HomeTabNav';
import Reservation from '../Screens_home/Reservation';
import Gallery from '../Screens_home/Gallery';

const Drawer=createDrawerNavigator();

export default MainDrawerNav= ()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeTabNav}></Drawer.Screen>
        </Drawer.Navigator>
    );
}
