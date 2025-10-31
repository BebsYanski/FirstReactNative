//import libraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const TextInputComponent = () => {
  const [value, setValue] = useState('');
  console.log('====================================');
  console.log(value);
  console.log('====================================');
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Text Input Component</Text>
      <View>
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder="Type Something Here..."
          style={styles.input}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    textDecorationLine: 'underline',
    marginVertical: 20,
  },
  input: {
    height: 50,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    // width: 300,
  },
});

//make this component available to the app
export default TextInputComponent;
