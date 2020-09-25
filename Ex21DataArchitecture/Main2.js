import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Main extends Component{
    state={
        data:"Hello"
    };
    render(){
        return (
            <View style={{flex:1, padding:16}}>
                <Text> Main클래스의 state data : {this.state.data}</Text>

                {/* 자식 컴포넌트 */}
                <First changeData={this.changeData} data={this.state.data}></First>
            </View>
        );
    }

    //state값을 변경하는 메소드
    changeData=(msg)=>{
        this.setState({data:msg});
    }
}

//Main의 자식 컴포넌트
class First extends Component{    
    render(){
        return (
            <View style={{padding:16, backgroundColor:'lightgreen'}}>
                <Text>Main클래스의 state Data : {this.props.data}</Text>

                {/* First의 자식 컴포넌트 */}
                <Second kkk={this.props.changeData} data={this.props.data}></Second>

                <Button title='button' onPress={this.clickBtn}></Button>
            </View>
        );
    }

    clickBtn=()=>this.props.changeData('Good');
}

// First의 자식, Main의 손자 컴포넌트
class Second extends Component{
    state={
        data:this.props.data
    };
    render(){
        return (
            <View style={{padding:16, backgroundColor:'blue', marginTop:16}}>
                <Text style={{color:'white'}}>Main클래스의 state Data : {this.props.data}</Text>

                {/* Main클래스에서 전달받은 data변경해보기 */}
                <Button onPress={ ()=>this.props.kkk('Nice') } title='change data' color='orange'></Button>
            </View>
        );
    }

    clickBtn=()=>{
        //this.props.data='nice'; //error : props는 상수여서 변경불가!!
        //this.setState({data:'nice'});

        //조부모(Main)의 state변경하기
        
    }
}