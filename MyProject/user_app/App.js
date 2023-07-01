import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Modal, Button} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from 'react';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');


  const handleButtonPress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };



  return (
    <View style={styles.container}>
      <View style={styles.containerNoty} />
      <View style={styles.headBar}>
        <View style={minSalLogo.logoLeft} />
        <View style={minSalLogo.logoRight} />
        <Text style={generalStyles.titles}>MPC</Text>

        <Button title="Menu" style={styles.button} onPress={handleButtonPress}/>

      </View>

      <Modal visible={modalVisible} animationType='slide' transparent={true} onRequestClose={handleModalClose}>
          <View style={{
            backgroundColor:'white',
            paddingBottom: height,
            marginBottom: 0,
            flexDirection:"row",
            justifyContent:"center",          
          }}>
            <Button title="Close" onPress={handleModalClose} />
            <DropDownPicker
              items={[
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' },
              ]}
              defaultValue={selectedValue}
              containerStyle={{ height: 40 }}
              onChangeItem={(item) => setSelectedValue(item.value)}
            />

          </View>
        </Modal>
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