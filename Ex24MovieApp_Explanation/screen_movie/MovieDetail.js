import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import BigCatalog from '../components_movie/BigCatalog';

export default class MovieDetail extends Component{
    // 1. 페이지 확인용 코드
    // render(){
    //     return (
    //         <View style={styles.root}>
    //             <Text>MOVIE DETAIL</Text>
    //         </View>
    //     );
    // }

    // 2. MovieList화면 만들때 id 전달받는 것 확인용 코드
    // render(){
    //     //navigation.navigate()메소드의 두번째 파라미터로 전달된 데이터를 받기
    //     //const id= this.props.route.params.id;

    //     //구조분해 할당으로 받아보기 
    //     const {id} = this.props.route.params;
    //     return (
    //         <View style={styles.root}>
    //             <Text>MOVIE DETAIL : {id} </Text>
    //         </View>
    //     );
    // }

    //3. 상세페이지 제작 코드
    constructor(){
        super();
        this.state={
            data:null, //영화정보들을 저장할 변수
        }
    }

    render(){
        //fetch된 데이터가 있는지 확인하여 없다면 로딩 Indicator컴포넌트 보이도록 삼항(조건)연산자
        return this.state.data? 
        (
            <ScrollView style={styles.root}>
                {/* data가 올바르게 왔는지 확인 */}
                {/* <Text>{this.state.data.title}</Text> */}

                {/* 큰 타이틀 이미지 표시. 이전에 만들었던 BigCatalog 활용 */}
                <BigCatalog movie={this.state.data}></BigCatalog>

                {/* 영화정보 출력 영역 */}
                <View>
                    <Text style={styles.title}>영화정보</Text>
                    <View style={styles.infoContainer}>
                        <Text>{this.state.data.runtime}분</Text>
                        <Text>평점 : {this.state.data.rating}</Text>
                        <Text>좋아요 : {this.state.data.like_count}</Text> 
                    </View>
                </View>

                {/* 줄거리 출력 영역 */}
                <View>
                    <Text style={styles.title}>줄거리</Text>
                    <Text style={styles.description}>{this.state.data.description_full}</Text>
                </View>

                {/* 배우 캐스팅 정보출력 : CastList.js */}

                {/* 스크린샷 이미지들 출력화면 : ScreenShotList.js */}

            </ScrollView>
        ) : 
        (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#E70915"></ActivityIndicator>
            </View>
        );
    }

    //전달받은 id로 영화상제정보를 fetch하는 메소드
    loadData=()=>{
        const {id} = this.props.route.params;

        fetch('https://yts.lt/api/v2/movie_details.json?movie_id='+id+'&with_image=true&with_cast=true')
        .then(response=>response.json())
        .then(json=>this.setState({data:json.data.movie}));
        // .then(response=>response.text())
        // .then(responseText=>alert(responseText));
    }

    componentDidMount(){
        this.loadData();
    }



}

const styles= StyleSheet.create({
    root:{flex:1,},
    loadingContainer:{flex:1, justifyContent:'center', alignItems:'center'},
    title:{
        fontSize:16,
        fontWeight:'bold',
        paddingTop: 24,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,      
    },
    infoContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingLeft:16,
        paddingRight:16,
    },
    description:{ 
        paddingLeft:16,
        paddingRight:16,
    }
});