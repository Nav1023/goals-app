import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { black } from 'ansi-colors';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }
  const addGoalHandler = () => {
    console.log(enteredGoal);
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map((goal => 
        <View style={styles.listItems} key={goal}>
          <Text>{goal}</Text>
          </View>))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: 200,
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItems: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10
  }
});
