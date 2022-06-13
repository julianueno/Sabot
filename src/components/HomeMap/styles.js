import {StyleSheet} from 'react-native';

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
      filtercontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        position: 'absolute',
        top: '0%', //for center align
        alignSelf: 'center' //for align to right
      }, 
      button: {
        backgroundColor: '#00CCFF',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        marginLeft: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        width: 58,
        height: 26
      }, 
      buttonRaids: {
        backgroundColor: '#00CCFF',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        marginLeft: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        width: 70,
        height: 26
      }, 
      buttonAccidents: {
        backgroundColor: '#00CCFF',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        gap: "20%",        
        marginLeft: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        width: 100,
        height: 26
      },
      buttonDrivers: {
        backgroundColor: '#00CCFF',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        gap: "20%",        
        marginLeft: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        width: 115,
        height: 26
      },
      title: {
        color: '#1A1A1A',
        fontFamily: "Lexend-Regular",
        fontFamily: 'Lexend',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 12,
        lineHeight: 16,
        height: 16,

      }
});

export default styles;