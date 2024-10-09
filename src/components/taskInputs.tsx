import {Button, StyleSheet, TextInput, View} from 'react-native';
import React, {FormEvent, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../redux/reducers/Todo.reducer';

const TaskInputs = () => {
  const [task, setTask] = useState('');

  const dispatch = useDispatch();

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <View style={styles.card}>
      <TextInput
        placeholder="Enter the task here..."
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />
      <Button title="ADD" onPress={handleAddTask} />
    </View>
  );
};

export default TaskInputs;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 6,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderColor: '#007BFF',
  },
});
