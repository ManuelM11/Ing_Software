// Navigator 
import { Text, View, Dimensions } from 'react-native';
import React from 'react';

// Styles
import generalStyles from '../styles/generalStyles';

// Variables
const { width, height } = Dimensions.get('window');

// Function
export default function Asistencia({ navigation }) {
    return (
      <View>
        <Text style={[generalStyles.nText,, {marginHorizontal:width * 0.1, marginTop:width * 0.1}]}>
        Estamos contactando a su Médico/Funcionario a cargo.
        En la brevedad, recibirá una llamada de auxilio.
        </Text>
        <Text style={[generalStyles.nText,, {marginHorizontal:width * 0.1}]}>
        Se le recomienda estar en calma, no realizar movimientos bruscos
        y seguir las indicaciones del médico o funcionario a cargo que tenga
        disponibles o le de al momento de que se contacte con usted.
        </Text>
      </View>
    );
  }