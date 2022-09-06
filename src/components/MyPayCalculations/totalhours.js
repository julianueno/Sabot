import React, {useState, useEffect} from "react";
import {View, Image, Text, Pressable, Dimensions, TouchableOpacity, Alert} from "react-native";

import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import Header from '../../components/Header';
import Space from '../../components/Space';


import styles from './styles.js';

import {windowHeight, windowWidth} from '../../utils/Dimensions';

const TotalHours = (props) => {

    const currentDriverId = auth().currentUser.uid;

      //for unmounting component
  const [state, setState] = useState({});


    var t = new Date();
    t.setHours(0,0,0,0); // last midnight
    const today = firestore.Timestamp.fromDate(t);

    const [period, setPeriod] = useState ([]);

    useEffect(() => {
    const times = firestore().collection("drivers").doc(currentDriverId).collection("trips").where("createdAt","<=",today).orderBy("createdAt").onSnapshot(docs => {
        let period = []
        docs.forEach(doc => {
          period.push(doc.data().createdAt.seconds*1000+doc.data().createdAt.nanoseconds/1000000)
        })
        setPeriod(period)
        })
        return () => {
          setState({}); // This worked for me
        };
    },[currentDriverId])

      //total time calculation in days
      let results = period.slice(1).map((e,i) => period[i+1] - period[i])
      const sum = results.reduce((accumulator, value) => {
          if (value<3600000) {
          return accumulator + value
          }
          return accumulator
        }, 0);      
      const totalTime = sum/3600/1000
      const output = parseFloat(totalTime).toFixed(2)

    return (
        <View>
        <View style={styles.inputBoxSpeculative}>
        <Text style={styles.title}>Total Hours worked in delivery</Text>
        <Text style={styles.titleWage}> {output}h</Text>
        </View>
        </View>
    )

}

export default TotalHours