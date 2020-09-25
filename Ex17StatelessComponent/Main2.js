import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

export default class Main extends Component{

    state={
        msg:"Hello"
    }

    clickBtn= ()=>{
        this.setState({msg:'Change Text'});
    }

    render(){
        return(
            <View style={styles.root}>
                <AAA aaa={this.clickBtn}></AAA>
                <BBB msg={this.state.msg}></BBB>
            </View>
        );
    }
}//Main class..





const AAA= (props)=>{
    return(
        <View>
            <Button title="button" onPress={props.aaa}></Button>
        </View>
    );
}


const BBB= ({msg})=>{
    return (
        <View>
            <Text style={styles.text2}>{msg}</Text>
        </View>
    );
}



//2.함수형 컴포넌트


const styles= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
        backgroundColor:'black'
    },
    
    text:{
        margin:8,
        padding:8,
        fontWeight:'bold'
    },

    text2:{
        margin:8,
        padding:8,
        fontWeight:'bold',
        color:'red'
    }
});