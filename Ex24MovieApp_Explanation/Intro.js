import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

//1. 테스트 목적으로 보여질 stateful component 화면
// export default class Intro extends Component{
//     render(){
//         return (
//             <View style={styles.root}>
//                 <Text>Intro</Text>
//                 <Button title="button" onPress={()=>this.props.navigation.replace('Login')}></Button>
//             </View>
//         );
//     }
// }


//2. 특별하게 화면을 구성하는 목적이 아니라 단순히 Async에 저장된 로그인 정보의 유무에 따라 navigate만 수행하므로 stateful Component( Component를 상속한 클래스)로 만들 필요 없음.
// stateless Component (함수로 만든 컴포넌트) 로 제작
export default Intro= (props)=>{ //파라미터 : 부모로부터 전달된 props 받음

    //2. 테스트 목적으로 보여질 화면
    // return (
    //     <View style={styles.root}>
    //         <Text>Intro</Text>
    //         <Button title="button" onPress={()=>props.navigation.navigate('loginNav')}></Button>
    //     </View>
    // );
    
    //3. 아래 return으로 화면에 보이는 컴포넌트가 보여지는 작업 확인 후
    //AsyncStorage에 저장된 로그인 유무정보 읽어오기 [promiss문법 .then()사용]            
    AsyncStorage.getItem('email')
        .then( (value)=>{
            if(value) props.navigation.replace('MainDrawerNav'); //로그인정보가 있다면 곧바로 앱의 메인화면인 MovieList.js 화면을 가진 drawerNav로 이동 [참고, 원한다면  MovieList.js 직접이동할 수도 있음]
            else props.navigation.replace('LoginNav'); //로그인정보가 없다면 로그인화면(Login.js)을 가진 loginStackNav로 이동
            // 현재 컴포넌트를 finish 하면서 이동할 것이기에 navigate()가 아닌 replace()사용
        });

    //AsyncStorage가 비동기방식이므로 읽어오는 사이에 잠시잠깐 보여질 수도 있는 화면이 있을 필요 있음 [데이터가 작은사이즈여서 거의 안 보일것임]
    return (
        <View style={styles.root}>
            {/* color속성 없으면 색상이 안보임 */}
            <ActivityIndicator size="large" color="green"></ActivityIndicator>
        </View>
    );            
    
}

const styles= StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'},
});