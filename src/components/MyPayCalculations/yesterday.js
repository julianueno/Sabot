import React, {useState, useEffect} from "react";
import {View, Image, Text, Pressable, Dimensions, TouchableOpacity, Alert} from "react-native";

import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import Header from '../../components/Header';
import Space from '../../components/Space';


import styles from './styles.js';

import {windowHeight, windowWidth} from '../../utils/Dimensions';

const Yesterday = (props) => {
    const currentDriverId = auth().currentUser.uid;

      //for unmounting component
  const [state, setState] = useState({});


    var t = new Date();
    t.setHours(0,0,0,0); // last midnight

    var y =new Date();
    y.setHours(-24,0,0,0); // two days before midnight

    const today = firestore.Timestamp.fromDate(t);
    const yesterday = firestore.Timestamp.fromDate(y);

    //Calculate total amount of time onRoad yesterday

    const [period, setPeriod] = useState ([]);

    useEffect(() => {
    const times = firestore().collection("drivers").doc(currentDriverId).collection("trips").where("createdAt","<=",today).where("createdAt",">=",yesterday).onSnapshot(docs => {
        let period = []
        docs.forEach(doc => {
          period.push(doc.data().createdAt.seconds*1000+doc.data().createdAt.nanoseconds/1000000)
        })
        setPeriod(period)
        console.log (period)
        })
        return () => {
            setState({}); // This worked for me
          };
    },[])

    //Calculate total amount of pay since midnight

    const [pay, setPay] = useState ([]);

    useEffect(() => {
        const todaypay = firestore().collection("drivers").doc(currentDriverId).collection("pay").where("createdAt","<=",today).where("createdAt",">=",yesterday).orderBy("createdAt").onSnapshot(docs => {
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
    let totalPay = pay[0]
    //total time calculation
        let results = period.slice(1).map((e,i) => period[i+1] - period[i])
        const sum = results.reduce((accumulator, value) => {
            if (value<1800000) {
            return accumulator + value
            }
            return accumulator
          }, 0);      
        const totalTime = sum/3600/1000

    const output = parseFloat(totalPay/totalTime).toFixed(2);


    return (
        <View>
        <View style={styles.container}>
        <View style={styles.inputBoxToday}>
        <Text style={styles.title}>Yesterday</Text>
        <Text style={styles.titleWage}> 
        {period.length==0? "0":(totalPay/totalTime).toFixed(2)} £/h</Text>
        </View>
        </View>
        </View>
    )

}

export default Yesterday