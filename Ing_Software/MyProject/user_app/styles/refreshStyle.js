import { Text, View, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const refreshStyle = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default refreshStyle;