import React from "react";
import {View, Text, Image} from "react-native";

/*import AntDesign from "react-native-vector-icons/AntDesign*/
/*import MaterialIcons from "react-native-vector-icons/MaterialIcons*/
/*import Entypo from "react-native-vector-icons/Entypo*/

import styles from './styles.js';

const Logo = (props) => {
    return (
            <View style={styles.inputBox}> 
            <Image
                style={{width: 140, height: 80, resizeMode:'contain'}}
                source={require('../../assets/images/logo.png')}
            />
        </View>
    );
};

export default Logo;