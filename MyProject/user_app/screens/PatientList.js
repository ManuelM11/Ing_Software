import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import generalStyles from '../styles/generalStyles';

const patientsData = [
  { id: 1, name: 'Vicente Gonzales', status: 'rojo' },
  { id: 2, name: 'Nicolás Araya', status: 'verde' },
  { id: 3, name: 'Manuel Muñoz', status: 'amarillo' },
  // ... add more patient data here
];

export default function PatientList({ navigation }) {
  const [patients, setPatients] = useState(patientsData);

  const handlePatientPress = (patientId) => {
    // Navigate to PatientDetails screen with the selected patient ID
    navigation.navigate('PatientDetail', { patientId });
  };

  const renderPatientItem = ({ item }) => {
    const getStatusColor = (status) => {
      switch (status) {
        case 'rojo':
          return 'red';
        case 'amarillo':
          return 'yellow';
        case 'verde':
          return 'green';
        default:
          return 'black';
      }
    };

    return (
      <TouchableOpacity style={{ padding: 10 }} onPress={() => handlePatientPress(item.id)}>
        <Text style={[generalStyles.nText, { color: getStatusColor(item.status) }]}>
        <Text style={[generalStyles.nText, { color: 'black' }]}>{item.name}</Text>
          ESTADO: {item.status}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={patients}
        renderItem={renderPatientItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
