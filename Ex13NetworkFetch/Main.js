import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Alert} from 'react-native';

export default class Main extends Component{

    //Main클래스가 실행될때 반드시 실행되는 constructor()-  state처럼 같은기능  //변하는 변수..
    constructor(){
        super();

        this.state={
            text:"",
            movies:[]
        };
    }

    render(){
        return(
            <View style={styles.root}>
                <Button title="fetch data from network" onPress={this.fetchData}></Button>

                <View>
                    <ScrollView horizontal={false} style={styles.scroll}>
                        <Text style={styles.text}>{this.state.text}</Text>

                        {/* 영화정보를 가진 배열 데이터 출력 */}
                        { /* 원래는 FlatList 컴포넌트 사용!!- 숙제 */}
                        {
                            // this.state.movies.map((element, index)=>{
                            //     return (
                            //         <View key={index} style={{flexDirection:'row', margin:4, borderWidth:1}}>
                            //             <Text>{element.id}</Text>
                            //             <Text>{element.title}</Text>
                            //             <Text>{element.releaseYear}</Text>
                            //         </View>
                            //     );
                            // })
                        }
                    </ScrollView>
                </View>

            </View>
        );
    }//render()..

    fetchData= ()=>{
        //1. Javascript의 XMLHttpRequest객체 사용하기 (라이브러리 안쓰고 해보기)
        //let xhr= new XMLHttpRequest();

        //서버로부터 준비사항이 변경될때마다 실행되는 함수  //서버로부터 응답될때마다 실행되는 함수  //응답4번 받음
        // xhr.onreadystatechange= ()=>{
        //     if(xhr.readyState==4 && xhr.status==200) {  //4=응답의 마지막   //200= 모든 통신 OK
        //         this.setState({text: xhr.responseText});   //요청한 데이터
        //     }   
        // }

        // //받아올 데이터를 get방식으로 받을거다. 받을 때 굳이 숨겨야할 필요가 없는 데이터니까. //async-비동기 통신-(내가 이작업을 하는동안 다른작업을 할 수 있도록)정보를 일정한 속도로 보낼 것을 요구하지 않는 데이터 전송 방법
        // xhr.open('GET','https://raw.githubusercontent.com/thisisnotyours/RN/master/aaa.txt',true);   //xhr.opn()무지개로드 열어줘
        // xhr.send();    //xhr.send() 요청/응답






        //2. Fetch 라이브러리- JS의 기본 통신 라이브러리
        // fetch()함수 : Jquery ajax()와 같은 역할   
        //fetch('주소의 값을 fetch 내려받아').then(그리고나서 내려받은 함수(status==4, 200결과를 파라미터로 가지고있는)를 실행시켜라)         => promise 문법
        // fetch('https://raw.githubusercontent.com/thisisnotyours/RN/master/aaa.txt')
        // .then((response)=>{Alert.alert(response.status+"")   //status가 뜨는지 잘 전달받았는지 Alert로 확인

        // fetch('https://raw.githubusercontent.com/thisisnotyours/RN/master/aaa.txt')
        // .then((response)=>{
        //     //reponse객체가 받은 데이터를 그냥 글씨 문자열로 변화해주세요
        //     return response.text();   //텍스트로 바꿔.    이 처리도 비동기방식!!
        // }).then((responseText)=>{         //그리고 나서 다시 화면에 보여줘 => '문자열'로!!
        //     this.setState({text: responseText});
        // }).catch(()=>{});   //기본적으로 then()에는 try_catch문이 있음.  try   

        //줄여쓰기
        // fetch('https://raw.githubusercontent.com/thisisnotyours/RN/master/aaa.txt')
        // .then(response=>response.text()).then(responseText=>this.setState({text:responseText})).catch(error=>alert(error));

        




        //3. JSON 파싱 [ open api 사용 ]
        // const url= 'https://reactnative.dev/movies.json';
        // fetch(url).then((res)=>{
        //     return res.json();   //내려받은 데이터 json문자열 -> 객체로 변환
        // })
        // .then((jsonObj)=>{
        //     this.setState({text: jsonObj.title, movies: jsonObj.movies})
        // });



        //4. GET Method로 데이터 보내고 응답(echo)받기 from php
        //보낼 데이터
         let name= "sam";
         let msg= "I'm sending a message for you..";

        // //GET은 특별할 것이 없음. 왜? URL뒤에 보낼 데이터 붙이면 끝
        // const url= 'http://suhyun2963.dothome.co.kr/RN/getMethod.php?name='+name+"&"+'msg='+msg;
        // //const url= `http://suhyun2963.dothome.co.kr/RN/getMethod.php?name=$(name)&msg=&`;
        // fetch(url).then(res=>res.text()).then(resText=>this.setState({text:resText}));



        //5. POST방식
        // let data= "name"+name+"&"+"msg="+msg;
        // const url='http://suhyun2963.dothome.co.kr/RN/postMethod.php';
        // fetch(url, {
        //     method:'POST',
        //     headers:{
        //         'Content-Type':'application/x-www-form-urlencoded'
        //     },

        //     body:{
        //         data
        //     }
        // })
        // .then(res=>res.text()).then(resText=>this.setState({text:resText}));  



        //JSON으로 서버에 데이터 전달하기
        //보낼 데이터가 변수로 있는 경우보다는 객체로 있는 경우가 많음
        let dataObj={    //리터럴 객체 (이거 JSON 아님)
            name:'sam',
            msg:'hello world',
            age:20
        }

        //위 객체를 json문자열로 변환!!
        // JSON.parse()   =>  json 문자열을 객체로 바꿀때
        // JSON.stringify()   =>  객체를 json문자열로 바꿀때
        const jsonData= JSON.stringify(dataObj);
        //alert(jsonData);

        const url="http://suhyun2963.dothome.co.kr/RN/jsonRequest.php";
        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },

            body: jsonData
        })
        .then(res=>{
            return res.json();
        })
        .then(jsonObj=>{
            let aaa= jsonObj.name+', '+jsonObj.age+', '+jsonObj.msg;
            this.setState({text: aaa});
        });
    }

}//Main class..




const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:16
    },

    scroll:{
        marginTop:16,
        backgroundColor:'black'
    },

    text:{
        color:'white',
        padding:8
    }
});