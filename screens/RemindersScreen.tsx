import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";

export const RemindersScreen = () => {
  const [reminder, setReminder] = useState("");
  const [reminders, setReminders] = useState<string[]>([]);

  const addReminder = () => {
    if (reminder.trim()) {
      setReminders([...reminders, reminder]);
      setReminder("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lembretes de Medicamentos</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um lembrete"
        value={reminder}
        onChangeText={setReminder}
      />
      <Button title="Adicionar Lembrete" onPress={addReminder} />
      <FlatList
        data={reminders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.reminderItem}>• {item}</Text>
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
  reminderItem: {
    fontSize: 18,
    paddingVertical: 5,
  },
});
