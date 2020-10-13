import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native';
import InputComponent from '../Components/InputComponent';

import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component{
    render(){
        return(
            <View style={styles.root}>
                <View style={styles.content}>
                    <Image source={require('../images/pefamlogo.png')} style={styles.logo}></Image>
                    <Text style={styles.texts}>로그인 하기</Text>

                    <InputComponent secureTextEntry={false} placeholder="이메일"></InputComponent>
                    <InputComponent secureTextEntry={true} placeholder="비민번호"></InputComponent>

                    

                    <View style={{width:'100%',marginTop:50}}>
                        <Button title="로그인" color="#094C78" onPress={this.login}></Button>
                    </View>


                    <Text onPress={()=>{this.props.navigation.navigate('SignUp')}} style={{textAlign:'right',marginTop:10}}>회원가입</Text>
                </View>
            </View>
        );
    }

    login= async ()=>{
        await AsyncStorage.setItem('email','android@gmail.com');
        this.props.navigation.replace('MainDrawerNav');
    }

}

const styles= StyleSheet.create({
    root:{flex:1,marginTop:40},
    content:{flex:1,margin:40},
    logo:{width:120,height:120,borderRadius:8,alignSelf:'center'},
    texts:{marginTop:50,marginBottom:10,fontSize:20,fontWeight:'bold',alignSelf:'center'}
    
});