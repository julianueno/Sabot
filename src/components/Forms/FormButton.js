import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontFamily: "Lexend-Regular",
    fontFamily: 'Lexend',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 16,
    color: '#ffffff',
  },
});