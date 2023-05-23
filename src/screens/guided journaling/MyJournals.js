import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import color from "../../constants/colors";
// Sample data
const journalEntries = [
  {
    id: 1,
    type: "Journal Entry 1",
    qs: ["Question 1", "Question 2"],
    answers: ["Answer 1", "Answer 2"],
    date: "2023-05-18",
  },
  {
    id: 2,
    type: "Journal Entry 2",
    qs: ["Question 1", "Question 2", "Question 3"],
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    date: "2023-05-19",
  },
  // Add more journal entries as needed
];

const JournalListScreen = ({ navigation }) => {
  const [entries, setEntries] = useState(journalEntries);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleEntryPress = (entry) => {
    setSelectedEntry(entry);
    setModalVisible(true);
  };

  const handleDeleteEntry = (entryId) => {
    setEntries((prevEntries) =>
      prevEntries.filter((entry) => entry.id !== entryId)
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.entryContainer}
      onPress={() => handleEntryPress(item)}
    >
      <Text style={styles.entryDate}>{item.date}</Text>
      <Text style={styles.entryType}>{item.type}</Text>
      <View style={styles.qnaContainer}>
        <Text style={styles.qnaQuestion}>{item.qs[0]}</Text>
        <Text style={styles.qnaAnswer}>{item.answers[0]}</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleDeleteEntry(item.id)}
        style={styles.deleteIconContainer}
      >
        <MaterialIcons name="delete" size={30} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      <Modal visible={modalVisible} animationType="fade">
        <View style={styles.modalContainer}>
          {selectedEntry && (
            <>
              <View style={styles.modalHeader}>
                <Text style={styles.modalEntryType}>{selectedEntry.type}</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <MaterialIcons name="close" size={30} color="black" />
                </TouchableOpacity>
              </View>
              <Text style={styles.modalDate}>{selectedEntry.date}</Text>
              {selectedEntry.qs.map((question, index) => (
                <View key={index} style={styles.modalQnaContainer}>
                  <Text style={styles.modalQnaQuestion}>{question}</Text>
                  <Text style={styles.modalQnaAnswer}>
                    {selectedEntry.answers[index]}
                  </Text>
                </View>
              ))}
            </>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  entryContainer: {
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 5, // Add elevation for box shadow effect
  },

  entryType: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
  },
  entryDate: {
    marginBottom: 5,
  },
  qnaContainer: {
    marginBottom: 5,
  },
  qnaQuestion: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 2,
  },
  qnaAnswer: {
    fontSize: 14,
    marginBottom: 5,
  },
  deleteIconContainer: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  modalEntryType: {
    fontWeight: "bold",
    fontSize: 22,
  },
  modalDate: {
    fontSize: 18,
    marginBottom: 15,
  },
  modalQnaContainer: {
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 5, // Add elevation for box shadow effect
  },
  modalQnaQuestion: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 2,
  },
  modalQnaAnswer: {
    fontSize: 18,
    marginBottom: 5,
    padding: 10,
    borderLeftWidth: 1,
    borderLeftColor: "brown",
  },
});

export default JournalListScreen;
