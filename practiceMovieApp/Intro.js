import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Intro extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.text}>Welcome to Movie App!</Text>
                <Button onPress={()=>this.props.navigation.navigate('LoginStackNav')} color="red" title="Enter"></Button>
            </View>
        );
    }
}


const styles= StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black'
    },

    text:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        marginBottom:30
    }
});