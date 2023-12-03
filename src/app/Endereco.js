import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Endereco = () => {
  const navigation = useNavigation();

  const [nomeRecebedor, setNomeRecebedor] = useState('');
  const [telefoneRecebedor, setTelefoneRecebedor] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');

  const salvarEndereco = () => {
    // Adicione sua lógica para salvar o endereço aqui
    // Exemplo: chame uma API para salvar o endereço no backend

    // Após salvar com sucesso, você pode navegar para a próxima tela (RegistroCompra)
    navigation.navigate('RegistroCompra', { endereco }); // Passando dados de endereço para a próxima tela
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Informações de Entrega</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nome do Recebedor</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome completo"
          value={nomeRecebedor}
          onChangeText={setNomeRecebedor}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Telefone do Recebedor</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o número de telefone"
          keyboardType="phone-pad"
          value={telefoneRecebedor}
          onChangeText={setTelefoneRecebedor}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Endereço</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o endereço de entrega"
          value={endereco}
          onChangeText={setEndereco}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Número</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o número"
          keyboardType="numeric"
          value={numero}
          onChangeText={setNumero}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Complemento</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o complemento (opcional)"
          value={complemento}
          onChangeText={setComplemento}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Bairro</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o bairro"
          value={bairro}
          onChangeText={setBairro}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Cidade</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a cidade"
          value={cidade}
          onChangeText={setCidade}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Estado</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o estado"
          value={estado}
          onChangeText={setEstado}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>CEP</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o CEP"
          keyboardType="numeric"
          value={cep}
          onChangeText={setCep}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={salvarEndereco}>
        <Text style={styles.buttonText}>Finalizar compra</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Endereco;