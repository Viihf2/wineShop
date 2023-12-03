import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const PagamentoScreen = ({ route }) => {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    // Certifique-se de que route.params.carrinho existe antes de definir os itens
    if (route.params?.carrinho) {
      setItens(route.params.carrinho);
    }
  }, [route.params?.carrinho]);

  const calcularTotal = () => {
    return itens.reduce((total, item) => total + item.quantidade * parseFloat(item.preco), 0).toFixed(2);
  };

  const finalizarCompra = async () => {
    // Simulando uma chamada à API de pagamento
    const respostaAPI = await simularPagamentoAPI();

    if (respostaAPI.sucesso) {
      // Limpar carrinho após pagamento bem-sucedido
      setItens([]);

      // Exibir mensagem de sucesso
      Alert.alert('Compra Finalizada com Sucesso!');
    } else {
      Alert.alert('Falha no Pagamento. Tente Novamente.');
    }
  };

  // Função de simulação de chamada à API de pagamento
  const simularPagamentoAPI = () => {
    return new Promise((resolve) => {
      // Simulando uma resposta bem-sucedida
      setTimeout(() => {
        resolve({ sucesso: true });
      }, 2000);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resumo da Compra</Text>
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemNome}>{item.nome}</Text>
            <Text>Quantidade: {item.quantidade}</Text>
            <Text style={styles.itemPreco}>Preço: R${parseFloat(item.preco).toFixed(2)}</Text>
          </View>
        )}
      />
      <View style={styles.resumoContainer}>
        <Text style={styles.resumoTexto}>Total: R${calcularTotal()}</Text>
        <TouchableOpacity onPress={finalizarCompra} style={styles.botaoFinalizar}>
          <Text style={styles.textoBotaoFinalizar}>Finalizar Compra</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={(Pagamento) => console.log('Pagamento')} style={styles.botaoContinuar}>
          <Text style={styles.textoBotaoContinuar}>Continuar Comprando</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Estilos restantes
});

export default PagamentoScreen;