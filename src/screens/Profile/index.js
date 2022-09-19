import React, {Component, useContext, useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button} from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import {windowHeight, windowWidth} from '../../utils/Dimensions';
import styles from './styles.js';

import {AuthContext} from '../../navigation/AuthProvider';
import FormInput from '../../components/Forms/FormInput';
import {useNavigation} from '@react-navigation/native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';


import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Space from '../../components/Space';

const Profile = (props) => {
    const {user, logout} = useContext(AuthContext);

    const [driver, setDriver] = useState (" ");

    const [state, setState] = useState({});

    const navigation = useNavigation();

    useEffect(() => {
        const response =
        firestore().collection("drivers").doc(auth().currentUser.uid).get().then(documentSnapshot => {
        setDriver(documentSnapshot.data())
     })
        return () => {
            setState({}); // This worked for me
          };
      },[])
    
      console.log (driver)

    return (
        <View>
        <Header/>
        <Space/>
        <View style={{height: windowHeight/1.35}}>
        <View style={styles.bigcontainer}>
        <View style={styles.container}>
        <View style={styles.inputBoxToday}>
        <FontAwesome5 name={"user-circle"} size={20}/>
        <Text style={styles.title}> {driver.name} </Text>
        <TouchableOpacity style={styles.buttonModify} onPress={() => navigation.navigate('ProfileModifier')}>
        <AntDesign name={"edit"} size={18} color={"white"}/>
        <Text style={styles.titleButton}> </Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.container}>
        <View style={styles.inputBoxToday}>
        <MaterialIcons name={"delivery-dining"} size={20}/>
        <Text style={styles.title}>   {driver.vehicle}  </Text>
        <TouchableOpacity style={styles.buttonModify} onPress={() => navigation.navigate('ProfileModifier')}>
        <AntDesign name={"edit"} size={18} color={"white"}/>
        <Text style={styles.titleButton}> </Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.container}>
        <View style={styles.inputBoxToday}>
        <Entypo name={"shareable"} size={20}/>
        <Text style={styles.title}>  {driver.company} </Text>
        <TouchableOpacity style={styles.buttonModify} onPress={() => navigation.navigate('ProfileModifier')}>
        <AntDesign name={"edit"} size={18} color={"white"}/>
        <Text style={styles.titleButton}> </Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.container}>
        <View style={styles.inputBoxToday}>
        <Entypo name={"email"} size={20}/>
        <Text style={styles.title}>    {driver.email} </Text>
        <TouchableOpacity style={styles.buttonModify} onPress={() => navigation.navigate('ProfileModifier')}>
        <AntDesign name={"edit"} size={18}S color={"white"}/>
        <Text style={styles.titleButton}> </Text>
        </TouchableOpacity>
        </View>
        </View>
        <TouchableOpacity style={styles.buttonForms} onPress={() => logout()}>
        <MaterialIcons name={"logout"} size={20} color={"white"}/>
        <Text style={styles.titleButton}>Logout </Text>
        </TouchableOpacity>
        </View>
        </View>
        <NavBar/>
        </View>
           
    );
};

export default Profile;

