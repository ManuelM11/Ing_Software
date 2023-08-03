import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotonRojo = ({ onPress, title, key }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} key={key}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BotonRojo;
