import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExibirCaminho = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Exibir Caminho Screen</Text>
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

export default ExibirCaminho;
