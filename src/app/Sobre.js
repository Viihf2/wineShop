import React, { useEffect, useRef } from "react";
import { Animated, ImageBackground, Text, View } from "react-native";
import Estilos from "../estilos/Estilos";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      },
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default () => (
  <View style={Estilos.appContainer}>
    <ImageBackground
      source={require("../imagens/vinho.jpg")}
      resizeMode="cover"
      style={Estilos.appImage}
      imageStyle={{ opacity: 0.3 }}
    >
      <FadeInView style={Estilos.appFadein}>
        <View style={Estilos.sobreContainer}>
          <Text style={Estilos.sobreText}>
            Desenvolvido por:
          </Text>
          <Text style={Estilos.sobreText}>- Thaina Oliveira de Carvalho</Text>
          <Text style={Estilos.sobreText}>- Victor Santiago Benevides Lira</Text>
          <Text style={Estilos.sobreText}>- Vitória de Jesus Farias</Text>
          <Text style={Estilos.sobreText}>
            Obrigado por usar!
          </Text>
          <Text style={Estilos.sobreText}>Dezembro/2023</Text>
        </View>
      </FadeInView>
    </ImageBackground>
  </View>
);
