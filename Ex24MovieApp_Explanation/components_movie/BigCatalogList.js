import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import BigCatalog from './BigCatalog';

export default class BigCatalogList extends Component{

    constructor(){
        super();
        this.state={
            data:[],
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    horizontal={true}
                    pagingEnabled={true}
                    data={this.state.data}
                    renderItem={ ( {item, index} )=>{
                        return <BigCatalog movie={item} onPress={this.props.onPress}></BigCatalog>;
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
    container:{height:300, marginBottom:8},// 큰이미지의 영화정보는 높이 300으로 고정

});