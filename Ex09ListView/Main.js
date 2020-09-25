import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default class Main extends Component{

    //멤버변수로
    //대량의 데이터들
    state={
        datas:["aaa","bbb","ccc","ddd"],

        //FlatList에 보여질 때 데이터들은 [key]프로퍼티(멤버변수같은)를 가지고 있어야 경고가 뜨지않음
        datas2:[
            {key:"0", data:"aaa"},
            {key:"1", data:"bbb"},
            {key:"2", data:"ccc"},
            {key:"3", data:"ddd"}
        ]
    };

    render(){   //화면에 보여 줄 내용
        return(
            <View style={styles.root}>
                <Text style={styles.titleText}>Flat List</Text>

                {/* 안드로이드의 리스트뷰 같은 역할 (Adapter역할까지..) */}
                {/* 2개의 필수속성 설정 (정해져있는 이름들.) */}
                {/* 1. data : FlatList기 보여줄 대량의 데이터들 지정 */}
                {/* 2. renderItem : 아이템 하나의 모양(컴포넌트)를 만들어서 리턴해주는 함수 지정 */}
                {/* 파라미터로 전달되는 index와 item도 정해져있는 이름 ==> FlatList는 파라미터들을 하나로 묶어관리.(obj안에 index와 item이 있음) */}

                {/* FlatList가 보여줄 대량의 데이터 배열 각 요소들은 */}
                {/* 반드시 중복되지 않는 값을 가진 key(속성) 멤버변수가 있어야 함 */}
                <FlatList 
                    data={this.state.datas2} 
                    renderItem={(obj)=>{
                    
                    // let item= obj.item;
                    // let index= obj.index;  //코드를 줄여쓰기 위해 obj.item를 변수item에 넣어줌
                    // return <Text style={{color:'white'}}>{obj.index} : {obj.item}</Text>

                    //더 줄여주기= 구조분해 할당
                    let {index, item} =obj;  //obj에서 item과 index를 빼옴
                    return <Text style={{color:'white'}}>{item.key} : {item.data}</Text>
                    }}>
                </FlatList>
            </View>
        );
    }//render()..
}//Main class..


const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:16,
        backgroundColor:'black'
    },

    titleText:{
        fontSize:24,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:8,
        paddingBottom:16
    }
});