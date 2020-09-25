import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

export default class Main2 extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.title}>영화진흥위원회 [JSON 배열] 데이터 불러오기</Text>

                <Button></Button>
            </View>
        );
    }
}//Main class...


const styles= StyleSheet.create({
    root:{
        flex:1
    },

    title:{
        fontSize:24,
        fontWeight:'bold',
        alignSelf:'center'
    }
});