import React,{Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class ResetPassword extends Component{
    render(){
        return(
            <View>
                <Text>ResetPassword</Text>
            </View>
        );
    }
}


const styles= StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'black'
    },

    text:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }
});