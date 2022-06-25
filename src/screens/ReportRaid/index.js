import React from "react";
import {View, Dimensions, Image, Text, StyleSheet} from "react-native";
import {hasPermission} from '../../Hooks/LocationPermission';

import RaidMap from '../../components/RaidMap';
import Header from '../../components/Header';
import Companies from '../../components/Companies';
import NavBar from '../../components/NavBar';

const ReportRaid = (props) => {
    return (
        <View>
            <Header/>
            <Companies/>
            <RaidMap />
            <NavBar/>
        </View>
    );
};

export default ReportRaid;
