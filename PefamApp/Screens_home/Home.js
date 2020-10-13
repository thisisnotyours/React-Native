import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const Stack= createStackNavigator();

export default Home=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Screen}
                options={{headerShown:false}}
                ></Stack.Screen>
        </Stack.Navigator>
    );
}



//같은문서에 다른 클래스..
class Screen extends Component{
    render(){
        return(
            <ScrollView style={styles.root}>
                <Image source={require('../images/logo3.jpeg')} style={styles.logo}></Image>
                <View style={styles.textRoot}>
                    <Text style={styles.text1}>반려견 토탈 돌봄 서비스를</Text>
                    <Text style={styles.text2}>만나보세요</Text>
                    <TextInput placeholder="    ALL NEW 페펨 리뉴얼 오픈 안내" placeholderTextColor='#595757' style={styles.textInput}></TextInput>
                </View>



                <View style={styles.cardView1}>
                    <TouchableOpacity style={styles.cardView2}>
                        <Image source={require('../images/img4.jpeg')} style={{alignSelf:'center',width:70,height:50,marginBottom:10}}></Image>
                        <Text style={{fontWeight:'bold',fontSize:17}}>위탁돌봄</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardView2}>
                        <Image source={require('../images/img3.jpeg')} style={{alignSelf:'center',width:70,height:50,marginBottom:10}}></Image>
                        <Text style={{fontWeight:'bold',fontSize:17}}>방문돌봄</Text>
                    </TouchableOpacity>
                </View>




                <View style={{flex:1,flexDirection:'row'}}>
                    <TouchableOpacity style={styles.cardView3}>
                        <Image source={require('../images/img2.jpeg')} style={{alignSelf:'center',width:50,height:50}}></Image>
                        <Text>서비스 안내</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardView4}>
                        <Image source={require('../images/img1.jpeg')} style={{alignSelf:'center',width:50,height:50}}></Image>
                        <Text>이용방법</Text>
                    </TouchableOpacity>
                </View>

                

                <View style={styles.adBox}>
                    <Image source={require('../images/pefammanager.jpeg')} style={styles.adImg} resizeMode="contain"></Image>
                </View>
                
            </ScrollView>
        );
    }
}

const styles=StyleSheet.create({
    root:{flex:1},
    logo:{alignSelf:'center',width:60,height:30,marginTop:10},
    textRoot:{marginLeft:16,marginRight:16,marginTop:40},
    text1:{marginBottom:10,fontSize:20,fontWeight:'bold'},
    text2:{fontSize:20},
    textInput:{borderWidth:1, borderRadius:5,marginBottom:10,marginTop:18,backgroundColor:'white'},

    cardView1:{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',height:140,margin:10,marginLeft:18,marginRight:18,backgroundColor:'white',borderRadius:8,elevation:10},
    cardView2:{flex:1,justifyContent:'center',alignItems:'center',height:100,margin:10,marginLeft:18,marginRight:10},

    cardView3:{flex:1,justifyContent:'center',alignItems:'center',height:80,margin:10,marginLeft:18,marginRight:10,backgroundColor:'white',borderRadius:8,elevation:10},
    cardView4:{flex:1,justifyContent:'center',alignItems:'center',height:80,margin:10,marginLeft:10,marginRight:18,backgroundColor:'white',borderRadius:8,elevation:10},


    adBox:{height:200,marginTop:30,backgroundColor:'white'},
    adImg:{margin:25,borderRadius:10,width:'100%',height:200}
});