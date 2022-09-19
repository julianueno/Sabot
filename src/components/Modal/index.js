import React, { useState } from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import Space from '../../components/Space';

import styles from './styles.js';


function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  console.log ("Hello")
  
  return (
    <View>
    <View style={{ flex: 1 }}>  
    <TouchableOpacity style={styles.box} onPress={toggleModal}>
    <Text style={styles.title}>   What is Sabot? </Text>
    </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
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
          <TouchableOpacity   style={styles.closeModal} onPress={toggleModal} >
          <Text style={styles.titleClose}>   Close </Text>
          </TouchableOpacity>
        </View>
      </Modal>
     </View>
      <View style={{ flex: 1 }}>  
      <TouchableOpacity style={styles.box} onPress={toggleModal}>
      <Text style={styles.title}>   Who made this app?</Text>
      </TouchableOpacity>
        <Modal isVisible={isModalVisible}>
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
            <TouchableOpacity   style={styles.closeModal} onPress={toggleModal} >
            <Text style={styles.titleClose}>   Close </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      </View>
  );
}

export default ModalTester;