// Navigator 
import { Text, View, Dimensions } from 'react-native';
import React from 'react';

// Styles
import generalStyles from '../styles/generalStyles';

// Variables
const { width, height } = Dimensions.get('window');

// Function
export default function Contactar({ navigation }) {
    return (
      <View>
        <Text style={[generalStyles.nText,, {marginHorizontal:width * 0.1, marginTop:width * 0.1}]}>
        UNDER CONSTRUCTION
        </Text>
      </View>
    );
  }