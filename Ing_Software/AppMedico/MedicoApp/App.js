import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions, Button, Modal } from 'react-native';

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Login from './screens/Login';
import Main from './screens/Main';
import generalStyles from './styles/generalStyles';

// Styles
import styles from './styles/styles';
import minSalLogo from './styles/minSalLogo';

// Vars:

const { width, height } = Dimensions.get('window');
const URL = 'https://fd89-186-189-91-27.ngrok-free.app/fetchDoctor';
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
      navigation.navigate('Configuracion', { user: 1, url: URL });
    };

    const toMedic = () => {
      setModalVisible(false);
      navigation.navigate('ContactarMedico');
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
            <Button title="Contactar Médico" onPress={toMedic}/>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}


