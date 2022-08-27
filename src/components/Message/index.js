import React from "react";
import {View, Text} from "react-native";

import styles from './styles';

const Message = (props) => {
    return (
        <View style={styles.inputBox}>
        <View style={styles.container}>
            <Text style={styles.title}> Drag pin to exact position </Text>
        </View>
        </View>
    );
};

export default Message;
