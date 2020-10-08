import React,{Component} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, Image, ImagePropTypes, TouchableOpacity, FlatList} from 'react-native';

export default class Pefam extends Component{

    state={
        img:[
            {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg'},
            {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg'},
            {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg'},
            {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg'},
            {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg'},
            {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg'},
            {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg'},
            {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg'}
        ]
    }

    render(){
        return(
            <ScrollView style={styles.root}>
                <Text style={styles.text1}>반려견 토탈 돌봄 서비스를</Text>
                <Text style={styles.text2}>만나보세요.</Text>

                <TextInput placeholder="ALL NEW 페팸 리뉴얼 오픈 안내" placeholderTextColor="#5D5D5D" style={styles.textInput}></TextInput>







                <View style={styles.cardView1}>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                        <Image source={require('../images/ic_home.png')}></Image>
                        <Text>위탁돌봄</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.TouchableOpacity}>
                        <Image source={require('../images/ic_home.png')}></Image>
                        <Text>방문돌봄</Text>
                    </TouchableOpacity>
                </View>

    


                <View style={{flex:1, flexDirection:'row',margin:10}}>
                    <View style={styles.cardView2}>
                        <Image style={{width:50,height:50}} source={require('../images/ic_home.png')}></Image>
                        <Text>서비스 안내</Text>
                    </View>
                    <View style={styles.cardView2}>
                        <Image style={{width:50,height:50}} source={require('../images/ic_home.png')}></Image>
                        <Text>이용방법</Text>
                    </View>
                </View>



                <View style={styles.cardView3}>
                    <Image style={{borderRadius:6, width:'80%', height:150}} resizeMode='contain' source={require('../images/pefam.jpg')}></Image>
                </View>



                <View style={{flex:1,flexDirection:'row',margin:16, justifyContent:'space-between'}}>
                    <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'center'}}>Pefam 갤러리</Text>
                    <Text style={{alignSelf:'center'}}>더보기</Text>

                    <FlatList>

                    </FlatList>
                </View>

            </ScrollView>
        );
    }
}


const styles=StyleSheet.create({
    root:{flex:1, backgroundColor:'#F3F3F3'},
    text1:{margin:10, marginTop:60, marginLeft:25, fontSize:23, fontWeight:'bold'},
    text2:{margin:10,marginLeft:25, fontSize:23},
    textInput:{padding:10,margin:10, marginLeft:25, marginRight:25, borderWidth:1,borderRadius:6, fontSize:16, backgroundColor:'white' },

    cardView1:{flex:1,flexDirection:'row',height:140,margin:10,marginLeft:25,marginRight:25,backgroundColor:'white',borderRadius:8,elevation:10},
    TouchableOpacity:{flex:1, height:120, margin:10,marginLeft:10,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'red'},
    cardView2:{flex:1,height:100,marginLeft:15,marginRight:15,backgroundColor:'white',borderRadius:8, elevation:10, padding:16, justifyContent:'center',alignItems:'center'},
    cardView3:{flex:1,justifyContent:'center',alignItems:'center',padding:20,marginTop:30,height:200,backgroundColor:'white',borderRadius:8,elevation:10}
});