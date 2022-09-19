import React, {useState, useEffect} from "react";
import {View, Image, Text, TextInput, Pressable, ScrollView, Alert, StyleSheet} from "react-native";

import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {windowHeight, windowWidth} from '../../utils/Dimensions';
import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import FormInput from '../../components/Forms/FormInput';
import {useNavigation} from '@react-navigation/native';
import styles from './styles.js';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Space from '../../components/Space';

const RestaurantProfile = ({ route, navigation }) => {
    const {restid, restname} = route.params;

    const [newComment, setNewComment] = useState();

    const [state, setState] = useState({});

    const [comments, setComments] = useState ([]);

    const currentDriverId = auth().currentUser.uid;

    const [driver, setDriver] = useState (" ");

    useEffect(() => {
      const response =
      firestore().collection("drivers").doc(auth().currentUser.uid).get().then(documentSnapshot => {
      setDriver(documentSnapshot.data())
   })
      return () => {
          setState({}); // This worked for me
        };
    },[addComment])

    useEffect(() => {
     const response =
     firestore()
     .collection("restaurants")
     .doc(restid)
     .collection("comments")
     .orderBy("createdAt","desc")
     .onSnapshot(docs => {
         let comments = []
         docs.forEach(doc => {
             comments.push(doc.data())
         })
         setComments (comments)
       })
      return () => {
            setState({}); // This worked for me
          };
      },[restid])

      const getComments = () => {
        console.log (driver)
        return comments.map ((comment,index) => (
            <View style={styles.commentBox}
            key={Math.random()*10000000}>
            <Text style={styles.title}> {comment.comment} </Text>
            <View style={styles.nameBox}>
            <Text style={styles.timeTitle}>
            <Ionicons name={"person-circle-outline"} size={12} color="black" />
            {comment.name} </Text>
            <Text style={styles.timeTitle}>
            {comment.createdAt===null? "Just now": (comment.createdAt.toDate().toLocaleTimeString('en-US', {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'}))} </Text>
            </View>
            </View>
          ))
      }

      const addComment= async () => {
        firestore().collection("restaurants")
        .doc(restid)
        .collection("comments")
        .add({
              createdAt: firestore.FieldValue.serverTimestamp(),
              comment: newComment,
              driver: currentDriverId,
              name: driver.name,
            })
        navigation.navigate('RestaurantProfile', {restid: restid, restname: restname})
          }

          
    return (
        <View>
            <Header/>
            <View style={styles.inputBox}>
            <Text style={styles.restaurantTitle}>  {restname} </Text>
            </View>
          <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
          <EvilIcons name={"comment"} size={25} color="black" />
          </View>
            <TextInput
            value={newComment}
            onChangeText={(newComment) => setNewComment(newComment)}
            style={styles.input}
            placeholderText="New Comment"
            numberOfLines={1}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Pressable onPress={addComment} style={styles.buttonForms}>
        <Text style={styles.titleButton}>Add </Text>
        </Pressable>
        </View>
        <ScrollView style={{height: windowHeight/1.6}}>
               {getComments ()}
            </ScrollView>
        <NavBar/>
        </View>
    );
};

export default RestaurantProfile;
