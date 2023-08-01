import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import medicMenuStyles from '../styles/medicMenuStyles';

export default function MedicMenu({ navigation }) {
  const handleAlertasPress = () => {
    navigation.navigate('Alert');
  };

  const handleIngresarPacientePress = () => {
    // Por ahora, simplemente muestra una alerta que dice "Estamos trabajando para usted"
    alert('Estamos trabajando para usted');
  };

  const handlePatientListPress = () => {
    navigation.navigate('PatientList');
  };

  return (
    <View style={medicMenuStyles.container}>
      {/* Botón "Alertas" */}
      <TouchableOpacity style={medicMenuStyles.button} onPress={handleAlertasPress}>
        <Text style={medicMenuStyles.buttonText}>Alertas</Text>
      </TouchableOpacity>

      {/* Botón "Ingresar paciente" */}
      <TouchableOpacity style={medicMenuStyles.button} onPress={handleIngresarPacientePress}>
        <Text style={medicMenuStyles.buttonText}>Ingresar paciente</Text>
      </TouchableOpacity>

      {/* Botón "Lista de Pacientes" */}
      <TouchableOpacity style={medicMenuStyles.button} onPress={handlePatientListPress}>
        <Text style={medicMenuStyles.buttonText}>Lista de Pacientes</Text>
      </TouchableOpacity>
    </View>
  );
}

