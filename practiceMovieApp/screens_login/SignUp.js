import React,{Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import TabComponent from '../components/TabComponent';
import InputComponent from '../components/InputComponent';

export default class SignUp extends Component{

    state={
        tabs:["전화번호", "이메일"],
        tabIndex:0
    }

    render(){
        return(
            <View style={styles.root}>
                <View style={styles.content}>
                        <View style={styles.tabContainer}>
                            {/* 탭이 여러개 일수 도 있음 */}
                            {
                                this.state.tabs.map((value, index)=>{
                                    return(
                                        <TabComponent onPress={()=>{this.setTabIndex(index)}} selected={this.state.tabIndex===index} label={value} key={"Tab"+index}></TabComponent>
                                    );
                                })
                            }
                        </View>


                        {/* 1.2 정보 입력창 */}
                        <InputComponent></InputComponent>

                    </View>


                    {/* 2. footer 영역 */}
                    <View style={styles.footer}>
                        <Text style={styles.footerMsg}>
                            이미 계정이 있으신가요? <Text style={styles.goBack}>로그인</Text>
                        </Text>
                    </View>
            </View>
        );
    }
}


const styles= StyleSheet.create({
    root:{
        flex:1,
        width:'100%',
        backgroundColor:'black',
        alignItems:'center',
        padding:32
    },

    content:{
        flex:1,
        width:'100%',
        alignItems:'center',
        padding:32
    },

    tabContainer:{
        flexDirection:'row',
        marginBottom:16
    },

    telMessage:{
        textAlign:'center',
        fontSize:12,
        color:'white',
        marginLeft:8,
        marginRight:8
    },


    // Footer 스타일
    footer:{
        borderTopWidth:1,
        borderTopColor:'#d3d3d3',
        padding:8
    },

    footerMsg:{
        color:'white',
        textAlign:'center'
    },

    goBack:{
        color:'red'
    }

    
});