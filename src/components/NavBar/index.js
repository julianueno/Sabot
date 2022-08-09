import React from "react";
import {View, Text, Pressable} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


/*import AntDesign from "react-native-vector-icons/AntDesign*/
/*import MaterialIcons from "react-native-vector-icons/MaterialIcons*/
/*import Entypo from "react-native-vector-icons/Entypo*/

import styles from './styles.js';

const NavBar = (props) => {
    const navigation = useNavigation();

    const goToHome = () =>{
        navigation.navigate('Home')
    } 
    const goToRestaurants = () =>{
        navigation.navigate('Restaurants')
    }
    const goToMyPay = () =>{
        navigation.navigate('MyPay')
    }

    const goToProfile = () =>{
        navigation.navigate('Profile')
    }
    
    return (
        <View style={styles.container}>
            <Pressable onPress={goToHome} style={styles.button}>
                <MaterialIcons name={"delivery-dining"} size={25} color="black" />
                <Text style={styles.title}> OnRoad</Text>
            </Pressable>
            <Pressable onPress={goToRestaurants} style={styles.button}>
            <MaterialIcons name={"restaurant"} size={25} color="black" />
                <Text style={styles.title}> Restaurants</Text>
            </Pressable>
            <Pressable onPress={goToMyPay} style={styles.button}>
            <MaterialIcons name={"payments"} size={25} color="black" />
                <Text style={styles.title}> MyPay</Text>
            </Pressable>
            <Pressable onPress={goToProfile} style={styles.button}>
            <AntDesign name={"user"} size={25} color="black" />
                <Text style={styles.title}> Profile </Text>
            </Pressable>
        </View>
    );
};

export default NavBar;