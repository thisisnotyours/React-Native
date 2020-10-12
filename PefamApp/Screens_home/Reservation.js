import React,{Component} from 'react';
import {View,Text,StyleSheet, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack= createStackNavigator();

export default Reservation=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Screen}></Stack.Screen>
        </Stack.Navigator>
    );
}



//같은문서에 다른 클래스..
class Screen extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Image source={require('../images/ic_home.png')}></Image>
                <Text>등록된 예약이 없습니다</Text>
                <Text>예약을 등록해주세요</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    root:{flex:1,justifyContent:'center',alignItems:'center'},
});