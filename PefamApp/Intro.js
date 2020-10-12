import React,{Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Intro extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.logo}>Pefam</Text>
                <Button onPress={()=>this.props.navigation.navigate('MainDrawerNav')} title="enter" color='red'></Button>
            </View>
        );
    }

    
}



const styles= StyleSheet.create({
    root:{flex:1,backgroundColor:'#0099ff',justifyContent:'center',alignItems:'center'},
    logo:{color:'white',fontWeight:'bold',fontSize:30}
});