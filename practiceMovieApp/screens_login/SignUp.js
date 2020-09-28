import React,{Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class SignUp extends Component{
    render(){
        return(
            <View style={styles.root}>
                <View>
                    
                </View>
            </View>
        );
    }
}


const styles= StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center'
    },

    text:{
        color:'white',
        fontSize:24,
        fontWeight:'bold'
    }
});