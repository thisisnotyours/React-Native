import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, PermissionsAndroid} from 'react-native';

//Geolocation-service 라이브러리 적용
import Geolocation from 'react-native-geolocation-service';

export default class Main extends Component{
    state={
        currPos:{latitude:0.0, longitude:0.0}, //위도, 경도
        id:''
    }
    render(){
        return (
            <View style={ styles.root }>
                <Button onPress={ this.clickBtn } title='get my location'></Button>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:16}}>
                    <Button onPress={this.clickBtn2} title='watch my location : update' color='green'></Button>
                    <Button onPress={this.clickBtn3} title='stop my location' color='indigo'></Button>
                </View>
                <View style={ styles.textArea }>
                    <Text style={ styles.text }>latitude : { this.state.currPos.latitude }</Text>
                    <Text style={ styles.text }>longitude : { this.state.currPos.longitude }</Text>
                </View>                
            </View>
        );
    }


    clickBtn2= ()=>{
        const id= Geolocation.watchPosition(
            position=>this.setState({currPos: position.coords}),
            error=>alert('error : '+error.message)
        );

        this.setState({id:id});   //property명과 변수명이 같으면 생략가능?
    }

    clickBtn3= ()=>{
        Geolocation.clearWatch(this.state.id);
    }


    clickBtn= ()=>{
        Geolocation.getCurrentPosition( 
            (position)=>{
                this.setState({currPos: position.coords});                
            },
            (error)=>{
                alert('error : ' + error.message);
            }            
        );
    }

    //동적퍼미션 //////////////////
    async requestLocationPermission(){
        try{
            //퍼미션 요청 다이얼로그 보이도록 요청
            const granted= await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

            if(granted==PermissionsAndroid.RESULTS.GRANTED){
                alert('You can use the location');
            }else{
                alert('Location permission denied');
            }

        }catch(err){
            console.warn(err);
        }

    }

    //이 컴포넌트가 처음 화면에 보여질때 자동으로 실행되는 라이프사이클메소드
    componentDidMount(){
        this.requestLocationPermission();
    }
    //////////////////////////////


    componentWillUnmount(){
        if(this.state.id)Geolocation.clearWatch(this.state.id);   //if(this.state.id) 이 있으면, geolocation.클리어 와치 해.
    }
}

const styles= StyleSheet.create({
    root:{flex:1, padding:16},
    textArea:{flex:1, justifyContent:'center', alignItems:'center'},
    text:{fontWeight:'bold', fontSize:20, padding:8}
});