import React, {Component} from 'react';
import {View} from 'react-native';

export default class MainComponent extends Component{
    render(){  //화면에보여줄것-레더링
        return(   //View : 기본flex, direction='column'
    //     <View style={{flex:1, flexDirection:'column', justifyContent:'space-evenly', alignItems:'center'}}>
            <View style={{flex:1, flexDirection:'column'}}>
                {/* 크게 세로 1:2 */}
                <View style={{flex:1, flexDirection:'row'}}>
                    {/* 가로 1:2 */}
                    <View style={{flex:1, backgroundColor:'orange'}}>
                        {/* 절대위치 :  뷰를 겹쳐서 배치할수 도 있음 */}
                        <View style={{width:50, height:50, backgroundColor:'black', position:'absolute', left:10, top:10}}></View>
                        <View style={{width:50, height:50, backgroundColor:'white', position:'absolute', left:20, top:20}}></View>
                    </View>
                    <View style={{flex:2, backgroundColor:'hotpink'}}></View>
                </View>

                <View style={{flex:2, flexDirection:'row'}}>
                    {/* 좌우 2:1 */}
                    <View style={{flex:2, backgroundColor:'darkblue'}}></View>
                    <View style={{flex:1, backgroundColor:'grey'}}>
                        <View style={{width:50, height:50, backgroundColor:'black', position:'absolute', top:10, left:10}}></View>
                        <View style={{width:50, height:50, backgroundColor:'white', position:'absolute', bottom:10, right:10}}></View>
                    </View>
                </View>

                {/* floating action button 같은것 만들어보기 */}
                <View style={{width:100, height:100, backgroundColor:'yellow', position:'absolute', bottom:50, right:100, borderRadius:50}}></View>

            </View>

            // flex는 뷰를 겹치는 것이 불가능함!!
            // position을 absolute으로 설정해주면 가능함. (안드로이드의 relativeLayout같은것)
            // absolute은 right, left 설정이 필요함

        );
    }
}//MainComponent class

