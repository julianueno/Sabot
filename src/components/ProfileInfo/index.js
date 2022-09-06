import React, {Component, useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

import {AuthContext} from '../../navigation/AuthProvider';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';


const ProfileInfo = (props) => {
    const {user, logout} = useContext(AuthContext);

    const driver = firestore().collection("drivers").doc(auth().currentUser.uid).get().then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);
    
        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
        }
      });

    return (
        <View style={styles.bigcontainer}>
        <View style={styles.container}>
        <View style={styles.inputBoxToday}>
        <FontAwesome5 name={"user-circle"} size={20}/>
        <TouchableOpacity onPress={() => {}}>
        <Text style={styles.title}>   Example rider name </Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.container}>
        <View style={styles.inputBoxToday}>
        <MaterialIcons name={"delivery-dining"} size={20}/>
        <TouchableOpacity onPress={() => {}}>
        <Text style={styles.title}>   Example vehicle rider </Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.container}>
        <View style={styles.inputBoxToday}>
        <Entypo name={"shareable"} size={20}/>
        <TouchableOpacity onPress={() => {}}>
        <Text style={styles.title}>   Example company riding for </Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.container}>
        <View style={styles.inputBoxToday}>
        <Entypo name={"email"} size={20}/>
        <TouchableOpacity onPress={() => {}}>
        <Text style={styles.title}>   Example email rider </Text>
        </TouchableOpacity>
        </View>
        </View>
        <TouchableOpacity style={styles.buttonForms} onPress={() => logout()}>
        <MaterialIcons name={"logout"} size={20} color={"white"}/>
        <Text style={styles.titleButton}>Logout </Text>
        </TouchableOpacity>
        </View>
    );
};

export default ProfileInfo;


const styles = StyleSheet.create ({
    container: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: 'row'
    },
      inputBoxToday : {
          flexDirection: 'row',
          justifyContent: 'center',
          alignSelf: "center",
          alignItems: "center",
          height: windowHeight/9,
          width: windowWidth, 
          backgroundColor: "white",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          elevation: 5,
      },
      inputBoxOld : {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: "center",
        alignItems: "center",
        height: windowHeight/9,
        width: windowWidth, 
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        elevation: 5,
    },
    inputBoxOthers : {
      flexDirection: 'column',
      justifyContent: 'center',
      alignSelf: "center",
      alignItems: "center",
      height: windowHeight/9,
      width: windowWidth/2, 
      backgroundColor: "white",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      elevation: 5,
  },
    inputBoxSpeculative : {
      flexDirection: 'column',
      justifyContent: 'center',
      alignSelf: "center",
      alignItems: "center",
      height: windowHeight/9,
      width: windowWidth, 
      backgroundColor: "white",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      elevation: 5,
    },
    buttonForms: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      position: "absolute",
      width: 80,
      height: 80,
      backgroundColor: "#fa706e",
      top: windowHeight/1.37,
      borderRadius: 80,
      elevation: 10,
    },
    titleForm: {
      fontFamily: 'Lexend',
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: 13,
      color: "white",
    },
    title: {
      fontFamily: 'Lexend',
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: 13,
      color: "#fa706e",
    },
    titleButton: {
      fontFamily: 'Lexend',
      fontStyle: "normal",
      fontWeight: "900",
      fontSize: 12,
      color: "white",
    },
    buttonForms: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        width: 80,
        height: 80,
        backgroundColor: "#fa706e",
        top: "100%",
        borderRadius: 80,
        elevation: 10,
      },    
  
  });
 