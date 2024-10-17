import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList } from 'react-native';
import HomeScreen from './HomeScreen';
import Input from './components/Input';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task) return; // Do nothing if the input is empty
    setTasks([...tasks, { id: Date.now(), title: task, completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <HomeScreen
            task={item}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Input addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
