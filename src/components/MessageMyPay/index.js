import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {windowHeight, windowWidth} from '../../utils/Dimensions';

const MessageMyPay = (props) => {
    return (
        <View style={styles.inputBox}>
        <View style={styles.container}>
            <Text style={styles.title}> Input revenue and costs of workday </Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    container : {
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius:10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius:10,
        backgroundColor: "white",
        width: windowWidth/1.2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        left: windowWidth/12,
        elevation: 2,
    },
    inputBox : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        backgroundColor: "white",
        elevation: 2,
    },
    title: {
        color: '#fa706e',
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 5,
        fontFamily: "Lexend-Regular",
        fontFamily: 'Lexend',
        fontStyle: "normal",
        fontWeight: "600",
    },
});

export default MessageMyPay;