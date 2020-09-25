import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Main extends Component{
    //Life Cycle
    //1. 생성자
    constructor(){
        super();

        //log 출력
        console.log('constructor');
    }

    // render() 하면 화면에 보임
    //2. 화면에 보이기 전에.. 이 컴포넌트 클래스가 화면에 연결되기 직전에 호출!
    // componentWillMount(){   //이제 쓸수없는 deprecated.. 경고창뜸!

    // }
    //레거시 프로그램들이 있기에 쓰고싶으면..
    UNSAFE_componentWillMount(){   //경고안뜸..
        console.log('component will mount');
    }


    //3. 화면에 그려질때 호출!!  render()
    render(){
        console.log('render');

        return (<View><Text>Hello RN</Text></View>);
    }


    //4. 화면에 그려진 후 딱 1번 호출되는 메소드
    //보통 이 메소드 안에서 네트워크 데이터 fetch 작업 수행
    //또는 navigation의 옵션 설정들... 수행
    //또는 File저장 데이터 읽어오기 같은 작업 수행
    componentDidMount(){  //화면에 잘 안착했다?
        console.log('component did mounted');
    }


    //5. render()호출 후에 매번 실행됨 (즉, 화면 갱신때마다 실행)
    componentDidUpdate(){
        console.log('component did update');
    }



    //6. 컴포넌트가 종료될때 호출
    componentWillUnmount(){   //안착한게 빠져나간다
        console.log('component will unmount');
    }
}