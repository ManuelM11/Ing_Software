import { Text, View, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const minSalLogo = StyleSheet.create({
    logoLeft: {
      position: 'absolute',
      top: height * 0.005, // 1% of the screen height
      left: width * 0.02, // 2% of the screen width
      width: width * 0.15, // 15% of the screen width
      height: height * 0.02, // 3% of the screen height
      backgroundColor: 'blue',
      paddingBottom: height * 0.02, // 2% of the screen height
    },
    logoRight: {
      position: 'absolute',
      top: height * 0.005, // 1% of the screen height
      left: width * 0.18, // 20% of the screen width
      width: width * 0.3, // 30% of the screen width
      height: height * 0.02, // 3% of the screen height
      backgroundColor: 'red',
      paddingBottom: height * 0.02, // 2% of the screen height
    },
    logoLeft2: {
      position: 'absolute',
      top: height * 0.005, // 1% of the screen height
      left: width * 0.02, // 2% of the screen width
      width: width * 0.15, // 15% of the screen width
      height: height * 0.1, // 3% of the screen height
      backgroundColor: 'blue',
      paddingBottom: height * 0.02, // 2% of the screen height
    },
    logoRight2: {
      position: 'absolute',
      top: height * 0.005, // 1% of the screen height
      left: width * 0.18, // 20% of the screen width
      width: width * 0.3, // 30% of the screen width
      height: height * 0.1, // 3% of the screen height
      backgroundColor: 'red',
      paddingBottom: height * 0.02, // 2% of the screen height
    },
  });

export default minSalLogo;