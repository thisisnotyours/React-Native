import React,{Component} from 'react';
import {View,Text,StyleSheet, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack= createStackNavigator();

export default Reservation=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Reservation" 
                component={Screen}
                options={{
                    headerTitleAlign:'center',
                    title:'예약',
                    headerTintColor:'#00ace6',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerStyle:{borderBottomWidth:1,borderBottomColor:'#00ace6'}
                    }}></Stack.Screen>
        </Stack.Navigator>
    );
}



//같은문서에 다른 클래스..
class Screen extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Image source={require('../images/logo.jpeg')} style={styles.img}></Image>
                <Text>등록된 예약이 없습니다</Text>
                <Text>예약을 등록해주세요</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    root:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'},
    img:{width:150,height:150,marginBottom:10}
});