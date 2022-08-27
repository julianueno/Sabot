import React from "react";
import {View, Dimensions,StyleSheet, Pressable, Text} from "react-native";

import RestaurantMap from '../../components/RestaurantMap';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Space from '../../components/Space';

const Restaurants = (props) => {
    return (
        <View>
            <Header/>
            <Space/>
            <RestaurantMap />
            <Pressable style={styles.buttonForms}>
            <Text style={styles.title}>Add</Text>
            <Text style={styles.title}> restaurant</Text>

            </Pressable>
            <NavBar/>
        </View>
    );
};

const styles = StyleSheet.create({
title: {
    fontFamily: 'Lexend',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 16,
    height: 16,
    color: "white",
  },
  buttonForms: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    width: 80,
    height: 80,
    backgroundColor: "#fa706e",
    top: "75%",
    borderRadius: 80,
    elevation: 10,

  },
});
export default Restaurants;