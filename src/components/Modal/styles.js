import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';


const styles = StyleSheet.create ({
    container: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row'
      },
    inputBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: "center",
        alignItems: "center",
        height: windowHeight/2.8,
        width: windowWidth/1.1, 
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        elevation: 5,
        padding: 10,
    },
  title: {
    fontFamily: 'Lexend',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 13,
    color: "#fa706e"
  },
  titleClose: {
    fontFamily: 'Lexend',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 13,
    color: "white"
  },
  textModal: {
    fontFamily: 'Lexend',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 13,
    color: "black"
  },
  box : {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: "center",
    alignItems: "center",
    height: windowHeight/9,
    width: windowWidth, 
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5,
  },
  closeModal: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 80,
    height: 35,
    backgroundColor: "#fa706e",
    borderRadius: 10,
    elevation: 10,  
  }
});   


export default styles;