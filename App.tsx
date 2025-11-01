//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Basics from './src/components/Basics';

import TextInputComponent from './src/components/TextInput';
import ScrollViewComponent from './src/components/ScrollViewComponent';
import HorizontalScrollViewComponent from './src/components/HorizontalScrollViewComponent';
// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Text>App</Text>
        <Basics />
        <TextInputComponent />
        <ScrollViewComponent />
        <HorizontalScrollViewComponent />
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  scrollViewContent: {
    padding: 20,
  },
});

//make this component available to the app
export default App;
