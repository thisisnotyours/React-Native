import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ImageBackground} from 'react-native';
import MyCom2_practice from './MyCom2_practice';
import MyCom_practice from './MyCom_practice';
import MyCom3_practice from './MyCom3_practice';
import MyCom4_practice from './MyCom4_practice';

export default class Main_practice extends Component{

    state={
        msg:"What's your Color?",
        color:"Second Color Palette"
    }

    render(){
        return(
            <View style={styles.root}>
                <ImageBackground style={styles.imgBack} source={require('./sydney.jpg')}>
                <Text style={styles.titleText}>Main Class Page</Text>

                <MyCom2_practice msg={this.state.msg}></MyCom2_practice>
                <MyCom_practice click={this.clickBtn1} color='red' title='red'></MyCom_practice> 
                <MyCom_practice click={this.clickBtn2} color='orange' title='orange'></MyCom_practice> 
                <MyCom_practice click={this.clickBtn3} color='yellow' title='yellow'></MyCom_practice>  

                <MyCom3_practice changeText={this.state.color}></MyCom3_practice>  
                <MyCom4_practice pressBtn={this.clickBtn4} color='black' title='black'></MyCom4_practice>
                <MyCom4_practice pressBtn={this.clickBtn5} color="blue" title="blue"></MyCom4_practice>
                <MyCom4_practice pressBtn={this.clickBtn6} color='grey' title='grey'></MyCom4_practice>
                </ImageBackground>
            </View>
        );
    }//render..

    clickBtn1=()=>{
        this.setState({msg:"Red"});
    }

    clickBtn2=()=>{
        this.setState({msg:"Orange"})
    }

    clickBtn3=()=>{
        this.setState({msg:"Yellow"})
    }

    clickBtn4=()=>{
        this.setState({color:'black'})
    }
    
    clickBtn5=()=>{
        this.setState({color:'blue'})
    }

    clickBtn6=()=>{
        this.setState({color:'grey'})
    }

}//component..

const styles= StyleSheet.create({
    root:{flex:1},
    imgBack:{width:'100%', height:'100%'},
    titleText:{alignSelf:'center',fontWeight:'bold',fontSize:24,color:'white',marginTop:50,padding:16}
});