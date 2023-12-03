// Pagamento.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

const Pagamento = () => {
  const navigation = useNavigation();

  const [numeroCartao, setNumeroCartao] = useState('');
  const [nomeTitular, setNomeTitular] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [cvv, setCVV] = useState('');
  const [nomeBeneficiario, setNomeBeneficiario] = useState('');
  const [cpfCnpjBeneficiario, setCpfCnpjBeneficiario] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Adicione um estado para a forma de pagamento
  const [formaPagamento, setFormaPagamento] = useState('');

  const processarPagamento = async () => {
    // Remova a lógica de processamento de pagamento
    // Deixe esta função vazia ou remova-a, se não for necessária

    // Exibir o modal de sucesso
    setModalVisible(true);
  };

  const fecharModal = () => {
    // Fechar o modal
    setModalVisible(false);

    // Redirecionar para a tela de inserção do endereço
    navigation.navigate('Endereco'); // Certifique-se de que este é o nome correto da tela
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Método de Pagamento</Text>
      <TouchableOpacity style={styles.optionButton} onPress={() => setFormaPagamento('cartao')}>
        <Text style={styles.optionButtonText}>Cartão de Crédito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => setFormaPagamento('cartD')}>
        <Text style={styles.optionButtonText}>Cartão de Débito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => setFormaPagamento('boleto')}>
        <Text style={styles.optionButtonText}>Boleto Bancário</Text>
      </TouchableOpacity>

      {formaPagamento === 'cartao' && (
        <>
          <Text style={styles.label}>Número do Cartão:</Text>
          <TextInput
            style={styles.input}
            placeholder="1234 5678 9012 3456"
            keyboardType="numeric"
            maxLength={16}
            value={numeroCartao}
            onChangeText={setNumeroCartao}
          />

          <Text style={styles.label}>Nome do Titular:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            value={nomeTitular}
            onChangeText={setNomeTitular}
          />

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Data de Validade:</Text>
              <TextInput
                style={styles.input}
                placeholder="MM/AA"
                maxLength={4}
                value={dataValidade}
                onChangeText={setDataValidade}
              />
            </View>

            <View style={styles.column}>
              <Text style={styles.label}>CVV:</Text>
              <TextInput
                style={styles.input}
                placeholder="123"
                keyboardType="numeric"
                maxLength={3}
                value={cvv}
                onChangeText={setCVV}
              />
            </View>
          </View>
        </>
      )}
      {formaPagamento === 'cartD' && (
        <>
          <Text style={styles.label}>Número do Cartão:</Text>
          <TextInput
            style={styles.input}
            placeholder="1234 5678 9012 3456"
            keyboardType="numeric"
            maxLength={16}
            value={numeroCartao}
            onChangeText={setNumeroCartao}
          />

          <Text style={styles.label}>Nome do Titular:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            value={nomeTitular}
            onChangeText={setNomeTitular}
          />

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Data de Validade:</Text>
              <TextInput
                style={styles.input}
                placeholder="MM/AA"
                maxLength={4}
                value={dataValidade}
                onChangeText={setDataValidade}
              />
            </View>

            <View style={styles.column}>
              <Text style={styles.label}>CVV:</Text>
              <TextInput
                style={styles.input}
                placeholder="123"
                keyboardType="numeric"
                maxLength={3}
                value={cvv}
                onChangeText={setCVV}
              />
            </View>
          </View>
        </>
      )}
      {formaPagamento === 'boleto' && (
        <>
          {/* Campos do Boleto Bancário */}
          <Text style={styles.label}>Nome do Beneficiário:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            value={nomeBeneficiario}
            onChangeText={setNomeBeneficiario}
          />

          <Text style={styles.label}>CPF/CNPJ do Beneficiário:</Text>
          <TextInput
            style={styles.input}
            placeholder="CPF ou CNPJ"
            value={cpfCnpjBeneficiario}
            onChangeText={setCpfCnpjBeneficiario}
          />

          <Text style={styles.label}>Data de Vencimento:</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/AAAA"
            value={dataVencimento}
            onChangeText={setDataVencimento}
          />
        </>
      )}
      <TouchableOpacity style={styles.continueButton} onPress={processarPagamento}>
        <Text style={styles.continueButtonText}>Continuar</Text>
      </TouchableOpacity>

      {/* Modal de Sucesso */}
      <Modal isVisible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Pagamento realizado com sucesso!</Text>
          <TouchableOpacity style={styles.modalButton} onPress={fecharModal}>
            <Text style={styles.modalButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#A82A48',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  optionButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    marginRight: 8,
  },
  continueButton: {
    backgroundColor: '#3498DB',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  continueButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#3498DB',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Pagamento;