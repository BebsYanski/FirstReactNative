import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const HorizontalScrollViewComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Horizontal ScrollView Example</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalContainer}
        bounces={true}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.boxText}>{index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HorizontalScrollViewComponent;

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
  horizontalContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    marginRight: 15,
    backgroundColor: '#349',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  boxText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
