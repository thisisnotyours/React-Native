

// React Native의 단방향 데이터 흐름 구조 : 자식컴포넌트는 부모컴포넌트에게 데이터를 줄수 없고 부모만 자식에게 데이터를 전달 할 수 있음. property(속성)를 통해] 
// 또한, 자식들 끼리 서로 데이터를 주고 받을 수도 없음
// 그렇기에 컴포넌트들 간에 같은 데이터를 사용하고자 한다면 그 컴포넌트들의 부모컴포넌트의 state에 데이터를 저장하고 자식들은 props를 통해 전달받아 값을 공유함.

// 하지만, 앱의 규모가 커져 컴포넌트의 중첩이 많아져서 부모-자식-손자-증손자-고손자..... 등으로 컴포넌트의 단계가 많아지면
// 부모의 state값을 고손자 까지 전달하기 위해 props를 통해 전달->전달->전달->전달 을 해야 하는 상황이 생김.

// 초기에는 상관없으나 조금의 변경상황이 생겼을 때 그 수정과정이 매우 번거롭고 난해하며 어느 단계에서 데이터가 변경되어 자식->자식->자식으로 전달되었는지 파악하기 어려움
// 하여 앱에서 Data관리를 어떻게 할 것인가에 대한 고민이 필요함.

// 이 고민의 결과로 Flux 패턴이 도입됨 ( 일종의 전역변수저장 공간(Store라고 부름) 1개를 만들고 모든 컴포넌트들이 이 공간을 접속하여 데이터를 취급하는 구조의 패턴 )
// 이 Flux패턴을 구현한 라이브러리가 Redux 임. Redux 라이브러리는 매우 유명하고 많이 사용되지만 초기학습과정이 어렵다는 단점이 있음.
// RN에서는 이 Redux을 대신하기 위해 Context API를 만들었음.

// 이 Flux 패턴 데이터 구조를 이해하기 위해 먼저 기본적인 데이터 전달방식을 다시한번 만들어 보면서 전달-전달-전달 과정에 대해 알아보기


// 1. 부모-자식-손자 컴포넌트 만들기 [ 페이지가 전환되는 Navigation상황이 실습의 실효성은 있으나 제작이 오래걸려서 우선 하나의 화면에 중첩컴포넌트 제작으로 실습진행 ]

import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet, TouchableWithoutFeedback} from 'react-native';

export default class Main extends Component{

    //Main 클래스의 state에 가지고 있는 문자열 Data
    state= { data : "Hello" };

    render(){

        return (
            <View style={ {padding:16} }>
                <Text> Main클래스의 state Data : { this.state.data } </Text>

                {/* 1) 자식 Custom 컴포넌트 추가하면서 데이터 전달 */}
                {/* <First data={ this.state.data} ></First> */}


                {/* 1.5실습) 자식 Custom 컴포넌트에 데이터와 메소드 전달 */}
                <First data={ this.state.data} changeData={ this.changeData }></First>

            </View>
            
        );

    }

    //1.5) 실습에서 사용할 메소드 [파라미터 받아서 글 변경해보기 ]
    changeData= ( data )=>{
        this.setState( { data: data} ); 
        
        // 설정할 state의 속성property명(멤버변수명)과 대입할 값을 가진 변수명이 같다면.. 축약형으로
        //this.setState( {data} ); //이렇게 변수명만 사용해도 됨 [ 참고로 해당하는 변수명의 property가 없다면 자동으로 생김 ]
    }

}

//1 실습) 첫번째 자식 Custom 컴포넌트
class First extends Component{
    render(){
        return (
            //1.1) 부모(Main)로 부터 property(속성) 으로 전달 받은 data 출력
            // <View style={ {padding:16, backgroundColor: 'lightgreen'} }>
            //     <Text> Main클래스의 state Data : { this.props.data } </Text>
            // </View>

            //1.2) 부모(Main)로 부터 property(속성) 으로 전달 받은 data를 또 다시 자식에게 전달
            // <View style={ {padding:16, backgroundColor: 'lightgreen', marginTop: 16} }>
            //     <Text> Main클래스로 부터 전달받은 props Data : { this.props.data } </Text>

            //     {/* Fisrt의 자식 컴포넌트 Second을 만들면서 부모로 부터 받은 data를 다시 전달 */}
            //     <Second data= { this.props.data } ></Second>
            // </View>

            //1.5실습) 부모(Main)로 부터 property(속성) 으로 전달 받은 data를 또 다시 자식에게 전달
            <View style={ {padding:16, backgroundColor: 'lightgreen', marginTop: 16} }>
                <Text> Main클래스로 부터 전달받은 props Data : { this.props.data } </Text>

                {/* Second에 부모로 부터 받은 data와 메소드를 다시 전달 */}
                <Second data= { this.props.data } changeData= { this.props.changeData} ></Second>


                {/* 1.6실습) 당연히 First에서 전달받은 메소드를 이용해서 Main의 데이터를 변경할 수도 있음. */}
                <View style={ {marginTop:16,} }>
                    <Button title="button" color="indigo" onPress={ ()=>{ this.props.changeData('Good'); }}></Button>
                </View>                
            </View>            
        );
    }
}


//1.2) First의 자식(Main의 손자) 컴포넌트
class Second extends Component{

    //1.4) 실습에서 사용할 state변수
    state={ data: this.props.data, } //전달받은 props.data 를 내 state에 대입

