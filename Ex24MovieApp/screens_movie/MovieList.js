import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import BigCatalogList from '../Components_movie/BigCatalogList';
import SmallCatalogList from '../Components_movie/SmallCatalogList';

export default class MovieList extends Component{

    render(){

         //인기 영화 정보 불러오는 url [get방식]
        const bigUrl="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5";

        // 최신등록순 영화 정보 불러오는 url 
        const recentUrl="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10";
        
        // 평점순 영화 정보 불러오는 url 
        const ratingtUrl="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10";
        
        // 다운로드순 영화 정보 불러오는 url 
        const downloadUrl="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10";



        return(
            <ScrollView style={styles.root}>
                {/* 큰 이미지 가로 스크롤링(페이징같은 느낌으로) */}
                <BigCatalogList 
                    uri={bigUrl}
                    onPress={(id)=>{  //실행하는 함수가 아니라 파라미터 id 전달하기위한 함수
                        this.props.navigation.navigate('MovieDetail', {id:id});
                    }}></BigCatalogList>


                {/* 최신등록순 이미지 */}
                <SmallCatalogList 
                    // onPress={(id)는 json문서에 있는 id 라는 멤버변수
                    onPress={(id)=>this.props.navigation.navigate('MovieDetail', {id:id})}    //{id:id} 뒤에있는 id는 식별자
                    title="최신등록순"
                    uri={recentUrl}>
                </SmallCatalogList>

                {/* 평점순 이미지 */}
                <SmallCatalogList 
                    onPress={(id)=>this.props.navigation.navigate('MovieDetail', {id:id})}
                    title="평점순"
                    uri={ratingtUrl}>
                </SmallCatalogList>

                {/* 다운로드순 이미지 */}
                <SmallCatalogList 
                    onPress={(id)=>this.props.navigation.navigate('MovieDetail', {id:id})}
                    title="다운로드순"
                    uri={downloadUrl}>
                </SmallCatalogList>

            </ScrollView>
        );
    }



    //제목줄 작업
    componentDidMount(){
        this.props.navigation.setOptions({
            headerTitleAlign:'center',
            headerRight:()=>{
                return(
                    <TouchableOpacity onPress={()=>this.props.navigation.toggleDrawer()} style={{marginRight:16}}>
                        <Image source={require('../Images/ic_menu.png')}></Image>
                    </TouchableOpacity>
                );
            },

            headerLeft:()=>(
                <TouchableOpacity
                    style={{marginLeft:16, flexDirection:'row', alignItems:'center'}}
                    onPress={async()=>{
                        await AsyncStorage.removeItem('email');
                        this.props.navigation.replace('Intro');
                    }}>
                    <Image source={require('../Images/Tabs/ic_profile.png')}></Image>
                    <Text style={{marginLeft:4}}>로그아웃</Text>
                </TouchableOpacity>
            )
        });
    }
}


const styles= StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'#f2ffff'
    }
});
