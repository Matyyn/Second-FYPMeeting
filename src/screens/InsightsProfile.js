import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  const handleCardPress = (title) => {
    // Handle card press based on the title
    console.log(`Pressed ${title}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => {navigation.navigate('Insights Profile')}}
      >
        <Text style={styles.cardTitle}>Insights</Text>
        {/* Card content for Insights */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => {navigation.navigate('View Pyschological Profile')}}
      >
        <Text style={styles.cardTitle}>Psychological Profile</Text>
        {/* Card content for Psychological Profile */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => handleCardPress('Connect to SOS Support')}
      >
        <Text style={styles.cardTitle}>Connect to SOS Support</Text>
        {/* Card content for Connect to SOS Support */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => handleCardPress('Invite to Friends')}
      >
        <Text style={styles.cardTitle}>Invite to Friends</Text>
        {/* Card content for Invite to Friends */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => handleCardPress('View / Edit Goals')}
      >
        <Text style={styles.cardTitle}>View / Edit Goals</Text>
        {/* Card content for View / Edit Goals */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() =>{navigation.navigate('Set Reminder')}}
      >
        <Text style={styles.cardTitle}>Reminders</Text>
        {/* Card content for Reminders */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  cardContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default HomeScreen;
