import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import color from "../../../constants/colors";
import { AntDesign } from "@expo/vector-icons";

const UnplugAndUnwindLastTip = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.upperContainer}>
        <Text style={{ marginLeft: 10 }}>
          <Entypo name="cross" size={24} color="white" />
        </Text>
        <Text style={styles.heading}>
          UNWIND AND UNPLUG
        </Text>
      </View>

      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Well Done!</Text>
          <Text style={styles.text}>You've completed the exercise.</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.goBack("unplug and unwind audio");
          }}
        >
          <Text>
            <AntDesign name="left" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate("Task")}
        >
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
export default UnplugAndUnwindLastTip;
