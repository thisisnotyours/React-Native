import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../Screens_login/Login';
import SignUp from '../Screens_login/SignUp';

const Stack= createStackNavigator();

export default LoginStackNav= ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component={Login}
                options={{
                    headerShown:false
                }}></Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
        </Stack.Navigator>
    );
}