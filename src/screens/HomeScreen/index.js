import React, {Component, useState, useEffect} from "react";
import {SafeAreaView, View, Text, StatusBar, Button, handleClick, Pressable} from 'react-native';

import HomeMap from '../../components/HomeMap';
import Message from '../../components/Message';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import styles from './styles.js';

import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const currentDriverId = auth().currentUser.uid;

  const StartButton = () => {
    firestore().collection('drivers').doc(currentDriverId).update({
      active: false
  })
    return (
      <View style={styles.inputBox}>
            <View style={styles.buttonStart}>
          <Text style={styles.titleStart}>
          <Ionicons name={"ios-arrow-redo-outline"} size={15} color="black" flexDirection="row" />Start 
          </Text>
        </View>
      </View>
    );
  };

  const StopButton = () => {
    firestore().collection('drivers').doc(currentDriverId).update({
      active: true
  })
    return (
      <View style={styles.inputBox}>
        <View style={styles.buttonEnd}>
          <Text style={styles.titleEnd}>
          <Ionicons name={"stopwatch"} size={15} color="white" flexDirection="row" /> End   
      </Text>
      </View>
      </View>
    );
  };

  const [status, setStatus] = useState(false);
  
  return (
    <View>
      <Header/>
      <Pressable
        onPress={() => {
          setStatus(!status);
        }}
      >
        {status ? <StopButton /> : <StartButton />}
      </Pressable>
      <HomeMap/>
      <NavBar/>
    </View>
  );
};

export default HomeScreen;