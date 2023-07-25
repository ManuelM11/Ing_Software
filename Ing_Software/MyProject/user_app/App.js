import { StatusBar } from 'expo-status-bar';
import { RefreshControl, SafeAreaView,
  ScrollView, StyleSheet,
   Text, View, Image,
    Dimensions, TouchableOpacity,
     Modal, Button, Check, TextInput} from 'react-native';
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
var user = 0;

const url = 'https://332f-190-95-120-224.ngrok-free.app/fetchPatients'

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
    }, 1000);
  }, []);
  

  const handleButtonPress = () => {
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleAssistanceButtonPress = () => {
    // Handle button press here
    navigation.navigate('Asistencia')
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
      <SafeAreaView>
        <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
      <View style={body.container}>
        
        {loading ? (<Text> Loading ... </Text>) : 
          <View style={body.containerB}>
              <View style={{flexDirection:'row'}}>
                <Text style={body.boldText}>Nombre: </Text>
                <Text style={generalStyles.nText}> 
                  {data[user][1]}
                </Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={body.boldText}>Teléfono: </Text>
                <Text style={generalStyles.nText}>
                  {data[user][3]}
                </Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={body.boldText}>Mail: </Text>
                <Text style={generalStyles.nText}>
                  {data[user][4]}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
              <Text style={body.boldText}>Autoexamen: </Text>
              <Text style={generalStyles.nText}>{autoExamen ? "Realizado" : "No Realizado"}</Text>
            </View>
            </View>
            }
            <View style={[body.containerB, {
                  backgroundColor: '#fbfbe1'}]}>
                <View style={{margin:height * 0.01 + width * 0.01,
                    flex:1,
                    paddingBottom: height*0.2}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>Indicaciones: </Text>
                  {["Tomar medicinas a las 08:00 am",
                  "Realizar estiramientos a las 10:00 am.",
                  "Desayuno ligero, prohibido tomar café.",
                  "Almuerzo (Sin condimentos ni bebidas gaseosas): Arroz con huevo, Fideos con huevo.",
                  "..."].map((text, index) => (
                    <Text key={index} style={{fontSize: 15}}>* {text}</Text>
                  ))}
                  <View style={{position: 'absolute', top: 200, left: width * 0.28}}>
                    <AssistanceButton onPress={handleAssistanceButtonPress} />
                  </View>
                </View>
            </View>
          
        </View> 
        
        
        
        </ScrollView>
        </SafeAreaView>
        <View style={{position: 'relative',top:-100, left: width * 0.28}}>
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

function Asistencia({ navigation }) {
  return (
    <View>
      <Text style={[generalStyles.nText,, {marginHorizontal:width * 0.1, marginTop:width * 0.1}]}>
      Estamos contactando a su Médico/Funcionario a cargo.
      En la brevedad, recibirá una llamada de auxilio.
      </Text>
      <Text style={[generalStyles.nText,, {marginHorizontal:width * 0.1}]}>
      Se le recomienda estar en calma, no realizar movimientos bruscos
      y seguir las indicaciones del médico o funcionario a cargo que tenga
      disponibles o le de al momento de que se contacte con usted.
      </Text>
    </View>
  );
}

function Login({ navigation }) {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [Pass, setPass] = useState('');
  const [userText, setUserText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((json)=>setData(json))
    .catch((error)=>console.error(error))
    .finally(()=>setLoading(false))
  },[]);

  const handlePassText = (text) => {
    setPass(text);
  }
  const handleUserText = (text) => {
    setUserText(text);
  }
  const handleModalClose = () => {
    setModalVisible(false);
  }
  const handleSesion = () => {
    for(let i = 0; i < data.length;i++){
      c = data[i];
      if(c.includes(userText)){
        if(c[5] == Pass){
          user = i;
          navigation.navigate('PatientMenu');
          break;
        }else{setModalVisible(true);}
      }
      if(i == data.length-1){setModalVisible(true);}
    }
    
  };
  

  return (
    <View style={{marginTop:width*0.06}}>
      {loading ? (<Text> Loading ... </Text>) : 
      (
        <View style={{marginHorizontal: width * 0.1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <View style={minSalLogo.logoLeft2}/>
              <View style={minSalLogo.logoRight2}/>
            </View>
            <Text style={[generalStyles.titles, {marginTop: width * 0.05}]}>
              MPC
            </Text>
          </View>
        
          <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: width * 0.4, marginBottom: 10, paddingHorizontal: width * 0.05 }}
          placeholder="Ingresar Usuario"
          onChangeText={handleUserText}
          value={userText}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: width * 0.05 }}
          placeholder="Ingresar contraseña"
          onChangeText={handlePassText}
          secureTextEntry={true}
        />
        <Button title="Iniciar Sesión" onPress={handleSesion} />

        <Modal visible={modalVisible} animationType='slide' transparent={true} onRequestClose={handleModalClose}>
          <View style= {styles.modalBackGround}>
            <View style={styles.modalWrongSesion}>
              <Text style={generalStyles.nText}>Nombre de usuario o contraseña incorrectos. Por favor vuelva a intentarlo.</Text>
              <Text style={generalStyles.nText}>Si el problema persiste favor de contactar a soporte</Text>
              <View style={styles.modalFooter}>
              <Button title="Cerrar" onPress={handleModalClose} />
              </View>
            </View>
          </View>

        </Modal>
      </View>
      )}
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
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login"
          component={Login}
          options={{headerShown: false}}
          />
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
                    <Text style={generalStyles.titles}>Autoexamen</Text>
                  </View>
                  <View style={{position: 'relative', left: width * 0.28}}>
                    <MODAL onPress={any} />
                  </View>
              </View>),
           }} 
          />
          <Stack.Screen name="Asistencia"
          component={Asistencia}
          options={{
            headerTitle: () => (
              <View style={styles.container}>
                  <View style={styles.headBar2}>
                    <View style={minSalLogo.logoLeft} />
                    <View style={minSalLogo.logoRight} />
                    <Text style={generalStyles.titles}>Asistencia</Text>
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
    paddingHorizontal: width * 0.20, // 5% of the screen width
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
  modalWrongSesion: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    marginTop: height * 0.3,
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalFooter: {
    // Style for the footer containing the button (at the bottom)
    paddingTop: height * 0.2,
    borderBottomLeftRadius: 10,
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
    marginHorizontal: width* 0.03,
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
  logoLeft2: {
    position: 'absolute',
    top: height * 0.005, // 1% of the screen height
    left: width * 0.02, // 2% of the screen width
    width: width * 0.15, // 15% of the screen width
    height: height * 0.1, // 3% of the screen height
    backgroundColor: 'blue',
    paddingBottom: height * 0.02, // 2% of the screen height
  },
  logoRight2: {
    position: 'absolute',
    top: height * 0.005, // 1% of the screen height
    left: width * 0.18, // 20% of the screen width
    width: width * 0.3, // 30% of the screen width
    height: height * 0.1, // 3% of the screen height
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