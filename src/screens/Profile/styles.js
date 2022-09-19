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
  inputBox : {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight/12,
    backgroundColor: "white",
    elevation: 2,
},
    inputBoxToday : {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        padding: 30, 
    },
    buttonModify: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      width: 35,
      height: 35,
      backgroundColor: "#fa706e",
      borderRadius: 35,
      elevation: 10,    
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
    top: windowHeight/1.2,
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
    fontSize: 16,
    color: "#fa706e",
  },
  titleButton: {
    fontFamily: 'Lexend',
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 12,
    color: "white",
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
      top: "100%",
      borderRadius: 80,
      elevation: 10,
    },
    modal: {  
      justifyContent: 'center',  
      alignItems: 'center',   
      backgroundColor : "#00BCD4",   
      height: 300 ,  
      width: '80%',  
      borderRadius:10,  
      borderWidth: 1,  
      borderColor: '#fff',    
      marginTop: 80,  
      marginLeft: 40,  
       
       },  
       text: {  
          color: '#3f2949',  
          marginTop: 10  
       },    

});
 
export default styles;


