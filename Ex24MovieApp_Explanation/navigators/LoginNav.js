import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// 사용할 스크린 컴포넌트들 import
import Login from '../screen_login/Login';
import SignUp from '../screen_login/SignUp';
import ResetPassword from '../screen_login/ResetPassword';

const Stack= createStackNavigator();

//단순 Navigator 컴포넌트 이기에 Stateless(함수형) 컴포넌트로 제작
export default LoginNav= ()=>{
    return (        
        // <Stack.Navigator>
        //     <Stack.Screen name="Login" component={ Login }></Stack.Screen>
        //     <Stack.Screen name="SignUp" component={ SignUp }></Stack.Screen>
        //     <Stack.Screen name="ResetPW" component={ ResetPassword }></Stack.Screen>
        // </Stack.Navigator>

        //3. StackNavigator 기본 설정 후 제목줄 없애기 설정
        <Stack.Navigator screenOptions={{headerShown:false}}>                
            <Stack.Screen name="Login" component={ Login }></Stack.Screen>
            <Stack.Screen name="SignUp" component={ SignUp }></Stack.Screen>
            <Stack.Screen name="ResetPW" component={ ResetPassword }></Stack.Screen>
        </Stack.Navigator>
    );
}