import { Text, View, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const body = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fafafa',
      borderColor: 'gray',
      marginBottom: height * 0.2,
    },
    containerB: {
      marginHorizontal: width* 0.03,
    },
    boldText: {
      //fontStyle:'RobotoMono-Bold',
      fontWeight:'bold',
      fontSize: height * 0.03,
    },
    subplotText: {
  
    },
  
  });

export default body;