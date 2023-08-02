// Navigation
import { RefreshControl, SafeAreaView, ScrollView, Text, View, Dimensions, Modal, Button } from 'react-native';
import React, { useEffect, useState } from 'react';


// Styles
import styles from '../styles/styles';
import body from '../styles/body';
import generalStyles from '../styles/generalStyles';

export default function Main({route, navigation}){
    const { url, user } = route.params;
    const URL = url + "fetchDoctor";
    //#region  Fetching:
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(URL)
        .then((response)=>response.json())
        .then((json)=>setData(json))
        .catch((error)=>console.error(error))
        .finally(()=>setLoading(false))
      },[]);
    //#endregion

    //#region Handlers:
    const toAlert = () => {
        navigation.navigate('Alertas', {user: user})
    }
    const toAddPatient = () => {
        navigation.navigate('AddPatient', {user: user})
    }
    const toPatientList = () => {
        navigation.navigate('PatientList', {user: user})
    }
    //#endregion

    return(
        <View style={styles.container}>
            <View style={body.container}>
        
                {loading ? (<Text> Loading ... </Text>) : 
                <View style={body.containerB}>
                    <Text style={[generalStyles.nText, {padding: 16}]}>
                    Bienvenido: {user.nombre}
                    </Text>
                    <View style={{padding:5}}>
                        <Button title="Alertas" onPress={toAlert}/>
                    </View>
                    <View style={{padding:5}}>
                        <Button title="Ingresar Paciente" onPress={toAddPatient}/>
                    </View>
                    <View style={{padding:5}}>
                        <Button title="Lista de Pacientes" onPress={toPatientList}/>
                    </View>
                </View>
                }
            </View> 
        </View>
    );
}