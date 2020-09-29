import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image, TouchableOpacity, ScrollView} from 'react-native';
import BigCatalogList from '../components_movie/BigCatalogList';
import SubCatalogList from '../components_movie/SubCatalogList';
import AsyncStorage from '@react-native-community/async-storage';

export default class MovieList extends Component{
    // render(){
    //     return (
    //         <View style={styles.root}>
    //             <Text>MOVIE LIST</Text>
    //             <Button title="button" onPress={()=>this.props.navigation.openDrawer()}></Button>
    //         </View>
    //     );
    // }

    render(){

        //인기 영화 정보 불러오는 url [get방식]
        const bigUrl="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5";

        // 최신등록순 영화 정보 불러오는 url 
        const recentUrl="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10";
        // 평점순 영화 정보 불러오는 url 
        const ratingtUrl="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10";
        // 다운로드순 영화 정보 불러오는 url 
        const downloadUrl="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10";


        return (   
            // 리스트 할 내용이 한 화면을 넘어서므로 ScrollView 사용
            <ScrollView style={styles.root}>
                {/* 큰 이미지로 가장 높은 선호도를 가진 영화들을 가로 스크롤(페이징)로 보여주기 */}
                {/* 이 문서에서 fetch를 하기에는 코드가 너무 복잡하여 별도의 component로 분리하여 관리 [components_movie폴더에 제작]*/}
                <BigCatalogList
                    url={bigUrl}
                    //영화 id를 전달받으면 영화상세페이지(MovieDetail)로 이동하는 함수를 전달
                    onPress={(id)=>{
                        //BigCatalog.js에서 이 함수를 호출하면서 파라미터로 준 영화 id 를 
                        //영화상세페이지(MovieDetail)로 이동하면서 별도 Data로 전달 [키값과 변수명이 같다면 변수명만 작성가능]
                        // this.props.navigation.navigate('MovieDetail', {id:id,})
                        this.props.navigation.navigate('MovieDetail', {id,});
                    }}></BigCatalogList>

                {/* 최신등록순, 평점순, 다운로드순 영화목록 보여주는 작은 사이즈의 가로 스크롤 리스트 */}
                {/* 3종류의 영화목록이 모두 같은 디자인을 가졌기에 별도의 컴포넌트로 만들어서 사용 [components_movie폴더에 제작]*/}
                <SubCatalogList
                    title="최신등록순"
                    url={recentUrl}
                    onPress={(id)=>this.props.navigation.navigate('MovieDetail', {id,})}>
                </SubCatalogList>

                <SubCatalogList
                    title="평점순"
                    url={ratingtUrl}
                    onPress={(id)=>this.props.navigation.navigate('MovieDetail', {id,})}>
                </SubCatalogList>

                <SubCatalogList
                    title="다운로드순"
                    url={downloadUrl}
                    onPress={(id)=>this.props.navigation.navigate('MovieDetail', {id,})}>
                </SubCatalogList>

                
            </ScrollView>
        );
    }

    // 제목줄에 DrawerToggleButton(햄버거 메뉴버튼) 및 로그아웃 버튼 제작해 보기
    componentDidMount(){
        this.props.navigation.setOptions({
            headerTitleAlign:'center',
            headerRight: ()=>(
                                <TouchableOpacity style={{marginRight:16}} onPress={()=>{ this.props.navigation.toggleDrawer()} }>                                    
                                    <Image source={require('../Images/ic_menu.png')}></Image>
                                </TouchableOpacity>
                             ),
                    //로그아웃 버튼 추가                
            headerLeft: ()=>(
                <TouchableOpacity 
                    style={{marginLeft:16, flexDirection:'row', alignItems:'center'}}
                    onPress={ async()=>{
                        await AsyncStorage.removeItem('email');
                        this.props.navigation.replace('intro');                    
                    }}>

                    <Image source={require('../Images/Tabs/ic_profile.png')}></Image>
                    <Text style={{marginLeft:4}}>로그아웃</Text>
                </TouchableOpacity>)

        });
    }

    // StackNavigator options : 원래는 곧바로 객체로 만들었으나/////////
    // 클릭 이벤트에 따른 navigatotion사용을 하려면 props를 받아야 하기에 함수로 만들고 옵션값을 가진 객체를 리턴시킴
    // static navigationOptions= (props)=> {   
    //     return {
    //         headerTitleAlign:'center',
    //         headerRight: ()=>(
    //                         <TouchableOpacity style={{marginRight:16}} onPress={()=>{ props.navigation.toggleDrawer()} }>
    //                             <Image source={require('../Images/ic_menu.png')}></Image>
    //                         </TouchableOpacity>),

    //         //로그아웃 버튼 추가                
    //         headerLeft: ()=>(
    //             <TouchableOpacity 
    //                 style={{marginLeft:16, flexDirection:'row', alignItems:'center'}}
    //                 onPress={ async()=>{
    //                     await AsyncStorage.removeItem('isLogin');
    //                     props.navigation.navigate('CheckLogin');                    
    //                 }}>

    //                 <Image source={require('../Images/Tabs/ic_profile.png')}></Image>
    //                 <Text style={{marginLeft:4}}>로그아웃</Text>
    //             </TouchableOpacity>),
                    
    //     }       
    // }///////////////////////////////////   

}

const styles= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
});