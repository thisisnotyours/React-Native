//BigCatalogList.js와 거의 비슷한 구조이며 스타일만 조금 변화를 줌 - 참고하면서 제작
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';

export default class SubCatalogList extends Component{

    constructor(){
        super();
        this.state={
            data:[],
        }
    }

    render(){
        return (
            <View style={styles.container}>
                {/* 서브 타이틀 제목표시 */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                
                <FlatList
                    horizontal={true}
                    data={this.state.data}
                    renderItem={ ( {item, index} )=>{
                        // return <Text> {item.id} </Text>;
                        // 작은 영화이미지만 나열하면 되므로 굳이 별도의 컴포넌트 만들필요없이 곧바로 여기서 아이템 화면제작
                        return (
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={()=>this.props.onPress(item.id)}
                                style={{paddingLeft:4, paddingRight:4}}>
                                <Image 
                                    source={ {uri:item.large_cover_image} }
                                    style={{width:140, height:200}}></Image>
                            </TouchableOpacity>
                        );
                        
                    } }
                    
                    keyExtractor={ (item, index)=> {return "Big"+index;} }>
                </FlatList>

            </View>
        );
    }
    
    //영화정보 받아오는 메소드
    loadData= ()=>{        
        //전달받은 URL을 통해 json으로 인기 영화정보 읽어오기
        fetch(this.props.url)
        // .then( (response)=>{return response.text()})
        // .then( responseText => alert( responseText ));
        .then( (response)=>{return response.json()})
        .then( json => this.setState({data: json.data.movies}));
    }

    //컴포넌트가 화면에 보여진 후 콜백 라이프사이클 메소드
    componentDidMount(){
        if(this.props.url) this.loadData();
    }
}


const styles= StyleSheet.create({
    container:{marginTop:8, marginBottom:8},
    titleContainer:{padding: 8,},
    title:{fontSize:16, fontWeight:'bold',},
    

});
