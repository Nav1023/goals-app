import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const addGoalHandler = goalTitle => {
    console.log(goalTitle);
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle}]);
    setModalVisible(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals( currentGoals => {
      return currentGoals.filter( (goal) => goal.id != goalId)
    })
  }
  
  const cancelAdditionHandler = () => {
    setModalVisible(false);
  }

  return (
    <View style={styles.screen}>
      <Button title='Add Goal' onPress={() => setModalVisible(true)}/>
      <GoalInput 
        visible={isModalVisible} 
        onAddGoal= {addGoalHandler} 
        onCancel= {cancelAdditionHandler}
        />
      <FlatList 
        data = {courseGoals}
        renderItem = { itemData => (
        <GoalItem 
          id={itemData.item.id} 
          onDelete={removeGoalHandler} 
          title = {itemData.item.value}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
