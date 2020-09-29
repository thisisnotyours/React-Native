import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import TabComponent from '../components/TabComponent';
import InputComponent from '../components/InputComponent';

export default class SignUp extends Component{
    //0. 우선 테스트화면
    // render(){
    //     return (
    //         <View style={styles.root}>
    //             <Text>SignUp</Text>
    //         </View>
    //     );
    // }

    //1.1 탭작업 시에 탭이 여러개 일수도 있고 탭에 따라 보여지는 내용물이 다르므로 탭을 배열로 만들어서 index번호로 어느 탭인지 인지하도록
    //단, 탭선택에 따라 화면 갱신이 되어야 하므로 state 로
    constructor(){
        super();
        this.state={
            tabs:["전화번호", "이메일"],
            tabIndex: 0, //현재 선택된 탭번호                        
        }
    }

    //1.1 탭 선택에 따라 tabIndex번호를 변경하는 메소드
    setTabIndex= (index)=>{
        this.setState({tabIndex:index});
    }


    // 1. 회원가입 화면 구성
    render(){
        return (
            <View style={styles.root}>
                {/* 본문과 footer영역 2개로 구성 */}
                {/* 1.1 본문영역 */}
                <View style={styles.content}>                

                    {/* 1.1.1 전화번호와 이메일 중 원하는 정보로 회원가입 할 수 있도록 탭으로 구성*/}                    
                    <View style={styles.tabContainer}>
                        {/* 탭컴포넌트는 ResetPassword화면에서도 사용할 것이어서 별도 Component로 제작[components/TabComponent.js] */}
                        {/* 일단 만들어지는지 테스트  */}
                        {/* <TabComponent label="전화번호" selected={true} onPress={}></TabComponent>
                        <TabComponent label="이메일"></TabComponent> */}

                        {/* 탭들이 여러개 일수 있으므로 배열로 만들고 index번호로 관리 */}
                        {
                            this.state.tabs.map( (value, index)=>{
                                // tabs배열의 항목값을 Label로 전달하고 현재 선택된 탭번호(state.tabIndex)가 현재 탭번호과 같은지 비교연산 결과전달(전달값 : boolean결과) 및 선택된 index번호의 탭을 현재선택탭값으로 변경하는 메소드전달
                                return <TabComponent label={value} selected={ this.state.tabIndex===index } onPress={ ()=>this.setTabIndex(index) } key={"Tab"+index} ></TabComponent>
                            })
                        }
                    </View>

                    {/* 1.1.2 정보 입력 - 미리 만들어놓았던 components/InputComponent.js 이용 : 현재 탭의 라벨값으로 힌트제공 */}
                    <InputComponent placeholder={ this.state.tabs[ this.state.tabIndex ] }></InputComponent>

                    {/* 1.1.3 이메일 입력 일때 패스워드 입력컴포넌트도 존재하도록*/}
                    {
                        // if문법 사용불가
                        // if( tabIndex===0){ }

                        // && 연산자를 통해 앞의 조건이 true일때 && 다음 코드가 실행되도록
                        this.state.tabIndex===1 && <InputComponent placeholder="비밀번호" secureTextEntry={true}></InputComponent>                                            
                    }

                    {/* 전화번호탭일 때의 다음 버튼 */}
                    {
                        this.state.tabIndex===0 && <View style={{width:'100%', margin:16}}><Button title="다음" onPress={()=>{this.setTabIndex(1)}}></Button></View>
                    }

                    {/* 이메일 탭일 때의 완료버튼 */}
                    {
                        this.state.tabIndex===1 && <View style={{width:'100%', margin:16}}><Button title="완료" onPress={()=>{this.props.navigation.goBack()}}></Button></View>
                    }                    

                    {/* 1.1.3 [전화번호]탭 선택시에는 왜 전화번호를 입력하도록 하는지 알려주는 메세지 표시 */}
                    {
                        // if문법 사용불가
                        // if( tabIndex===0){ }

                        // && 연산자를 통해 앞의 조건이 true일때 && 다음 코드가 실행되도록
                        this.state.tabIndex===0 && <Text style={styles.telMessage}>Movie APP의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든지 수신을 취소할 수 있습니다.</Text>
                    }


                </View>

                {/* 1.2 footer영역 : 로그인화면으로 되돌아 가는 버튼*/}
                <View style={styles.footer}>
                    <Text style={styles.footerMsg}>
                        이미 계정이 있으신가요?  <Text style={styles.goBack} onPress={()=>this.props.navigation.goBack()}>로그인</Text>
                    </Text>
                </View>
            </View>
        );
    }


    //3.Header영역(ActionBar)가 필요해 보이지 않으므로 제거
    static navigationOptions={
        headerShown: false,
    }
}

const styles= StyleSheet.create({
    //footer 까지는  Login.js의 스타일 그대로 복사해서 사용
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex:1,  //footer제외 모든 공간 사용
        width:'100%',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3',
        padding: 8,
    },
    /////
    footerMsg:{
        color: '#929292',
        textAlign:'center',        
    },
    goBack:{
        color: '#3796EF',
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16,
    },
    telMessage:{
        textAlign:'center',
        fontSize:12,
        color:'#929292',
        marginLeft:8,
        marginRight:8,
    },
});