import React,{Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Second extends Component{



    render(){


        const {name, age}= this.props.route.params;

        return(
            <View style={styles.root}>
                <Text style={styles.text}>Second Screen</Text>
                <Button title="btn" onPress={()=>this.props.navigation.replace('home')}></Button>

                <Text style={styles.text}>{name}, {age}</Text>
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