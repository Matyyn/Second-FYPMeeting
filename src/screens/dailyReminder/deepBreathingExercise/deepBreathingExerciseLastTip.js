
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import color from "../../../constants/colors";

const DeepBreathingExerciseLastTip = ({ navigation }) => {
  const [title, setTitle] = useState("Well done!");
  const [tip1, setTip1] = useState("You've completed the exercise.");
  const [heading, setHeading] = useState("DEEP BREATHING EXERCISE");

  const next = () => {
    setTip1(
      "Setting your goals daily centers your focus and increase your productivity. Come back tomorrow morning!"
    );
    setHeading("PLANNING YOUR DAY");
  };

  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.upperContainer}>
        <Text style={{ marginLeft: 10 }}>
          <Entypo name="cross" size={24} color="white" />
        </Text>
        <Text style={styles.heading}>{heading}</Text>
      </View>

      <View>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{tip1}</Text>
        </View>
      </View>
      <View style={styles.buttonParent}>
        <TouchableOpacity style={styles.button} onPress={next}>
          <Text
            style={{
              color: "black",
              fontFamily: "Inter_700Bold",
              fontSize: 20,
            }}
          >
            Complete
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: color.orange,
    flex: 1,
  },
  upperContainer: {
    flexDirection: "row",
  },
  heading: {
    // alignSelf: "center",
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginLeft: 50,
  },
  container: {
    // backgroundColor: "black",
    height: 200,
    marginTop: 250,
    marginHorizontal: 25,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    textAlign: "center",
  },
  text: {
    color: "white",
    fontFamily: "Inter_400Regular",
    fontSize: 22,
    marginBottom: 30,
    textAlign: "center",
    padding: 10,
  },
  buttonParent: {
    marginTop: "50%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: "85%",
  },
});

export default DeepBreathingExerciseLastTip;
