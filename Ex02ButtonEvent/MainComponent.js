import React, {Component} from 'react';            //웹사이트 만들때 필요한 라이브러리
import { View, Text, Button, StyleSheet, Alert } from 'react-native';  //모바일용 라이브러리

class MainComponent extends Component{

    //멤버변수
    msg="Hello React Native";

    //리액트의 독특한 멤버변수(객체) [state]
    state={
        data: "Hello",
        text: 'Good'
    }

    render(){
        return (
            <View style={styles.root}>
                {/* 버튼의 클릭함수는 전역함수를 권장하지 않음 - 즉, 멤버메소드로 함수를 만들것을 권장*/}
                {/* 멤버를 사용할때는 반드시 this.키워드 필요 */}
                <Button title="button" onPress={this.setTextValue}></Button>

                {/* 글씨를 보여주는 뷰(컴포넌트) */}
                <Text style={styles.text}> {this.state.data} </Text>

                <Button title="aa" title="orange" onPress={this.changeImage}></Button>
                <Text style={styles.text}>{this.state.text}</Text>
            </View>
        );
    }//render method..

    kkk= () =>{
        this.setState( {text:"Bad" } );
    }

    //멤버함수=메소드; 클래스 안에 있으면
    //function show(){}   //에러
    show(){
        //Alert.alert('clicked!!!!');
        //Text컴포넌트가 보여주는 글씨 변경
        //기존 기법과 완전 다름!!
        //글씨를 가진 뷰를 제어하는 것이 아니라 그 뷰가 보여주는 내용물을 가진 변수의 값을 변경하는 방식= 바인딩기술
        //this.msg="Nice React Native";   //에러
        //그 함수 안에서 this.키워드는 이 클래스가 아니라
        //이 함수를 실행시키는 Button을 의미함
        //그렇기에 this.msg의 의미가 MainComponent의 msg가 아니라
        //Button객체의 멤버 중에서 msg를 찾기 때문에 에러!
    }

    //그래서 React Native에서는 이벤트를 처리하는 함수를 
    //반드시 화살표 함수로 만들 것을 권장!!!!
    show2= () => {
        //이 화살표함수 안에서 this.는 MainComponent객체를 의미함
        this.msg= "Nice";
        Alert.alert(this.msg);

        //변수값을 바꿔도 화면을 갱신하지 않으면 화면에 변화가 없음
        //this.forceUpdate();  //re remder() 함수호출 -권장안함
    }

    setTextValue= () => {
        //Alert.alert();
        //이 컴포넌트의 특별한 멤버변수[state]
        //값을 변경하면 지동 화면새갱신됨!!
        //반드
        //this.state.data= "Nice";
        this.setState( {data:"Nice!!!"} );
    }

}//MainComponent class..

//가급적 버튼 이벤트 함수들은 그 버튼을 가진 클래스 안에서 처리하는 것을 권장 


//전역함수; 클래스 밖에 있으면 (전역함수 권장안함)
//함수를 만드는 세가지 방법
function clickBtn(){          //선언적함수
    Alert.alert('clicked button!');
}

let clickBtn2= function(){    //익명함수
    Alert.alert('click!!');
}

let clickBtn3= () => {
    Alert.alert('화살표 함수 click!!');
}


//스타일시트 객체 생성
const styles= StyleSheet.create({
    root:{
        padding: 16,
        flex:1
    },

    text:{
        marginTop: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20
    }
});


//다른문서인 index.js에서 이 MainComponent를 인식할 수 있도록
export default MainComponent;      //---> MainComponent 이 문서를 다른 문서에서 인식함