import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.containerNoty} />
      <View style={styles.headBar}>
        <View style={minSalLogo.logoLeft} />
        <View style={minSalLogo.logoRight} />
        <Text style={generalStyles.titles}>MPC</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.button}>
            <View style={styles.buttonLine1} />
            <View style={styles.buttonLine2} />
            <View style={styles.buttonLine3} />
          </View>
        </TouchableOpacity>
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
    paddingHorizontal: width * 0.05, // 5% of the screen width
    paddingTop: height * 0.03, // 3% of the screen height
    backgroundColor: '#f2f2f2',
    height: height * 0.1,
    borderBottomWidth: .5,
    borderBottomColor: '#ccc',
  },
  button: {
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.03,
    alignSelf: 'center',
  },
  buttonLine1: {
    position: 'absolute',
    top: 0,
    left: -width *.06,
    paddingVertical: height * 0.005,
    paddingHorizontal: width * 0.08,
    alignSelf: 'center',
    backgroundColor: 'gray',
  },
  buttonLine2: {
    position: 'absolute',
    top: 15,
    left: -width *.06,
    paddingVertical: height * 0.005,
    paddingHorizontal: width * 0.08,
    alignSelf: 'center',
    backgroundColor: 'gray',
  },
  buttonLine3: {
    position: 'absolute',
    top: 30,
    left: -width *.06,
    paddingVertical: height * 0.005,
    paddingHorizontal: width * 0.08,
    alignSelf: 'center',
    backgroundColor: 'gray',
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