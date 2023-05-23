import React, { useState } from "react";
import { Image, View, StyleSheet, FlatList, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import Icon from 'react-native-vector-icons/FontAwesome';
// Sample data
const journalEntries = [
  {
    id: 1,
    type: "Journal Entry 1",
    date: "2023-05-18",
  },
  {
    id: 2,
    type: "Journal Entry 2",
    date: "2023-05-19",
  },
  // Add more journal entries as needed
];

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const renderEntry = ({ item }) => (
    <View style={styles.entryContainer}>
      <Text style={styles.entryType}>{item.type}</Text>
      <Text style={styles.entryDate}>{item.date}</Text>
    </View>
  );

  const today = new Date().toISOString().split("T")[0];
  const selectedDateEntries = journalEntries.filter(
    (entry) => entry.date === selectedDate
  );

  const totalJournals = selectedDateEntries.length > 0 ? selectedDateEntries.length : 0;

  const markedDates = {};
  journalEntries.forEach((entry) => {
    markedDates[entry.date] = { selected: true, marked: true, dotColor: 'green' };
  });

  return (
    <View style={styles.container}>
       <Calendar
        onDayPress={handleDateSelect}
        markedDates={markedDates}
        style={{ borderRadius: 15 }}
        theme={{
          // Calendar theme options
        }}
      /> 

      <View style={styles.entriesContainer}>
        <Text style={styles.selectedDate}>
          Summary of {selectedDate || today}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.totalJournals}>
            Total Journals: {totalJournals}
            {/* <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2Fjournal.png?alt=media&token=a93ae0c6-dcb7-4413-bf04-e00d14c90472",
              }}
              resizeMode="contain"
              style={{ width: 40, height: 50 }}
            /> */}
            {/* <Icon name="hourglass" size={30} color="white" style={styles.copyIcon} /> */}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  entriesContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "lightgreen",
    borderRadius: 10,
    padding: 12,
  },
  entryContainer: {
    marginBottom: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  entryType: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 5,
  },
  entryDate: {
    fontSize: 16,
  },
  selectedDate: {
    fontWeight: "600",
    fontSize: 18,
    padding: 10,
  },
  totalJournals: {
    fontWeight: "600",
    fontSize: 18,
    padding: 10,
    paddingTop: 0,
  },  
});

export default CalendarScreen;
