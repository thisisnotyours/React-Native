import React, {Compoenent} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

export default class SecondTab extends Compoenent{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.text}>Second Tab</Text>
            </View>
        );
    }


    componentDidMount(){
        this.props.navigation.setOptions({
            tabBarLabel:'두번째',
            tabBarIcon:()=><Image source={require('../icons/RN_logo.png')} style={{width:24, height:24}}></Image>
        });
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