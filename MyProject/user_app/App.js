import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerNoty} />
      <View style={styles.headBar}>
        <View style={minSalLogo.logoLeft} />
        <View style={minSalLogo.logoRight} />
        <Text style={generalStyles.titles}>MPC</Text>
      </View>
      
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff',
  },
  containerNoty:{
    backgroundColor:'#fff',
    marginTop: height * 0.03,
  },
  headBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: width * 0.04, // 4% of the screen width
    paddingTop: height * 0.02, // 2% of the screen height
    backgroundColor: '#f2f2f2',
    height: height * 0.1,
    borderBottomWidth: .5,
    borderBottomColor: '#ccc',
  },

});

const generalStyles = StyleSheet.create({
  titles: {
    fontSize:34,
    fontWeight:"bold",
    color:"black",
    fontFamily: "Roboto",
    textAlignVertical: "top",
    letterSpacing:.8,
  },

});

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
});