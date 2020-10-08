import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class MyCom2_practice extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.text}>Color : {this.props.msg} </Text>
            </View>
        );
    }
}

let styles=StyleSheet.create({
    root:{margin:16},
    text:{color:'white', alignSelf:'center', fontWeight:'bold', fontSize:20}
});