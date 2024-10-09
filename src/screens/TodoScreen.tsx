import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TaskInputs from '../components/taskInputs';
import TaskList from '../components/TaskList';

const TodoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO </Text>
      <TaskInputs />
      <TaskList />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    gap: 20,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
