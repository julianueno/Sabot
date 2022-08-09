
import React, {UseState, useEffect} from 'react'
import {View} from 'react-native'
import {hasPermission} from '../../Hooks/LocationPermission';

import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"
import AccidentMap from '../../components/AccidentMap';
import Header from '../../components/Header';
import Companies from '../../components/Companies';
import NavBar from '../../components/NavBar';
import ProfileInfo from '../../components/ProfileInfo';

const Profile = (props) => {
    return (
        <View>
            <Header/>
            <Companies/>
            <ProfileInfo/>
            <NavBar/>
        </View>
           
    );
};

export default Profile;

