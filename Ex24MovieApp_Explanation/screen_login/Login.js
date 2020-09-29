import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import InputComponent from '../components/InputComponent';

import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component{

    // 0. 우선 테스트 화면
    // render(){
    //     return (
    //         <View style={styles.root}>
    //             <Text>LOGIN</Text>
    //             <Button title="button" onPress={()=>this.props.navigation.navigate('drawerNav')}></Button>
    //         </View>
    //     );
    // }


    render(){
        return (
            <View style={styles.root}>
                {/* 크게 2개 영역으로 구성 : 로그인 콘텐츠영역, 아래쪽의 회사이름 or 앱이름 표시영역*/}
                {/* 1. 로그인 콘텐츠 영역 */}
                <View style={styles.content}>
                    {/*1.1 로고 */}
                    <Text style={styles.logo}>MOVIE App</Text>

                    {/*1.2 이메일/패스워드 입력박스 */}
                    {/* TextInput 은 로그인,회원가입,비밀번호리셋화면에 모두 사용되므로 사용빈도가 높음. 이를 일일이 스타일 하기 어려우므로 별도의 CustomComponent로 제작하여 재사용 */}
                    <InputComponent secureTextEntry={false} placeholder="이메일" ></InputComponent>
                    <InputComponent secureTextEntry={true} placeholder="비밀번호" ></InputComponent>                   

                    {/*1.3 비밀번호 재설정 : Text컴포넌트 onPress동작함 */}
                    <Text style={styles.resetPW} onPress={ ()=> this.props.navigation.navigate('ResetPW')}>비밀번호 재설정</Text>

                    {/*1.4 로그인버튼 */}                  
                    <View style={{width:'100%', marginBottom:24}}>
                        <Button title="로그인" color="#3796EF" onPress={this.login}></Button>
                    </View>                      

                    {/*1.5 회원가입 */}
                    <Text style={styles.signup}>
                        계정이 없으신가요? <Text style={styles.singupLink} onPress={()=>this.props.navigation.navigate('SignUp')}>가입하기</Text>
                    </Text>

                </View>

                {/* 2. footer영역 */}
                <View style={styles.footer}>
                    <Text style={styles.footerCopyright}>MovieApp by mrhi</Text>
                </View>
            </View>
        );
    }

    //로그인 버튼클릭시
    login= async ()=>{
        //원래는 서버에 전송하는 코드사용해야 하지만 시간상 이는 생략하고 

        //AsyncStorage에 가상의 이메일값으로 로그인 유무만 저장하도록        
        await AsyncStorage.setItem('email', 'android@mrhi.com');

        //로그인이 되었으니 앱의 메인화면인 Movie List화면을 가진 drawNav로 이동
        this.props.navigation.replace('MainDrawerNav');
    }


    //3.Header영역(ActionBar)가 필요해 보이지 않으므로 제거 하기 위해 LoginNav.js에서 Navigator에 screenOptions 설정      

}

const styles= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex:1,  //footer제외 모든 공간 사용
        justifyContent:'center',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3',
        padding: 8,
    },
    footerCopyright:{
        color: '#929292',
        textAlign:'center',
    },
    logo:{
        color: '#292929',
        fontSize:40,
        fontWeight:'bold',
        textAlign:"center",
        marginBottom: 32,
    },
    resetPW:{
        width: '100%',
        color:'#3796EF',
        textAlign:'right',
        marginTop: 8,
        marginBottom: 16,
        marginRight:8,
    },
    btn:{
        width:'100%',
        height:40,
        
    },
    signup:{
        color:'#929292',
        textAlign:'center',
    },
    singupLink:{
        color:'#3797EF',
    }
    
});