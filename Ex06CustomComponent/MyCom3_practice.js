import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class MyCom3_practice extends Component{
    render(){
        return(
            <View>
                <Text style={{margin:16, alignSelf:'center', color:'blue', fontWeight:'bold', fontSize:20, marginTop:50}}>Want to Change the color to : {this.props.changeText}</Text>
            </View>
        );
    }
}