import React,{Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import InputComponent from '../components/InputComponent';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component{
    render(){
        return(
            <View style={styles.root}>
                {/* 1.로그인 콘텐츠 화면 */}
                <View style={styles.content}>
                    {/* 1.1 로고 */}
                    <Text style={styles.logo}>MOVIE App</Text>

                    {/* 1.2 이메일/패스워드 입력박스- (값 전달하기)- secureTextEntry, placeHolder:아무이름이나 속성값으로 (전달값으로) 사용가능 */}
                    <InputComponent secureTextEntry={false} placeHolder="이메일"></InputComponent>
                    <InputComponent secureTextEntry={true} placeHolder="비밀번호"></InputComponent>

                    {/* 1.3 비밀번호 재설정 : Text 컴포넌트 onPress 동작함  /  navigate('name속성 이름') */}
                    <Text onPress={()=>{this.props.navigation.navigate('ResetPassword')}} style={styles.resetPw}>비밀번호 재설정</Text>
               
                    {/* 1.4 로그인 버튼 */}
                    <View style={{width:'100%', marginBottom:24}}>
                        <Button onPress={this.login} title="로그인" color="#3796fe"></Button>
                    </View>
               
                    {/* 1.5 회원가입 버튼  -Text안에 Text넣기 가능! -  navigate('name속성 이름')*/}
                    <Text style={styles.signup}>
                        계정이 없으신가요? <Text onPress={()=>{this.props.navigation.navigate('SignUp')}} style={styles.signupLink}>가입하기</Text>
                    </Text>
                </View>
                
                {/* 2. Footer 영역 */}
                <View style={styles.footer}>
                    <Text style={styles.footerCopyright}>MovieApp by Sue.K</Text>
                </View>
            </View>
        );
    }


    //로그인 버튼 클릭 시 실행되는 메소드
    login= async()=>{
        alert('kk');
        //AsyncStorage 에 영구 저장 (SharedPreference 같은)     //await-비동기 방식을 동기화  --> 로그인이 끝날때까지 기다렸다가 로그인이 끝나면 다음화면으로 넘어감..
        await AsyncStorage.setItem('email', 'android@gmail.com');

        //로그인이 되었으니 메인화면 MovieList 화면을 가진 DrawerNav 로 이동
        //기존에 있는 것을 finish 시키고 넘어가려면 navigate대신에 replace를 사용
        this.props.navigation.replace('MainDawerNav');
    }
}


const styles= StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'#feffff'
    },

    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:32
    },

    logo:{
        color:'#292929',
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:32
    },

    resetPw:{
        width:'100%',
        textAlign:'right',
        color:'#3796fe',
        marginRight:8,
        marginTop:8,
        marginBottom:16
    },

    signup:{
        color:'#929292',
        textAlign:'center'
    },

    signupLink:{
        color:'#3796fe'
    },

    footer:{
        borderTopColor:'#d3d3d3',
        borderTopWidth:1,
        padding:8
    },

    footerCopyright:{
        color:'#929292',
        textAlign:'center'
    }
});