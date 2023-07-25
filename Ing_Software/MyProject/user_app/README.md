To navigate between different views in React Native, you can use a navigation library like React Navigation. React Navigation provides a way to manage navigation and screen transitions in your app.

Here's a basic example of how you can set up navigation between Main.js and PatientView.js using React Navigation:

Install React Navigation by running the following command "in your project's root directory":
npm install @react-navigation/native
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view




EXAMPLE OF NAVIGATION IMPLEMENTATION WITH TWO VIEWS CALLED main.js AND patientView.js:::


========NAVIGATION STRUCTURE========


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './Main';
import PatientViewScreen from './PatientView';

const StackNavigator = createStackNavigator(
  {
    Main: MainScreen,
    PatientView: PatientViewScreen,
  },
  {
    initialRouteName: 'Main',
  }
);

export default createAppContainer(StackNavigator);


====================================


================Main.js====================

// Main.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Main Screen</Text>
      <Button
        title="Go to Patient View"
        onPress={() => navigation.navigate('PatientView')}
      />
    </View>
  );
};

export default MainScreen;


============================================


===============patientView.js=================

// PatientView.js
import React from 'react';
import { View, Text } from 'react-native';

const PatientViewScreen = () => {
  return (
    <View>
      <Text>Patient View</Text>
    </View>
  );
};

export default PatientViewScreen;


============================================


============App.js================

import React from 'react';
import Navigation from './Navigation';

const App = () => {
  return <Navigation />;
};

export default App;


===================================



DO FETCHING:::::


Primero necesitamos instalar ngrok y tener una cuenta de este. Como ya tengo una comparto mi authtoken para que lo agreguen a su ngrok.
IMPORTANTE: Tener la consola con permisos de administrador, pues ngrok requiere meterse en cosas de admin. ngrok esta en modo admin B)

INSTALACION NGROK:

SE RECOMIENDA USAR CHOCO para que sea mas rapido.

https://ngrok.com/download

Una vez instalado poner esto en la consola: (es mi auth token)

ngrok config add-authtoken 1a958PGBiafhYOKSuSwsl5N4qvQ_23pzuc1w7FBeKh9sNtANJ

Ahora inicializar el servidor app.py encontrado en lo que el gran amigo Manu incluyo para el fetch, osea el server xD.

el puerto es 5000 como se puede apreciar. Por lo tanto tenemos que realizar un ruteo con ngrok al localhost:5000, para eso:

ngrok http 5000.

Y listo, con esto se abra inicializado el servidor ngrok.

Ahora para el fetching a la api por react-native:

import React, { useEffect, useState } from 'react';

Usar lo siguiente dentro de la funcion App:

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

Corresponden a variables de estado que se aseguran de que en frontend se muestren los datos cargados y en caso de errores del servidor
esos datos se mantendran.

Ahora para el fetching:

const url = 'https://0f2a-190-95-120-224.ngrok-free.app/fetchPatients'

En este caso la ruta va a fetchPatients, pero puede ir a cualquier ruta que el Manu creó.

Por ultimo:

https://www.youtube.com/watch?v=KJhg761xb3c

useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((json)=>setData(json))
    .catch((error)=>console.error(error))
    .finally(()=>setLoading(false))
},[]);


Ahora para visualizar los datos en consola para probar que resulta el fetching, dentro de return () y toda la lesera que se encuentra dentro agregar:

{loading ? (<Text> Loading ... </Text>) : (
        console.log(data)
)}

Esto gracias a que actualizamos loading en el momento que haya logrado ingresar al server.

Y listo!! Podras ver todo sin censura.











