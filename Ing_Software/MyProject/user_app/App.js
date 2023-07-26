import { StatusBar } from 'expo-status-bar';
import { RefreshControl, SafeAreaView,
  ScrollView, StyleSheet,
   Text, View, Image,
    Dimensions, TouchableOpacity,
     Modal, Button, Check, TextInput} from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Login from './screens/Login';
import Asistencia from './screens/Asistencia';
import AutoExamen from './screens/AutoExamen';
import PatientMenu from './screens/PatientMenu';

// Styles
import styles from './styles/styles';
import minSalLogo from './styles/minSalLogo';
import generalStyles from './styles/generalStyles';

const { width, height } = Dimensions.get('window');
const Stack = createNativeStackNavigator();

// URL DE FETCH
const URL = 'https://b890-190-95-120-224.ngrok-free.app/fetchPatients';

/*
Mencionar que NavigationContainer corresponde al headbar, por lo tanto, puede modificarse la vista de este en 
cada screen. Es por ello que las opciones de cada uno están llenos de código y, chistosamente son casi
el mismo código.
No se creo ninguna especie de funcion para esto simplemente por comodidad y debido a que
se requiere una especial atencion al headbar por cada screen.
*/

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  
  const handleButtonPress = () => {
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };
  const any = 0;

  // Corresponde a la vista de las opciones del usuario (Ubidado en HeadBar)
  const MODAL = ({any}) =>{
    return (
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
    );
  }

  return (
    // NAVIGATION CONTROL && ROUTES VISUALS
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen 
          name="Login"
          component={Login}
          initialParams={{ url: URL }}
          options={{headerShown: false}}
        />
        <Stack.Screen name="PatientMenu"
         component={PatientMenu}
         initialParams={{ url: URL }}
         options={{
          headerTitle: () => (
            <View style={styles.container}>
                <View style={styles.headBar}>
                  <View style={minSalLogo.logoLeft} />
                  <View style={minSalLogo.logoRight} />
                  <Text style={generalStyles.titles}>MPC</Text>
                <Button title="Menu" style={styles.button} onPress={handleButtonPress}/>
                </View>
                <View style={{position: 'relative', left: width * 0.28}}>
                  <MODAL onPress={handleModalClose} />
                </View>
            </View>),
         }} 
         />
        <Stack.Screen name="AutoExamen"
          component={AutoExamen}
          options={{
            headerTitle: () => (
              <View style={styles.container}>
                  <View style={styles.headBar2}>
                    <View style={minSalLogo.logoLeft} />
                    <View style={minSalLogo.logoRight} />
                    <Text style={generalStyles.titles}>Autoexamen</Text>
                  </View>
                  <View style={{position: 'relative', left: width * 0.28}}>
                    <MODAL onPress={any} />
                  </View>
              </View>),
           }} 
          />
          <Stack.Screen name="Asistencia"
          component={Asistencia}
          options={{
            headerTitle: () => (
              <View style={styles.container}>
                  <View style={styles.headBar2}>
                    <View style={minSalLogo.logoLeft} />
                    <View style={minSalLogo.logoRight} />
                    <Text style={generalStyles.titles}>Asistencia</Text>
                  </View>
                  <View style={{position: 'relative', left: width * 0.28}}>
                    <MODAL onPress={any} />
                  </View>
              </View>),
           }} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



