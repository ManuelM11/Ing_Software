import { Text, View, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const generalStyles = StyleSheet.create({
    titles: {
      fontSize:34,
      fontWeight:"bold",
      color:"black",
      //fontFamily: "normal",
      textAlignVertical: "top",
      letterSpacing:.8,
    },
    nText: {
      fontSize:20,
      color:"black",
      textAlignVertical: "top",
      letterSpacing:.8,
    },
  
  });

  
export default generalStyles;