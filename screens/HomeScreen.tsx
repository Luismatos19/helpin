import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import type { StackNavigationProp } from "@react-navigation/stack";

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 40,
    color: "#333",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Lembretes")}
      >
        <Text style={styles.buttonText}>Lembretes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Contatos")}
      >
        <Text style={styles.buttonText}>Contatos Importantes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Ajuda em Áudio")}
      >
        <Text style={styles.buttonText}>Ajuda em Áudio</Text>
      </TouchableOpacity>
    </View>
  );
};
