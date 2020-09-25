import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';

export default class Main2 extends Component{

    constructor(){
        super();

        this.state={
            text:"",
            movies:[]
        }
    }


    render(){
        return(
            <View style={styles.root}>
                <Button title="fetch data from network" onPress={this.fetchData}></Button>

                <View>
                    <ScrollView horizontal={false} style={styles.scroll}>
                        <Text style={styles.text}>{this.state.text}</Text>

                        {
                            this.state.movies.map((element, index)=>{
                                return(
                                    <View key={index}>
                                        <Text style={styles.text}>{element.id}</Text>
                                        <Text style={styles.text}>{element.title}</Text>
                                        <Text style={styles.text}>{element.releaseYear}</Text>
                                    </View>
                                );
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }//render()...

    fetchData= ()=>{
        const url= 'https://reactnative.dev/movies.json';
        fetch(url).then((res)=>{return res.json();})
        .then((jsonObj)=>{this.setState({text:jsonObj.title, movies:jsonObj.movies})});
    }


}//Main class..


const styles= StyleSheet.create({
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