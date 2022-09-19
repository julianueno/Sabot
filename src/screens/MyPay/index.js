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

import Today from '../../components/MyPayCalculations/today';
import Yesterday from '../../components/MyPayCalculations/yesterday';
import SevenDays from '../../components/MyPayCalculations/sevendays';
import ThirtyDays from '../../components/MyPayCalculations/thirtydays';
import TotalHours from '../../components/MyPayCalculations/totalhours';


import {AuthContext} from '../../navigation/AuthProvider';
import {windowHeight, windowWidth} from '../../utils/Dimensions';


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
        <View style={{height: windowHeight/1.35}}>
        <View style={styles.container}>
        <Today/>
        <Yesterday/>
        </View>
        <View style={styles.container}>
        <SevenDays/>
        </View>
        <View style={styles.container}>
        <ThirtyDays/>
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
        <View style={styles.container}>
        <TotalHours/>
        </View>
        <Pressable onPress={goToNewMyPay} style={styles.buttonForms}>
        <Text style={styles.titleForm}>Add Today</Text>
        </Pressable>
        </View>
        <NavBar/>        
        </View>
    );
  };
  
  export default MyPay;
