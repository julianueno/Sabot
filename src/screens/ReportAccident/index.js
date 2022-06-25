import React from "react";
import {View, Dimensions, Image, Text, StyleSheet} from "react-native";
import {hasPermission} from '../../Hooks/LocationPermission';

import AccidentMap from '../../components/AccidentMap';
import Header from '../../components/Header';
import Companies from '../../components/Companies';
import NavBar from '../../components/NavBar';

const ReportAccident = (props) => {
    return (
        <View>
            <Header/>
            <Companies/>
            <AccidentMap />
            <NavBar/>
        </View>
    );
};

export default ReportAccident;
