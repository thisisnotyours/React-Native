import React from 'react';
import {View, TextInput, StyleSheet } from 'react-native';

// 단순히 스타일링된 TextInput을 만들면 되기에 별도의 state는 필요없음. 그렇기에 stateless 컴포넌트로 제작
// const는 만들면서 export default 할 수 없음
const InputComponent= (props)=>{
    return (
        <View style={ styles.container }>
            <TextInput                 
                selectionColor="#292929"                         
                secureTextEntry= {props.secureTextEntry}   // 컴포넌트 사용하는 곳에서 지정된 propery속성값 사용
                autoCapitalize="none"
                autoCorrect={false}
                allowFontScaling={false}
                placeholderTextColor="#c3c2c8"
                placeholder={props.placeholder}             // 컴포넌트 사용하는 곳에서 지정된 propery속성값 사용 
                clearButtonMode='while-editing'     //안됨
                onChangeText={props.onChangeText}           // 컴포넌트 사용하는 곳에서 지정된 propery속성값 사용
                
                style={styles.input}>
            </TextInput>            
        </View>
    );    
}

const styles= StyleSheet.create({
    container:{
        width:'100%',
        height: 40,
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderColor: '#D3D3D3',
        borderRadius: 4,
        backgroundColor: '#FAFAFA',
        marginTop:8,
        marginBottom:8,
    },
    input:{
        flex:1,                //TextInput의 높이를 container높이 40에 맞게
        color: '#292929',
    }
});


//외부에서 사용할 수 있도록 export
export default InputComponent;