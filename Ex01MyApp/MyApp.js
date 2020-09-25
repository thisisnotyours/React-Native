//리액트 라이브러리 사용  /그 중에서 Component클래스 사용
import React, {Component} from 'react';
//리액트 네이티브 라이브러리의 클래스 임포트
import {Text, View, Button, StyleSheet, Image} from 'react-native';

//리액트 네이티브는 Component를 상속받은 
//클래스들만 화면에 보여질 수 있음 (안드로이드의 뷰같은 것임)
class MyApp extends Component{   // MyApp- 안드로이드의 MainActivity같은것임
    //이 컴포넌트가 보여줄 뷰를 그려내는 메소드 (onCreate같은 것임)
    //한번에 하나의 Component만 리턴할 수 있음
    //여러개의 뷰를 보여주고 싶다면.. View Group역할이 필요함 (Layout같은.. 웹에서는 div같은..)
    render(){

        //지역변수
        let name= "Suhyun";
        let btnTitle= "click me";

        //XML문법 안에서 JS문법 사용가능 함
        //XML안에 {}를 사용하면 JS문법 사용가능
        //단, {}안에는 변수나 상수, 값 또는 함수만 놓여질 수 있음
        //스타일 적용 : CSS 인라인 적용과 흡사!!!
        //이 스타일을 JS의 객체로 만들어서 지정해줌
        return (
            <View style={rootView}>
                <Text style={styles.text}>Hello {name}</Text>
                <Text style={plainTextStyle}>Nice to meet you</Text>
                <View style={ {marginTop:20} }>
                    <Button style={btnStyle} title={btnTitle}></Button>
                </View>

                <Image source={ require('./bazzi.png') }></Image>
            </View>
        );
    }
}//MyAppclass..

//전역의 위치에 스타일 객체들
let textStyle={
    color: 'blue', 
    fontSize: 20,  //기본단위 dp
    fontWeight: 'bold',
    margin: 16
};

//전체 View의 스타일
const rootView={
    backgroundColor: '#AAFFCC',
    //height: '100%'
    //React Native는 기본적으로 CSS중 flex스타일 적용되어있음
    //이미 display:flex는 되어있는 상태
    flex:1 ,   //안드로이드에서 layout_weight과 같은것임..1할먹기.
    padding: 16
}

const plainTextStyle={
    margin: 8,
    color: 'red',
    fontSize: 30
}

//버튼은 스타일은 안됨 ---> 적용안됨.
const btnStyle={
    margin: 80
}


//스타일이 위처럼 개별 변수로 존재하면 가독성이 좋지 못함
//그래서 스타일을 몰아서 한방에 ...import도 해주기
const styles= StyleSheet.create({
    root:{
        backgroundColor: '#AAFFCC',
        flex:1,
        padding: 16
    },

    text:{
        color:'blue',
        fontSize: 25,
        margin: 16
    }
});


//위에서 만든 MyApp 클래스를 index.js에서 첫번째로 실행할 컴포넌트로
//설정하기 위해서는 추출을 해야함- export
export default MyApp;