import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Basics = () => {
  const [count, setCount] = React.useState(0);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <View style={styles.redBox} />
          <View style={styles.greenBox} />
          <View style={styles.blueBox} />
        </View>
        <Text style={styles.myFirstText}>My first ever React Native</Text>

        <Text style={styles.nestedText}>
          My first ever React Native
          <Text style={styles.blueText}> Text within text</Text>
        </Text>

        {/* Image component */}
        <Image style={styles.image} source={require('../../assets/pic.jpg')} />

        <Image style={styles.image} source={require('../../images/pic.jpg')} />

        <Image
          style={styles.image}
          source={{ uri: 'https://picsum.photos/200' }}
        />
        {/* Image component */}

        {/* Button component */}

        <Button
          color="red"
          onPress={() => setCount(count + 1)}
          title="Click me"
        />
        <Text>Count: {count}</Text>
        {/* Button component */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10,
  },
  redBox: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
  },
  greenBox: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
  },
  blueBox: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
  },
  myFirstText: {
    fontSize: 30,
    fontWeight: '700',
  },
  nestedText: {
    fontSize: 18,
    color: '#556aff',
  },
  blueText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
export default Basics;
