import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Alert, FlatList, TouchableOpacity, ScrollView} from 'react-native';

export default class Main extends Component{

    constructor(){
        super();

        this.state={
            dailyBoxOfficeList:[]
        }
    }


    // <Text>rank : {item.rank}</Text>
    // <Text>movieNm : {item.movieNm}</Text>
    // <Text>openDt : {item.openDt}</Text>
     render(){
         return(
             <View style={styles.root}>
                <Text style={styles.text}>영화진흥위원회 JSON 데이터 불러오기</Text>
                <Button title="fetch data" onPress={this.fetchData}></Button>

                <View>
                    <ScrollView>
                        {
                            this.state.dailyBoxOfficeList.map((item, index)=>{
                                return(
                                    <View key={index}>
                                        <Text>{item.rank}</Text>
                                        <Text>{item.movieNm}</Text>
                                        <Text>{item.openDt}</Text>
                                    </View>
                                );
                            })
                        }
                    </ScrollView>
                </View>
                

                
             </View>
         );
     }


     fetchData= ()=>{
        const url="http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20120101";
        fetch(url).then((res)=>{return res.json();})
        .then((jsonObj)=>{this.setState({dailyBoxOfficeList: jsonObj.boxOfficeResult.dailyBoxOfficeList})});
     }


}//Main class...



const styles= StyleSheet.create({
    root:{
        flex:1
    },

    text:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
        margin:16
    }
});