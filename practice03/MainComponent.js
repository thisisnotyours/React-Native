import React, {Component} from 'react';
import {View, Button, Text, StyleSheet, TextInput, Alert} from 'react-native';

export default class MainComponent extends Component{

    state={
        msg:"Hello"
    };

    render(){
        return(
            <View style={styles.root}>
                <TextInput style={styles.textInput} onChangeText={this.changeText}></TextInput>
                <Text style={styles.text}>{this.state.msg}</Text>
                <View style={{marginTop:30}}>
                    <Button title="button"></Button>
                </View>

                
            </View>
        );
    }//render method..


    
    submitText= ()=>{
        Alert.alert('submitText');
    }


    changeText(value){
        //Alert.alert('click : '+value);
        this.setState({msg:value});
        
    }

}//MainComponent class..





//스타일시트 객체생성
const styles= {
    root:{
        padding:16,
        flex:1
    },

    text:{
        margin:30,
        fontSize:20,
        fontWeight:'bold',
        color:'darkblue'
    },

    textInput:{
        borderWidth:3,
        borderColor:'pink',
        borderRadius:8,
        paddingLeft:20
    }
};
