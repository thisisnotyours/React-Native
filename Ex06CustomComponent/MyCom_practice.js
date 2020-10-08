import React,{Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class MyCom_practice extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Button onPress={this.props.click} color={this.props.color} title={this.props.title}></Button>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    root:{margin:16},
    text:{alignSelf:'center', color:'white', fontWeight:'bold', marginBottom:16}
});