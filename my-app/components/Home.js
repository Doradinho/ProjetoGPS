import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to ListarRotas"
        onPress={() => navigation.navigate('ListarRotas')}
      />
      <Button
        title="Go to ExibirCaminho"
        onPress={() => navigation.navigate('ExibirCaminho')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(18, 18, 18)',
  },
  text: {
    color: 'rgb(229, 229, 231)',
    fontSize: 18,
  },
});

export default Home;
