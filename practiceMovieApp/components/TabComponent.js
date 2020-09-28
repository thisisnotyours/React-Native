import React from 'react';
import {View, TouchableOpacity, Text, ImagePropTypes} from 'react-native';
import TabComponent from '../../Ex24MovieApp/components/TabComponent';

export default TabComponent= (props)=>{

    let color= props.selected?'white':'#929292';

    containerStyle.borderColor= color;

    return(
        <TouchableOpacity style={containerStyle}>
            <Text style={{color:'white'}}>{props.label}</Text>
        </TouchableOpacity>
    );
}

const containerStyle={
    flex:1,
    borderBottomWidth:1,
    borderColor:'#929292',
    paddingBottom:8,
    alignItems:'center',
    justifyContents:'center'
};