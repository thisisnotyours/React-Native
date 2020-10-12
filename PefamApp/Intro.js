import React,{Component} from 'react';
import {View, Text, StyleSheet, Button,Image} from 'react-native';

export default class Intro extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Image source={require('./images/pefamlogo.png')} style={styles.logo}></Image>
               
               
                <View style={{marginBottom:10,width:200}}>
                    <Button onPress={()=>this.props.navigation.navigate('LoginStackNav')} title="로그인하기" color='#094C78'></Button>
                </View>

                <View style={{width:200}}>
                    <Button onPress={()=>this.props.navigation.navigate('MainDrawerNav')} title="구경하기" color='#687075'></Button>
                </View>
            </View>
        );
    }

    
}



const styles= StyleSheet.create({
    root:{flex:1,justifyContent:'center',alignItems:'center'},
    logo:{width:200,height:200,borderRadius:10,marginBottom:50}
});