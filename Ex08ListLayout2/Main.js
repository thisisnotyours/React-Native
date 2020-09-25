import React, {Component} from 'react';
import {View, Image, Text, ScrollView, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default class Main extends Component{

    //대량의 데이터 배열 - 화면갱신에 반영
    state= {
        datas:[
            {name:"Sue", msg:"Hello world", img:require('./images/moana01.jpg')},
            {name:"Liz", msg:"Nice world", img:require('./images/moana02.jpg')},
            {name:"Robin", msg:"Good world", img:require('./images/moana03.jpg')},
            {name:"Sam", msg:"Beautiful world", img:require('./images/moana04.jpg')},
            {name:"Sam", msg:"Beautiful world", img:require('./images/moana05.jpg')},
            {name:"Sue", msg:"Hello world", img:require('./images/moana01.jpg')},
            {name:"Liz", msg:"Nice world", img:require('./images/moana02.jpg')},
            {name:"Robin", msg:"Good world", img:require('./images/moana03.jpg')},
            {name:"Sam", msg:"Beautiful world", img:require('./images/moana04.jpg')},
            {name:"Sam", msg:"Beautiful world", img:require('./images/moana05.jpg')},
            {name:"Sue", msg:"Hello world", img:require('./images/moana01.jpg')},
            {name:"Liz", msg:"Nice world", img:require('./images/moana02.jpg')},
            {name:"Robin", msg:"Good world", img:require('./images/moana03.jpg')},
            {name:"Sam", msg:"Beautiful world", img:require('./images/moana04.jpg')},
            {name:"Sam", msg:"Beautiful world", img:require('./images/moana05.jpg')}
        ]
    };

    render(){
        return(
            <ScrollView horizontal={false} style={styles.root}>

                {/* 대량의 데이터를 가진 배열을 컴포넌트로 보여주기 */}
                {
                    this.state.datas.map( (items, index)=>{  //items가 배열을 가지고있음(값)
                        return (
                            <TouchableOpacity key={index} style={styles.item} onPress={()=>{this.clickItem(items, index);}}>
                                <Image source={items.img} style={styles.itemImg}></Image>

                                <View>
                                    <Text style={styles.itemName}>{items.name}</Text>
                                    <Text style={styles.itemMsg}>{items.msg}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    } )
                }

            </ScrollView>
        );
    }//render()..

    clickItem= (items, index)=>{
        //Alert.alert(index + ":" + items.name);
        Alert.alert(`${index} : ${items.name}`);   //`back tick`은 문자열이지만 ${변수명} 알아들음 (php처럼)
    }


}//Main class..



// 스타일시트 객체
const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:16
    },

    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        borderColor:"#1294AB",
        backgroundColor:"lightblue",
        padding:8,
        marginBottom:12
    },

    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8,
        borderRadius:6,
        borderColor:'white',
        borderWidth:3
    },

    itemName:{
        fontSize:24,
        fontWeight:'bold'
    },

    itemMsg:{
        fontSize:16,
        fontStyle:'italic'
    }
});