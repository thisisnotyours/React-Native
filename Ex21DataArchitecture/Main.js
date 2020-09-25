import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Main extends Component{

    state={
        data:"Hello world"
    };

    render(){
        return(
            <View style={{flex:1, padding:16}}>
                <Text>Main 클래스의 state Data : {this.state.data}</Text>

                {/* 자식 컴포넌트 */}
                <First data={this.state.data}></First>
            </View>
        );
    }

}//Main class...




//Main의 첫번째 자식 컴포넌트
class First extends Component{
    render(){
        return(
            <View style={{padding:16, backgroundColor:'pink'}}>
                {/* 메인클래스(state는 Main 에 있음. 다른클래스이므로)에 있는 state변수를 자유롭게 사용할 수 없으니 */}
                {/* 메인클래스에서 First컴포넌트에 속성이름을 아무거나 줌(여기서는 data로) -데이터 전달- this.props.data */}
                <Text>Main 클래스의 state Date : {this.props.data}</Text>

                {/* First의 자식 컴포넌트 */}
                <Second data2={this.props.data}></Second>
            </View>
        );
    }
}

// First의 자식, Main의 손자 컴포넌트
class Second extends Component{

    state={data3: this.props.data2}

    render(){
        return(
            <View style={{padding:16, backgroundColor:'orange', marginTop:16}}>
                <Text>Main 클래스의 state Date : {this.state.data3}</Text>

                {/* Main 클래스에서 전달받은 data 변경해보기 */}
                <Button onPress={this.clickBtn} title='change data'></Button>
            </View>
        );
    }

    clickBtn= ()=>{
        //this.props.data2='nice';   //error: 왜? property는 상수여서 변경불가!
        this.setState({data3:'Nice'});
    }
}