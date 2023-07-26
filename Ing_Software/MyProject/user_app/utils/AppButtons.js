import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text, Image } from 'react-native';
import styles from '../styles/styles';


const { width, height } = Dimensions.get('window');

const AssistanceButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button2} onPress={onPress}>
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
      <Image source={require('../assets/isChecked.png')} style={{position:'absolute', top:2.2, left:2.2, width: 20, height: 20 }}/>
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


export { AutoexamenButton, AssistanceButton, CheckBoxChecked, CheckBoxUnchecked, SubmitAutoexamenButton };
