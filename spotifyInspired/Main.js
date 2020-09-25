import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert} from 'react-native';

export default class Main extends Component{

    state={
        genres:[
            {img:require('./images/bitter.png'), title:'Liked Songs'},
            {img:require('./images/bitter.png'), title:'Today Top Hits'},
            {img:require('./images/bitter.png'), title:'Peaceful Piano'},
            {img:require('./images/bitter.png'), title:'Pop Right Now'},
            {img:require('./images/bitter.png'), title:'Lo-Fi Cafe'},
            {img:require('./images/bitter.png'), title:'Signed XOXO'}
        ],

        datas:[
            {img:require('./images/bitter.png'), title:'Bitter', name:'FLETCHER, Kito'},
            {img:require('./images/justfriends.jpg'), title:'Just Friends', name:'Audrey Mika'},
            {img:require('./images/tobeyoung.png'), title:'To Be Young', name:'Anne-Marie, Doja Cat'},
            {img:require('./images/bitter.png'), title:'Bitter', name:'FLETCHER, Kito'},
            {img:require('./images/justfriends.jpg'), title:'Just Friends', name:'Audrey Mika'},
            {img:require('./images/tobeyoung.png'), title:'To Be Young', name:'Anne-Marie, Doja Cat'},
            {img:require('./images/bitter.png'), title:'Bitter', name:'FLETCHER, Kito'},
            {img:require('./images/justfriends.jpg'), title:'Just Friends', name:'Audrey Mika'},
            {img:require('./images/tobeyoung.png'), title:'To Be Young', name:'Anne-Marie, Doja Cat'}
        ]
    }


    //hover기능 넣어보기 *****


    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.rootTitle}>Liked Songs</Text>

                <Text style={styles.yourTopGenres}>Your Top Genres</Text>
                <FlatList
                    data={this.state.genres}
                    renderItem={({item, index})=>{
                        return(
                            <TouchableOpacity style={styles.genreItemView}>
                                <Image source={item.img} style={styles.genreImg}></Image>
                                <Text style={styles.genreTitle}>{item.title}</Text>
                            </TouchableOpacity>
                        );
                    }}
                    
                    keyExtractor={(item)=>{return item.title}}
                    horizontal={true}>          
                </FlatList>


                <Text style={styles.downloadedSongs}>Downloaded Songs</Text>

                <FlatList
                    data={this.state.datas}
                    renderItem={({item, index})=>{
                        return(
                            <TouchableOpacity onPress={()=>{Alert.alert("You're listing..... " + item.title + " by " + item.name)}} style={styles.itemView}>
                                <Image source={item.img} style={styles.itemImg}></Image>

                                <View style={styles.ItemTextView}>
                                    <Text style={styles.itemTitle}>{item.title}</Text>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                    
                    keyExtractor={(item)=>{return item.title}}
                    horizontal={false}>
                </FlatList>




                <View style={styles.fab}></View>
            </View>
        );
    }//render()..
}//Main class..


const styles= StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'black'
    },

    rootTitle:{
        padding:80,
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        fontStyle:'italic',
        color:'white',
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'#0F0F0F'
    },


    

    yourTopGenres:{
        padding:8,
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    },

    genreItemView:{
        flexDirection:'column',
        borderWidth:1,
        borderColor:'white'
    },

    genreImg:{
        width:80,
        height:80,
        resizeMode:'cover'
    },

    genreTitle:{
        color:'white',
        textAlign:'center'
    },




    downloadedSongs:{
        padding:8,
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    },

    itemView:{
        flexDirection:'row',
        // borderWidth:1,
        // borderColor:'white',
        borderRadius:8,
        margin:10,
        backgroundColor:'#212121'
    },

    itemImg:{
        width:80,
        height:80,
        resizeMode:'cover',
        borderWidth:1,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8
    },

    ItemTextView:{
        alignSelf:'center',
        marginLeft:16
    },

    itemTitle:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    
    itemName:{
        color:'grey',
        marginTop:2
    },


    fab:{
        position:'absolute',
        width:70,
        height:70,
        backgroundColor:'#0BC904',
        bottom:40,
        right:20,
        borderRadius:35
    }
});