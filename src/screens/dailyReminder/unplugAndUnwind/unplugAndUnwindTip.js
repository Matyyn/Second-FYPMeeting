import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../../../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const UnplugAndUnwindTip = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.upperContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Task")}>
          <Text style={{ marginLeft: 10 }}>
            <Entypo name="cross" size={24} color="white" />
          </Text>
        </TouchableOpacity>

        <Text style={styles.heading}>UNPLUG AND UNWIND</Text>
      </View>

      <View>
        <View style={styles.container}>
          <Text style={styles.text}>
            You're about to listen to an audio recording.
          </Text>
          <Text style={styles.heading}>
            Put your earphones and press play when you're ready.
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Task")}
            style={styles.icon}
          >
            <Text>
              <AntDesign name="left" size={24} color="black" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("unplug and unwind audio")}
            style={styles.icon}
          >
            <Text>
              <AntDesign name="right" size={24} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: color.grey,
    flex: 1,
  },
  upperContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  heading: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  icon: {
    backgroundColor: "white",
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 250,
    marginHorizontal: 15,
    alignSelf: "stretch",
  },
  container: {
    // backgroundColor: "black",
    height: 150,
    marginTop: 250,
    marginHorizontal: 30,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: 500,
    textAlign: "center",
  },
  buttonParent: {
    marginTop: 200,
    alignItems: "center",
  },
  button: {
    backgroundColor: color.grey,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: "90%",
  },
  buttonText: {
    color: "white",
    fontFamily: "Inter_700Bold",
    fontSize: 20,
  },
});
export default UnplugAndUnwindTip;
