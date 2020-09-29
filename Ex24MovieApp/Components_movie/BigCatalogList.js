import React, {Component} from 'react';
import {Text,View, StyleSheet, FlatList} from 'react-native';
import BigCatalog from './BigCatelog';

export default class BigCatalogList extends Component{

    state={
        data:[]
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    horizontal={true}
                    pagingEnabled={true}
                    data={this.state.data
                    }
                    renderItem={(obj)=>{   //그 객체의 요소들
                        return <BigCatalog onPress={this.props.onPress} movie={obj.item}></BigCatalog>
                    }}
                    keyExtractor={(item, index)=>{return "Big"+index}}>
                </FlatList>
            </View>
        );
    }

    // 영화정보 json 받아오는 메소드
    loadData=()=>{
        // MovieList로 부터 전달받은 property uri를 통해 JSON 파싱 및 state.data 설정
        fetch(this.props.uri)                            //uri를 내려받아
        // .then((response)=>{return response.text()})   //그리고 나서 그 결과를 텍스트로 바꿔
        // .then((resText)=>{alert(resText)});           //그리고 나서 바꾼 텍스트를 다이얼로그로 보여줘
        .then(response=>response.json())
        .then(json=>this.setState({data:json.data.movies}))
    }

    componentDidMount(){   //화면에 장학이 되면 실행되는 함수
        if(this.props.uri) this.loadData();
    }
}

const styles= StyleSheet.create({
    container:{ height:300,marginBottom:8}
});