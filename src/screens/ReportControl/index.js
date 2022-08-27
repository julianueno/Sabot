import React from "react";
import {View, Dimensions, Image, Text, StyleSheet} from "react-native";
import {hasPermission} from '../../Hooks/LocationPermission';

import ControlMap from '../../components/ControlMap';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Message from '../../components/Message';


const ReportControl = (props) => {
    return (
        <View>
            <Header/>
            <Message/>
            <ControlMap />
            <NavBar/>
        </View>
    );
};

export default ReportControl;
