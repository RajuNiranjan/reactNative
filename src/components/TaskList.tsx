import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';

import {deleteTask, checkTask} from '../redux/reducers/Todo.reducer';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const TaskList = () => {
  const {todos} = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const handleDelte = (id: number) => {
    dispatch(deleteTask(id));
  };

  const handleCheckTask = (id: number) => {
    dispatch(checkTask(id));
  };

  return (
    <>
      {todos.length === 0 ? (
        <Text style={styles.noTask}>No Task Found</Text>
      ) : (
        todos.map((task, idx) => (
          <View key={idx} style={styles.taskCard}>
            <View style={styles.flex}>
              <CheckBox
                value={task.isCompleted}
                onValueChange={() => handleCheckTask(task.id)}
              />
              <Text>{task.task}</Text>
            </View>
            <View style={styles.taskCard}>
              <Text onPress={() => handleDelte(task.id)}>Delete</Text>
            </View>
          </View>
        ))
      )}
    </>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  noTask: {
    textAlign: 'center',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskCard: {
    backgroundColor: '#eaeaea',
    padding: 6,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4,
  },
});
