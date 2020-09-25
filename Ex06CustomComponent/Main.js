import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyCom from './MyCom';
import MyCom2 from './MyCom2';

export default class Main extends Component{

    state={
        msg:"Nice to meet you"
    }

    render(){
        return(
            <View style={styles.container}>
                {/* <Text style={styles.text}>{this.state.msg}</Text> */}
                <MyCom2 msg={this.state.msg}></MyCom2>

                <MyCom click={this.clickBtn1} color="indigo" title="btn1"></MyCom>
                <MyCom click={this.clickBtn2} color="orange" title="btn2"></MyCom>
                <MyCom click={this.clickBtn3} color="yellow" title="btn3"></MyCom>
            </View>
        );
    }

    clickBtn1= ()=>{
        this.setState({msg:"Login"})
    }


    clickBtn2= ()=> this.setState({msg:"Sign-up"})

    clickBtn3= ()=> this.setState({msg:"Find PW"})
}//Main class..


const styles= StyleSheet.create({
    container:{
        margin:16
    },

    text:{
        fontWeight:'bold',
        fontSize:20,
        alignSelf:'center'
    }
});



