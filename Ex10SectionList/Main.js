import React, {Component} from 'react';
import {View, Text, StyleSheet, SectionList, TouchableOpacity, Alert} from 'react-native';

export default class Main extends Component{

    constructor(){
        super();     //상속받은 클래스의 생성자를 명시적으로 호출

        //대량의 데이터들 (그룹이 있는)
        this.state={
            //SectionList의 섹션하나 객체에는 title, data 2개의 프로퍼티 필요함 (정해져있는 이름이라 바꾸면 안됨!!)
            datas:[
                {title:'한식', data:['백반','고기산적','비빔밥']},
                {title:'일식', data:['초밥','회','덮밥']},
                {title:'중식', data:['짜장면','짬뽕','탕수육']}
            ]
        }
    }

    render(){
        return(
            <View style={styles.root}>
                {/* sections가 대량의 데이터 역할을함 */}
                <SectionList
                    //sections 이 items같은것.. datas를 가지고있음.
                    sections={this.state.datas}    
                    renderSectionHeader={({section})=>{   //제목줄 영역 // title-3개를 가진 함수를실행 (반복문으로)   //{section}구조분해할당(아니면 obj에 넣어쓸수있음)
                        return(
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionTitle}>{section.title}</Text>
                            </View>
                        );
                    }}
                    renderItem={(obj)=>{
                        return(
                            <TouchableOpacity onPress={()=>{Alert.alert(obj.item)}} style={styles.sectionItem}>
                                {/* <Text>{obj.item}</Text>    ={obj.item}은  data:['백반','고기산적','비빔밥']의  item하나 '백반'을 가르킴 */}
                                <Text>{obj.item}</Text>
                            </TouchableOpacity>
                        );
                    }}
                    
                    //index번호를 key로 쓰게끔..   줄여씀. return index. (index를 return함)
                    keyExtractor={(item, index)=>index}>

                </SectionList>
            </View>
        );
    }//render()..
}//Main class..


const styles= StyleSheet.create({
    root:{
        flex:1,
        padding:16
    },

    sectionHeader:{
        padding:8,
        backgroundColor:'lightblue'
    },

    sectionTitle:{
        fontSize:24,
        fontWeight:'bold'
    },

    sectionItem:{
        padding:8
    }
});