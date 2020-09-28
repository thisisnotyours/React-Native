import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';


export default InputComponent= (props)=>{    
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                selectionColor="pink"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="lightgrey"
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeHolder}>
            </TextInput>
        </View>
    );
}


const styles= StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderColor:'#D3D3D3',
        borderRadius:4,
        backgroundColor:'#fafafa',
        marginTop:8,
        marginBottom:8
    },

    input:{
        flex:1,
        color:'#292929'
    }
});