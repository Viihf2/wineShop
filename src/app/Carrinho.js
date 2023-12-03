import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Carrinho = () => {
  const [carrinho, setCarrinho] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadCarrinho = async () => {
      try {
        const carrinhoData = await AsyncStorage.getItem('carrinho');
        if (carrinhoData) {
          const carrinhoItens = JSON.parse(carrinhoData).map((item) => ({
            ...item,
            quantity: item.quantity || 1,
          }));
          setCarrinho(carrinhoItens);
        }
      } catch (error) {
        console.error('Erro ao carregar carrinho:', error);
      }
    };

    loadCarrinho();
  }, []);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCarrinho = carrinho.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCarrinho(updatedCarrinho);
    AsyncStorage.setItem('carrinho', JSON.stringify(updatedCarrinho));
  };

  const handleCompraPress = () => {
    navigation.navigate('Pagamento', { carrinho });
  };

  // Função para calcular o total de um item no carrinho
  const calcularTotalItem = (item) => {
    return (item.quantity * parseFloat(item.price.replace('R$', '').replace(',', '.'))).toFixed(2);
  };

  // Função para calcular o total geral do carrinho
  const calcularTotalGeral = () => {
    const totalGeral = carrinho.reduce((total, item) => total + parseFloat(calcularTotalItem(item)), 0);
    return totalGeral.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Itens no Carrinho</Text>
      {carrinho.length > 0 ? (
        <FlatList
          data={carrinho}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image style={styles.itemImage} source={{ uri: item.thumbnail.path }} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <View style={styles.quantitySelector}>
                  <TouchableOpacity
                    onPress={() => handleQuantityChange(item.id, Math.max(1, item.quantity - 1))}
                    disabled={item.quantity <= 1}
                  >
                    <Text style={styles.quantityButton}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity
                    onPress={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    <Text style={styles.quantityButton}>+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.itemTotal}>Total: R${calcularTotalItem(item)}</Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyMessage}>Carrinho vazio</Text>
      )}

      <Text style={styles.totalGeral}>Total Geral: R${calcularTotalGeral()}</Text>

    <TouchableOpacity style={styles.botaoCompra} onPress={handleCompraPress}>
      <Text style={styles.textoBotaoCompra}>Finalizar Compra</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  itemImage: {
    width: 80,
    height: 120,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: 'green',
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  emptyMessage: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 32,
  },
  botaoCompra: {
    backgroundColor: 'green',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  textoBotaoCompra: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
    totalGeral: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    color: 'black', // Cor adicionada
  },
});

export default Carrinho;