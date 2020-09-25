import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';

export default class Main2 extends Component{

    state={

        genres:[
            {img:{url:'https://i.pinimg.com/474x/a9/5e/30/a95e30dee9f3a2c7e41e8ceb07c0e704.jpg'}, genre:'Pop Right now'},
            {img:{url:'https://i.pinimg.com/474x/a9/5e/30/a95e30dee9f3a2c7e41e8ceb07c0e704.jpg'}, genre:'Pop Right now'},
            {img:{url:'https://i.pinimg.com/474x/a9/5e/30/a95e30dee9f3a2c7e41e8ceb07c0e704.jpg'}, genre:'Pop Right now'},
            {img:{url:'https://i.pinimg.com/474x/a9/5e/30/a95e30dee9f3a2c7e41e8ceb07c0e704.jpg'}, genre:'Pop Right now'},
            {img:{url:'https://i.pinimg.com/474x/a9/5e/30/a95e30dee9f3a2c7e41e8ceb07c0e704.jpg'}, genre:'Pop Right now'},
            {img:{url:'https://i.pinimg.com/474x/a9/5e/30/a95e30dee9f3a2c7e41e8ceb07c0e704.jpg'}, genre:'Pop Right now'},
        ],


        songs:[
            // {title:'Bitter',name:'FLETCHER, kito'},
            {img:require('./images/bitter.png'),title:'Bitter',name:'FLETCHER, kito'},
            {img:require('./images/tobeyoung.png'),title:'To Be Young',name:'Anne-Marie, Doja Cat'},
            {img:require('./images/justfriends.jpg'),title:'Just Friends',name:'Audrey Mika'},
            {img:require('./images/bitter.png'),title:'Bitter',name:'FLETCHER, kito'},
            {img:require('./images/tobeyoung.png'),title:'To Be Young',name:'Anne-Marie, Doja Cat'},
            {img:require('./images/justfriends.jpg'),title:'Just Friends',name:'Audrey Mika'},
            {img:require('./images/bitter.png'),title:'Bitter',name:'FLETCHER, kito'},
            {img:require('./images/tobeyoung.png'),title:'To Be Young',name:'Anne-Marie, Doja Cat'},
            {img:require('./images/justfriends.jpg'),title:'Just Friends',name:'Audrey Mika'}
        ]
    }


    render(){
        return(
            <View style={styles.root}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Liked Songs</Text>
                </View>


                <View style={{backgroundColor:'black'}}>
                    <Text style={{marginLeft:16, marginTop:12, color:'white', fontWeight:'bold'}}>Your Top Genres</Text>
                </View>
                
                <ScrollView horizontal={true} style={{backgroundColor:'black', height:300}}>
                    {/* 대량의 데이터를 가진 배열을 컴포넌트로 보여주기 */}
                    {
                        this.state.genres.map((genreItems, num)=>{
                            return(
                                <TouchableOpacity onPress={()=>{this.clickGenre(genreItems, num)}}>
                                    <Image source={genreItems.img} style={{width:80, height:80, borderWidth:1, borderColor:'white'}}></Image>
                                    <Text style={{color:'white', fontSize:10}}>{genreItems.img.url}</Text>
                                </TouchableOpacity>
                            );
                        })
                    }
                    
                </ScrollView>




                <ScrollView horizontal={false} style={{backgroundColor:'black'}}>
                    <Text style={{marginLeft:16, marginTop:12, color:'white', fontWeight:'bold'}}>Downloaded Songs</Text>
                    {/* 대량의 데이터를 가진 배열을 컴포넌트로 보여주기 */}
                    {
                        this.state.songs.map((items, index)=>{
                            return(
                                <TouchableOpacity style={styles.itemsContainer} key={index} onPress={()=>{this.clickItem(items, index);}}>
                                    <Image source={items.img} style={styles.itemImg}></Image>

                                    <View style={styles.TitleNameContainer}>
                                        <Text style={styles.itemTitle}>{items.title}</Text>
                                        <Text style={styles.itemName}>{items.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        })
                    }
                </ScrollView>
                
            </View>
        );
    }//render()...

    clickGenre= (genreItems, num)=>{
        Alert.alert(num + ":" + genreItems.genre);
    }

    clickItem= (items, index)=>{
        Alert.alert(index + ": " + items.name);
    }


}//Main class..


//스타일시트 객체
const styles= StyleSheet.create({
    root:{
        flex:1,
    },

    textContainer:{
        height:200,
        backgroundColor:'#111111',
        justifyContent:'center',
        
    },

    text:{
        alignSelf:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'white'
    },

    itemsContainer:{
        flexDirection:'row',
        borderWidth:1,
        backgroundColor:'#232323',
        borderRadius:8,
        margin:16
    },

    itemImg:{
        width:100,
        height:100,
        resizeMode:'cover',
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8
    },

    TitleNameContainer:{
        justifyContent:'center',
        marginLeft:20
    },

    itemTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        marginBottom:5
    },

    itemName:{
        fontSize:12,
        color:'lightgrey'
    }


});