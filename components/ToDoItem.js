import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ToDoItem = ({ item, onToggle, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.taskText, item.completed && styles.completed]}>
        {item.name}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title={item.completed ? "Belum Selesai" : "Selesai"} onPress={onToggle} color="#6f2c91" />
        <View style={styles.spacer} /> {/* Spacer for button separation */}
        <Button title="Delete" onPress={onDelete} color="#d9534f" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
    flex: 1,
    marginRight: 10,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacer: {
    width: 10, // Space between buttons
  },
});

export default ToDoItem;
