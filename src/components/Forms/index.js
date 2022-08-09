import React from "react";
import {View, Text, Pressable} from "react-native";
import {useNavigation} from '@react-navigation/native'

/*import AntDesign from "react-native-vector-icons/AntDesign*/
/*import MaterialIcons from "react-native-vector-icons/MaterialIcons*/
/*import Entypo from "react-native-vector-icons/Entypo*/

import styles from './styles.js';

const Forms = (props) => {
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
                <Text style={styles.text}> Report Raid</Text>
            </Pressable>
            <Pressable onPress={goToRestaurants} style={styles.button}>
                <Text style={styles.text}> Report Accident</Text>
            </Pressable>

        </View>
    );
};

export default Forms;