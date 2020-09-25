import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default class Main extends Component{

    state={
        region:{
            latitude:37.4575852,
            longitude:127.0160042,
            latitudeDelta:0.007,
            longitudeDelta:0.007
        }

        
    }

    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.title}>Your House Location</Text>
                

                <MapView
                    style={{flex:1}}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={this.state.region}>

                    <Marker
                        coordinate={this.state.region}
                        title="우리집"
                        description="서초힐스아파트">
                    </Marker>     
                </MapView>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
        backgroundColor:'black'
    },

    

    title:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
        color:'white'
    }
});