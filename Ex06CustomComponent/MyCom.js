import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default class MyCom extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Button onPress={this.props.click} title={this.props.title} color={this.props.color}></Button>  
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        margin:16
    }
});