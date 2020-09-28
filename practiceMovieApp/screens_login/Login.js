import React,{Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import InputComponent from '../components/InputComponent';

export default class Login extends Component{
    render(){
        return(
            <View style={styles.root}>
                <View style={styles.content}>
                    <Text style={styles.logo}>Movie App</Text>

                    <InputComponent secureTextEntry={false} placeHolder="이메일"></InputComponent>
                    <InputComponent secureTextEntry={true} placeHolder="비밀번호"></InputComponent>

                    <Text style={styles.resetPw} onPress={()=>this.props.navigation.navigate('ResetPassword')}>비밀번호 재설정</Text>

                    <View style={{width:'100%', marginBottom:24}}>
                        <Button title="로그인" color='red'></Button>
                    </View>

                    <Text style={styles.signUp}>
                        계정이 없으신가요?  <Text onPress={()=>this.props.navigation.navigate('SignUp')} style={{color:'red'}}>가입하기</Text>
                    </Text>
                </View>
            </View>
        );
    }
}


const styles= StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'black'
    },

    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:32
    },

    logo:{
        color:'white',
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:32
    },

    resetPw:{
        width:'100%',
        color:'white',
        textAlign:'right',
        marginRight:8,
        marginTop:8,
        marginBottom:16
    },

    signUp:{
        color:'white',
        textAlign:'center'
    }


});