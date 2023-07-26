// Navigation
import { RefreshControl, SafeAreaView, ScrollView, Text, View, Dimensions, Modal, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import {AssistanceButton, AutoexamenButton, CheckBoxChecked, CheckBoxUnchecked, SubmitAutoexamenButton} from '../../utils/AppButtons';


// Styles
import styles from '../styles/styles';
import body from '../styles/body';
import generalStyles from '../styles/generalStyles';

// Variables
const { width, height } = Dimensions.get('window');

// Corresponde a el return de la parte visual de la app
export default function PatientMenu({ route, navigation }) {

  // Route params. SI NO SE UTILIZA LAS VARIABLES SON UNDEFINED
  const { user, url, autoExamen } = route.params

  // useState
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  // Refreshing system
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  

  const handleButtonPress = () => {
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleAssistanceButtonPress = () => {
    // Handle button press here
    navigation.navigate('Asistencia')
  };

  // Fetching a la base de datos
  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((json)=>setData(json))
    .catch((error)=>console.error(error))
    .finally(()=>setLoading(false))
  },[]);

  // Lo visible
  return (

    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
      <View style={body.container}>
        
        {loading ? (<Text> Loading ... </Text>) : 
          <View style={body.containerB}>
              <View style={{flexDirection:'row'}}>
                <Text style={body.boldText}>Nombre: </Text>
                <Text style={generalStyles.nText}> 
                  {data[user][1]}
                </Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={body.boldText}>Teléfono: </Text>
                <Text style={generalStyles.nText}>
                  {data[user][3]}
                </Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={body.boldText}>Mail: </Text>
                <Text style={generalStyles.nText}>
                  {data[user][4]}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
              <Text style={body.boldText}>Autoexamen: </Text>
              <Text style={generalStyles.nText}>{autoExamen ? "Realizado" : "No Realizado"}</Text>
            </View>
            </View>
            }
            <View style={[body.containerB, {
                  backgroundColor: '#fbfbe1'}]}>
                <View style={{margin:height * 0.01 + width * 0.01,
                    flex:1,
                    paddingBottom: height*0.2}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>Indicaciones: </Text>
                  {["Tomar medicinas a las 08:00 am",
                  "Realizar estiramientos a las 10:00 am.",
                  "Desayuno ligero, prohibido tomar café.",
                  "Almuerzo (Sin condimentos ni bebidas gaseosas): Arroz con huevo, Fideos con huevo.",
                  "..."].map((text, index) => (
                    <Text key={index} style={{fontSize: 15}}>* {text}</Text>
                  ))}
                  <View style={{position: 'absolute', top: 200, left: width * 0.28}}>
                    <AssistanceButton onPress={handleAssistanceButtonPress} />
                  </View>
                </View>
            </View>
          
        </View> 
        
        
        
        </ScrollView>
        </SafeAreaView>
        <View style={{position: 'relative',top:-100, left: width * 0.28}}>
            <AutoexamenButton onPress={() => navigation.navigate('AutoExamen')} />
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
