import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Screens_home/Home';
import Reservation from '../Screens_home/Reservation';
import Gallery from '../Screens_home/Gallery';
import MY from '../Screens_home/MY';

const Tab= createBottomTabNavigator();

export default HomeTabNav= ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name='home' component={Home}></Tab.Screen>
            <Tab.Screen name='Reservation' component={Reservation}></Tab.Screen>
            <Tab.Screen name='Gallery' component={Gallery}></Tab.Screen>
            <Tab.Screen name='MY' component={MY}></Tab.Screen>
        </Tab.Navigator>
    );
}

