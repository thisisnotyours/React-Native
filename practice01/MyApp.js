import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';

class MyApp extends Component{
    render(){
        return(
            <View>
                <Text style={textStyle}>Hello world</Text>
                <Text style={textStyle2}>Nice to meet you</Text>
                <Text style={styles.style1}>스타일시트 적용해보기</Text>
                <Text style={styles.style2}>스타일시트 적용해보기</Text>

                <View style={clickBtn}>
                    <Button title="enter"></Button>
                </View>

                <Image style={styles.imgStyle} source={ require('./roastchicken.jpg') }></Image>
            </View>
        );
    }
}//MyApp class..

//전역위치- 스타일 객체들
let textStyle={
    margin: 16,
    fontWeight: 'bold',
    color: 'red'
}

let textStyle2={
    margin: 16,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'blue'
}

//스타일시트 객체 생성
const styles= StyleSheet.create({
    style1:{
        margin: 20,
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 30,
        backgroundColor: 'pink'
    },

    style2:{
        margin: 20,
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 30,
        backgroundColor: 'black'
    },

    imgStyle:{
        margin: 16,
        resizeMode: 'contain'
    }
});

// 버튼 스타일
const clickBtn={
    margin: 16
}

//추출하기
export default MyApp;

