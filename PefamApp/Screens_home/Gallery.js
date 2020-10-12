import React,{Component} from 'react';
import {View,Text,StyleSheet, Image, Alert, FlatList, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack= createStackNavigator();

export default Gallery=()=>{

    return(
        <Stack.Navigator>
            <Stack.Screen name="Gallery" component={Screen}></Stack.Screen>
        </Stack.Navigator>
    );
}



//같은문서에 다른 클래스..
class Screen extends Component{

    state={
        img:[
            {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg'},
            {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg'},
            {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg'},
            {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg'},
            {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg'}
        ]
    }


    render(){
        return(
            <View style={styles.root}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>최근 갤러리</Text>
                <FlatList
                    data={this.state.img}
                    renderItem={(item,index)=>{
                        return(
                            <TouchableOpacity onPress={()=>{this.clickImg(item,index)}}>
                                <Image source={item.img} style={{width:100,height:100}}></Image>
                            </TouchableOpacity>
                        );
                    }}
                    horizontal={true}>
                </FlatList>
            </View>
        );
    }

    clickImg= (item,index)=>{
        Alert.alert(index)
    }
}

const styles=StyleSheet.create({
    root:{flex:1,margin:16},
});