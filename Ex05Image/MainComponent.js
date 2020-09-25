import React, {Component} from 'react';
import {View, Image, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, Text, ScrollView, ImageBackground} from 'react-native';

export default class MainComponent extends Component{

    //이미지 경로 값을 가진 변수
    //값이 변경되면 자동으로 화면이 갱신되는 특별한 멤버변수 [state]
    state={
        img: require('./images/moana01.jpg'),

        imgs:[
            require('./images/moana01.jpg'),
            require('./images/moana02.jpg'),
            require('./images/moana03.jpg'),
            require('./images/moana04.jpg'),
            require('./images/moana05.jpg'),
            {uri:"https://i.cbc.ca/1.5507480.1585002199!/fileImage/httpImage/puppy-facts.jpg"}
        ],

        imgNum:0

    }

    render(){  //안드로이드에서 onCreate()같은것
        return(                                  
            <View style={{flex:1, justifyContent:'flex-start'}}>

                <ImageBackground style={{width:'100%', height:'100%'}} source={require('./images/nasa1.jpg')}>
                    <Text style={{color:'white', alignSelf:'center'}}>Hello</Text>
                    <Text style={{color:'white'}}>This is Galaxy</Text>

                </ImageBackground>

            </View>
        );
    }

    changeImage= ()=>{
        let num= this.state.imgNum + 1;
        if(num>5) num=0;    //num가 5가되면 num을 다시 0으로 바꿈
        this.setState( {imgNum: num} );
    }


    clickBtn= ()=>{
        //특별한 변수 state값 변경:자동화면갱신
        this.setState( {img: require('./images/moana02.jpg')} );
    }

}//MainComponent class..


//이미지 스타일
const imgStyle={
    width:350,
    height:500,
    margin:16,
    borderRadius:8
}

