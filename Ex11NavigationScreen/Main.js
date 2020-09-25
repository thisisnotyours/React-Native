import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screen/Home';
import Second from './screen/Second';
import { Alert, Button, View, Image, Text } from 'react-native';

//Stack Navigator 객체 생성   //여기서는 Stack-변수이름으로 사용해보자..
const Stack= createStackNavigator();   //createStackNavigator()라는 함수를 호출=> 객체를 생성하는 또다른 방법

export default class Main extends Component{
    render(){
        return(
            <NavigationContainer>
                {/* Stack Navigator 컴포넌트 및 보여줄 화면들 지정 */}
                <Stack.Navigator
                    screenOptions={{
                        headerTintColor:'white', 
                        headerTitleStyle:{
                            fontWeight:'bold'
                        },
                        headerStyle:{
                            backgroundColor:'green'
                        },
                        headerTitleAlign:'center'
                    }}>
                    <Stack.Screen name="home" component={Home} options={{title:'홈'}}></Stack.Screen>
                    <Stack.Screen 
                        name="second" 
                        component={Second}
                        options={{
                            title:'두번째',
                            headerTintColor:'black',
                            headerRight: ()=>{return (<Button title="menu" onPress={()=>{Alert.alert('옵션메뉴 입니다.');}}></Button>);},
                            // 커스텀으로 내맘대로 제목줄을 만들고 싶을때 headerTitle()
                            headertitle: ()=>{return <LogoHeader></LogoHeader>}
                            // headerShown: false

                        }}>
                    </Stack.Screen>
                </Stack.Navigator>

            </NavigationContainer>
        );
    }
}//Main class..




class LogoHeader extends Component{
    render(){
        return(
            <View style={{flexDirection:'row', paddingLeft:8, alignItems:'center'}}>
                <Image source={require('./icons/RN_logo.png')} style={{width:30, height:30}}></Image>
                <Text style={{color:'blue', fontWeight:'bold', fontSize:24, marginLeft:16}}> SECOND </Text>
            </View>
        );
    }
}