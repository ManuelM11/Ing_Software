// Navigation
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AssistanceButton, AutoexamenButton, CheckBoxChecked, CheckBoxUnchecked, SubmitAutoexamenButton } from '../utils/AppButtons'

// Styles
import styles from '../styles/styles';
import generalStyles from '../styles/generalStyles';
import body from '../styles/body';

// Variables
const { width, height } = Dimensions.get('window');

//Function
export default function AutoExamen({ route, navigation }) {
  // Si es posible, encontrar una forma de mejorar esto. Es demasiado codigo y deberia existir
  const { user } = route.params
  // alguna forma de dejarlo mas bonito
  const [TosIsChecked, setTosIsChecked] = useState(false);
  const [DiarreaIsChecked, setDiarreaIsChecked] = useState(false);
  const [DificultadRespiratoriaIsChecked, setDificultadRespiratoriaIsChecked] = useState(false);
  const [DolorCabezaIsChecked, setDolorCabezaIsChecked] = useState(false);
  const [MalestarGeneralIsChecked, setMalestarGeneralIsChecked] = useState(false);
  const [DoloresMuscularesIsChecked, setDoloresMuscularesIsChecked] = useState(false);
  const [FiebreIsChecked, setFiebreIsChecked] = useState(false);
  const [SecrecionNasalIsChecked, setSecrecionNasalIsChecked] = useState(false);
  const [DolorGargantaIsChecked, setDolorGargantaIsChecked] = useState(false);
  const [submit, IsSubmited] = useState(false);

  const SubmithandleCheck = () => {
    IsSubmited(!submit);
    // Siempre sera true una vez el usuario entre a autoExamen
    navigation.navigate('PatientMenu', { autoExamen: true, user:user });
  };

  // Handlers para cada checkBox
  const ToshandleCheck = () => {
    setTosIsChecked(!TosIsChecked);
  };
  const DiarreahandleCheck = () => {
    setDiarreaIsChecked(!DiarreaIsChecked);
  };
  const DificultadRespiratoriahandleCheck = () => {
    setDificultadRespiratoriaIsChecked(!DificultadRespiratoriaIsChecked);
  };
  const DolorCabezahandleCheck = () => {
    setDolorCabezaIsChecked(!DolorCabezaIsChecked);
  };
  const MalestarGeneralhandleCheck = () => {
    setMalestarGeneralIsChecked(!MalestarGeneralIsChecked);
  };
  const DoloresMusculareshandleCheck = () => {
    setDoloresMuscularesIsChecked(!DoloresMuscularesIsChecked);
  };
  const FiebrehandleCheck = () => {
    setFiebreIsChecked(!FiebreIsChecked);
  };
  const SecrecionNasalhandleCheck = () => {
    setSecrecionNasalIsChecked(!SecrecionNasalIsChecked);
  };
  const DolorGargantahandleCheck = () => {
    setDolorGargantaIsChecked(!DolorGargantaIsChecked);
  };
  


  return(
    <View style={styles.container}>
        <View style={[body.containerB, 
          {margin:height * 0.01 + width * 0.01,
            backgroundColor: '#fbfbe1',
            flex:1,
            paddingBottom: 16}]}>
          <View style={{justifyContent:'space-between', flexDirection: 'row', paddingRight:width*0.07, marginTop: 5, marginBottom:15}}>
            <Text style={generalStyles.nText}>* Tos</Text>
            {TosIsChecked ? <CheckBoxChecked onPress={ToshandleCheck} /> : <CheckBoxUnchecked onPress={ToshandleCheck} />}
          </View>
          <View style={{justifyContent:'space-between', flexDirection: 'row', paddingRight:width*0.07, marginTop: 5, marginBottom:15}}>
            <Text style={generalStyles.nText}>* Diarrea</Text>
            {DiarreaIsChecked ? <CheckBoxChecked onPress={DiarreahandleCheck} /> : <CheckBoxUnchecked onPress={DiarreahandleCheck} />}
          </View>
          <View style={{justifyContent:'space-between', flexDirection: 'row', paddingRight:width*0.07, marginTop: 5, marginBottom:15}}>
            <Text style={generalStyles.nText}>* Dificultad Respiratoria</Text>
            {DificultadRespiratoriaIsChecked ? <CheckBoxChecked onPress={DificultadRespiratoriahandleCheck} /> : <CheckBoxUnchecked onPress={DificultadRespiratoriahandleCheck} />}
          </View>
          <View style={{justifyContent:'space-between', flexDirection: 'row', paddingRight:width*0.07, marginTop: 5, marginBottom:15}}>
            <Text style={generalStyles.nText}>* Dolor Cabeza</Text>
            {DolorCabezaIsChecked ? <CheckBoxChecked onPress={DolorCabezahandleCheck} /> : <CheckBoxUnchecked onPress={DolorCabezahandleCheck} />}
          </View>
          <View style={{justifyContent:'space-between', flexDirection: 'row', paddingRight:width*0.07, marginTop: 5, marginBottom:15}}>
            <Text style={generalStyles.nText}>* Malestar General</Text>
            {MalestarGeneralIsChecked ? <CheckBoxChecked onPress={MalestarGeneralhandleCheck} /> : <CheckBoxUnchecked onPress={MalestarGeneralhandleCheck} />}
          </View>
          <View style={{justifyContent:'space-between', flexDirection: 'row', paddingRight:width*0.07, marginTop: 5, marginBottom:15}}>
            <Text style={generalStyles.nText}>* Dolores Musculares</Text>
            {DoloresMuscularesIsChecked ? <CheckBoxChecked onPress={DoloresMusculareshandleCheck} /> : <CheckBoxUnchecked onPress={DoloresMusculareshandleCheck} />}
          </View>
          <View style={{justifyContent:'space-between', flexDirection: 'row', paddingRight:width*0.07, marginTop: 5, marginBottom:15}}>
            <Text style={generalStyles.nText}>* Fiebre (Sobre 36.5°)</Text>
            {FiebreIsChecked ? <CheckBoxChecked onPress={FiebrehandleCheck} /> : <CheckBoxUnchecked onPress={FiebrehandleCheck} />}
          </View>
          <View style={{justifyContent:'space-between', flexDirection: 'row', paddingRight:width*0.07, marginTop: 5, marginBottom:15}}>
            <Text style={generalStyles.nText}>* Secreción Nasal</Text>
            {SecrecionNasalIsChecked ? <CheckBoxChecked onPress={SecrecionNasalhandleCheck} /> : <CheckBoxUnchecked onPress={SecrecionNasalhandleCheck} />}
          </View>
          <View style={{justifyContent:'space-between', flexDirection: 'row', paddingRight:width*0.07, marginTop: 5, marginBottom:15}}>
            <Text style={generalStyles.nText}>* Dolor de Garganta</Text>
            {DolorGargantaIsChecked ? <CheckBoxChecked onPress={DolorGargantahandleCheck} /> : <CheckBoxUnchecked onPress={DolorGargantahandleCheck} />}
          </View>
        </View>
        <SubmitAutoexamenButton onPress={SubmithandleCheck}/>

    </View>
  );
}
