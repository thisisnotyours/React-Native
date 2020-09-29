import React,{Component} from 'react';
import {View, Text, StyleSheet, Button, Image, Alert} from 'react-native';

import TabComponent from '../components/TabComponent';
import InputComponent from '../components/InputComponent';

export default class ResetPassword extends Component{

    state={
        tabs:["이메일", "전화번호"],
        tabIndex:0,
        message:[
            "이메일을 입력하면 임시 비밀번호를 보내드립니다.",
            "전화번호를 입력하면 임시 비밀번호를 보내드립니다."
        ]
    }


    render(){
        return (
            <View style={styles.root}>
                {/* 1. 콘텐츠 영역 */}
                <View style={styles.content}>
                    <View style={styles.lockImageContainer}>
                        <Image source={require('../Images/lock.png')}></Image>
                    </View>

                    {/* 2. 타이틀 글씨 */}
                    <Text style={styles.title}>로그인에 문제가 있나요?</Text>

                    {/* 3. 탭선택에 따라 메세지 보여주기 */}
                    <Text style={styles.message}>{this.state.message[this.state.tabIndex]}</Text>

                    {/* 4. 탭버튼 */}
                    <View style={styles.tabContainer}>
                        {
                            // for each 대신에 [리턴]하는 값을 가질수 있도록 map사용 -배열의 개수만큼 반복
                            this.state.tabs.map((value, index)=>{
                                // tabIndex현재번째 ==index선택한번째?
                                return <TabComponent onPress={()=>this.setTabIndex(index)} selected={this.state.tabIndex==index} label={value} key={"Tab"+index}></TabComponent>
              
                            })
                        }
                    </View>

                    {/* 정보입력창 */}
                    <InputComponent placeholder={this.state.tabs[this.state.tabIndex]}></InputComponent>

                    {/* 다음버튼 */}
                    <View style={{width:'100%', margin:16}}>
                        <Button title="다음" onPress={()=>{Alert.alert('임시비밀번호가 발송되었습니다.', '로그인 후 정보수정을 통해 안전한 비밀번호로 변경해 주시기 바랍니다.')}}></Button>
                    </View>
                </View>



                {/* 4. Footer 영역 */}
                <View style={styles.footer}>
                    <Text style={styles.goBack} onPress={()=>this.props.navigation.goBack()}>로그인화면으로 돌아가기</Text>
                </View>

                
            </View>
        );
    }


    //탭선택시 발동하는 메소드
    setTabIndex=(index)=>this.setState({tabIndex:index});
}

const styles= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex:1,
        width:'100%',
        alignItems:'center',
        padding:32
    },

    lockImageContainer:{
        padding:24,
        borderWidth:2,
        borderColor:'#292929',
        borderRadius:100,
        margin:16
    },  

    title:{
        fontSize:16,
        marginBottom:16
    },

    message:{
        textAlign:'center',
        marginBottom:16,
        color:'#292929'
    },

    tabContainer:{    // tab 버튼을 감싸는 뷰의 스타일
        flexDirection:'row',
        marginBottom:16
    },

    footer:{
        borderTopWidth:1,
        borderTopColor:'#D3D3D3',
        padding:8
    },
    goBack:{
        color:'#3796EF',
        textAlign:'center'
    },

    
});