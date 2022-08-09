import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';


const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        position: "absolute",
        width: windowWidth/ 1.1,
        height: windowHeight / 12,
        padding: 5,
        top: windowHeight/1.15, //for center align
        alignSelf: 'center', //for align to right
      },
      button: {
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: windowWidth/ 4,
        height: windowHeight / 12,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        
      },
      title: {
            color: '#1A1A1A',
            fontFamily: "Lexend",
            fontStyle: "normal",
            fontSize: 14,
            lineHeight: 16,
            height: 16,

          }
});

export default styles;