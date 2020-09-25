import React, {Component} from 'react';
import {View, Text, TextInput, Image, Button} from 'react-native';

export default class MainComponent extends Component{
    render(){
        return(
            <View style={{flex:1, flexDirection:'column', backgroundColor:'black'}}>
                <Image style={styles.img} source={require('./google.png')}></Image>
                <View style={{flexDirection:'row', margin:10, alignItems:'center'}}>
                    <TextInput style={styles.textInput}></TextInput>
                    <View style={styles.button}>
                        <Button title="enter" ></Button>
                    </View>
                </View>

                <View style={{width:80, height:80, backgroundColor:'white', borderRadius:40, position:'absolute', right:20, bottom:30, margin:16}}></View>
            
            </View>

        );
    }
}//Main

const styles={
    img:{
        width:100,
        height:100,
        marginTop:100,
        alignSelf:'center'
    },

    textInput:{
        flex:1,
        borderWidth:3,
        borderColor:'white',
        borderRadius:30,
        marginTop:40
    },

    button:{
        width:60,
        left:10,
        marginTop:40
    },

    
}