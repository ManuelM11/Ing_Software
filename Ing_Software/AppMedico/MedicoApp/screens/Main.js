// Navigation
import { RefreshControl, SafeAreaView, ScrollView, Text, View, Dimensions, Modal, Button } from 'react-native';
import React, { useEffect, useState } from 'react';


// Styles
import styles from '../styles/styles';
import body from '../styles/body';
import generalStyles from '../styles/generalStyles';

export default function Main({route, navigation}){
    const { url, user } = route.params;

    //#region  Fetching:
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((json)=>setData(json))
        .catch((error)=>console.error(error))
        .finally(()=>setLoading(false))
      },[]);
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
                    <Button title="Alertas" />
                </View>
                <View style={{padding:5}}>
                    <Button title="Ingresar Paciente" />
                </View>
                <View style={{padding:5}}>
                    <Button title="Lista de Pacientes" />
                </View>
            </View>
            }
        </View> 
        </View>
    );
}