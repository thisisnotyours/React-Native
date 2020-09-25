import React,{Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Home extends Component{

    render(){

        
        return(
            <View style={styles.root}>
                <Text style={styles.text}>Home Screen</Text>
                <Button title="go to second" onPress={()=>this.props.navigation.navigate('second', {name:'Kim', age:30})}></Button>
            
                
            
            </View>
        );
    }
}




const styles= StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    text:{
        fontSize:24,
        fontWeight:'bold'
    }
});