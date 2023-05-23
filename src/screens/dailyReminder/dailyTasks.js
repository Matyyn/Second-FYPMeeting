
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import color from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DailyTasks = ({ navigation }) => {
  const TaskCard = ({ title, content }) => {
    return (
      <View style={styles.taskCard}>
        <View></View>
        <View>
          <Text style={styles.subHeading}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.setReminderContainer}>
        <View style={{ width: "52%", marginTop: 30 }}>
          <Text style={{ marginLeft: 25, fontSize: 15, color: color.darkGrey }}>
            Make your afternoon focused, productive and stress-free with these
            activities only
          </Text>
          <View style={styles.buttonParent}>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Set Reminder')}}>
              <View style={{ flexDirection: "row" }}>
                <Text>
                  <Ionicons
                    name="notifications-sharp"
                    size={20}
                    color="white"
                  />
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Inter_700Bold",
                    fontSize: 15,
                    marginLeft: 5,
                  }}
                >
                  Set Reminder
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/mindcare-691a2.appspot.com/o/set-reminder-images%2FClimbing-amico.png?alt=media&token=b0b74ac2-9399-47d7-91bd-8bdba27ad9fc",
          }}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.heading}>Morning</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("breathing exercise");
          }}
        >
          <TaskCard
            title="Deep breathing exercise"
            content="Feel more composed and collected to kickstart your day"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Morning Journals')
        }}>
          <TaskCard
            title="Morning Journal"
            content="Set your intentions and achieve your goal of the day"
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.heading}>Afternoon</Text>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Morning Journals')
        }}>
          <TaskCard
            title="Plan breaks to reduce distractions"
            content="Stay focused on your taks by taking intentional breaks"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("five senses grounding technique tip1")
          }
        >
          <TaskCard
            title="Five senses grounding technique"
            content="Activate your five sense and re-center yourself in the present moment"
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.heading}>Evening</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('UnwindLast')}}>
          <TaskCard
            title="Unplug and Unwind"
            content="A 1-minute meditation will help you unplug and let go"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Sleep Journal')}}>
          <TaskCard
            title="Sleep journal"
            content="Our dreams can help us process our lives and be arich source of inspiration"
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  setReminderContainer: {
    flexDirection: "row",
  },
  taskCard: {
    flexDirection: "row",
    backgroundColor: color.lightGrey,
    padding: 16,
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 5,
  },
  heading: {
    fontFamily: "Inter_700Bold",
    fontSize: 15,
    marginLeft: 15,
    marginBottom: 7,
  },
  subHeading: {
    fontFamily: "Inter_700Bold",
  },

  image: {
    width: 170,
    height: 170,
  },
  buttonParent: {
    marginTop: 15,
    alignItems: "center",
  },
  button: {
    backgroundColor: color.grey,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: 150,
  },
});

export default DailyTasks;
