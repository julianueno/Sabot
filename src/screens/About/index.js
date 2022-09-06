
import React, {UseState, useEffect} from 'react'
import {View} from 'react-native'
import {hasPermission} from '../../Hooks/LocationPermission';

import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"
import AccidentMap from '../../components/AccidentMap';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import AboutInfo from '../../components/AboutInfo';

const About = (props) => {
    return (
        <View>
            <Header/>
            <AboutInfo/>
            <NavBar/>
        </View>
           
    );
};

export default About;