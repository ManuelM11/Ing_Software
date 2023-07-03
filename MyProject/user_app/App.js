import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Modal, Button} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'; // DropDownPicker (Al final no lo usé :v), pero lo dejo ahi
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font'; // Carga de fonts
import {AssistanceButton, AutoexamenButton} from './AppButtons';

const { width, height } = Dimensions.get('window');

// Corresponde a el return de la parte visual de la app
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = 'https://0f2a-190-95-120-224.ngrok-free.app/fetchPatients'//'https://facebook.github.io/react-native/movies.json'

  // Carga de fonts
  //const [fontsLoaded] = useFonts({
  //  'RobotoMono-Bold': require('./assets/fonts/static/RobotoMono-Bold.ttf'),
  //});
  var autoExamen = 0;
  var pressed = 0;

  const handleButtonPress = () => {
    setModalVisible(true);
  };

  const handleAssistanceButtonPress = () => {
    // Handle button press here
    if(pressed == 1){
      pressed = 0;
    }else{
      pressed = 1;
    }
    console.log(pressed);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((json)=>setData(json))
    .catch((error)=>console.error(error))
    .finally(()=>setLoading(false))
  },[]);

  return (
    <View style={styles.container}>
      <View style={styles.containerNoty} />
      <View style={styles.headBar}>
        <View style={minSalLogo.logoLeft} />
        <View style={minSalLogo.logoRight} />
        <Text style={generalStyles.titles}>MPC</Text>
        <Button title="Menu" style={styles.button} onPress={handleButtonPress}/>
      </View>
      <View style={body.container}>
        {loading ? (<Text> Loading ... </Text>) : 
          
            <View style={body.containerB}>
              <View style={{flexDirection:'row'}}>
                <Text style={body.boldText}>Nombre: </Text>
                <Text style={generalStyles.nText}> 
                  {data[0][1]}
                </Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={body.boldText}>Teléfono: </Text>
                <Text style={generalStyles.nText}>
                  {data[0][3]}
                </Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={body.boldText}>Mail: </Text>
                <Text style={generalStyles.nText}>
                  {data[0][4]}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={body.boldText}>Autoexamen: </Text>
                <Text style={generalStyles.nText}>{autoExamen ? "Realizado" : "No Realizado"}</Text>
              </View>
            </View>
          }
          <View style={[body.containerB, {margin:height * 0.01 + width * 0.01,
            backgroundColor: '#fbfbe1',
              flex:1,
              paddingBottom: 16}]}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Indicaciones: </Text>
            {["Tomar Awita.", "Comer.", "Tomarse una siestesita."].map((text, index) => (
              <Text key={index} style={{fontSize: 15}}>* {text}</Text>
            ))}
            <View style={{position: 'relative', top: 160, left: width * 0.33}}>
              <AssistanceButton onPress={handleAssistanceButtonPress} />
            </View>
        </View>
        </View> 
        
        
        <View style={{position: 'relative', left: width * 0.28}}>
            <AutoexamenButton onPress={handleAssistanceButtonPress} />
        </View>
      

      <Modal visible={modalVisible} animationType='slide' transparent={true} onRequestClose={handleModalClose}>
        <View style={styles.modalContainer}>
          <Button title="Cerrar" onPress={handleModalClose} />
          <View style={styles.dropdownContainer}>
            <Button title="Configuración"/>
            <Button title="Contactar Médico"/>
            <Button title="Soporte"/>
          </View>
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

});

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
  }

});

const body = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    borderColor: 'gray',
    marginBottom: height * 0.2,
  },
  containerB: {
    marginLeft: width* 0.03,
  },
  boldText: {
    //fontStyle:'RobotoMono-Bold',
    fontWeight:'bold',
    fontSize: height * 0.03,
  },
  subplotText: {

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