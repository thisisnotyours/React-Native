import React,{Component} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';

export default class Pefam extends Component{
    render(){
        return(
            <ScrollView>
                <Text style={styles.text1}>반려견 토탈 돌봄 서비스를</Text>
                <Text style={styles.text2}>만나보세요.</Text>

                <TextInput placeholder="ALL NEW 페팸 리뉴얼 오픈 안내" placeholderTextColor="#5D5D5D" style={styles.textInput}></TextInput>







                <View style={styles.cardView1}>

                </View>

                <View style={styles.cardView1}>

                </View>

                <View style={styles.cardView1}>

                </View>



                <View style={{flex:1,flexDirection:'row'}}>
                    <View></View>
                    <View></View>
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

    cardView1:{height:140,margin:10,marginLeft:25,marginRight:25,backgroundColor:'white',borderRadius:8,elevation:10},
    cardView2:{flex:1,margin:10,marginLeft:25,marginRight:25,backgroundColor:'red',borderRadius:8,elevation:10},
    // cardView3:{marginTop:30,height:200,backgroundColor:'white',borderRadius:8,elevation:10}
});