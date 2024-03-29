import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';


const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        height: windowHeight / 10,
        padding: 5,
        alignSelf: 'center', //for align to right
      },
      button: {
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: windowWidth/ 3,
        height: windowHeight / 10,
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