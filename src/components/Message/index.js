import React from "react";
import {View, Text} from "react-native";

import styles from './styles';

const Message = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> 20 Riders are Online now </Text>
            <Text style={styles.text}> Dummy text with whatever.Dummy text with whatever.Dummy text with whatever.Dummy text with whatever.Dummy text with whatever </Text>
            <Text style={styles.learnMore}> Learn More</Text>
        </View>
    );
};

export default Message;