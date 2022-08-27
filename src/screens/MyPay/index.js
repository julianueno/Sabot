import React, {useContext, useState, Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Space from '../../components/Space';

import firestore from "@react-native-firebase/firestore"
import auth from '@react-native-firebase/auth';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';


import {AuthContext} from '../../navigation/AuthProvider';

const MyPay = (props) => {
  const navigation = useNavigation();

  const goToNewMyPay = () =>{
      navigation.navigate('NewMyPay')
  }
    const [revenue, setRevenue] = useState();
    const [costs, setCosts] = useState();

    const currentDriverId = auth().currentUser.uid;
    
    return (
        <View>
        <Header/>
        <Space/>
        <View style={styles.container}>
        <View style={styles.inputBoxToday}>
        <Text style={styles.title}>Today</Text>
        <Text style={styles.titleWage}>10.9£/h</Text>
        </View>
        <View style={styles.inputBoxToday}>
        <Text style={styles.title}>Yesterday</Text>
        <Text style={styles.titleWage}>15.9£/h</Text>
        </View>
        </View>
        <View style={styles.inputBoxOld}>
        <Text style={styles.title}>Last Week</Text>
        <Text style={styles.titleWage}>293.9£/day</Text>
        </View>
        <View style={styles.inputBoxOld}>
        <Text style={styles.title}>Last Month</Text>
        <Text style={styles.titleWage}>1229.9£/month</Text>
        </View>
        <View style={styles.container}>
        <View style={styles.inputBoxOthers}>
        <Text style={styles.title}>Minimum Wage London</Text>
        <Text style={styles.titleWage}>9.5£/h</Text>
        </View>
        <View style={styles.inputBoxOthers}>
        <Text style={styles.title}>CEO Deliveroo</Text>
        <Text style={styles.titleWage}>2968.32£/h</Text>
        </View>
        </View>
        <View style={styles.inputBoxSpeculative}>
        <Text style={styles.title}>Speculative value of your data up to today</Text>
        <Text style={styles.titleWage}> 80 £</Text>
        </View>
        <Pressable onPress={goToNewMyPay} style={styles.buttonForms}>
        <Text style={styles.titleForm}>Add Today</Text>
        </Pressable>
        <NavBar/>
        </View>
    );
  };
  
  export default MyPay;
