import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

// Context를 새로 만들면 안됨
// const MyContext = React.createContext();

// export된 Main.js의 MyContext import
import {MyContext} from './Main';


export default class Second2 extends Component{    
    
    render(){
        return (
            // Provider 컴포넌트의 value를 사용하기 위한 Consumer클래스로 감싸기 [ MyContext는 Main.js에 만들었던 Context객체 import]
            <MyContext.Consumer>
                {
                    (value)=>(
                        <View style={ {marginTop:16, marginBottom:16, padding: 16, backgroundColor: 'indigo'} }>
                            <Text style= { {color:'white'} }>Second 2 컴포넌트 : { value.data }</Text>

                            <View style={ {marginTop:16} }>
                                <Button title="button" color="green" onPress={ ()=>{  value.changeData('Good'); } }></Button>
                            </View>                            
                        </View>
                    )
                }
            </MyContext.Consumer>
        );
    }
}