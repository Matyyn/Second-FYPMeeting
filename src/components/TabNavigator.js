import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import MainScreen from "../screens/MainScreen";
import Forums from "../screens/forums";
import Tasks from "../screens/tasks";
import Therapy from "../screens/therapy";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import InsightsProfile from "./ProfileStack";
import DailyTasks from "./DailyTaskStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="md-home-outline" size={24} color="black" />;
          },
          
        }}
      />
      <Tab.Screen
        name="Forum"
        component={Forums}
        options={{
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="forum-outline"
                size={24}
                color="black"
              />
            );
          },
        }}
      />
      <Tab.Screen name="Therapy" component={Therapy} />
      <Tab.Screen name="Task" component={DailyTasks} options={{
          headerShown: false,
        }}/>
      <Tab.Screen
        name="Insight Profile"
        component={InsightsProfile}
        options={{
          title: "Profile",

        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabNavigator;
