// Navigation
import { RefreshControl, SafeAreaView, ScrollView, Text, View, Dimensions, Modal, Button } from 'react-native';
import React, { useEffect, useState } from 'react';


// Styles
import styles from '../styles/styles';
import body from '../styles/body';
import generalStyles from '../styles/generalStyles';

export default function PatientList({route, navigation}){
    const { url, user } = route.params;
    const URL = url + "fetchPatients";
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
            if (item.rut_funcionario === user.rut) {
                return(
                <View style={{padding:5}} key={item.rut}>
                    <Button style={generalStyles.nText}
                        title={item.nombre} 
                        onPress={() => toPatient(item)}
                    />
                </View>
                );
            }
            return null; // or any default value if no match is found
        });
    };

    return (
        <View style={body.container}>
            {loading ? (<Text> Loading ... </Text>) : 
            <View style={body.containerB}>
            <View style={{padding:10}}>{pacientes()}</View>
            </View>
            }
            
        </View>
    );
}