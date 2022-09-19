import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity} from "react-native";
import {hasPermission} from '../../Hooks/LocationPermission';

import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"
import AccidentMap from '../../components/AccidentMap';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Space from '../../components/Space';
import ModalTester from '../../components/Modal';
import Modal from "react-native-modal";


import {windowHeight, windowWidth} from '../../utils/Dimensions';

import styles from './styles.js';

const About = (props) => {
    const [isModalVisible1, setModalVisible1] = useState(false);
    const toggleModal1 = () => {
      setModalVisible1(!isModalVisible1);
    };

    const [isModalVisible2, setModalVisible2] = useState(false);
    const toggleModal2 = () => {
      setModalVisible2(!isModalVisible2);
    };

    const [isModalVisible3, setModalVisible3] = useState(false);
    const toggleModal3 = () => {
      setModalVisible3(!isModalVisible3);
    };

    const [isModalVisible4, setModalVisible4] = useState(false);
    const toggleModal4 = () => {
      setModalVisible4(!isModalVisible4);
    };
  
    return (
        <View>
            <Header/>
            <Space/>
    <View style={{height: windowHeight/1.35}}>
    <View>
    <TouchableOpacity style={styles.box} onPress={toggleModal1}>
    <Text style={styles.title}>   What is Sabot? </Text>
    </TouchableOpacity>
      <Modal isVisible={isModalVisible1}>
        <View style={styles.inputBox}>
          <Text style={styles.textModal}>
            Sabot is an app for delivery drivers conceived to subvert the information asymmetry between worker and algorithm. 
            It has been designed in conversation with London delivery riders. 
          </Text>
          <Text style={styles.textModal}>
            A series of features improve the conditions on the road for drivers and repurpose data collection. 
            Instead of data being used to individualise performance and feed the optimisation of the platform’s algorithm, 
            sabot proposes to use data to build on workers’ leverage, to improve working conditions and driver’s capacity to make decisions.
          </Text>
          <Text style={styles.textModal}>
          </Text>
          <TouchableOpacity   style={styles.closeModal} onPress={toggleModal1} >
          <Text style={styles.titleClose}>   Close </Text>
          </TouchableOpacity>
        </View>
        </Modal>
        </View>
        <View> 
      <TouchableOpacity style={styles.box} onPress={toggleModal2}>
      <Text style={styles.title}>   Who made this app?</Text>
      </TouchableOpacity>
        <Modal isVisible={isModalVisible2}>
          <View style={styles.inputBox}>
            <Text style={styles.textModal}>
              This app has been coded by a member of International Workers of Great Britain (IWGB) with the idea of becoming a useful tool for riders.  
            </Text>
            <Text style={styles.textModal}>
            </Text>
            <Text style={styles.textModal}>
              The app has been made along riders and members of IWGB, and it integrates their concerns and suggestions.
            </Text>
            <Text style={styles.textModal}>
            </Text>
            <TouchableOpacity   style={styles.closeModal} onPress={toggleModal2} >
            <Text style={styles.titleClose}>   Close </Text>
            </TouchableOpacity>
          </View>
        </Modal>
        </View>
        <View> 
      <TouchableOpacity style={styles.box} onPress={toggleModal3}>
      <Text style={styles.title}>   How does this app improve my everyday?</Text>
      </TouchableOpacity>
        <Modal isVisible={isModalVisible3}>
          <View style={styles.inputBox3}>
            <Text style={styles.textModal}>
            In Sabot the same location information that usually is extracted in platform apps is used collectively in real-time.
            A rider’s app gives an alternative map that can inform decisions: where to find other riders, which areas have higher 
            density and lowest density of workers, where are controls happening in real-time and where are accidents to riders taking place.
            </Text>
            <Text style={styles.textModal}>
            </Text>
            <Text style={styles.textModal}>
            By crossing data from payment invoice with geolocation, it is possible to find out hourly pay (information not currently 
            given by delivery platforms), so they riders can track changes on the algorithm paying scheme. 
            The page also gives information on the hours active riding. In this way riders can keep track of their actual time on the road. 
            </Text>
            <Text style={styles.textModal}>
            </Text>
            <Text style={styles.textModal}>
            For riders' to have real-time access to their data, is to be able to reshape the conditions that govern their labour.
            </Text>
            <Text style={styles.textModal}>
            </Text>
            <TouchableOpacity   style={styles.closeModal} onPress={toggleModal3} >
            <Text style={styles.titleClose}>   Close </Text>
            </TouchableOpacity>
          </View>
        </Modal>
        </View>
        <View> 
      <TouchableOpacity style={styles.box} onPress={toggleModal4}>
      <Text style={styles.title}>   What will happen with my data?</Text>
      </TouchableOpacity>
        <Modal isVisible={isModalVisible4}>
          <View style={styles.inputBox}>
          <Text style={styles.textModal}>
            Sabot's data is the rider's data, so it belongs to you. Riders can request all their data at anytime, which will be provided to them.
            Write an email to sabotapp@gmail.com with the same email you signed up with. 
            </Text>
            <Text style={styles.textModal}>
            We expect to keep updating the app and offer more features soon to keep improving the working conditions of riders. 
            </Text>
            <Text style={styles.textModal}>
            </Text>
            <TouchableOpacity   style={styles.closeModal} onPress={toggleModal4} >
                   <Text style={styles.textModal}>
            </Text>
            <Text style={styles.titleClose}>   Close </Text>
            </TouchableOpacity>
          </View>
        </Modal>
        </View>
        </View>

         <NavBar/>
        </View>          
    );
};

export default About;