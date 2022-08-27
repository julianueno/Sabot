import { StyleSheet } from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';


const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: "white",
    width: windowWidth,
    height: windowHeight/3,
    elevation: 5,
    opacity: 0.5
  },
  buttonStart: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: 80,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    right: windowWidth/2.5,
    elevation: 10,
  },
  buttonEnd: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    width: 80,
    height: 40,
    backgroundColor: "black",
    borderRadius: 20,
    right: windowWidth/2.5,
    elevation: 10,
  },
  inputBox : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: windowHeight/12,
    backgroundColor: "white",
    elevation: 2,
},
  name: {
    alignSelf: 'center',
    position: 'absolute',
    fontFamily: "Lexend-Regular",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 16,
    height: 16,
  },
  titleStart: {
        fontFamily: 'Lexend',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 16,
        height: 16,
        color: "black",
      },
  titleEnd: {
        fontFamily: 'Lexend',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 16,
        height: 16,
        color: "white",
      },
});

export default Styles;