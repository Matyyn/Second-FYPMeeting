
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../../../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const DeepBreathingExercise = ({ navigation }) => {
  const [tip1, setTip1] = useState(
    "This deep breathing exercise lowers the heart rate, making you feel composed and focused. A great way to start your morning."
  );

  const next = () => {
    if (
      tip1 == "Please lower your volume and listen to this guided audio clip."
    ) {
      navigation.navigate("deep breathing exercise audio");
    } else {
      setTip1("Please lower your volume and listen to this guided audio clip.");
    }
  };

  const back = () => {
    if (
      tip1 ==
      "This deep breathing exercise lowers the heart rate, making you feel composed and focused. A great way to start your morning."
    ) {
      navigation.goBack("Task");
    } else {
      setTip1(
        "This deep breathing exercise lowers the heart rate, making you feel composed and focused. A great way to start your morning."
      );
    }
  };

  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.upperContainer}>
        <Text style={{ marginLeft: 10 }}>
          <Entypo name="cross" size={24} color="black" />
        </Text>
        <Text style={styles.heading}>DEEP BREATHING EXERCISE</Text>
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
    backgroundColor: 'orange',
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
    marginHorizontal: 25,
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
export default DeepBreathingExercise;
