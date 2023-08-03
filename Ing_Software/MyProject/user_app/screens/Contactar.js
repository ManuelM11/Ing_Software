// Navigator
import { Text, View, Dimensions, Linking } from 'react-native';
import React, { useState, useEffect } from 'react';

import generalStyles from '../styles/generalStyles';
import styles from '../styles/styles';
import body from '../styles/body';
import { Button } from 'react-native';

 // Variables
const { width, height } = Dimensions.get('window');



 // Function
export default function Contactar({ route, navigation }) {
  const { url, user } = route.params;

  const URL = url + 'fetchDoctor';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [miDoctor, setMiDoctor] = useState(null);
   useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

   useEffect(() => {
    if (data.length > 0) {
      const doctor = data.find((item) => item.rut === user.rut_funcionario);
      setMiDoctor(doctor || null);
    }
  }, [data, user]);


  const toCall = (number) => {
    Linking.openURL(`tel:${number}`)
  };


   return (
    <View  style={[body.container, {padding:16}]}>
      {loading ? (<Text> Loading ... </Text>) :
      <View>
        <View style={{flexDirection:'row'}}>
          <Text style={[body.boldText]}>Doctor: </Text>
          <Text style={[generalStyles.nText, {fontSize: 24}]}>
            {miDoctor ? miDoctor.nombre : 'Not found'}
          </Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={[body.boldText]}>Teléfono: </Text>
          <Text style={[generalStyles.nText, {fontSize: 24}]}>
            {miDoctor ? miDoctor.telefono : 'Not found'}
          </Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={[body.boldText]}>Email: </Text>
          <Text style={[generalStyles.nText, {fontSize: 24}]}>
            {miDoctor ? miDoctor.email : 'Not found'}
          </Text>
        </View>
      </View>
      }
      <View style={{padding:20, marginTop:height*0.3}}>
        <Button title='Contactar' onPress={() => toCall(miDoctor.telefono)}/>
      </View> 
    </View>
  );
}