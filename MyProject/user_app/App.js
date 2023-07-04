import { StatusBar } from 'expo-status-bar';
import { RefreshControl, SafeAreaView,
  ScrollView, StyleSheet,
   Text, View, Image,
    Dimensions, TouchableOpacity,
     Modal, Button, Check} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'; // DropDownPicker (Al final no lo usé :v), pero lo dejo ahi
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font'; // Carga de fonts
import {AssistanceButton, AutoexamenButton, CheckBoxChecked, CheckBoxUnchecked, SubmitAutoexamenButton} from './AppButtons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const { width, height } = Dimensions.get('window');
const Stack = createNativeStackNavigator();

var autoExamen = false;
var pressed = 0;

// Corresponde a el return de la parte visual de la app
function PatientMenu({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  

  const url = 'https://0f2a-190-95-120-224.ngrok-free.app/fetchPatients'//'https://facebook.github.io/react-native/movies.json'

  // Carga de fonts
  //const [fontsLoaded] = useFonts({
  //  'RobotoMono-Bold': require('./assets/fonts/static/RobotoMono-Bold.ttf'),
  //});

  const handleButtonPress = () => {
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleAssistanceButtonPress = () => {
    // Handle button press here
    if(pressed == 1){
      pressed = 0;
    }
    else{ pressed = 1;}
    console.log(pressed);
  };

  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((json)=>setData(json))
    .catch((error)=>console.error(error))
    .finally(()=>setLoading(false))
  },[]);

  return (

    <View style={styles.container}>
      <View style={body.container}>
        <SafeAreaView>
        <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {loading ? (<Text> Loading ... </Text>) : 
          <View style={body.containerB}>
              <View style={{flexDirection:'row'}}>
                <Text style={body.boldText}>Nombre: </Text>
                <Text style={generalStyles.nText}> 
                  {data[0][1]}
                </Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={body.boldText}>Teléfono: </Text>
                <Text style={generalStyles.nText}>
                  {data[0][3]}
                </Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={body.boldText}>Mail: </Text>
                <Text style={generalStyles.nText}>
                  {data[0][4]}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
              <Text style={body.boldText}>Autoexamen: </Text>
              <Text style={generalStyles.nText}>{autoExamen ? "Realizado" : "No Realizado"}</Text>
            </View>
            </View>
            }
            
          <View style={[body.containerB, {margin:height * 0.01 + width * 0.01,
            backgroundColor: '#fbfbe1',
              flex:1,
              paddingBottom: 16}]}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Indicaciones: </Text>
            {["Tomar Awita.", "Comer.", "Tomarse una siestesita."].map((text, index) => (
              <Text key={index} style={{fontSize: 15}}>* {text}</Text>
            ))}
            <View style={{position: 'relative', top: 160, left: width * 0.33}}>
              <AssistanceButton onPress={handleAssistanceButtonPress} />
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
        </View> 
        
        
        <View style={{position: 'relative', left: width * 0.28}}>
            <AutoexamenButton onPress={() => navigation.navigate('AutoExamen')} />
        </View>
      

      <Modal visible={modalVisible} animationType='slide' transparent={true} onRequestClose={handleModalClose}>
        <View style={styles.modalContainer}>
          <Button title="Cerrar" onPress={handleModalClose} />
          <View style={styles.dropdownContainer}>
            <Button title="Configuración"/>
            <Button title="Contactar Médico"/>
            <Button title="Soporte"/>
          </View>
        </View>
      </Modal>
      
    </View>
  );
}
function AutoExamen({ navigation }) {
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
    autoExamen = true;
    navigation.navigate('PatientMenu');

  };

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

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  

  const handleButtonPress = () => {
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };
  const any = 0;
  const MODAL = ({any}) =>{
    return (
      <Modal visible={modalVisible} animationType='slide' transparent={true} onRequestClose={handleModalClose}>
        <View style={styles.modalContainer}>
          <Button title="Cerrar" onPress={handleModalClose} />
          <View style={styles.dropdownContainer}>
            <Button title="Configuración"/>
            <Button title="Contactar Médico"/>
            <Button title="Soporte"/>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PatientMenu'>
        <Stack.Screen name="PatientMenu"
         component={PatientMenu}
         options={{
          headerTitle: () => (
            <View style={styles.container}>
                <View style={styles.headBar}>
                  <View style={minSalLogo.logoLeft} />
                  <View style={minSalLogo.logoRight} />
                  <Text style={generalStyles.titles}>MPC</Text>
                <Button title="Menu" style={styles.button} onPress={handleButtonPress}/>
                </View>
                <View style={{position: 'relative', left: width * 0.28}}>
                  <MODAL onPress={handleModalClose} />
                </View>
            </View>),
         }} 
         />
        <Stack.Screen name="AutoExamen"
          component={AutoExamen}
          options={{
            headerTitle: () => (
              <View style={styles.container}>
                  <View style={styles.headBar2}>
                    <View style={minSalLogo.logoLeft} />
                    <View style={minSalLogo.logoRight} />
                    <Text style={generalStyles.titles}>Auto Examen</Text>
                  </View>
                  <View style={{position: 'relative', left: width * 0.28}}>
                    <MODAL onPress={any} />
                  </View>
              </View>),
           }} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  headBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between' ,
    paddingHorizontal: width * 0.12, // 5% of the screen width
    paddingTop: height * 0.03, // 3% of the screen height
    height: height * 0.1,
  },
  headBar2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: height * 0.03, // 3% of the screen height
    height: height * 0.1,
  },
  button: {
    position: 'relative',
    right: 20
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: height * 0.02,
    paddingHorizontal: width * 0.05,
  },
  dropdownContainer: {
    height: 40,
    marginTop: 16,
  },

});

const generalStyles = StyleSheet.create({
  titles: {
    fontSize:34,
    fontWeight:"bold",
    color:"black",
    //fontFamily: "normal",
    textAlignVertical: "top",
    letterSpacing:.8,
  },
  nText: {
    fontSize:20,
    color:"black",
    textAlignVertical: "top",
    letterSpacing:.8,
  },

});

const body = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    borderColor: 'gray',
    marginBottom: height * 0.2,
  },
  containerB: {
    marginLeft: width* 0.03,
  },
  boldText: {
    //fontStyle:'RobotoMono-Bold',
    fontWeight:'bold',
    fontSize: height * 0.03,
  },
  subplotText: {

  },

});

const minSalLogo = StyleSheet.create({
  logoLeft: {
    position: 'absolute',
    top: height * 0.005, // 1% of the screen height
    left: width * 0.02, // 2% of the screen width
    width: width * 0.15, // 15% of the screen width
    height: height * 0.02, // 3% of the screen height
    backgroundColor: 'blue',
    paddingBottom: height * 0.02, // 2% of the screen height
  },
  logoRight: {
    position: 'absolute',
    top: height * 0.005, // 1% of the screen height
    left: width * 0.18, // 20% of the screen width
    width: width * 0.3, // 30% of the screen width
    height: height * 0.02, // 3% of the screen height
    backgroundColor: 'red',
    paddingBottom: height * 0.02, // 2% of the screen height
  },
});

const refreshStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});