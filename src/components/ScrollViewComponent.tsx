import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ScrollViewComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>ScrollView Example</Text>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={true}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        bounces={true}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.boxText}>{index}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollViewComponent;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  scrollView: {
    height: 200,
    backgroundColor: '#f0f0f0',
  },
  contentContainer: {
    padding: 20,
  },
  box: {
    marginBottom: 20,
    height: 50,
    backgroundColor: '#349',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 20,
    margin: 10,
    color: 'white',
    fontWeight: 'bold',
  },
});

//make this component available to the app
