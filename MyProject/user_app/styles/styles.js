import { Text, View, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    headBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between' ,
      paddingHorizontal: width * 0.20, // 5% of the screen width
      paddingTop: height * 0.03, // 3% of the screen height
      height: height * 0.1,
    },
    headBar2: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: height * 0.03, // 3% of the screen height
      height: height * 0.1,
    },
    button: {
      position: 'relative',
      right: 20
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: height * 0.02,
      paddingHorizontal: width * 0.05,
    },
    dropdownContainer: {
      height: 40,
      marginTop: 16,
    },
    modalWrongSesion: {
      backgroundColor: 'white',
      padding: 20,
      margin: 10,
      marginTop: height * 0.3,
    },
    modalBackGround: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalFooter: {
      // Style for the footer containing the button (at the bottom)
      paddingTop: height * 0.2,
      borderBottomLeftRadius: 10,
    },
    button2: {
      width: 100,
      height: 100,
      borderRadius: 75,
      backgroundColor: 'gray',
    },
    AutoExButton: {
      width: 150,
      height: 60,
      borderRadius: 20,
      backgroundColor: 'gray',
      marginBottom: height * 0.01,
    },
    isChecked: {
      width: 30,
      height: 30,
      borderRadius: 5,
      borderColor: 'black',
      borderWidth: 3,
      backgroundColor: 'white',
    },
    AutoExButton2: {
      position:'relative',
      left: width * 0.3,
      width: 150,
      height: 60,
      borderRadius: 20,
      opacity:0.8,
      backgroundColor: 'blue',
      marginBottom: height * 0.01,
    },
  
  });

  export default styles;