// RegistroCompra.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RegistroCompra = ({ route }) => {
  // Obtenha os dados de endereço passados da tela anterior (Endereco)
  const { endereco } = route.params || {};

  // Dados de exemplo
  const dadosCompra = {
    formaPagamento: 'Cartão de Crédito',
    numeroCartao: '**** **** **** 1234',
    nomeTitular: 'Nome Completo',
    dataValidade: '12/23',
    nomeRecebedor: 'Nome do Recebedor',
    telefoneRecebedor: '(11) 98765-4321',
    numero: '123',
    complemento: 'Apto 456',
    bairro: 'Bairro Exemplo',
    cidade: 'Cidade Exemplo',
    estado: 'SP',
    cep: '12345-678',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro da Compra</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações de Pagamento</Text>
        <Text>Forma de Pagamento: {dadosCompra.formaPagamento}</Text>
        <Text>Número do Cartão: {dadosCompra.numeroCartao}</Text>
        <Text>Nome do Titular: {dadosCompra.nomeTitular}</Text>
        <Text>Data de Validade: {dadosCompra.dataValidade}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações de Entrega</Text>
        <Text>Nome do Recebedor: {dadosCompra.nomeRecebedor}</Text>
        <Text>Telefone do Recebedor: {dadosCompra.telefoneRecebedor}</Text>
        <Text>Endereço: {endereco}</Text>
        <Text>Número: {dadosCompra.numero}</Text>
        <Text>Complemento: {dadosCompra.complemento}</Text>
        <Text>Bairro: {dadosCompra.bairro}</Text>
        <Text>Cidade: {dadosCompra.cidade}</Text>
        <Text>Estado: {dadosCompra.estado}</Text>
        <Text>CEP: {dadosCompra.cep}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default RegistroCompra;