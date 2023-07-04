import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text, Image } from 'react-native';


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

const CheckBoxChecked = ({ onPress }) => {

  return (
    <TouchableOpacity style={styles.isChecked} onPress={onPress}>
      <Image source={require('./assets/isChecked.png')} style={{position:'absolute', top:2.2, left:2.2, width: 20, height: 20 }}/>
    </TouchableOpacity>
  )
}

const CheckBoxUnchecked = ({ onPress }) => {

  return (
    <TouchableOpacity style={styles.isChecked} onPress={onPress}/>
  )
}

const SubmitAutoexamenButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.AutoExButton2} onPress={onPress}>
      <Text style={{color:'white', fontSize: 20, position: 'relative', left: 45, top: 15, fontWeight: 'bold',}}>
        Enviar
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
  isChecked: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor: 'white',
  },
  AutoExButton2: {
    position:'relative',
    left: width * 0.3,
    width: 150,
    height: 60,
    borderRadius: 20,
    opacity:0.8,
    backgroundColor: 'blue',
    marginBottom: height * 0.01,
  },
});

export { AutoexamenButton, AssistanceButton, CheckBoxChecked, CheckBoxUnchecked, SubmitAutoexamenButton };
