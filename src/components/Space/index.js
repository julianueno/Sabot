import { StyleSheet } from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';
import React from 'react';
import {View} from 'react-native';


const Space = () => {
    return (
        <View style={styles.inputBox}/>
    )
}

const styles = StyleSheet.create({
  inputBox : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: windowHeight/12,
    backgroundColor: "white",
    elevation: 2,
},
  
});

export default Space
