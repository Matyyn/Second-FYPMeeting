
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import color from "../../../constants/colors";
import { AntDesign } from "@expo/vector-icons";

const FiveSenseGroundingTechniqueLastTip = ({ navigation }) => {
  const [title, setTitle] = useState("Great Work");
  const [tip1, setTip1] = useState(
    "Use this exercise to bring yourself back to the present moment whenever you're feeling overwhelmed."
  );

  const next = () => {
    setTip1("You've completed the exercise.");
    setTitle("Well done!");
  };
  const back = () => {
    if (tip1 == "You've completed the exercise.") {
      setTip1(
        "Use this exercise to bring yourself back to the present moment whenever you're feeling overwhelmed."
      );
    } else if (
      tip1 ==
      "Use this exercise to bring yourself back to the present moment whenever you're feeling overwhelmed."
    ) {
      navigation.goBack("five sense grounding technique overview");
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
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{tip1}</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.goBack("five senses grounding technique tip1");
          }}
        >
          <Text>
            <AntDesign name="left" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={next}>
          <Text>
            <AntDesign name="right" size={24} color="black" />
          </Text>
        </TouchableOpacity>
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
    marginTop: 6,
    color: "white",
    textAlign: "center",
    marginLeft: 10,
  },
  container: {
    // backgroundColor: "black",
    height: 200,
    marginTop: 280,
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
    alignSelf: "stretch",
    marginTop: 165,
    marginHorizontal: 15,
  },
});
export default FiveSenseGroundingTechniqueLastTip;
