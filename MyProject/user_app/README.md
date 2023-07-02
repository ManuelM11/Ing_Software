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