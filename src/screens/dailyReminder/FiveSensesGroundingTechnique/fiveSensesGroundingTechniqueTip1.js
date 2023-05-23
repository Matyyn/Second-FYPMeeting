
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../../../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const FiveSensesGroundingTechniqueTip1 = ({ navigation }) => {
  const [tip1, setTip1] = useState(
    "When you're feleing overwhelmed, you're likely to feel trapped in your emotions."
  );
  const [tip2, setTip2] = useState(
    "The mindfulness exercise can activate yor  5 senses and re-centre you to te present moment."
  );
  const [tip3, setTip3] = useState(
    "You'll be listening to an audio recording. Put your earphones in and press \"play\" when you're ready."
  );
  const next = () => {
    if (
      tip1 ==
      "When you're feleing overwhelmed, you're likely to feel trapped in your emotions."
    ) {
      setTip1(
        "The mindfulness exercise can activate yor  5 senses and re-centre you to te present moment."
      );
    } else if (
      tip1 ==
      "The mindfulness exercise can activate yor  5 senses and re-centre you to te present moment."
    ) {
      setTip1(
        "You'll be listening to an audio recording. Put your earphones in and press \"play\" when you're ready."
      );
    } else if (
      tip1 ==
      "You'll be listening to an audio recording. Put your earphones in and press \"play\" when you're ready."
    ) {
      navigation.navigate("five sense grounding technique audio");
    }
  };

  const back = () => {
    if (
      tip1 ==
      "When you're feleing overwhelmed, you're likely to feel trapped in your emotions."
    ) {
      navigation.goBack("Task");
    } else if (
      tip1 ==
      "The mindfulness exercise can activate yor  5 senses and re-centre you to te present moment."
    ) {
      setTip1(
        "When you're feleing overwhelmed, you're likely to feel trapped in your emotions."
      );
    } else if (
      tip1 ==
      "You'll be listening to an audio recording. Put your earphones in and press \"play\" when you're ready."
    ) {
      setTip1(
        "The mindfulness exercise can activate yor  5 senses and re-centre you to te present moment."
      );
    }
  };

  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.upperContainer}>
        <Text style={{ marginLeft: 10 }}>
          <Entypo name="cross" size={24} color="white" />
        </Text>
        <Text style={styles.heading}>
          GROUNDING TECHNIQUES TO INCREASE FOCUS
        </Text>
      </View>

      <View>
        <View style={styles.container}>
          <Text style={styles.text}>{tip1}</Text>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={back} style={styles.icon}>
            <Text>
              <AntDesign name="left" size={24} color="black" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={next} style={styles.icon}>
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
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginTop:6,
    marginLeft: 10,
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
    height: 150,
    marginTop: 250,
    marginHorizontal: 50,
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
export default FiveSensesGroundingTechniqueTip1;
