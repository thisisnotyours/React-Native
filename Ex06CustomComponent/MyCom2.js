import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class MyCom2 extends Component{
    render(){
        return(
            <View>
                <Text style={styles.text}>Warning : {this.props.msg}</Text>
            </View>
        );
    }
}


const styles= StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold'
    }
});