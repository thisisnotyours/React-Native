import React, {Component} from 'react';
import {View, Text, Button, Alert, Image, StyleSheet} from 'react-native';

class MainComponent extends Component{
    render(){
        return(
            <View>
                <Button title="button" onPress={clickBtnFunction}></Button>
            </View>

            <View>
                <Button title="button"></Button>
            </View>
        );
    }
}//MainComponent class..


//전역함수
// function clickBtnFunction(){
//     Alert.alert('click btn!!');
// }

// let clickBtnFunction= function(){
//     Alert.alert('click btn!!!');
// }

//화살표함수
let clickBtnFunction= ()=>{
    Alert.alert('익명함수 발동!!');
}





export default MainComponent;