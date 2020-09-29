import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MovieList from '../screens_movie/MovieList';
import MovieDetail from '../screens_movie/MovieDetail';

const Stack= createStackNavigator();

//선억적 함수 표현으로도 함수형(Stateless) 컴포넌트 제작가능
export default function MovieStackNav(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="MovieList" component={MovieList}></Stack.Screen>
            <Stack.Screen name="MovieDetail" component={MovieDetail}></Stack.Screen>
        </Stack.Navigator>
    );
}