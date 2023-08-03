// Navigation
import { RefreshControl, SafeAreaView, ScrollView, Text, View, Dimensions, Modal, Button, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';


// Styles
import styles from '../styles/styles';
import body from '../styles/body';
import generalStyles from '../styles/generalStyles';

export default function AddPatient({route, navigation}){
    const { url, user, patient } = route.params;
    
    const toColor = (sem) => {
        let colors = ['VERDE', 'NARANJO', 'ROJO'];
        if(sem >= 0 && sem <= 2){return colors[sem];}
        return null;
    };

    const toCall = (number) => {
        Linking.openURL(`tel:${number}`)
    };

    return(
        <View style={body.container}>
            <View style={{flexDirection: 'row', padding:5 }}>
                <Text style={[generalStyles.nText, {fontWeight:"bold",}]}>Nombre: </Text>
                <Text style={[generalStyles.nText]}>{patient.nombre}</Text>
            </View>
            <View style={{flexDirection: 'row', padding:5 }}>
                <Text style={[generalStyles.nText, {fontWeight:"bold",}]}>Semáforo: </Text>
                <Text style={[generalStyles.nText]}>{toColor(patient.id_semaforo)}</Text>
            </View>
            <View style={{flexDirection: 'row', padding:5 }}>
                <Text style={[generalStyles.nText, {fontWeight:"bold",}]}>Teléfono: </Text>
                <Text style={[generalStyles.nText]}>{patient.telefono}</Text>
            </View>
            <View style={{flexDirection: 'row', padding:5 }}>
                <Text style={[generalStyles.nText, {fontWeight:"bold",}]}>Email: </Text>
                <Text style={[generalStyles.nText]}>{patient.email}</Text>
            </View>
            <View style={{flexDirection: 'row', padding:5}}>
                <Text style={[generalStyles.nText, {fontWeight:"bold",}]}>Dirección: </Text>
                <Text style={[generalStyles.nText,]}>{patient.direccion}</Text>
            </View>
            <View style={{padding:16}}>
                <Button title="Contactar Paciente" onPress={() => toCall(patient.telefono)}/>
            </View>
        </View>
    );
}