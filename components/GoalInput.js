import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler} />
        <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
  )
}

const styles = StyleSheet.create({
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
})

export default GoalInput;