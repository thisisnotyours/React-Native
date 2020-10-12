import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack= createStackNavigator();

export default MY=()=>{
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
            <ScrollView style={styles.root}>

                <View style={{height:20}}></View>

                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.texts}>회원 정보</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.texts}>반려견 정보</Text>
                </TouchableOpacity>

                <View style={{height:20}}></View>




                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.texts}>예약 내역</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.texts}>나의 후기</Text>
                </TouchableOpacity>

                <View style={{height:20}}></View>


                

                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.texts}>공지사항</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.texts}>고객센터</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.texts}>FAQ</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.texts}>환경설정</Text>
                </TouchableOpacity>



                
            </ScrollView>
        );
    }
}

const styles=StyleSheet.create({
    root:{flex:1},
    touchable:{flex:1,justifyContent:'center',height:60,backgroundColor:'white',padding:10,borderBottomWidth:1,borderColor:'lightgrey'},
    texts:{fontSize:18,marginLeft:20}
});