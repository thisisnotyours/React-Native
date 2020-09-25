import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default class Main extends Component{

state= {
    datas:[
        {Img:require('./images/bitter'), title:"Bitter", name:"FLETCHER, Kito"},
        {Img:require('./images/tobeyoung'), title:"To Be Young", name:"Anne-Marie, Doja Cat"},
        {Img:require('./images/justfriends'), title:"Just Friends", name:"Audrey Mika"}
    ]
};


    render(){
        return(
            <View>
                <Text>hello</Text>
            </View>
        );
    }//render()...
}//Main class..


//스타일시트 객체 
const styles= StyleSheet.create({
    root:{
        margin:16,
        flex:1
    }
});