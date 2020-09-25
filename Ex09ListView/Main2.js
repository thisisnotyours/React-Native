import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default class Main extends Component{

    //멤버변수로
    //대량의 데이터들
    state={
        datas:["aaa","bbb","ccc","ddd"]
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
                <FlatList 
                    data={this.state.datas} 
                    renderItem={({index, item})=>{  //()=>{}   함수안에 {}또 있으면 그건 구조분해할당
                    
                    

                    //더 줄여주기= 구조분해 할당
                    //let {index, item} =obj;  //obj에서 item과 index를 빼옴
                    return <Text style={{color:'white'}}>{index} : {item}</Text>
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