// Navigator 
import { Text, View, Dimensions, Button } from 'react-native';
import React from 'react';

// Styles
import generalStyles from '../styles/generalStyles';
import body from '../styles/body';

// Variables
const { width, height } = Dimensions.get('window');

// Function
export default function Soporte({ navigation }) {
    return (
        <View style={body.container}>
          <View style={{padding:16}}>
            <Text style={[generalStyles.titles, {fontSize:20}]}>
              ¿Presenta algún problema que requiere de la asistencia de algún técnico?
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={[generalStyles.titles, {fontSize:16, paddingTop:20}]}>
                Email: 
              </Text>
              <Text style={[generalStyles.nText, {fontSize:16, padding:20}]}>
                soportedelbueno@soporte.com
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[generalStyles.titles, {fontSize:16, paddingTop:20}]}>
                Teléfono:
              </Text>
              <Text style={[generalStyles.nText, {fontSize:16, padding:20}]}>
                +56 9 90758998
              </Text>
            </View>
          </View>
          <View style={{padding:16}}>
            <Button title='Contactar Soporte'/>
          </View>
        </View>
      );
  }