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
    inputBoxToday : {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: "center",
        alignItems: "center",
        height: windowHeight/8,
        width: windowWidth/2, 
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        elevation: 5,
    },
    inputBoxOld : {
      flexDirection: 'column',
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
  inputBoxOthers : {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: "center",
    alignItems: "center",
    height: windowHeight/9,
    width: windowWidth/2, 
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5,
},
  inputBoxSpeculative : {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: "center",
    alignItems: "center",
    height: windowHeight/9,
    width: windowWidth, 
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 5,
  },
  buttonForms: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    width: 80,
    height: 80,
    backgroundColor: "#fa706e",
    top: windowHeight/1.7,
    borderRadius: 80,
    elevation: 10,
  },
  titleForm: {
    fontFamily: 'Lexend',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 13,
    color: "white",
  },
  title: {
    fontFamily: 'Lexend',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 13,
    color: "#fa706e",
  },
  titleWage: {
    fontFamily: 'Lexend',
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 25,
    color: "#fa706e",
  },    

});

export default styles;


