import React,{Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Intro extends Component{
    render(){
        return (
            <View style={ styles.root }>
                <Text>Intro</Text>
                <Button onPress={ ()=>this.props.navigation.navigate('LoginStackNav') } title="button"></Button>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    root: {flex:1, justifyContent:'center', alignItems:'center'}
});