import React, {Component, useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

import {AuthContext} from '../../navigation/AuthProvider';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';


const AboutInfo = (props) => {

    return (
        <View style={styles.bigcontainer}>
        <View style={styles.container}>
        <View style={styles.inputBoxToday}>
        <TouchableOpacity onPress={() => {}}>
        <Text style={styles.title}>   What is Sabot? </Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.container}>
        <View style={styles.inputBoxToday}>
        <TouchableOpacity onPress={() => {}}>
        <Text style={styles.title}>   Who made this app?</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.container}>
        <View style={styles.inputBoxToday}>
        <TouchableOpacity onPress={() => {}}>
        <Text style={styles.title}> What will you do with my data?  </Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.container}>
        <View style={styles.inputBoxToday}>
        <TouchableOpacity onPress={() => {}}>
        <Text style={styles.title}> How does this app improve my workday?</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
    );
};

export default AboutInfo;


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
 