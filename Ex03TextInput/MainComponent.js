import React, { Component } from 'react';
import {View, TextInput, Text, Button, StyleSheet, Alert} from 'react-native';
//기본적으로 flex가 적용되어있음
//컴포넌트의 방향이 수직으로 배치되는 이유?           
//모바일에서 기본 flex방향이 콜룸으로 되어있음

class MainComponent extends Component{
    //Text 컴포넌트가 보여줄 글씨를 가진 변수
    //변수값이 변경되었을때 화면갱신이 자동으로 되려면
    //반드시 state이라는 객체로 만들어야 함 
    //msg="Hello";    //클래스 '안'에서 변수명 안씀 let,var,const...etc(클래스 밖에서는 사용)
    state={
        msg:"Hello" 
    };

    //화면갱신에 영향이 없는 변수
    data= {

    };

    //이 컴포넌트가 화면에 그려내는 작업 메소드
    render(){     //클래스 '안'에서 메소드쓸때 function안씀 (클래스 밖에서는 사용)
        return (
            <View style={ styles.root }>
                <TextInput multiline={ true } numberOfLines={4} onChangeText={ this.change } onSubmitEditing={ this.submitText } style={ styles.textInput }></TextInput>
                <Text style={styles.plainText}>{ this.state.msg }</Text>
                <View style={ {marginTop:16} }>
                    <Button onPress={ this.clickBtn } title="button"></Button>
                </View>
            </View>
        );
    }//render method..

    change= (value)=>{
        this.data= value;
    }

    clickBtn= ()=>{
        this.setState({msg:this.data});
    }

    //TextInput의 글씨작성후 완료버튼(Submit)을 클릭했을때 발동
    //파라미터 : 완료이벤트 객체
    submitText= ( submitEvent )=>{
        let value= submitEvent.nativeEvent.text;
       //Alert.alert('submit : '+ value);
       this.setState({msg:value});  //msg를 value로 바꾸기
    }

    //TextInput의 글씨가 변경될 때 마다 발동하는 메소드
    //파라미터 : TextInput에 써있는 글씨(value) 
    changeText(value){
        //Alert.alert('change : '+value);
        //this.state.msg=value;
        //state값을 대입 연산자로 변경하면 자동갱신 안됨!
        //반드시 화면갱신을 하고 싶다면 setState()메소드 이용!!
        this.setState({msg:value});  //state 객체값넣기
    };

    

}//MainComponent class..



//스타일작업 객체
const styles= {
    root:{
        padding:16,
        flex:1
    },

    textInput:{
        borderWidth:3,
        borderColor:'pink',
        borderRadius:8,
        backgroundColor:'white',
        paddingLeft:16,
        paddingRight:16,                      
    },

    plainText:{
        marginTop:16,
        fontWeight:'bold',
        fontSize:20,
        paddingLeft:10,
        paddingRight:10
    }
};




//MainComponent class 다른 js문서에서 인식할 수 있도록 추출
export default MainComponent;