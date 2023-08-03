// Navigation
import { RefreshControl, SafeAreaView, ScrollView, Text, View, Dimensions, Modal, Button } from 'react-native';
import React, { useEffect, useState } from 'react';


// Styles
import styles from '../styles/styles';
import body from '../styles/body';
import generalStyles from '../styles/generalStyles';
import BotonRojo from '../styles/BotonRojo';

export default function Alertas({route, navigation}){
    const { url, user } = route.params;

    const URL = url + "fetchPatients";
    //#endregion

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

    const toPatient = (patient) => {
        navigation.navigate('Patient', {user:user, patient: patient})
    };
    
    const pacientes = () => {
        return data.map((item) => {
            if (item.rut_funcionario === user.rut && item.id_semaforo === 1) {
                return(
                <View style={{padding:5}} key={item.rut} >
                    <BotonRojo 
                        title={item.nombre} 
                        onPress={() => toPatient(item)}
                    />
                </View>
                );
            }else{
                return (
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[generalStyles.titles, {fontSize:20}]}>{item.nombre} </Text>
                        <Text style={[generalStyles.nText, {fontSize:20}]}> Sin alertas.</Text>
                    </View>
                ); // or any default value if no match is found
            }
        });
    };

    return(
        <View style={body.container}>
            {loading ? (<Text> Loading ... </Text>) : 
            <View style={body.containerB}>
            <View style={{padding:10}}>{pacientes()}</View>
            </View>
            }
            
        </View>
    );
}