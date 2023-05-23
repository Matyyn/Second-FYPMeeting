import React, { useState } from 'react';
import { View, Text, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import color from '../../constants/colors';
const questions = [
  {
    question: 'Numbness or tingling',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Feeling hot',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Wobbliness in legs',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Unable to relax',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Fear of the worst happening',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Dizzy or lightheaded',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Heart pounding / racing',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Unsteady',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Terrified or afraid',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Nervous',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Feeling of choking',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Hands trembling',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Shaky/unsteady',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Fear of losing control',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Difficulty in breathing',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Fear of dying',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Scared',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Indigestion',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Faint/lightheaded',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Face flushed',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  },
  {
    question: 'Hot/cold sweats',
    options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
  }

];
const DepressionScreen = ({navigation}) => {
  const [scores, setScores] = useState(Array(questions.length).fill(0));
  const handleComplete = () => {
    const score = calculateTotalScore();
    setScores(Array(questions.length).fill(0)); 
    navigation.navigate('Anxiety Test Result', { score });
  };

  const handleOptionSelect = (index, value) => {
    const newScores = [...scores];
    newScores[index] = parseInt(value);
    setScores(newScores);
  };

  const calculateTotalScore = () => {
    const totalScore = scores.reduce((total, score) => total + score, 0);
    console.log('Total Score:', totalScore); // Add this line
    return totalScore;
  };
  
  const renderQuestion = (question, index) => {
    const questionNumber = index + 1;
  
    return (
      <View key={index} style={styles.questionContainer}>
        <Text style={styles.questionText}>Q{questionNumber}. {question.question}</Text>
        {question.options.map((option, optionIndex) => (
          <View key={optionIndex} style={styles.optionContainer}>
            <RadioButton
              value={optionIndex.toString()}
              status={scores[index] === optionIndex ? 'checked' : 'unchecked'}
              onPress={() => handleOptionSelect(index, optionIndex)}
              color="#6200ee"
            />
            <Text style={styles.optionText}>{option}</Text>
          </View>
        ))}
      </View>
    );
  };  
  const totalScore = calculateTotalScore();
  const isSubmitDisabled = totalScore === 0;
  return (
    <ScrollView style={styles.container}>
        <Text style={{textAlign:'center',fontSize:23,fontWeight:600,marginBottom:20}}>Anxiety Test</Text>
      {questions.map((question, index) => renderQuestion(question, index))}
      <View style={styles.totalScoreContainer}>      
      <TouchableOpacity
          // style={styles.button}
          onPress={handleComplete}
          disabled={isSubmitDisabled}
          style={[styles.submitButton, isSubmitDisabled && styles.disabledButton]}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom:0
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  totalScoreContainer: {
    marginBottom:40,    
    alignItems: 'center',
  },
  totalScoreText: {
    fontSize: 18,
    color:'black',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: color.grey,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Inter_700Bold',
    fontSize: 20,
  },
  submitButton: {
    opacity: 1, // Default opacity for enabled button
    backgroundColor: color.grey,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
  },
  disabledButton: {
    opacity: 0.5, // Opacity for disabled button
    backgroundColor: color.grey,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
  },
});

export default DepressionScreen;
