import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack= createStackNavigator();

//오로지 제목줄만을 위한 Screen 1개 짜리 Navigator
export default MAP= ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="MAP" component={Screen}></Stack.Screen>
        </Stack.Navigator>
    );
}


//따로 만들지 말고 [실제화면 컴포넌트] 같은문서에 설계해보기..
class Screen extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text>MAP</Text>
            </View>
        );
    }
}


const styles= StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'}
});