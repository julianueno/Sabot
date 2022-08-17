import React, {useState, useEffect} from "react";
import {View, Dimensions, Text, TextInput, Image} from "react-native";
import firestore from "@react-native-firebase/firestore"
import {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

 
const TripsData = ()=>{
  
  const [trips, setTrips] = useState ([]);

  const fetchTrips = () => {
    const response= firestore()
    .collection("drivers")
    .where('active',"==",true)
    .onSnapshot(docs => {
    let trips = []
    docs.forEach(doc => {
      trips.push(doc.data())
    })
    setTrips (trips)
    console.log ("Hello")
    })
  }
}

export default TripsData