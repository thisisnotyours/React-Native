import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Alert, TouchableOpacity} from 'react-native';

export default class Main extends Component{

    render(){

        const datas= ["sam","park","kim","kim","sam","park","kim","kim"];

        return(
            <View style={styles.root}>
                <Text style={styles.title}>대량의 배열</Text>

                {
                    datas.map((value, index)=>{
                        return(
                            <TouchableOpacity onPress={()=>{this.clickBtn(value);}} key={index} style={styles.itemView}>
                                <Text>{value}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        );
    }//render()...

    //아이템 콜백함수
    clickBtn= (value)=>{
        Alert.alert("값 : "+value);
    }

}//Main class..




const styles=StyleSheet.create({
    root:{
        padding:16
    },

    title:{
        alignSelf:'center',
        fontSize:20,
        fontWeight:'bold'
    },

    itemView:{
        padding:16,
        margin:8,
        borderWidth:1,
        borderRadius:8
    }


});