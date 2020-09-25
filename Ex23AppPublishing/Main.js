import React from 'react';   //Component를 쓰지않고 함수로..
import {View, Text} from 'react-native';


//클래스를 쓰지않고 함수로 화면 만들기   //선억적, 익명, 화살표 함수 다 사용가능
export default function Main(){       //선억적 함수
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>
            <Text style={{color:'white'}}>React Native Publishing App</Text>
        </View>
    );
}