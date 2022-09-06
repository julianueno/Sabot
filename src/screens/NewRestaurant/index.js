import React from "react";
import {View, Dimensions, Image, Text, StyleSheet} from "react-native";
import {hasPermission} from '../../Hooks/LocationPermission';

import NewRestaurantMap from '../../components/NewRestaurantMap';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Space from '../../components/Space';
import Message from '../../components/Message';

const NewRestaurant = (props) => {

    
    return (
        <View>
            <Header/>
            <Message/>
            <NewRestaurantMap />
            <NavBar/>
        </View>
    );
};

export default NewRestaurant;
