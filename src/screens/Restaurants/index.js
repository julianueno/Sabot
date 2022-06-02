import React from "react";
import {View, Dimensions} from "react-native";

import RestaurantMap from '../../components/RestaurantMap';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar';


const Restaurants = (props) => {
    return (
        <View>
            <Logo/>
            <View style={{height: Dimensions.get('window').height -280}}>
            <RestaurantMap />
            </View>
            <NavBar/>
        </View>

    );
};

export default Restaurants;