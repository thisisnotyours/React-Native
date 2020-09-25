import React, {Compoenent} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Screen2 extends Compoenent{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.text}>Screen2</Text>
            </View>
        );
    }
} //Main class..


const styles= StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    text:{
        padding:8,
        fontWeight:'bold'
    }
});