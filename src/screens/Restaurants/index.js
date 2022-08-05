import React from "react";
import {View, Dimensions} from "react-native";

import RestaurantMap from '../../components/RestaurantMap';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Companies from '../../components/Companies';

const Restaurants = (props) => {
    return (
        <View>
            <Header/>
            <Companies/>
            <View style={{height: Dimensions.get('window').height -280}}>
            <RestaurantMap />
            <NavBar/>
            </View>
        </View>

    );
};

export default Restaurants;