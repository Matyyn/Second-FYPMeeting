
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../../../constants/colors";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const DeepBreathingExerciseAudio = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.upperContainer}>
        <Text style={{ marginLeft: 10 }}>
          <Entypo name="cross" size={24} color="white" />
        </Text>
        <Text style={styles.heading}>DEEP BREATHING EXERCISE</Text>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Deep breathing exercise</Text>
        <View>
          <AntDesign name="play" size={90} color="white" style={styles.audio} />
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            01:28
          </Text>
        </View>
      </View>
      <View style={styles.forBackContainer}>
        <TouchableOpacity>
          <AntDesign name="stepbackward" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="stepforward" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.forBackContainer}
          onPress={() => {
            navigation.navigate("deep breathing exercis overview");
          }}
        >
          <Text>Text Mode</Text>
          <MaterialIcons name="menu-book" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.goBack("breathing exercise");
          }}
        >
          <Text>
            <AntDesign name="left" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.navigate("deep breathing exercise good work");
          }}
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
    backgroundColor: color.orange,
    flex: 1,
    // justifyContent: "space-between",
  },
  upperContainer: {
    flexDirection: "row",
  },
  mainContainer: {
    // backgroundColor: "red",
    marginTop: 150,
    alignSelf: "center",
    padding: 75,
  },
  forBackContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 20,
    width: 150,
    alignSelf: "center",
    padding: 10,
    marginTop: 15,
  },
  audioContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 150,
    alignSelf: "center",
    padding: 10,
  },

  title: {
    color: "white",
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    textAlign: "center",
  },
  audio: {
    alignSelf: "center",
    marginVertical: 10,
  },
  heading: {
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
    alignSelf: "stretch",
    marginTop: 45,
    marginHorizontal: 15,
  },
});

export default DeepBreathingExerciseAudio;
