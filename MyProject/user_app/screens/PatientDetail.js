import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import generalStyles from '../styles/generalStyles';

export default function PatientDetail({ route, navigation }) {
  const { patient } = route.params;

  // Sample data for the "Bitácora" and "Auto Examen" sections
  const healthData = [
    { date: '2023-07-15', details: 'Presión arterial: 120/80, Temperatura: 37°C' },
    { date: '2023-07-20', details: 'Presión arterial: 130/85, Temperatura: 36.8°C' },
    // Add more health data as needed
  ];

  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={[generalStyles.titles, { marginBottom: 10 }]}>Nombre del Paciente: {patient.name}</Text>
        <Text style={[generalStyles.nText, { marginBottom: 20 }]}>Estado: {patient.status}</Text>

        <View style={{ marginBottom: 30 }}>
          <Text style={[generalStyles.titles, { marginBottom: 10 }]}>Bitácora</Text>
          {healthData.map((data, index) => (
            <Text key={index} style={[generalStyles.nText, { marginBottom: 5 }]}>{data.date}: {data.details}</Text>
          ))}
        </View>

        <View>
          <Text style={[generalStyles.titles, { marginBottom: 10 }]}>Auto Examen</Text>
          {/* Add more auto exam data as needed */}
        </View>
      </View>
    </ScrollView>
  );
}
