import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";

export const ContactsScreen = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contacts, setContacts] = useState<{ name: string; phone: string }[]>(
    []
  );

  const addContact = () => {
    if (name.trim() && phone.trim()) {
      setContacts([...contacts, { name, phone }]);
      setName("");
      setPhone("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos Importantes</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do contato"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Button title="Adicionar Contato" onPress={addContact} />
      <FlatList
        data={contacts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.contactItem}>
            • {item.name} - {item.phone}
          </Text>
        )}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    marginBottom: 10,
  },
  contactItem: {
    fontSize: 18,
    paddingVertical: 5,
  },
});
