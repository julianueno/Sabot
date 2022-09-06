import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

const styles = StyleSheet.create ({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },   
      bubble: {
        width: 120,
        height: 50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      },
      title: {
        fontFamily: 'Lexend',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 12,
        lineHeight: 16,
        height: 16,
        color: "white",
      },
      buttonForms: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        width: 80,
        height: 80,
        backgroundColor: "#fa706e",
        top: "75%",
        borderRadius: 80,
        elevation: 10,
      },
      inputBox : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: "center",
        alignItems: "center",
        height: windowHeight/12,
        width: windowWidth, 
        backgroundColor: "white",
        elevation: 2,
    },
    titleSpace: {
      fontFamily: 'Lexend',
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: 16,
      lineHeight: 16,
      height: 16,
      color: "#fa706e",
    },
});

export default styles;