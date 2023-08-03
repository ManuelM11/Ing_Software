// Navigation
import { RefreshControl, SafeAreaView,
     ScrollView, Text, View, Dimensions,
      Modal, Button, TextInput } from 'react-native';
import React, { useEffect, useState, useCallback  } from 'react';
import axios from 'axios';


// Styles
import styles from '../styles/styles';
import body from '../styles/body';
import generalStyles from '../styles/generalStyles';

const { width, height } = Dimensions.get('window');
 export default function AddPatient({ route, navigation }) {
    const { url, user } = route.params;
    
    const URL = url + "registerPatient";
    const URL2 = url + "fetchAdmin";
    

    //#region Patient Data
    const [rut, setRut] = useState("");
    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [fechaDiagnostico, setFechaDiagnostico] = useState("");
    const [idSemaforo, setIdSemaforo] = useState("");
    const [email, setEmail] = useState("");

    //#endregion
    console.log(
        JSON.stringify({
            nombre,
            rut,
            fecha_nacimiento: fechaNacimiento,
            fecha_diagnostico: fechaDiagnostico,
            telefono,
            email,
            direccion,
            password,
            id_semaforo: idSemaforo,
            rut_funcionario: user.rut
          }),
    )
    //#region  Fetching:
    const handleSubmit = () => {
        const datos = [nombre,
            rut,
            fechaNacimiento,
            fechaDiagnostico,
            telefono,
            email,
            direccion,
            password,
            idSemaforo]
        const camposVacios = [];
        const nombresCampos = ['Nombre', 'RUT',
         'Fecha de Nacimiento', 'Fecha de Diagnóstico',
          'Teléfono', 'Email', 'Dirección', 'Contraseña',
           'ID del Semáforo'];
        datos.forEach((item, index) => {
            if (item === '') {
              camposVacios.push(nombresCampos[index]);
            }
          });
        console.log(camposVacios)
        if(camposVacios.length !== 0){
            alert(`Por favor llene los siguientes campos: ${camposVacios.join(', ')}`);
        }else{
        fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre,
            rut,
            fecha_nacimiento: fechaNacimiento,
            fecha_diagnostico: fechaDiagnostico,
            telefono,
            email,
            direccion,
            password,
            id_semaforo: idSemaforo,
            rut_funcionario: user.rut
          }),
        })
          .then(response => response.json())
          .then(json => {
            console.log(json);
          })
          .catch(error => {
            console.error(error);
          });
        }
      };
      //#endregion
    return (
        <View style={body.container}>
            <View style={{ padding: 5 }}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding:5}}
                    placeholder={"Rut"}
                    onChangeText={(input) => setRut(Number(input))}
                    value={rut.toString()}
                />
                </View>
            <View style={{ padding: 5 }}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding:5}}
                        placeholder={"Nombre"}
                        onChangeText={setNombre}
                        value={nombre}
                    />
                </View>
            <View style={{ padding: 5 }}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding:5}}
                        placeholder={"Contraseña"}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>
            <View style={{ padding: 5 }}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding:5}}
                        placeholder={"Dirección"}
                        onChangeText={setDireccion}
                        value={direccion}
                    />
                </View>
            <View style={{ padding: 5 }}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding:5}}
                        placeholder={"Teléfono"}
                        onChangeText={setTelefono}
                        value={telefono}
                    />
                </View>
            <View style={{ padding: 5 }}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding:5}}
                        placeholder={"Fecha de Nacimiento"}
                        onChangeText={setFechaNacimiento}
                        value={fechaNacimiento}
                    />
                </View>
            <View style={{ padding: 5 }}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding:5}}
                        placeholder={"Fecha de Diagnóstico"}
                        onChangeText={setFechaDiagnostico}
                        value={fechaDiagnostico}
                    />
                </View>
            <View style={{ padding: 5 }}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding:5}}
                        placeholder={"ID Semáforo (0, 1, 2)"}
                        onChangeText={(input) => setIdSemaforo(Number(input))}
                        value={idSemaforo.toString()}
                    />
                </View>
                <View style={{padding:5}}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding:5}}
                        placeholder={"Email"}
                        onChangeText={setEmail}
                        value={email}
                    />
                </View>
            <View style={{ padding: 16 }}>
                <Button title="Registrar Paciente" onPress={handleSubmit} />
            </View>
        </View>
    );
}