import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native';

const BigCatalog=(props)=>{   //함수형이기에 this.props. 아니고 그냥 props
    return(
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>props.onPress(props.movie.id)}>
            <Image
                // 인터넷정보이니 uri
                source={{uri:props.movie.large_cover_image}}
                //이미지는 꼭 사이즈(width, height) 설정을 해야함- 여기서는 width값을 dimensions를 사용하여 윈도우창사이즈에 맞게 줌 
                //get('window')안에는 width, height, fontSize..등 여러가지가 있기 때문에 get('window').width 라고 꼭 설정해야함
                style={{width:Dimensions.get('window').width, height:300}}></Image>


                {/* 위 이미지에 겹쳐서 영화정보 출력 :position 을 absolute로 줌 ( flex말고 !!!) */}
                <View style={styles.infoContainer}>
                    <Text style={styles.labelYear}>{props.movie.year}년 개봉</Text>
                    <View style={styles.labelContainer}>
                        <Text style={styles.labelTitle}>{props.movie.title}</Text>
                        {/* genres가 배열로 나눠져있기 때문에 나중에 헷갈릴 수 있으니 (,)를 써서 구분이 갈 수 있도록 하기*/}
                        <Text style={styles.labelGenres}>{props.movie.genres.join(',')}</Text>
                    </View>
                </View>
        </TouchableOpacity>
    );
}

const styles= StyleSheet.create({
    infoContainer:{
        position:'absolute',   //상단에 뷰가 겹쳐짐
        bottom:0,  // 바닥에 붙여줌..
        width:'100%',
        alignItems:'flex-start'  //왼쪽 정렬
    },

    labelYear:{
        color:'white',
        padding:8,
        fontWeight:'bold',
        marginLeft:4,
        backgroundColor:'#e70915'
    },

    labelContainer:{
        backgroundColor:'#141414',
        width:'100%',
        paddingBottom:8,
        opacity:0.8   //80% 정도 투명도
    },

    labelTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        padding:8
    },

    labelGenres:{
        fontSize:12,
        color:'white',
        padding:8
    }
});

export default BigCatalog;