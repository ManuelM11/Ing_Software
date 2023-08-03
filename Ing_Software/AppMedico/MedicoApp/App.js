import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions, Button, Modal } from 'react-native';

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Login from './screens/Login';
import Main from './screens/Main';
import Alertas from './screens/Alertas';
import AddPatient from './screens/AddPatient';
import PatientList from './screens/PatientList';
import Patient from './screens/Patient';
import Configuracion from './screens/Configuracion';
import Soporte from './screens/Soporte';

// Styles
import styles from './styles/styles';
import minSalLogo from './styles/minSalLogo';
import generalStyles from './styles/generalStyles';

// Vars:

const { width, height } = Dimensions.get('window');
const URL = 'https://fd69-201-221-217-51.ngrok-free.app/';
const Stack = createNativeStackNavigator();

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  
  const handleButtonPress = () => {
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };



  // Corresponde a la vista de las opciones del usuario (Ubicado en HeadBar)
  const MODAL = ({ navigation }) =>{

    const toConfig = () => {
      setModalVisible(false);
      navigation.navigate('Configuracion');
    };

    const toSupport = () => {
      setModalVisible(false);
      navigation.navigate('Soporte');
    };

    return (
      <Modal visible={modalVisible} animationType='slide' transparent={true} onRequestClose={handleModalClose}>
        <View style={styles.modalContainer}>
          <Button title="Cerrar" onPress={handleModalClose} />
          <View style={styles.dropdownContainer}>
            <Button title="Configuración" onPress={toConfig}/>
            <Button title="Soporte" onPress={toSupport}/>
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
        name='MODAL'
        component={MODAL}
        />
        <Stack.Screen 
          name="Login"
          component={Login}
          initialParams={{ url: URL }}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Main"
          component={Main}
          initialParams={{ url: URL }}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.container}>
                <View style={styles.headBar}>
                  <View style={minSalLogo.logoLeft} />
                  <View style={minSalLogo.logoRight} />
                  <Text style={generalStyles.titles}>MPC</Text>
                  <Button title="Menu" style={styles.button} onPress={handleButtonPress}/>
                </View>
                <View style={{position: 'relative', left: width * 0.28}}>
                  <MODAL navigation={navigation} onPress={handleModalClose} />
                </View>
              </View>
            ),
          })} 
        />
        <Stack.Screen 
          name="Alertas"
          component={Alertas}
          initialParams={{ url: URL }}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.container}>
                <View style={styles.headBar}>
                  <View style={minSalLogo.logoLeft} />
                  <View style={minSalLogo.logoRight} />
                  <Text style={[generalStyles.titles, {position:'absolute', padding: width*0.1}]}>Alertas</Text>
                </View>
              </View>
            ),
          })} 
        />
        <Stack.Screen 
          name="AddPatient"
          component={AddPatient}
          initialParams={{ url: URL }}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.container}>
                <View style={styles.headBar}>
                  <View style={minSalLogo.logoLeft} />
                  <View style={minSalLogo.logoRight} />
                  <Text style={{  fontSize:25,
                                  fontWeight:"bold",
                                  color:"black",
                                  position: "absolute",
                                  textAlignVertical: "top",
                                  letterSpacing:.8,
                                }}>Ingresar Paciente</Text>
                </View>
              </View>
            ),
          })} 
        />
        <Stack.Screen 
          name="PatientList"
          component={PatientList}
          initialParams={{ url: URL }}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.container}>
                <View style={styles.headBar}>
                  <View style={minSalLogo.logoLeft} />
                  <View style={minSalLogo.logoRight} />
                  <Text style={{  fontSize:25,
                                  fontWeight:"bold",
                                  color:"black",
                                  position: "absolute",
                                  textAlignVertical: "top",
                                  letterSpacing:.8,
                                }}>Lista de Pacientes</Text>
                </View>
              </View>
            ),
          })} 
        />
        <Stack.Screen 
          name="Patient"
          component={Patient}
          initialParams={{ url: URL }}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.container}>
                <View style={styles.headBar}>
                  <View style={minSalLogo.logoLeft} />
                  <View style={minSalLogo.logoRight} />
                  <Text style={[generalStyles.titles, {position:'absolute', padding: width*0.1}]}>Paciente</Text>
                </View>
              </View>
            ),
          })} 
        />
        <Stack.Screen name="Configuracion"
          component={Configuracion}
          initialParams={{ url: URL }}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.container}>
                <View style={styles.headBar}>
                  <View style={minSalLogo.logoLeft} />
                  <View style={minSalLogo.logoRight} />
                  <Text style={[generalStyles.titles, {position: 'absolute', padding: 16}]}>Configuración</Text>
                </View>
                <View style={{position: 'relative', left: width * 0.28}}>
                  <MODAL navigation={navigation} onPress={handleModalClose} />
                </View>
              </View>
            ),
          })} 
          />
          <Stack.Screen name="Soporte"
          component={Soporte}
          initialParams={{ url: URL }}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.container}>
                <View style={styles.headBar}>
                  <View style={minSalLogo.logoLeft} />
                  <View style={minSalLogo.logoRight} />
                  <Text style={[generalStyles.titles, {position: 'absolute', padding: 50}]}>Soporte</Text>
                </View>
                <View style={{position: 'relative', left: width * 0.28}}>
                  <MODAL navigation={navigation} onPress={handleModalClose} />
                </View>
              </View>
            ),
          })} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


