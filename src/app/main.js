import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Principal</Text>
      <Button
        title="Ir para a tela de Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Ir para a tela Sobre"
        onPress={() => navigation.navigate('Sobre')}
      />
      {/* Adicione outros botões para navegar para diferentes telas conforme necessário */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Main;
