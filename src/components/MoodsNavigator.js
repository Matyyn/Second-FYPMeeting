import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoodsScreen from '../screens/pyscological profile/MoodsScreen'
import EmotionsScreen from '../screens/pyscological profile/EmotionScreen'
import EmotionsReasonScreen from '../screens/pyscological profile/FurtherEmotionsScreen'
import MoodReasonScreen from '../screens/pyscological profile/MoodReasonScreen'
import Stress from '../screens/pyscological profile/StressCalculatorScreen'
import MainScreen from '../screens/pyscological profile/MainPyschologicalScreen'
import AnxietyTest from './AnxietyNavigator'
import DepressionTest from './DepressionNavigator'
import Insights from './InsightsTab'
import { Ionicons } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();
const Navigation = ({navigation}) => {
  return (
      <Stack.Navigator>    
        <Stack.Screen
          name="Select Mood"
          component={MoodsScreen}
        />
        <Stack.Screen
          name="Emotions"
          component={EmotionsScreen}
        />               
        <Stack.Screen
          name="Emotions Reason"
          component={EmotionsReasonScreen}
        />          
        <Stack.Screen
          name="Mood Reason"
          component={MoodReasonScreen}
        />               
        <Stack.Screen
        name="Stress Screen"
        component={Stress}/>
         <Stack.Screen
          name="Insights"
          component={Insights}
        />

      </Stack.Navigator>    
  );
};

export default Navigation;
