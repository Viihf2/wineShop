import React, { useEffect, useRef } from "react";
import { Animated, Button, Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Estilos from "./src/estilos/Estilos";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/app/Login";
import Sobre from "./src/app/Sobre";
import CountrySelection from "./src/app/menuPaises";
import EspanhaVinhos from "./src/app/EspanhaVinhos";
import PortugalVinhos from "./src/app/PortugalVinhos";
import ChileVinhos from "./src/app/ChileVinhos";
import ArgentinaVinhos from "./src/app/ArgentinaVinhos";
import Carrinho from './src/app/Carrinho';
import Pagamento from './src/app/Pagamento';
import PagamentoScreen from './src/app/compra';
import Endereco from './src/app/Endereco';
import RegistroCompra from './src/app/RegistroCompra';

const Stack = createNativeStackNavigator();

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

const Main = ({navigation}) => (
  <View style={Estilos.appContainer}>
    <ImageBackground source={require("./src/imagens/vin.jpg")}
                     resizeMode="cover" style={Estilos.appImage} imageStyle={{opacity: 0.3}}>
      <FadeInView style={Estilos.appFadein}>
        <Image style={Estilos.logo} source={require("./src/imagens/logo.jpg")} />
        <View><Text></Text></View>
        <Button title="Entrar" onPress={() => navigation.navigate("Login")} color="grey" />
        <View><Text></Text></View>
        <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} color="black" />
      </FadeInView>
    </ImageBackground>
  </View>
);

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Main" screenOptions={
      {
        headerStyle: {
          backgroundColor: "#A82A48",
        },
        headerTintColor: "#fff",
      }
    }>
      <Stack.Screen name="Main" component={Main} options={{ title: "Wine App - Login", headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ title: "Wine App - Login", headerShown: false }} />
      <Stack.Screen name="Personagem" component={CountrySelection} options={
        {
          title: "Wine App",
          headerBackVisible: false,
        }
      }
      />
      <Stack.Screen name="EspanhaVinhos" component={EspanhaVinhos} options={{ title: "Wine App - Vinhos Espanha"}} />
      <Stack.Screen name="PortugalVinhos" component={PortugalVinhos} options={{ title: "Wine App - Vinhos Portugal"}} />
      <Stack.Screen name="ChileVinhos" component={ChileVinhos}
                    options={{ title: "Wine App - Vinhos" }} />
      <Stack.Screen name="ArgentinaVinhos" component={ArgentinaVinhos} options={{ title: "Wine App - Vinhos Argentina"}} />
      <Stack.Screen name="Carrinho" component={Carrinho} options={{ title: "Wine App - Carrinho" }} />
      <Stack.Screen name="Pagamento" component={Pagamento} />
      <Stack.Screen name="PagamentoScreen" component={PagamentoScreen} />
      <Stack.Screen name="Endereco" component={Endereco} />
      <Stack.Screen name="RegistroCompra" component={RegistroCompra} />
      <Stack.Screen name="Sobre" component={Sobre} options={{ title: "Wine App - Sobre" }} />
    </Stack.Navigator>
  </NavigationContainer>
);