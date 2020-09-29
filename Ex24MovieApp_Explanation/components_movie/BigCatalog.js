  import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native';

const BigCatalog= (props)=>{
    return (
        
        <TouchableOpacity
            activeOpacity={0.9} // 스크롤의 위해 터치할 때마다 투명도가 너무 강해 보기에 좋지않아 터치투명도 조정
            //영화 항목을 클릭하면 영화의 상세정보 페이지로 이동하는 메소드를 호출하면서 클릭한 영화 id를 전달[영화상세정보를 fetch하려면 영화 id가 필요함]
            onPress={ ()=> props.onPress(props.movie.id) }
            >
            <Image 
                source={ {uri: props.movie.large_cover_image} } 
                // 화면의 가로사이즈를 얻어와서 이미지의 가로사이즈 지정 (100%로 하면 FlatList전체의 가로사이즈가 되기에 올바르지 않음)
                style={ { width: Dimensions.get('window').width, height:300}}></Image>
            {/* 영화 제목,개봉일 등의 영화정보는 absolute 포지션을 사용하여 정보를 겹쳐서 보여주고자 함 */}
            <View style={styles.infoContainer}>
                <Text style={styles.labelYear}> {props.movie.year}년 개봉 </Text>
                <View style={styles.labelContainer}>
                    <Text style={styles.labelTitle}> {props.movie.title} </Text>
                    {/* 장르는 배열로 전달되어 오기에 배열의 요소들 사이사이에 , 구분자로 문자열을 리턴해주는 join()메소드 이용 */}
                    <Text style={styles.labelGenres}> {props.movie.genres.join(', ')} </Text>                    
                </View>                
            </View>
            

        </TouchableOpacity>
    );
}

const styles= StyleSheet.create({
    infoContainer:{
        position:'absolute',
        bottom: 0,
        width:'100%',
        alignItems:'flex-start',
    },
    labelYear:{
        color:'#FFFFFF',
        padding: 8,
        fontWeight:'bold',
        marginLeft: 4,
        backgroundColor:'#E70915',
    },
    labelContainer:{
        backgroundColor:'#141414',
        width:'100%',
        paddingBottom:8,
        opacity: 0.8,
    },
    labelTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'#FFFFFF',
        padding: 8,
    },
    labelGenres:{
        fontSize: 12,
        color:'#FFFFFF',
        padding: 8,

    }



});


export default BigCatalog;