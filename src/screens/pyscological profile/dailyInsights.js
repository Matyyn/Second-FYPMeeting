import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const dailyInsights = () => {
  const weekdays = [
    { name: 'Sun', emoji: '🙂' },
    { name: 'Mon', emoji: '' },
    { name: 'Tue', emoji: '' },
    { name: 'Wed', emoji: '🙂' },
    { name: 'Thu', emoji: '' },
    { name: 'Fri', emoji: '' },
    { name: 'Sat', emoji: '' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        {weekdays.map((day, index) => (
          <View key={index} style={styles.circle}>
            {day.emoji ? (
              <Text style={styles.emoji}>{day.emoji}</Text>
            ) : (
              <View style={styles.emptyCircle} />
            )}
            <Text style={styles.weekday}>{day.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: '15%',
    alignItems: 'center',
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    alignItems: 'center',
    marginHorizontal: 2,
  },
  emptyCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
  },
  emoji: {
    fontSize: 40,
    marginBottom: 5,
  },
  weekday: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default dailyInsights;
