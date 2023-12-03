import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Pressable, Image, Modal, TouchableOpacity, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  const [carrinho, setCarrinho] = useState([]);

const DATA = [
  {
    "id": 1,
    "name": "Vinho Argentino Blend de Malbec",
    "description": "Envelhecimento em barricas usadas de carvalho francês e americano durante 6 meses.\n\nCaracterística Geral\nCor: Branco\nMarca: Finca Flichman\nAltura do Produto (cm): 33\nLargura do produto (cm): 8\nConteúdo Líquido: 750\nConversão unidade do produto: 29\nNome da Medida Principal: Conteúdo LiquidoConteúdo Liquido\nProfundidade do Produto (cm): 8\nUnidade de Medida do Conteúdo Líquido: ML",
    "thumbnail": {
      "path": "https://static.paodeacucar.com/img/uploads/1/716/4557716.png",
      "extension": "png"
    },
    "price": "R$ 49,90",
  },
  {
    "id": 2,
    "name": "Vinho Argentino TTO Trapiche Malbec 750ML",
    "description": "Elaboração:\nVariedade da uva: 100% Malbec\nVolume: 750ml\nPaís de origem: Argentina\nTipo: Tinto\nRegião: Mendoza\nProdutor: Bodega Trapiche\nTeor alcóolico: 13,50%\n\nInformações Adicionais:\nCorante: Não Contém\nContém Glúten: Não Contém\nContém Álcool: Sim\nContém Conservantes: Contém\nCor do Vinho: Tinto\nHarmonização: Carnes vermelhas e queijos médios.\nLargura do produto (cm): 7.2\nClasse do Vinho: Fino\nConteúdo Líquido: 750\nConversão unidade do produto: 8\nPeso Bruto: 1.145\nNome da Medida Principal: Conteúdo LiquidoConteúdo Liquido\nProfundidade do Produto (cm): 7.2\nSafra: 2020\nTipo de armazenagem: Fresco, Ao Abrigo da Luz, Ao Abrigo Do Calor, Temperatura Ambiente\nTipo de uva: Malbec\nUnidade de Medida da Quantidade de unidades do produto: UN\nUnidade de Medida do Conteúdo Líquido: ML\nUnidade de Medida do Peso Bruto: KG\nAromatizante: Não Contém",
    "thumbnail": {
      "path": "https://static.paodeacucar.com/img/uploads/1/717/4557717.png",
      "extension": "png"
    },
    "price": "R$ 65,00",
  },
  {
    "id": 3,
    "name": "Vinho Argentino Tinto Malbec LAGARDE Garrafa 750ml",
    "description": "Cor - Branco\nMarca - Lagarde\nAltura do Produto (cm) - 33\nLargura do produto (cm) - 7\nConteúdo Líquido - 750\nConversão unidade do produto - 29\nNome da Medida Principal - Conteúdo LiquidoConteúdo Liquido\nProfundidade do Produto (cm) - 7\nUnidade de Medida do Conteúdo Líquido - ML",
    "thumbnail": {
      "path": "https://static.paodeacucar.com/img/uploads/1/557/24659557.jpg",
      "extension": "jpg"
    },
    "price": "R$ 174,99",
  },
  {
    "id": 4,
    "name": "Vinho Argentino Tinto Magna Cabernet-Malbec-Syrah Santa Julia Garrafa 750ml",
    "description": "Cor - Branco\nMarca - Santa Julia\nIngredientes - Elaborado com uvas viníferas e conservador anidrido sulfuroso INS 220\nAltura do Produto (cm) - 31.6\nCor do Vinho - Tinto\nLargura do produto (cm) - 7.7\nClasse do Vinho - De Mesa Fino\nConteúdo Líquido - 750\nConversão unidade do produto - 8\nInformações de Conservação - Preferencialmente na posição horizontal\nPeso Bruto - 1.382\nNome da Medida Principal - Conteúdo Liquido\nProfundidade do Produto (cm) - 7\nSafra - 2015\nUnidade de Medida do Conteúdo - Líquido ML\nUnidade de Medida do Peso Bruto - KG",
    "thumbnail": {
      "path": "https://static.paodeacucar.com/img/uploads/1/804/25003804.jpg",
      "extension": "jpg"
    },
    "price": "R$ 55,20",
  },
  // Adicione mais vinhos aqui, seguindo o mesmo formato com URLs de imagem diferentes
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
  modalScrollView: {
    flexGrow: 1,
    justifyContent: 'center',
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