import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class MyCom4_practice extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Button onPress={this.props.pressBtn} color={this.props.color} title={this.props.title}></Button>
            </View>
        );
    }
}

let styles=StyleSheet.create({
    root:{marginBottom:10, margin:10}
});