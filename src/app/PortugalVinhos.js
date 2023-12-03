import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Pressable, Image, Modal, TouchableOpacity, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  const [carrinho, setCarrinho] = useState([]);

  const DATA = [
    {
      "id": 1009220,
      "name": "Vinho Português Branco Casal Garcia Sweet Vinho Verde Garrafa 750ml",
      "description": "Cor: Branco - Marca: Casal Garcia - Altura do Produto (cm): 31.5 - Cor do Vinho: Branco - Largura do produto (cm): 7.2 - Classe do Vinho: Fino - Conteúdo Líquido: 750 - Conteúdo Liquido - Profundidade do Produto (cm): 7.2.",
      "modified": "2020-04-04T19:01:59-0400",
      "thumbnail": {
        "path": "https://static.paodeacucar.com/img/uploads/1/848/24841848.jpg",
        "extension": "jpg"
      },
      "price": "R$ 49,90",
    },
    {
      "id": 1010914,
      "name": "Vinho Português Tinto D. JOÃO I Garrafa 750ml",
      "description": "Cor: Branco - Marca: Vh Import Exclusiva - Altura do Produto (cm): 27 - Largura do produto (cm): 7 - Conteúdo Líquido: 750 - Conversão unidade do produto: 8 - Nome da Medida Principal: Conteúdo Liquido - Profundidade do Produto (cm): 7 - Unidade de Medida do Conteúdo Líquido: ML.",
      "modified": "2014-03-05T13:17:50-0500",
      "thumbnail": {
        "path": "https://static.paodeacucar.com/img/uploads/1/718/619718.png",
        "extension": "jpg"
      },
      "price": "R$ 59,90",
    },
    {
      "id": 1017295,
      "name": "Vinho Português Tinto Porto COMENDA Tawny Garrafa 750ml",
      "description": "Cor: Branco - Marca: Vh Import Exclusiva - Altura do Produto (cm):27.3 - Largura do produto (cm): 8.6 - Conteúdo Líquido: 750 - Conversão unidade do produto: 8 - Nome da Medida Principal: Conteúdo Liquido - Profundidade do Produto (cm): 8.6 - Unidade de Medida do Conteúdo Líquido: ML.",
      "modified": "2013-09-18T11:15:29-0400",
      "thumbnail": {
        "path": "https://static.paodeacucar.com/img/uploads/1/349/23628349.png",
        "extension": "jpg"
      },
      "price": "R$ 69,90",
    },
    {
      "id": 1017575,
      "name": "Vinho Português Tinto Meio Seco Vale dos Pecados Alentejano Garrafa 750ml",
      "description": "Cor: Cor: Branco - Marca: Periquita - Altura do Produto (cm): 30 -  Largura do produto (cm): 8 - Conteúdo Líquido: 750 - Conversão unidade do produto: 8 - Nome da Medida Principal: Conteúdo Liquido - Profundidade do Produto (cm): 8 - Unidade de Medida do Conteúdo Líquido: ML.",
      "thumbnail": {
        "path": "https://static.paodeacucar.com/img/uploads/1/105/24660105.jpg",
        "extension": "jpg"
      },
      "price": "R$ 79,90",
    },
    // Adicione mais vinhos aqui, seguindo o mesmo formato
  ];

  const comprar = async (item) => {
    const itemNoCarrinho = carrinho.find((carrinhoItem) => carrinhoItem.id === item.id);

    if (itemNoCarrinho) {
      Alert.alert('Item já está no carrinho');
    } else {
      const novoCarrinho = [...carrinho, item];
      setCarrinho(novoCarrinho);

      // Salvar o carrinho no AsyncStorage
      await AsyncStorage.setItem('carrinho', JSON.stringify(novoCarrinho));

      // Exibir mensagem de confirmação


      // Navegar para a tela do carrinho
      navigation.navigate('Carrinho', { Carrinho: novoCarrinho });
    }
  };

  const WineItem = ({ item }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
      setModalVisible(true);
    };

    const hideModal = () => {
      setModalVisible(false);
    };

    return (
      <View>
        <Pressable style={styles.itemContainer} onPress={showModal}>
          <Image style={styles.thumbnail} source={{ uri: item.thumbnail.path }} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </Pressable>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={hideModal}
        >
          <ScrollView contentContainerStyle={styles.modalScrollView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>{item.name}</Text>
              <Text style={styles.modalDescription}>
                {item.description || 'Sem descrição disponível'}
              </Text>
              <Text style={styles.modalPrice}>{item.price}</Text>
              <TouchableOpacity style={styles.modalComprarButton} onPress={() => comprar(item)}>
                <Text style={styles.modalComprarButtonText}>Comprar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalCloseButton} onPress={hideModal}>
                <Text style={styles.modalCloseButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Escolha seu vinho</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <WineItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  itemContainer: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  thumbnail: {
    width: 100,
    height: 150,
    alignSelf: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalDescription: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 16,
  },
  modalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 16,
  },
  modalComprarButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  modalComprarButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalCloseButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
  },
  modalCloseButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
