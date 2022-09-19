import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

const styles = StyleSheet.create ({
    inputBox : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "white",
        height: windowHeight/14,
        elevation: 3,
    },
    buttonProfile: {
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: windowWidth/ 8,
        height: windowHeight / 14,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        left: windowWidth/30
},
    buttonAbout: {
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: windowWidth/ 5,
        height: windowHeight / 14,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    }
});

export default styles;