import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import generalStyles from '../styles/generalStyles';

export default function Alert() {
  const tableData = [
    { name: 'Manuel Muñoz', status: 'ESTADO: Amarillo', address: "Libertador Bernardo O'Higgins 611, Rancagua, O'Higgins", phone: '+569696969' },
    { name: 'Nicolás Araya', status: 'ESTADO: Amarillo', address: "Libertador Bernardo O'Higgins 611, Rancagua, O'Higgins", phone: '+569696969' },
    // Add more data as needed
  ];

  const [selectedPatient, setSelectedPatient] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePatientPress = (patient) => {
    setSelectedPatient(patient);
    setModalVisible(true);
  };

  const handleContactarPress = () => {
    // Deberia implementar contacto
    // Por ahora no hace nada!
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
        {tableData.map((rowData, index) => (
          <TouchableOpacity key={index} onPress={() => handlePatientPress(rowData)}>
            <View style={{ flexDirection: 'row', marginBottom: 10, borderBottomWidth: 1, borderBottomColor: 'black' }}>
              <View style={{ flex: 1, borderRightWidth: 1, borderRightColor: 'black', paddingVertical: 5 }}>
                <Text style={generalStyles.nText}>{rowData.name}</Text>
              </View>
              <View style={{ paddingVertical: 5 }}>
                <Text style={generalStyles.nText}>{rowData.status}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {selectedPatient && (
        <Modal visible={modalVisible} animationType='slide' transparent={true} onRequestClose={() => setModalVisible(false)}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ backgroundColor: 'white', padding: 20 }}>
              <Text style={generalStyles.nText}>Nombre: {selectedPatient.name}</Text>
              <Text style={generalStyles.nText}>Dirección: {selectedPatient.address}</Text>
              <Text style={generalStyles.nText}>Teléfono: {selectedPatient.phone}</Text>
              <Button title="Contactar" onPress={handleContactarPress} />
              <Button title="Cerrar" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      )}
    </ScrollView>
  );
}

