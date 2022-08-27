import React from "react";
import {View, Text, Image, Pressable} from "react-native";
import {windowHeight, windowWidth} from '../../utils/Dimensions';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


import styles from './styles.js';

const Header = (props) => {
    const navigation = useNavigation();

    const goToProfile = () =>{
        navigation.navigate('Profile')
    }

    const goToAbout = () =>{
        navigation.navigate('About')
    }

    const goToHome = () =>{
        navigation.navigate('Home')
    } 

    return (
            <View style={styles.inputBox}> 
            <Pressable onPress={goToProfile} style={styles.buttonProfile} >
            <Ionicons name={"person-circle-outline"} size={25} color="black" />
            </Pressable>
            <Pressable onPress={goToHome} style={styles.buttonProfile} >
            <Image style={{width: 80, height: 90, resizeMode:'contain', left: windowWidth/500}}
                source={require('../../assets/images/logo.png')}            />            
            </Pressable>
            <Pressable onPress={goToProfile} style={styles.buttonAbout} >
            <AntDesign name={"questioncircleo"} size={25} color="black" />
            </Pressable>
            </View>

    );
};


export default Header;