import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Third from './Third';


//Flux 패턴을 구현한 클래스 Context 객체 생성
export const MyContext= React.createContext();  //export해서 다른 문서에서도 MyContext를 사용할 수 있게 해준다

export default class Main extends Component{

    state={
        data:'Hello'
    }


    changeData= (msg)=>this.setState({data:msg});   //data:'hello를 전달받은 msg로 받음

    render(){
        return(
            <MyContext.Provider
            //자식 컴포넌트에 전달할 데이터설정
                value={{
                    valueData:this.state.data,  //전달받은 데이터
                    changeData:this.changeData  //전달받은 메소드
                }}>
                <View style={{flex:1, padding:16, backgroundColor:'pink'}}>
                    <Text style={styles.text}>Main Data : {this.state.data}</Text>
                    <First></First>
                </View>
            </MyContext.Provider>
        );
    }
}





class First extends Component{
    render(){
        return(

            //Context.Provider가 제공한 데이터를 사용하고자 하는 컴포넌트 에서는
            //Context.Consumer을 이용하여 데이터를 소비하면 됨.
            <MyContext.Consumer>
                {/* MyContext.Context는 컴포넌트가 보여질 뷰를 리턴해주는 [콜백함수]를 작성하는 방식 */}
                {
                    (value)=>{     //provider가 제공한 value를 consumer의 함수의 파라미터로 전달!!
                        return(
                            <View style={{paddin:16, backgroundColor:'orange'}}>
                                <Text style={styles.text}>Main Data : {value.valueData}</Text>
                                <Second></Second>
                                <Third></Third>
                            </View>
                        );
                    }
                }
            </MyContext.Consumer>

            
        );
    }
}




class Second extends Component{
    render(){
        return(
            <MyContext.Consumer>
                {
                    (value)=>{
                        return(
                            <View style={{backgroundColor:'white'}}>
                                <Text style={styles.text}>Main Data : {value.valueData}</Text>
                                <Button onPress={()=>{value.changeData('Nice')}} title="button"></Button>
                            </View>
                        );
                    }
                }
            </MyContext.Consumer>
        );
    }
}





const styles= StyleSheet.create({
    text:{
        fontSize:18,
        fontWeight:'bold'
    }
});