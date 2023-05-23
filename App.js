import { StatusBar } from "expo-status-bar";
import { Settings, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import color from "./src/constants/colors";
import WeeklyTabNavigator from './src/components/InsightsTab'
import JournalLogsTab from './src/components/JournalLogsTab'
//import Navigation from "./src/components/Navigation";
import Profile from "./src/screens/Profile";
import BottomTabs from "./src/components/TabNavigator"
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/components/StartingScreenNavigator";
import axios from "axios";
// axios.defaults.baseURL = "http://127.0.0.1:8080/api/v1/client"
axios.defaults.baseURL = "https://mind-care.up.railway.app/api/v1/client"
// import Settings from "./src/screens/Settings";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import ForgotPassword from "./src/screens/ForgotPassword";
import Signin from "./src/screens/Signin";
import MainScreen from "./src/screens/MainScreen";
import TabNavigator from "./src/components/TabNavigator";
import PersonalInsightCard from "./src/components/PersonalInsightCard";
import DeepBreathingExercise from "./src/screens/dailyReminder/deepBreathingExercise/deepBreathingExercise";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <PaperProvider>
      {/* <NavigationContainer>
        <TabNavigator />  
      </NavigationContainer> */}
      {/* <MainScreen /> */}
      <Navigation />
      {/* <ForgotPassword /> */}
      {/* <Profile /> */}
      {/* <Signin /> */}
      {/* <Profile /> */}
      {/* <Settings /> */}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.yellow,
    alignItems: "center",
    justifyContent: "center",
  },
});

AppRegistry.registerComponent(appName, () => Main);
