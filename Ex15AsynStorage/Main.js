import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

//라이브러리 추가
import AsyncStorage from '@react-native-community/async-storage';

export default class Main extends Component{

    state={
        text:"result",
        //textInput에 입력된 글씨를 가진 변수
        inputText:""
    }

    render(){
        return(
            <View style={styles.root}>
                <TextInput 
                    value={this.state.inputText}
                    onChangeText={this.changeText}
                    placeholder="Type something here....."
                    style={styles.textInput}></TextInput>
                <Button title="save button" color="green" onPress={this.saveData}></Button>

                <View style={{marginTop:16}}></View>

                <Button title="load button" color="hotpink" onPress={this.loadData}></Button>
                <Text style={styles.text}>{this.state.text}</Text>

                <Button title="ES7을 이용한 비동기 처리" onPress={this.getData}></Button>
            </View>
        );
    }//render()..


    getData= async()=>{  //getItem을 하고 save저장을 하는동안 뻑날수 있으니 await 을 씀
        const value= await AsyncStorage.getItem('Data');   //메인스레드를 멈추게 함??
        if(value!=null) this.setState({text:value});
    }


    loadData= ()=>{
        //저장되어있는 값 읽기 'Data' 식별자로 저장된!!
        //비동기 방식임- 별도 쓰레드 라는 것..
        //즉.. 값을 주세요... 라는 요청과 별도로 메인스레드 진행됨
        //비동기처리는 promiss문법으로 처리 .then()    //value- 읽어오 결과 (response 같은것)
        AsyncStorage.getItem('Data').then((value)=>{this.setState({text:value})});

    }


    saveData= ()=>{
        //AsyncStorage에 저장 (마지 안드로이드에서 SharePreference와 비슷 : 식별자 key - value)
        AsyncStorage.setItem('Data', this.state.inputText);
        alert('save data!');

        this.setState({inputText:''});   //데이터를 저장하고 글씨 사라지게 하기= TextInput에 value속성을 주고 빈 문자열을 넣어줌
    }

    //바뀔때마다 실행되는 함수    //글씨를 쓸때마다 value가 그 값을 가지고있음
    changeText= (value)=>{
        this.setState({inputText:value});
    }


    





}//Main class....


const styles= StyleSheet.create({
    root:{
        flex:1,
        padding:16
    },

    textInput:{
        paddingLeft:16,
        paddingRight:16,
        borderWidth:3,
        borderRadius:8,
        borderColor:'green',
        marginBottom:16
    },

    text:{
        marginTop:16,
        padding:8,
        fontWeight:'bold',
        fontSize:24
    }
});