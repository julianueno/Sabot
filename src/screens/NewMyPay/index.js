import React, {useContext, useState, Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';
import FormInput from '../../components/Forms/FormInput';
import FormButton from '../../components/Forms/FormButton';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import MessageMyPay from '../../components/MessageMyPay';

import firestore from "@react-native-firebase/firestore"
import auth from '@react-native-firebase/auth';

import {AuthContext} from '../../navigation/AuthProvider';
import {useNavigation} from '@react-navigation/native';


const MyPay = () => {
    const [revenue, setRevenue] = useState("0");
    const [costs, setCosts] = useState("0");
    const navigation = useNavigation();

    const currentDriverId = auth().currentUser.uid;

    const addMyPay = async () => {
    firestore().collection('drivers').doc(currentDriverId).collection('pay').add({
          revenue: revenue,
          costs: costs,
          createdAt: firestore.FieldValue.serverTimestamp()
        })
        .then (
        Alert.alert(
          "Success",
          "You have submitted today's pay",
          [
            {
              text: "Done",
              onPress: () => navigation.navigate('Home'),
            },
            {
              text: "Go to MyPay",
              onPress: () =>  navigation.navigate('MyPay'),
            },
          ]
        ))
        .catch (console.log ("error"))
      }
    return (
        <View>
        <Header/>
        <MessageMyPay/>
        <View style={styles.container}>
        <Text style={styles.titleForm}>Revenue</Text>
        <FormInput
          labelValue={revenue}
          onChangeText={(revenue) => setRevenue(revenue)}
          placeholderText="Revenue"
          iconType="pluscircleo"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.titleForm}>Costs</Text>
        <FormInput
          labelValue={costs}
          onChangeText={(costs) => setCosts(costs)}
          placeholderText="Costs"
          iconType="minuscircleo"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
        <Pressable onPress={addMyPay} style={styles.buttonForms}>
        <Text style={styles.title}>Submit</Text>
        </Pressable>
      <NavBar/>
      </View>
    );
  };
  
  export default MyPay;
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontSize: 20,
      marginBottom: 10,
      color: '#051d5f',
      fontFamily: "Lexend-Regular",
          fontFamily: 'Lexend',
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: 15,
          lineHeight: 16,
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
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
      borderRadius: 80,
      elevation: 10,
      top: "100%"
    },
    titleForm: {
      fontFamily: 'Lexend',
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: 15,
      lineHeight: 16,
      height: 16,
      color: "black",
    },
    title: {
      fontFamily: 'Lexend',
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: 15,
      lineHeight: 16,
      height: 16,
      color: "white",
    },
  });