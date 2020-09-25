import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';

export default class Main extends Component{


    render(){

        //XML컴포넌트를 변수에 대입하는 것이 가능함
        const aaa= <Text>Nice</Text>;

        const bbb= <View style={ {margin:16} }>
                        <Text>Hello RN</Text>
                        <Button title="button"></Button>
                   </View>;

        const arr= [ bbb , bbb, bbb  ];

        const arr2= [
            <View key="aa"><Text>aaa</Text></View>,
            <View key="bb"><Text>bbb</Text></View>,
            <View key="cc"><Text>ccc</Text></View>
        ];

        //실제는 대량의 데이터들을 가진 배열
        const datas=["sam","robin","park","kim","sam","robin","park","kim","sam","robin","park","kim","sam","robin","park","kim"];
                
        return (
            <View style={ styles.root }>
                <Text style={ styles.title }>List Layout Test</Text>

                {aaa}
                {bbb}



                <ScrollView>

                    {/* 대량의 문자열 데이터(datas)를 보여주기 위한 Text컴포넌트를 */}
                    {/* 데이터의 개수만큼 자동으로 만들기- 반복문으로 */}
                    {/* map == forEach 서로비슷 */}
                    {/* map은 datas배열의 갯수만큼 만들어줌 */}
                    {
                        datas.map( (value, index)=>{
                            return (
                                <TouchableOpacity onPress={ ()=>{ this.clickBtn(value); } } key={index} style={ styles.itemView }>
                                    <Text> {value} </Text>
                                </TouchableOpacity>
                            );
                        } )
                    }  

                </ScrollView>                                              
                
            </View>
        );
    }

    //아이템 클릭 콜백 함수
    clickBtn= (value)=>{
        Alert.alert(value+"");
    }

    //XML컴포넌트를 리턴해주는 메소드
    shotItemView( name, color ){
        return <View style={ {margin:16} }>
                    <Text>Nice {name}</Text>
                    <Button title='press' color={ color }></Button>
               </View>;
    }

}//Main class.

const styles= StyleSheet.create({
    root:{
        flex:1,
        padding:16
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    },
    itemView:{
        padding:16,
        margin:8,
        borderWidth:1,
        borderRadius: 8
    }
});