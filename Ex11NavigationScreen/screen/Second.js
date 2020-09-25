import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Second extends Component{
    render(){

        //전달받은 파라미터 데이터의 값들을 간결하게 작성하기 위해 
        //[구조분해할당] 이용!!
        const {name, age}= this.props.route.params;


        return(
            <View style={styles.root}>
                <Text style={styles.text}>Second Screen</Text>
                {/* 나를 실행시켰던 '바로 전' 페이지로 가기- goBack()이라는 함수 */}
                <Button title="Go Back" onPress={()=>{this.props.navigation.goBack();}}></Button>

                {/* 바로 최상위 페이지로 가기- popToTop()이라는 함수 */}
                <Button title="Go to Top Screen" color="indigo" onPress={()=>{this.props.navigation.popToTop();}}></Button>


                {/* navigate()할 때 전달된 데이터 객체는 자동으로 이 컴포넌트의 
                     this.props변수안에 route라는 이름의 멤버변수 안에 저장됨 */}
                {/* <Text style={styles.text}>Name: {this.props.route.params.name} , Age: {this.props.route.params.age}</Text> */}

                {/* [구조분해 할당]이용 */}
                <Text style={styles.text}>{name} : {age}</Text>
            </View>
        );
    }//render()..


    //render()메소드 전에 자동 호출되는 라이프사이클 메소드
    // componentDidMount(){
    // this.props.navigation.setOptions({title:'Good'});
    // }
}//Main class..








const styles= StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'pink'
    },

    text:{
        padding:8,
        fontWeight:'bold'
    }
});