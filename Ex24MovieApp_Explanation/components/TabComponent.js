import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

// 단순히 스타일링된 Tab구조를 만들면 되기에 별도의 state는 필요없음. 그렇기에 stateless 컴포넌트로 제작
// const는 만들면서 export default 할 수 없음
const TabComponent= ( props ) =>{

    //선택된 탭에 따라 글씨 색상이 변경되므로
    let color= props.selected ? '#292929' : '#929292'; //선택된 탭은 글씨색인 검정에 가까운 '#292929', 아닌쪽은 백색에 가까운 '#929292'

    //선택된 탭에 따라 아래경계선(Indicator역할)의 색상도 변경
    containerStyle.borderColor= color;


    return (
        // 탭 터치에 따른 처리 메소드를 전달받아와서 지정
        <TouchableOpacity style={containerStyle} onPress={props.onPress}>
            {/* 전달받은 라벨로 Tab 글씨 표시 */}
            <Text style={{color: color}} >{ props.label }</Text> 
        </TouchableOpacity>
    );
}


let containerStyle= {
        flex:1,   //탭이 놓여질때 다른 탭과의 flex값을 같게하여 가로 사이즈를 균등하게 하기 위해
        borderBottomWidth: 1,
        borderColor: '#929292',
        paddingBottom: 8,
        alignItems:'center',
        justifyContent:'center',
};

//외부에서 사용할 수 있도록
export default TabComponent;