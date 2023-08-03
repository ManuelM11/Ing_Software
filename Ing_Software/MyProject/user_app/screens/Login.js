// Navigation
import { Text, View, Dimensions, Modal, Button, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

// Globales
import {setUser} from '../utils/global';

// Styles
import styles from '../styles/styles'
import generalStyles from '../styles/generalStyles';
import minSalLogo from '../styles/minSalLogo';

// Variables
const { width, height } = Dimensions.get('window');

export default function Login({ route, navigation }) {
    const { url } = route.params
    const URL = url + 'fetchPatients';

    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [Pass, setPass] = useState('');
    const [userText, setUserText] = useState('');
    const [loading, setLoading] = useState(true);
  
    useEffect(()=>{
      fetch(URL)
      .then((response)=>response.json())
      .then((json)=>setData(json))
      .catch((error)=>console.error(error))
      .finally(()=>setLoading(false))
    },[]);
  
    const handlePassText = (text) => {
      setPass(text);
    }
    const handleUserText = (text) => {
      setUserText(text);
    }
    const handleModalClose = () => {
      setModalVisible(false);
    }
    const handleSesion = () => {
      if (data.length === 0) {
        alert("No hay usuarios registrados");
      } else {
        const userFound = data.find((item) => userText === item.nombre && Pass === item.password);
    
        if (userFound) {
          setUser(userFound);
          navigation.navigate('PatientMenu', { user: userFound });
        } else {
          alert("Usuario o contraseña incorrectos");
        }
      }
    };
    
    
  
    return (
      <View style={{marginTop:width*0.06}}>
        {loading ? (<Text> Loading ... </Text>) : 
        (
          <View style={{marginHorizontal: width * 0.1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <View style={minSalLogo.logoLeft2}/>
                <View style={minSalLogo.logoRight2}/>
              </View>
              <Text style={[generalStyles.titles, {marginTop: width * 0.05}]}>
                MPC
              </Text>
            </View>
          
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: width * 0.4, marginBottom: 10, paddingHorizontal: width * 0.05 }}
            placeholder="Ingresar Usuario"
            onChangeText={handleUserText}
            value={userText}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: width * 0.05 }}
            placeholder="Ingresar contraseña"
            onChangeText={handlePassText}
            secureTextEntry={true}
          />
          <Button title="Iniciar Sesión" onPress={handleSesion} />
  
          <Modal visible={modalVisible} animationType='slide' transparent={true} onRequestClose={handleModalClose}>
            <View style= {styles.modalBackGround}>
              <View style={styles.modalWrongSesion}>
                <Text style={generalStyles.nText}>Nombre de usuario o contraseña incorrectos. Por favor vuelva a intentarlo.</Text>
                <Text style={generalStyles.nText}>Si el problema persiste favor de contactar a soporte</Text>
                <View style={styles.modalFooter}>
                <Button title="Cerrar" onPress={handleModalClose} />
                </View>
              </View>
            </View>
  
          </Modal>
        </View>
        )}
        </View>
    );
  }
