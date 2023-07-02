import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';


const { width, height } = Dimensions.get('window');

const AssistanceButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{color:'white', fontSize: 15, position: 'relative', left: 8, top: 40, fontWeight: 'bold',}}>
        ASISTENCIA
      </Text>
    </TouchableOpacity>
  );
};

const AutoexamenButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.AutoExButton} onPress={onPress}>
      <Text style={{color:'white', fontSize: 20, position: 'relative', left: 16, top: 15, fontWeight: 'bold',}}>
        Auto Examen
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderRadius: 75,
    backgroundColor: 'gray',
  },
  AutoExButton: {
    width: 150,
    height: 60,
    borderRadius: 20,
    backgroundColor: 'gray',
    marginBottom: height * 0.01,
  },
});

export { AutoexamenButton, AssistanceButton };
