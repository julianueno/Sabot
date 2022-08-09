import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  inputView: {
    backgroundColor: "#e6ecf2",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    padding: 15,
    fontFamily: "Lexend-Regular",
    fontFamily: 'Lexend',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    color: "white",
  },

  TextLogin: {
    height: 50,
    padding: 15,
    fontFamily: "Lexend-Regular",
    fontFamily: 'Lexend',
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 15,
    color: "white",
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#00CCFF",
    marginBottom: 30,
    alignItems: "center",
  },
  buttonForms: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    width: 80,
    height: 80,
    backgroundColor: "#00CCFF",
    top: 200,
    borderRadius: 80,
  },
});

export default styles;
