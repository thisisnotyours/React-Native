import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Main extends Component{

    //1. 생성자
    constructor(){
        super();

        // render()전에 호출되는 것이어서 아직 컴포넌트가 만들어지지 않은 상태여서 Text로 표시할 방법이 난해함.
        // 변수로 처리하여 render()에서 출력할 수 있겠지만 android의 Log출력 같은 기능 필요

        //크롬 브라우저 개발자모드 콘솔창을 통해 디버깅해볼 수 있음. 
        // ctrl + M 메뉴로 다이얼로그 열고 [Debug JS Remotely] or [Debug] 버튼 선택 하면 자동으로 크롬브라우저가 열리면서 디버깅상태가 됨. or node 콘솔창에서도 표시됨
        console.log('constructor');
    }

    //2. 화면에 보여지기 전에 이 컴포넌트 클래스가 화면에 연결되기 직전에 호출
    // componentWillMount(){
    //     console.log('component will mount');
    // }
    // ########## Unsafe lifecycle methods renamed 경고!! ######################
    UNSAFE_componentWillMount(){
        console.log('component will mount');
    }

    //3. 화면에 그려내는 메소드
    render(){
        console.log('render');
        return (
            <View style={ styles.root }>
                <Text>Lifecycle method</Text>
            </View>
        );
    }

    //4. 화면에 그려진 후(render()메소드 실행 후) 딱 1번 호출되는 메소드
    componentDidMount(){
        //사용자들에게 화면이 보여진 후의 상태이므로 기다리는 느낌이 덜하여서
        //보통 서버나 DB에서 데이터를 읽어오는 등의 비동기적인 작업을 이 메소드에서 많이 함.
        console.log('component did mount');
    }

    //5. render()메소드가 호출된 후 항상 호출되는 메소드(즉, 화면이 갱싱될 때 마다 실행 )
    componentDidUpdate(){
        console.log('component did Update');
    }


    //6. 컴포넌트가 종료될 때..호출되는 메소드 [ 뒤로가기 버튼으로 앱을 종료하면 호출됨.]
    componentWillUnmount(){
        console.log('component will unmount');
    }
}

const styles= StyleSheet.create({
    root:{flex:1, padding:16,}
});



// ######################################################################
// There are 4 types of Lifecycle methods available in React Native:

// Mounting methods
//  1. constructor()
//  2. componentWillMount()
//  3. render()
//  4. componentDidMount()


// Updating methods
//  1. componentWillReceiveProps()
//  2. shouldComponentUpdate()
//  3. componentWillUpdate()
//  4. componentDidUpdate()


// Unmounting methods
//  1. componentWillUnmount()


// Error handling methods
//  1. componentDidCatch()
// ######################################################################