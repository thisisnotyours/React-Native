import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../Screens_home/Home';
import Reservation from '../Screens_home/Reservation';
import Gallery from '../Screens_home/Gallery';
import MY from '../Screens_home/MY';

const Tab= createBottomTabNavigator();

export default HomeTabNav= ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name='Home' 
                component={Home} 
                options={{tabBarLabel:'Home',tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />),
                }}></Tab.Screen>

            <Tab.Screen 
                name='Reservation' 
                component={Reservation}
                options={{tabBarLabel:'Reservation',tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />),
                }}></Tab.Screen>

            <Tab.Screen 
                name='Gallery' 
                component={Gallery}
                options={{tabBarLabel:'Gallery',tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />),
                }}></Tab.Screen>

            <Tab.Screen 
                name='MY' 
                component={MY}
                options={{tabBarLabel:'MY',tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />),
                }}></Tab.Screen>
        </Tab.Navigator>
    );
}

