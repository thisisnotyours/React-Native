import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';

export default InputComponent= (props)=>{
    return(
        <View style={styles.root}>
            <TextInput
                style={styles.textInput}
                selectionColor="lightblue"
                placeholderTextColor="#595757"
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                autoCapitalize="none"
                autoCorrect={false}>
            </TextInput>
        </View>
    );
}


const styles=StyleSheet.create({
    root:{
        width:'100%',
        height:40,
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderColor:'#d3d3d3',
        borderRadius:4,
        backgroundColor:'white',
        margin:20,
        marginTop:8,
        marginBottom:8,
        alignSelf:'center'
    },

    textInput:{
        flex:1,
        color:'white'
    }
});