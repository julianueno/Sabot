import React, {Component, useContext, useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput} from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import {windowHeight, windowWidth} from '../../utils/Dimensions';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';


import {AuthContext} from '../../navigation/AuthProvider';
import FormInput from '../../components/Forms/FormInput';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Space from '../../components/Space';

const ProfileModifier = (props) => {
    const {user, logout} = useContext(AuthContext);

    const [driver, setDriver] = useState (" ");

    const [state, setState] = useState({});

    const currentDriverId=auth().currentUser.uid;
    
    // Initialize navigation hook
    const navigation = useNavigation();

    useEffect(() => {
        const response =
        firestore().collection("drivers").doc(currentDriverId).get().then(documentSnapshot => {
        setDriver(documentSnapshot.data())
     })
        return () => {
            setState({}); // This worked for me
          };
      },[])
    
    const [driverName, setDriverName] = useState();
    const [vehicle, setVehicle] = useState();
    const [company, setCompany] = useState ();
    const [email, setEmail] = useState ();
  

      const saveProfile = async () => {
        if (driverName==null)
        {firestore().collection('drivers').doc(currentDriverId).update({
              name: driver.name})
        }
        else
        {firestore().collection('drivers').doc(currentDriverId).update({
          name: driverName})
        }
        if (vehicle==null)
        {firestore().collection('drivers').doc(currentDriverId).update({
              vehicle: driver.vehicle})
        }
        else
        {firestore().collection('drivers').doc(currentDriverId).update({
              vehicle: vehicle})
        }
        if (company==null)
        {firestore().collection('drivers').doc(currentDriverId).update({
              company: driver.company})
        }
        else
        {firestore().collection('drivers').doc(currentDriverId).update({
              company: company})
        }
        if (email==null)
        {firestore().collection('drivers').doc(currentDriverId).update({
          email: driver.email})
        }
        else 
        {firestore().collection('drivers').doc(currentDriverId).update({
          email: email})
        }
        navigation.navigate('Home')
      }   

    return (
        <View>
        <Header/>
        <Space/>
        <View style={{height: windowHeight/1.35}}>
        <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
          <FontAwesome5 name={"user-circle"} size={20}/>
          </View>
            <TextInput
            value={driverName}
            onChangeText={(driverName) => setDriverName(driverName)}
            style={styles.input}
            placeholder={driver.name}
            numberOfLines={1}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
          <MaterialIcons name={"delivery-dining"} size={20}/>
          </View>
            <TextInput
            value={vehicle}
            onChangeText={(vehicle) => setVehicle(vehicle)}
            style={styles.input}
            placeholder={driver.vehicle}
            numberOfLines={1}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
          <Entypo name={"shareable"} size={20}/>
          </View>
            <TextInput
            value={company}
            onChangeText={(company) => setCompany(company)}
            style={styles.input}
            placeholder={driver.company}
            numberOfLines={1}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
          <Entypo name={"email"} size={20}/>
          </View>
            <TextInput
            value={email}
            onChangeText={(email) => setEmail(email)}
            style={styles.input}
            placeholder={driver.email}
            numberOfLines={1}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <TouchableOpacity style={styles.buttonForms} onPress={() => saveProfile()}>
        <Text style={styles.titleButton}>Save </Text>
        </TouchableOpacity>
        </View>
        <NavBar/>
        </View>
           
    );
};

export default ProfileModifier;

