import React from "react";
import {View, Dimensions, Image, Text, StyleSheet} from "react-native";
import {hasPermission} from '../../Hooks/LocationPermission';

import AccidentMap from '../../components/AccidentMap';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Space from '../../components/Space';
import Message from '../../components/Message';

const ReportAccident = (props) => {
    return (
        <View>
            <Header/>
            <Message/>
            <AccidentMap />
            <NavBar/>
        </View>
    );
};

export default ReportAccident;
