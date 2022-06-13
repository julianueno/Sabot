import React from "react";
import {View, Dimensions, Image, Text, StyleSheet} from "react-native";

import HomeMap from '../../components/HomeMap';
import Message from '../../components/Message';
import Header from '../../components/Header';
import Companies from '../../components/Companies';
import NavBar from '../../components/NavBar';
import Forms from '../../components/Forms';

const HomeScreen = (props) => {
    return (
        <View>
            <Header/>
            <Companies/>
            <HomeMap />
            <NavBar/>
        </View>
    );
};


const styles = StyleSheet.create ({
title: {
    width: 400,
    height: 20,
    color: 'black',
    fontSize: 15,
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    right:5
}

});

export default HomeScreen;