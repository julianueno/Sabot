import React from "react";
import {View, Text, Image} from "react-native";

/*import AntDesign from "react-native-vector-icons/AntDesign*/
/*import MaterialIcons from "react-native-vector-icons/MaterialIcons*/
/*import Entypo from "react-native-vector-icons/Entypo*/

import styles from './styles.js';

const Companies = (props) => {
    return (
            <View style={styles.inputBox}> 
            <Image
                style={{width: 220, height: 80, resizeMode:'contain'}}
                source={require('../../assets/images/companies.png')}
            />
            </View>
    );
};


export default Companies;