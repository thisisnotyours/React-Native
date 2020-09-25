import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

export default class Main extends Component{



    render(){
        return(
            <View style={styles.root}>
                {/* 새로운 컴포넌트를 만드는 2가지 방법 */}
                {/* 1. Stateful Component : Component를 상속한 class */}
                {/* 2. Stateless Component : 마치 함수를 만들듯이 Component 제작 [함수형 컴포넌트라고도 부름] */}

                <MyComponent aaa="Kim"></MyComponent>

                <MyComponent2 bbb="Lee" msg="Good"></MyComponent2>
                <MyComponent2 bbb="Hong" msg="Nice"></MyComponent2>

                <MyComponent3></MyComponent3>
                <MyComponent4></MyComponent4>
            </View>
        );
    }
}//Main class..



//1.원래 사용하던 컴포넌트 설계
class MyComponent extends Component{
    render(){
        return(
            <View>
                <Text style={styles.text}>Hello {this.props.aaa}</Text>
            </View>
        );
    }
}




//2.함수형 컴포넌트
//함수형은 멤버변수를 가질 수 없어서 this. 사용불가 대신!! 파라미터로..props를 props변수로 받음. [파라미터로 전달하기]
//화살표함수
// const MyComponent2= (props)=>{   //props변수(변수이름 아무거나..)가 위 속성 bbb="Lee"(props)를 가지고있음 
//     return(
//         <View>
//             <Text style={styles.text}>Nice {props.bbb}</Text>
//             <Text style={styles.text}>Nice {props.msg}</Text>
//         </View>
//     );
// }

//화살표함수
const MyComponent2= ({bbb, msg})=>{   //구조분해 할당으로!!! 
    return(
        <View>
            <Text style={styles.text2}>Nice {bbb}</Text>
            <Text style={styles.text2}>Nice {msg}</Text>
        </View>
    );
}



//익명함수
const MyComponent3= function(){
    return(
        <View>
            <Text style={styles.text}>Nice MyComponent3</Text>
        </View>
    );
}

//선언적함수
function MyComponent4(){
    return(
        <View>
            <Text style={styles.text}>Nice MyComponent4</Text>
        </View>
    );
}


const styles= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
        backgroundColor:'black'
    },
    
    text:{
        margin:8,
        padding:8,
        fontWeight:'bold',
        color:'white'
    },

    text2:{
        margin:8,
        padding:8,
        fontWeight:'bold',
        color:'red'
    }
});