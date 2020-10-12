import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import InputComponent from '../Components/InputComponent';
import TabComponent from '../Components/TabComponent';

export default class SignUp extends Component{
    state={
        tabs:["전화번호","이메일"],
        tabIndex: 0
    }

    render(){
        return(
            <View style={styles.root}>
                <Text>회원가입</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    root:{flex:1}
});