// Navigator 
import { Text, View, Dimensions, TextInput, Button, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';

// Styles
import generalStyles from '../styles/generalStyles';
import styles from '../styles/styles';
import body from '../styles/body';

// Variables
const { width, height } = Dimensions.get('window');

// Function
export default function Configuracion({ route, navigation }) {

    const { url } = route.params

    const URL = url + 'fetchDoctor';
    const [data, setData] = useState([]);
    const [verPass, setVerPass] = useState('');
    const [Pass, setPass] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
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
    };
    const handleVerPass = (text) => {
        setVerPass(text);
    };

    const handleModalClose = () => {
        setModalVisible(false);
      }

    const confirmar = () => {
      const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
        if (Pass !== verPass || verPass.length <= 5 || !specialCharacters.test(verPass)){
            setModalVisible(true);
        }
    };

    return (
      <View style={[body.container, { margin: (width / height) * 20}]}>
        {loading ? (<Text> Loading ... </Text>) : 
        (
        <View>
            <Text style={[generalStyles.nText,, {marginHorizontal:width * 0.1, marginTop:width * 0.1}]}>
            Cambiar Contraseña:
            </Text>
            <Text style={{marginHorizontal:width * 0.1, marginTop:width * 0.1, fontSize: 15}}>
            La contraseña debe tener mínimo 6 caracteres y al menos 1 carácter especial.
            Ejemplo de contraseña: con*"\"tra""\\"
            </Text>
            <View style={{padding: 16}}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: width * 0.05 }}
                    placeholder="Ingresar contraseña"
                    onChangeText={handlePassText}
                    value={Pass}
                />
                
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: width * 0.05 }}
                    placeholder="Confirmar contraseña"
                    onChangeText={handleVerPass}
                    value={verPass}
                    
                />
                <Button title="Cambiar Contraseña" onPress={confirmar}/>
            </View>
            <Modal visible={modalVisible} animationType='slide' transparent={true} onRequestClose={handleModalClose}>
            <View style= {styles.modalBackGround}>
              <View style={styles.modalWrongSesion}>
                <Text style={generalStyles.nText}>Las contraseñas no coinciden o no cumple con los requerimientos mínimos.</Text>
                <Text style={generalStyles.nText}>Asegúrese de que la contraseña tenga más de 6 caracteres y al menos una letra especial.</Text>
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