    render(){
        return(
            // <View style={ {padding:16, backgroundColor: 'blue', marginTop:16,} }>
            //     <Text style={ {color:'white'} }>First로 부터 전달받은 데이터 : {this.props.data } </Text>                
            // </View>

            //1.3) Second에서 데이터를 변경하는 이벤트 처리 - props 를 직접 변경해보기
            // <View style={ {padding:16, backgroundColor: 'blue', marginTop:16,} }>
            //     <Text style={ {color:'white'} }>First로 부터 전달받은 데이터 : {this.props.data } </Text>

            //     {/* 전달받은 데이터를 변경하는 버튼 */}
            //     <View style={ {marginTop:8,} }>
            //         <Button title="change Data" color="orange" onPress={ this.clickBtn }></Button>
            //     </View>
                
            // </View>

             //1.4) Second에서 데이터를 변경하는 이벤트 처리 - props를 state로 옮기고 변경해보기
            //  <View style={ {padding:16, backgroundColor: 'blue', marginTop:16,} }>
            //      {/* 텍스트가 보여주는 값을 내 state로 변경 */}
            //     <Text style={ {color:'white'} }>First로 부터 전달받은 데이터 : {this.state.data } </Text>

            //     {/* 전달받은 데이터를 변경하는 버튼 */}
            //     <View style={ {marginTop:8,} }>
            //         <Button title="change Data" color="orange" onPress={ this.clickBtn2 }></Button>
            //     </View>                
            // </View>


            
            // 위 방법으로 텍스트 값은 바뀌지만 Second 영역의 data만 변경됨.  즉, 다른 컴포넌트(First, Main)의 값은 변화가 없음
            // [ 예를 들어 글작성 컴포넌트 페이지에서 글을 작성했는데 글보기 컴포넌트페이지에는 변화가 없는 것과 비슷한 상황 ]
            // 그러므로, Second에서 보인값만 변경하는 것이 아니라 부모인 First와 Main의 data를 변경해야 하지만 RN에서는 자식컴포넌트에서 부모컴포넌트에 데이터를 전달하는 방법이 없음
            // 그래서 부모의 데이터를 변경할 수 있는 메소드를 부모로부터 전달받아와서 변경하도록 해야만 함.
            // 1.5) Main, First, Second 모두 데이터가 변경되도록 하기
            <View style={ {padding:16, backgroundColor: 'blue', marginTop:16,} }>
                 {/* 텍스트가 보여주는 값을 전달받은 props.data 보여주기 */}
                <Text style={ {color:'white'} }>First로 부터 전달받은 데이터 : {this.props.data } </Text>

                {/* 전달받은 데이터를 변경하는 버튼과 이벤트 처리에 전달받은 changeDate속성의 함수를 직접 화살표함수를 사용하여 호출하면서 매개변수 전달 */}
                <View style={ {marginTop:8,} }>                    
                    <Button title="change Data" color="orange" onPress={ ()=>{  this.props.changeData('Nice')  } }></Button>
                </View>                
            </View>


            // 위 방법으로 부모 Main의 state를 변경하면 자식 First의 props에 변화가 생겨서 state변경처럼 자동 갱신되며... 연쇄적으로 Second의 props도 변경되어 또 Second도 갱신되는 메커니즘으로
            // 3개의 컴포넌트가 보여주는 모든 data가 동시에 변경됨. 이렇게 자식의 데이터는 부모로 전달하지 못하고 부모의 값이 자식에게 전달되면서 변경되도록 하여 언제나 데이터가 부모로부터 자식으로
            // 변경되도록 한 기법을 [단방향 데이터 흐름] 이라고 부름 

            // 데이터의 원본위치가 정확하여 데이터 관리가 용이해보이고 자식으로 부터의 데이터 전달이 없으므로 전체 데이터 이동에 대해 상대적으로 수월하게 이해할 수 있어서 장점이 있으나.
            // 부모-자식-손자-증손자... 로 전달-전달-전달을 지속적으로 해야 해서 사용할 때 번거롭고
            // 부모의 state 변수명을 수정하면 그로 인해 자식-손자-증손자까지 모두 변경해야 하는 불편함이 있고 어디에서 값이 변경되어 모든 컴포넌트의 데이터가 변경되었는지 파악하지 어려워..

            // 이에 페이스북에서 flux패턴을 고안하게 되었음.
            // flux 패턴은 모두 사용하는 데이터를 전역변수 저장소(Store라고 부름)라는 곳에 일괄 보관하여 어느 컴포넌트든 접근해서 사용할 수 있도록 하는 데이터 Architecture 기술임

            // 이를 알아보기 위해 우선 React 에 이런 목적을 위해 만들어 놓은 Context 라는 클래스에 대해 알아보고 사용해보고 자 함.

        );
    }

    //1.3)실습에서 사용할 메소드 [ 전달받은 props값 변경 ]
    clickBtn= ()=>{
        //this.props.data= "Nice"; //ERROR- props는 상수여서 값 변경이 불가함
        //그래서 setProps()같은 메소드도 존재하지 않음

        //그럼 어떻게 전달받은 this.props를 변경할 것인가?
        // 첫번째 떠오르는 방법은 전달받은 this.props.data를 이 Second클래스의  state에 저장하고 Text에서 state값을 보여주도록 할 수 있음. [ 1.4 실습 ]
    }

    //1.4)실습에서 사용할 메소드 [ 전달받은 값을 보여주는 state 값 변경]
    clickBtn2= ()=>{
        this.setState( {data:"Nice"} );
    }
}



