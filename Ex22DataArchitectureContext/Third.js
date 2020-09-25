import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import {MyContext} from './Main';   //Main에서 MyContext를 import하기

export default class Third extends Component{
    render(){
        return(
            <MyContext.Consumer>
                {
                    (value)=>{
                        return(
                            <View>
                                <Text>data : {value.data}</Text>
                            </View>
                        );   
                    }

                    //줄여쓰기
                    // value=>(
                    //     <View>
                    //         <Text>data: {value.data}</Text>
                    //     </View>
                    // )
                }
            </MyContext.Consumer>
        );
    }
}