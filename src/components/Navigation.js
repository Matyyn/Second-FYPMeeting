import { View, Text, Button, Settings } from "react-native";
import React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "../screens/Signin";
import CreateAccount from "../screens/CreateAccount";
import ForgotPassword from "../screens/ForgotPassword";
import Profile from "../screens/Profile";
import MainScreen from "../screens/MainScreen";
import Setting from "../screens/Settings";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Header } from "react-native/Libraries/NewAppScreen";
import WelcomeScreen from "../screens/splash screens/WelcomeScreen";
import Screen1 from "../screens/splash screens/Screen1";
import Screen2 from "../screens/splash screens/Screen2";
import Screen3 from "../screens/splash screens/Screen3";
import GettingStarted from "../screens/splash screens/GettingStarted";
import SigninSplash from "../screens/splash screens/SigninSplash";
import MainScreenHeader from "../headers/mainScreenHeader";
import GuidedJournalingMain from "../screens/guided journaling/guidedJournalingMain";
import GuiedJournalingHeader from "../headers/guiedJournalingHeader";
import GuidedJournalingTips from "../screens/guided journaling/guidedJournalingTips";
import SleepJournal from "../screens/guided journaling/sleepJournal";

import WeeklyInsights from '../screens/pyscological profile/weeklyInsights'
import MonthlyInsights from '../screens/pyscological profile/monthlyInsights'
import WriteJournalScreen from "../screens/guided journaling/WritingJournal";
import CompleteJournalScreen from "../screens/guided journaling/completionScreen"
import InsightsTab from './InsightsTab'
import SelectMood from './MoodsNavigator'
import JournalsTab from './JournalLogsTab'

// import DailyTasks from "../screens/dailyReminder/dailyTasks";
// import TabNavigator from "./TabNavigator";
// import SetReminderScreen from "../screens/dailyReminder/setReminderScreen";
// import Reminders from "../screens/dailyReminder/reminders";
// import DailyReminderScreen from "../screens/dailyReminder/dailyReminderScreen";
// import DeepBreathingExercise from "../screens/dailyReminder/deepBreathingExercise/deepBreathingExercise";
// import DeepBreathingExerciseAudio from "../screens/dailyReminder/deepBreethingExercise/deepBreathingExerciseAudio";
// import DeepBreathingExerciseOverview from "../screens/dailyReminder/deepBreethingExercise/deepBreathingExerciseOverview";
// import DeepBreathingExerciseGoodWork from "../screens/dailyReminder/deepBreethingExercise/deepBreathingExerciseGoodWork";
// import DeepBreathingExerciseLastTip from "../screens/dailyReminder/deepBreethingExercise/deepBreathingExerciseLastTip";
// import FiveSensesGroundingTechniqueTip1 from "../screens/dailyReminder/fiveSensesGroundingTechnique/fiveSensesGroundingTechniqueTip1";
// import FiveSensesGroundingTechniqueAudio from "../screens/dailyReminder/fiveSensesGroundingTechnique/fiveSensesGroundingTechniqueAudio";
// import FiveSenseGroundingTechniqueOverview from "../screens/dailyReminder/fiveSensesGroundingTechnique/fiveSenseGroundingTechniqueOverview";
// import FiveSenseGroundingTechniqueLastTip from "../screens/dailyReminder/fiveSensesGroundingTechnique/fiveSenseGroundingTechniqueLastTip";
// import UnplugAndUnwindTip from "../screens/dailyReminder/unplugAndUnwind/unplugAndUnwindTip";
// import UnplugAndUnwindAudio from "../screens/dailyReminder/unplugAndUnwind/unplugAndUnwindAudio";
// import UnplugAndUnwindOverview from "../screens/dailyReminder/unplugAndUnwind/unplugAndUnwindOverview";
// import UnpluAndUnwindLastTip from "../screens/dailyReminder/unplugAndUnwind/unpluAndUnwindLastTip";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (

    
      <Stack.Navigator>      
        
        

    
   
      <Stack.Screen

          name="guided journaling main"
          component={GuidedJournalingMain}
          options={{
            headerTitle: "Journals",
            // headerRight: () => <GuiedJournalingHeader />,
          }}
        /> 
         <Stack.Screen
          name="guided journaling tips"
          component={GuidedJournalingTips}
        />
        <Stack.Screen
          name="writeJournal"
          component={WriteJournalScreen}
          options={{
            headerTitle: "Write Journals",
            // headerRight: () => <GuiedJournalingHeader />,
          }}

        />
        <Stack.Screen
          name="completeJournal"
          component={CompleteJournalScreen}

        /> 
      {/* <Stack.Screen name="Tab Navigator" component={TabNavigator} /> */}
      {/* <Stack.Screen
          name="guided journaling tips"
          component={GuidedJournalingTips}
        /> */}
       <Stack.Screen name="Sleep Journal" component={SleepJournal} /> 
       <Stack.Screen name="JournalsTab" component={JournalsTab}/>
      
      {/* <Stack.Screen name="Daily Reminder" component={DailyReminderScreen} />
      <Stack.Screen
        name="Set Reminder"
        component={SetReminderScreen}
        options={{
          title: "Reminder",
        }}
      />
      <Stack.Screen name="Reminders" component={Reminders} />
      <Stack.Screen
        name="breathing exercise"
        component={DeepBreathingExercise}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="deep breathing exercise audio"
        component={DeepBreathingExerciseAudio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="deep breathing exercis overview"
        component={DeepBreathingExerciseOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="deep breathing exercise good work"
        component={DeepBreathingExerciseGoodWork}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="deep breathing exercise last tip"
        component={DeepBreathingExerciseLastTip}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="five senses grounding technique tip1"
        component={FiveSensesGroundingTechniqueTip1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="five sense grounding technique audio"
        component={FiveSensesGroundingTechniqueAudio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="five sense grounding technique overview"
        component={FiveSenseGroundingTechniqueOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="five senses grounding technique last tip"
        component={FiveSenseGroundingTechniqueLastTip}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="unplug and unwind"
        component={UnplugAndUnwindTip}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="unplug and unwind audio"
        component={UnplugAndUnwindAudio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="unplug and unwind overview"
        component={UnplugAndUnwindOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="unplug and unwind last tip"
        component={UnpluAndUnwindLastTip}
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        /> */}
      {/* <Stack.Screen
          name="Main Screen"
          component={MainScreen}

          options={{
            headerTitle: "Complete Journal",        
          }}

        />
        <Stack.Screen name="Sleep Journal" component={SleepJournal} /> 
        <Stack.Screen name="Insights" component={InsightsTab}/>
        <Stack.Screen name="JournalsTab" options={{
            headerTitle: "Journals Logs",        
          }} component={JournalsTab}/>        
      </Stack.Navigator>
    

        /> */}
      {/* <Stack.Screen name="Profile" component={Profile} /> */}

      {/* <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ headerShown: false }}
        /> */}
      {/* <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{ headerShown: false }}
        /> */}
      {/* <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Getting Started"
          component={GettingStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SigninSplash"
          component={SigninSplash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Create Account"
          component={CreateAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign in"
          component={Signin}
          options={{ headerShown: false }}
        /> */}
      {/* <Stack.Screen
          name="Forgot Password"
          component={ForgotPassword}
          options={{ headerShown: false }}
        /> */}
      {/* <Stack.Screen name="Profile" component={Profile} /> */}

      {/* <Stack.Screen name="Settings" component={Setting} /> */}
      {/* <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        /> */}
    </Stack.Navigator>
    // </NavigationContainer>

  );
};

export default Navigation;
