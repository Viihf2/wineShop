import React from "react";
import { View, Button, Image, StyleSheet } from "react-native";

const CountrySelection = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CountryButton
        title="Argentina"
        imageSource={require("../imagens/argentina.png")}
        onPress={() => navigation.navigate("ArgentinaVinhos")}// Redireciona para a tela Argentina"
      />
      <CountryButton
        title="Chile"
        imageSource={require("../imagens/chileCopy.png")}
        onPress={() => navigation.navigate("ChileVinhos")} // Redireciona para a tela "ChileVinhos.js"
      />
      <CountryButton
        title="Espanha"
        imageSource={require("../imagens/espanha.png")}
        onPress={() => navigation.navigate("EspanhaVinhos")} // Redireciona para a tela "EspanhaVinhos.js"
      />
      <CountryButton
        title="Portugal"
        imageSource={require("../imagens/portugal.png")}
        onPress={() => navigation.navigate("PortugalVinhos")} // Redireciona para a tela "VinhosPortugal.js"
      />
      <CountryButton
        title="Carrinho"
        imageSource={require("../imagens/carrinho.png")}
        onPress={() => navigation.navigate("Carrinho")} // Redireciona para a tela "Carrinho.js"
      />
    </View>
  );
};
const CountryButton = ({ title, imageSource, onPress }) => (
  <View style={styles.countryButton}>
    <Image source={imageSource} style={styles.countryImage} />
    <Button title={title} onPress={onPress} color="#A82A48" />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  countryButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  countryImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
export default CountrySelection;
