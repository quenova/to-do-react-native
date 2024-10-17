import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from '../../HomeScreen'; // Correct path to HomeScreen

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen /> {/* Render HomeScreen */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Occupy the full screen
  },
});
