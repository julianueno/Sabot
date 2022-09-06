import React, {useState, useEffect, useRef} from "react";
import {View, Image, Text, Pressable, Dimensions, TouchableOpacity, Alert} from "react-native";

import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import Header from '../../components/Header';
import Space from '../../components/Space';


import styles from './styles.js';

import {windowHeight, windowWidth} from '../../utils/Dimensions';

const ThirtyDays = (props) => {
   const mountedRef = useRef(true)

     //for unmounting component
  const [state, setState] = useState({});


    const currentDriverId = auth().currentUser.uid;

    var d =new Date
    d.setHours(-720,0,0,0); // thirty days ago midnight

    const pastdate = firestore.Timestamp.fromDate(d);

    //Calculate total amount of time onRoad yesterday

    const [period, setPeriod] = useState ([]);

    useEffect(() => {
    const times = firestore().collection("drivers").doc(currentDriverId).collection("trips").where("createdAt",">=",pastdate).onSnapshot(docs => {
        let period = []
        docs.forEach(doc => {
          period.push(doc.data().createdAt.seconds*1000+doc.data().createdAt.nanoseconds/1000000)
        })
        setPeriod(period)
        })
    },[])

      //total time calculation in days
      let results = period.slice(1).map((e,i) => period[i+1] - period[i])
      const sum = results.reduce((accumulator, value) => {
          if (value<1800000) {
          return accumulator + value
          }
          return accumulator
        }, 0);      
      const totalTime = sum/3600/1000

    //Calculate total amount of pay since midnight

    const [pay, setPay] = useState ([]);

    useEffect(() => {
        const todaypay = firestore().collection("drivers").doc(currentDriverId).collection("pay").where("createdAt",">=",pastdate).orderBy("createdAt").onSnapshot(docs => {
            let pay = []
            docs.forEach(doc => {
              pay.push(doc.data().revenue-doc.data().costs)
            })
            setPay(pay)
            })
        return () => {
              setState({}); // This worked for me
            };
        },[])
    //Output value of the function 
    let resultspay = pay.slice(1).map((e,i) => pay[i+1] + pay[i])
    const sumpay = resultspay.reduce((accumulator, value) => {
        return    accumulator + value
      }, 0);      
    const totalPay = sumpay
    const onedayPay = pay[0];

    return (
        <View>
        <View style={styles.inputBoxOld}>
        <Text style={styles.title}>Last 30 days</Text>
        <Text style={styles.titleWage}> 
        {period.length==0? "0":(pay.length==1? (onedayPay/totalTime).toFixed(2):(totalPay/totalTime).toFixed(2))} £/h</Text>
        </View>
        </View>
    )

}

export default ThirtyDays