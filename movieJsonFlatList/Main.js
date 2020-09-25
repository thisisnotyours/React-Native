import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

export default class Main extends Component{

    constructor(){
        super();

        this.state={
            dailyBoxOfficeList:[]
        }
    }

    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.title}>영화진흥위원회 API- JSON으로 불러들이기</Text> 
                <Button title="fetch data" onPress={this.fetchData}></Button>

                <FlatList
                    data={this.state.dailyBoxOfficeList}
                    renderItem={({item, index})=>{
                        return(
                            <TouchableOpacity style={styles.movieTextContainer}>
                                <Text style={styles.movieText}>순위: {item.rank}</Text>
                                <Text style={styles.movieText}>제목: {item.movieNm}</Text>
                                <Text style={styles.movieText}>개봉일: {item.openDt}</Text>
                            </TouchableOpacity>
                        );
                    }}>
                </FlatList>
            </View>
        );
    }//render()...

    fetchData= ()=>{
        const url='http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20120101';
        fetch(url).then((res)=>{return res.json();})
        .then((jsonObj)=>{this.setState({dailyBoxOfficeList: jsonObj.boxOfficeResult.dailyBoxOfficeList})});
    }


}//Main class..


const styles= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
        backgroundColor:'black'
    },

    title:{
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'center',
        color:'white',
        margin:16,
        marginBottom:40
    },

    movieTextContainer:{
        padding:20,
        margin:16,
        backgroundColor:'lightblue',
        borderRadius:8
    },

    movieText:{
        fontSize:15
    }
});