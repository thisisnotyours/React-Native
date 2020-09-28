import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

//단순 스타일링된 TextInput을 만드는 것이므로
//state는 사용할 필요없음.. 그렇기에 간단한 함수형 컴포넌트로 제작
export default InputComponent= (props)=>{    //함수형은 this.props을 할수없으니 파라미터로 전달함 
    return(
        <View style={styles.container}>
            {/* 여기서 placeholder는 hint 같은것임 -login에소 전달받은 값 받기*/}
            <TextInput 
                selectionColor="pink"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="lightgrey"
                onChangeText={props.onChangeText}  //글씨 변경할때 마다 실행된 메소드 지정- property로 전달받는것이 일반적임!!!
                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeHolder} 
                style={styles.input}>
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