import React from 'react';
import { Modal, Text, Button, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const WineDescription = ({ visible, description, onClose }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
    >
      <View style={styles.container}>
        <ScrollView style={styles.popup}>
          <ScrollView>
            <Text style={styles.descriptionText}>{description}</Text>
          </ScrollView>
          <Button title="Fechar" onPress={onClose} />
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    width: 250,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default WineDescription;