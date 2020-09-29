import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Second2 from './Second2';

// ##  Context : 앱 전체에서 참조할 수 있는 전역변수를 만들 수 있는 React의 API  ####################

//2)실습에서 사용할 Context객체 만들기 (React클래스의 메소드)
export const MyContext= React.createContext();

//1) 실습을 위해 Ex20DataArchitecture와 똑같은 예제를 만들어 보기 [ Main-First-Second ] - 우선 형태만, 데이터 전달없이
export default class Main extends Component{

    //Main의 state 데이터
    state= { data: "Hello" }

    render(){
        return (
            //1) 실습 - 이전 예제와 같은 구조 모양 생성 [ Main- First- Second : 부모- 자식- 손자 ]
            // <View style={ {flex:1, padding:16} }>
            //     <Text>Main의 Data : { this.state.data} </Text>

            //     {/* 자식 컴포넌트 - 데이터 전달 없음*/}
            //     <First></First>
            // </View>

            // 2) 자식에게 데이터를 전달하지 않고 전달할 값을 제공하는 제공자 컴포넌트(Provider)로 자식들 감싸기
            // 먼저 Context클래스 만들기 ( 클래스 밖에 선언 - 전역변수 위치 )
            // 데이터를 제공할 모든 자식-자손 컴포넌트를 감싸서 가장 root로 Context의 제공자 컴포넌트 Provider 생성
            // 이 Provider 컴포넌트의 자식들은 모두 어느 계층구조에서든 Consumer(소비자)로서 Provider의 value속성값을 사용할 수 있음.           
            // <MyContext.Provider>
            //     <View style={ {flex:1, padding:16} }>
            //         <Text>Main의 Data : { this.state.data} </Text>

            //         {/* 자식 컴포넌트 - 데이터 전달 없음*/}
            //         <First></First>
            //     </View>
            // </MyContext.Provider>

            // 3) Provider로 감싸았을 때 에러가 나지 않으며 잘 된 것임. 이제 Provider에서 자식들에게 제공하고 싶은 데이터을 value속성으로 지정
            <MyContext.Provider
               //자식 컴포넌트들에게 제공할 멤버들.
                value= {                    
                    { 
                        data: this.state.data,           //데이터                   
                        changeData: this.changeData,     //메소드
                    }
                }>
                <View style={ {flex:1, padding:16} }>
                    <Text>Main의 Data : { this.state.data} </Text>

                    {/* 자식 컴포넌트 - 데이터 전달 없음*/}
                    <First></First>
                </View>
            </MyContext.Provider>

        );
    }

    //1)실습에서 state를 변경하는 메소드도 같이 제작
    changeData= ( data )=>{
        // this.setState( {data: data} );
        this.setState( {data} );
    }
}


//Main의 자식 컴포넌트 [ * 상속아님 * ]
class First extends Component{
    render(){
        return (
            // <View style={ {marginTop:16, marginBottom:16, padding: 16, backgroundColor: 'lightgreen'} }>
            //     <Text>First컴포넌트 : </Text>

            //     {/* 손자 컴포넌트 - 데이터 전달 없음 */}
            //     <Second></Second>                
            // </View>

            //3)실습 - Context의 Provider로 부터 제공된 value를 사용하고 싶다면 [ 반드시 사용해야 하는 것은 아님 - 선택 ]
            // 반드시  Context의 Consumer(소비자) 컴포넌트만들고 그 Consumer컴포넌트 안에 콜백함수를 만들고 이 Consumer컴포넌트가 보여줄 컴포넌트를 return 해줌
            // 이때 consumner컴포넌트 안에 만든 콜백함수의 파라미터로 Provider의 value값을 받을 수 있음
            // <MyContext.Consumer>
            //     {/* 이 Consumer컴포넌트가 보여줄 뷰를 return 하는 콜백 화살표 함수 작성 - JS문법 필요*/}
            //     {                    
            //         (value)=>{ // 이 콜백함수의 파라미터로 Provider의 value값이 전달됨
            //             return (
            //                 <View style={ {marginTop:16, marginBottom:16, padding: 16, backgroundColor: 'lightgreen'} }>
            //                     {/* Provider에서 제공한 value 사용해 보기 */}
            //                     <Text>First컴포넌트 : { value.data }</Text>

            //                     {/* 손자 컴포넌트 - 데이터 전달 없음 */}
            //                     <Second></Second>                
            //                 </View>
            //             );
            //         }
            //     }                
            // </MyContext.Consumer>


            //5) 별도의 .js파일에 손자2 컴포넌트 만들고 Context사용해 보기 
            <MyContext.Consumer>
                {/* 이 Consumer컴포넌트가 보여줄 뷰를 return 하는 콜백 화살표 함수 작성 - JS문법 필요*/}
                {                    
                    (value)=>{ // 이 콜백함수의 파라미터로 Provider의 value값이 전달됨
                        return (
                            <View style={ {marginTop:16, marginBottom:16, padding: 16, backgroundColor: 'lightgreen'} }>
                                {/* Provider에서 제공한 value 사용해 보기 */}
                                <Text>First컴포넌트 : { value.data }</Text>

                                {/* 손자 컴포넌트 - 데이터 전달 없음 */}
                                <Second></Second>     

                                {/* 손자 2 컴포넌트 - 데이터 전달 없음 : import 잊지 말것!! */}
                                <Second2></Second2>

                            </View>
                        );
                    }
                }                
            </MyContext.Consumer>

        
        );
    }
}


//Main의 손자 컴포넌트 [ * 상속아님 * ]
class Second extends Component{
    render(){
        return (
            // <View style={ {marginTop:16, marginBottom:16, padding: 16, backgroundColor: 'blue'} }>
            //     <Text style= { {color:'white'} }>Second컴포넌트 : </Text>                
            // </View>

            //3) 실습 
            // <MyContext.Consumer>
            //     {
            //         //  {}와 return 키워드 생략가능
            //         (value)=>(
            //             <View style={ {marginTop:16, marginBottom:16, padding: 16, backgroundColor: 'blue'} }>
            //                 <Text style= { {color:'white'} }>Second컴포넌트 : { value.data }</Text>
            //             </View>
            //         )
            //     }
            // </MyContext.Consumer>

            //4) 실습 - 버튼 클릭하여 데이터 변경해보기
            <MyContext.Consumer>
                {
                    //  {}와 return 키워드 생략가능
                    (value)=>(
                        <View style={ {marginTop:16, marginBottom:16, padding: 16, backgroundColor: 'blue'} }>
                            <Text style= { {color:'white'} }>Second컴포넌트 : { value.data }</Text>

                            <View style={ {marginTop:16} }>
                                <Button title="change data" color="orange" onPress= { ()=>{ value.changeData('Nice') } } ></Button>
                            </View>
                        </View>
                    )
                }
            </MyContext.Consumer>           

        );
    }
}