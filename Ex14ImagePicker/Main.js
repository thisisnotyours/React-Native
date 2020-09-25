import React, {Component} from 'react';
import {View, Button, Text, Image, StyleSheet} from 'react-native';

//ImagePicker 라이브러리 적용
import ImagePicker from 'react-native-image-picker';

export default class Main extends Component{

    constructor(){
        super();

        this.state={   //생성자 안에서는 this
            img:{uri:''}
        }
    }


    render(){
        return(
            <View style={{flex:1, padding:16}}>
                <Button title="show picker" onPress={this.showPicker}></Button>
                <Text style={{margin:8}}>{this.state.img.uri}</Text>
                {/* 이미지에 flex:1은 heigh=나머지공간, width=match-parent */}
                <Image style={{flex:1, marginTop:8}} source={this.state.img}></Image>
            </View>
        );
    }//render()....


    showPicker= ()=>{

        //안드로읻의 퍼미션 작업 필요
        //1.카메라 사용에 대한 퍼미션
        //2.외부 메모리 사용 퍼미션
        //AndroidManifest.xml문서에서 작업


        //다이얼로그의 옵션객체    //옵션을 쓰는 이유= take a photo, choose from library..글씨 바꾸려고
        const options={
            title:'사진 선택하깅',
            cancelButtonTitle:'취소',
            takePhotoButtonTitle:'카메라',
            chooseFromLibraryButtonTitle:'이미지 선택',

            //카메라 선택시 추가 옵션
            storageOptions:{
                skipBackup: true, //ios에서 icloud에 백업할 것인가? -android
                path:'images', //저장될 폴더명 [Pictures/images]에 저장
            }
        };   


        //picker 다이얼로그 띄우기   (resposse)=>{}  => 안드로이드의 activity result같은 것
        ImagePicker.showImagePicker(options, (response)=>{
            if(response.didCancel){
                alert('사용자가 취소버튼을 눌렀습니다.! @_@');
            }else if(response.error){
                alert('이미지 피커의 에러! : '+ response.error);
            }else{  //성공!
                //잘 선택되었다는 것임.

                //선택된 이미지의 uri 경로를 얻어오기
                const source= {uri: response.uri};

                //state변수에 적용
                this.setState({img:source});
                    
            }
        });
    }



}//Main class..



