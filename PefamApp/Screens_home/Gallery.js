import React,{Component} from 'react';
import {View,Text,StyleSheet, Image, Alert,FlatList, TouchableOpacity, ImageComponent} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack= createStackNavigator();

export default Gallery=()=>{

    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="갤러리" 
                component={Screen}
                options={{
                    headerTitleAlign:'center',
                    headerTintColor:'#00ace6',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerStyle:{borderBottomWidth:1,borderBottomColor:'#00ace6'}
                }}></Stack.Screen>
        </Stack.Navigator>
    );
}



//같은문서에 다른 클래스..
class Screen extends Component{

    state={
        img:[
            {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg'},
            {uri:'https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg'},
            {uri:'https://static.onecms.io/wp-content/uploads/sites/47/2020/09/03/brown-puppy-sssxyuZape8-unsplash-2000.jpg'},
            {uri:'https://www.dogtime.com/assets/uploads/2011/03/puppy-development-1280x720.jpg'},
            {uri:'https://i.dailymail.co.uk/1s/2020/06/29/22/30198268-8472445-image-a-4_1593464962804.jpg'}
        ]
    }


    render(){
        return(
            <View style={styles.root}>
                <Text style={{fontSize:20,fontWeight:'bold',marginLeft:5}}>최근 갤러리</Text>
                <FlatList
                    data={this.state.img}
                    renderItem={( obj )=>{   //{item, index}- 구조분해할당
                        return(
                            <TouchableOpacity onPress={()=>{this.clickImg(item,index)}}>
                                <Image source={obj.item} style={styles.img}></Image>
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
    img:{width:100,height:100,margin:5,borderRadius:5}
});