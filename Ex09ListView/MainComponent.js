import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert} from 'react-native';

export default class Main extends Component{

    //멤버변수로
    //대량의 데이터들
    state={
        datas:[
            {name:"Sam", msg:"Hello React", img:require('./images/moana01.jpg')},
            {name:"Robin", msg:"Hello Android", img:require('./images/moana02.jpg')},
            {name:"Hong", msg:"Hello Web", img:require('./images/moana03.jpg')},
            {name:"Park", msg:"Hello Java", img:require('./images/moana04.jpg')},
            {name:"Kim", msg:"Hello World", img:require('./images/moana05.jpg')},
            {name:"Lee", msg:"Hello React", img:require('./images/moana01.jpg')},
            {name:"kk", msg:"Hello Android", img:require('./images/moana02.jpg')},
            {name:"aa", msg:"Hello Web", img:require('./images/moana03.jpg')},
            {name:"ghhh", msg:"Hello Java", img:require('./images/moana04.jpg')},
            {name:"ddd", msg:"Hello World", img:require('./images/moana05.jpg')}
        ]
    };

    render(){   //화면에 보여 줄 내용

        //datas 배열의 각 요소객체들의 멤버변수로 [key]라는 존재하지 않아서 경고가 표시되므로
        //배열의 각 요소객체들에 key속성을 동적으로 추가!!!
        //this.state.datas.forEach(()=>{});  //forEach()함수안에 ()=>함수를 자동으로 실행해줌.
        // this.state.datas.forEach((element, index)=>{   //element는 아무이름.->datas들의 각 덩어리 아이템을 가르킴
        //     element.key= index+"";  //index는 int형이므로 ""문자열을 더해줌      //[key]프로퍼티의 값이 중독되면 안되므로 중복될 일 없는 index번호를 넣어줌   *****
        // }); 

        return(
            <View style={styles.root}>
                <Text style={styles.titleText}>Flat List</Text>

                {/* data, renderItem, keyExtractor */}
                <FlatList 
                    data={this.state.datas}
                    renderItem={({index, item})=>{   //renderItem에는 함수하나를 리턴해줌
                        return(
                            <TouchableOpacity onPress={()=>{Alert.alert(item.name)}} style={styles.itemView}>
                                <Image source={item.img} style={styles.itemImg}></Image>

                                <View>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemMsg}>{item.msg}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }} 
                    
                    //아이템의 식별 key속성    //여기서는 key값을 item안의 name을 줌 (중복되지 않게 보통은 번호를 많이줌. no)
                    keyExtractor={(item)=>{return item.name}}
                    //줄여쓰기
                    //keyExtractor={item => item.name 
                    
                    
                    //스크롤바 안보이도록
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    >
                    
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
    },

    itemView:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:8,
        borderColor:'white',
        marginBottom:12,
        // padding:8
    },

    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8
    },

    itemName:{
        fontSize:20,
        fontWeight:'bold',
        color:'pink'
    },

    itemMsg:{
        fontSize:16,
        fontStyle:'italic',
        color:'lightgrey'
    }
});