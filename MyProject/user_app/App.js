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
import Configuracion from './screens/Configuracion';
import Contactar from './screens/Contactar';
import Soporte from './screens/Soporte';
import MedicMenu from './screens/MedicMenu';
import Alert from './screens/Alert';
import PatientList from './screens/PatientList';
import PatientDetail from './screens/PatientDetail';


// Styles
import styles from './styles/styles';
import minSalLogo from './styles/minSalLogo';
import generalStyles from './styles/generalStyles';

const { width, height } = Dimensions.get('window');
const Stack = createNativeStackNavigator();

// URL DE FETCH
const url = 'http://127.0.0.1:5000/fetchPatients';

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

  // Corresponde a la vista de las opciones del usuario (Ubicado en HeadBar)
  const MODAL = ({ navigation }) =>{

    const toConfig = () => {
      setModalVisible(false);
      navigation.navigate('Configuracion');
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
        <Stack.Screen name="PatientMenu"
         component={PatientMenu}
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
        <Stack.Screen name="AutoExamen"
          component={AutoExamen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.container}>
                <View style={styles.headBar}>
                  <View style={minSalLogo.logoLeft} />
                  <View style={minSalLogo.logoRight} />
                  <Text style={[generalStyles.titles, {position: 'absolute', padding: 16}]}>AutoExamen</Text>
                </View>
                <View style={{position: 'relative', left: width * 0.28}}>
                  <MODAL navigation={navigation} onPress={handleModalClose} />
                </View>
              </View>
            ),
          })} 
          />
          <Stack.Screen name="Asistencia"
          component={Asistencia}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.container}>
                <View style={styles.headBar}>
                  <View style={minSalLogo.logoLeft} />
                  <View style={minSalLogo.logoRight} />
                  <Text style={[generalStyles.titles, {position: 'absolute', padding: 16}]}>Asistencia</Text>
                </View>
                <View style={{position: 'relative', left: width * 0.28}}>
                  <MODAL navigation={navigation} onPress={handleModalClose} />
                </View>
              </View>
            ),
          })} 
          />
          <Stack.Screen name="Configuracion"
          component={Configuracion}
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
          <Stack.Screen name="ContactarMedico"
          component={Contactar}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.container}>
                <View style={styles.headBar}>
                  <View style={minSalLogo.logoLeft} />
                  <View style={minSalLogo.logoRight} />
                  <Text style={[generalStyles.titles, {position: 'absolute', padding: 16}]}>Contactar Médico</Text>
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
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.container}>
                <View style={styles.headBar}>
                  <View style={minSalLogo.logoLeft} />
                  <View style={minSalLogo.logoRight} />
                  <Text style={generalStyles.titles}>Soporte</Text>
                </View>
                <View style={{position: 'relative', left: width * 0.28}}>
                  <MODAL navigation={navigation} onPress={handleModalClose} />
                </View>
              </View>
            ),
          })} 
          />
          <Stack.Screen
          name="MedicMenu"
          component={MedicMenu}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.container}>
                <View style={styles.headBar}>
                  <View style={minSalLogo.logoLeft} />
                  <View style={minSalLogo.logoRight} />
                  <Text style={generalStyles.titles}>Médico</Text>
                  <Button title="Menu" style={styles.button} onPress={handleButtonPress}/>
                </View>
                <View style={{position: 'relative', left: width * 0.28}}>
                  <MODAL navigation={navigation} onPress={handleModalClose} />
                </View>
              </View>
            ),
          })}
          />
          <Stack.Screen name="Alert"
          component={Alert}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.container}>
                <View style={styles.headBar}>
                  <View style={minSalLogo.logoLeft} />
                  <View style={minSalLogo.logoRight} />
                  <Text style={generalStyles.titles}>Alertas</Text>
                </View>
                <View style={{position: 'relative', left: width * 0.28}}>
                  <MODAL navigation={navigation} onPress={handleModalClose} />
                </View>
              </View>
            ),
          })} 
          />
          <Stack.Screen name="PatientList"
          component={PatientList}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.container}>
                <View style={styles.headBar}>
                  <View style={minSalLogo.logoLeft} />
                  <View style={minSalLogo.logoRight} />
                  <Text style={[generalStyles.titles, {position: 'absolute', padding: 0}]}>Lista de Pacientes</Text>
                </View>
                <View style={{position: 'relative', left: width * 0.28}}>
                  <MODAL navigation={navigation} onPress={handleModalClose} />
                </View>
              </View>
            ),
          })} 
          />
          <Stack.Screen name="PatientDetail"
          component={PatientDetail}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.container}>
                <View style={styles.headBar}>
                  <View style={minSalLogo.logoLeft} />
                  <View style={minSalLogo.logoRight} />
                  <Text style={[generalStyles.titles, {position: 'absolute', padding: 0}]}>Lista de Pacientes</Text>
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


