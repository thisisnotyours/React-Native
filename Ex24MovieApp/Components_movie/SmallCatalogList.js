import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';

export default class SmallCatalogList extends Component{

    state={
        data:[]
    }

    render(){
        return(
            <View style={styles.container}>
                {/* 스타일링 때문에 쉽게 하기위해서 text에 view를 줌 */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>

                <FlatList
                    horizontal={true}
                    data={this.state.data}
                    renderItem={({item, index})=>{    //obj안에 item, index --> 구조할당으로 obj안을 쪽 뽑아옴
                        return (
                            <TouchableOpacity 
                                activeOpacity={0.9}
                                onPress={()=>this.props.onPress(item.id)}
                                style={{paddingLeft:4, paddingRight:4}}>
                                <Image 
                                    source={{uri:item.large_cover_image}}
                                    style={{width:140, height:200}}>
                                </Image>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item,index)=>"Small"+index}>
                </FlatList>
            </View>
        );
    }

    loadData=()=>{
        fetch(this.props.uri)
        // .then(response=>response.text())
        // .then(resText=>alert(resText));   //확인하기위해 다이얼로그 띄워보기
        .then(response=>response.json())
        .then(json=>this.setState({data:json.data.movies}))
    }

    componentDidMount(){
        if(this.props.uri) this.loadData();
    }
}


const styles= StyleSheet.create({
    container:{
        marginTop:8, 
        marginBottom:8
    },

    titleContainer:{
        padding:8
    },

    title:{
        fontSize:16,
        fontWeight:'bold'
    }
});