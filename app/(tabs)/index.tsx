import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { RemindersScreen } from "./screens/RemindersScreen";
import { ContactsScreen } from "./screens/ContactsScreen";
import { AudioHelpScreen } from "./screens/AudioHelpScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Menu Principal" }}
        />
        <Stack.Screen name="Lembretes" component={RemindersScreen} />
        <Stack.Screen name="Contatos" component={ContactsScreen} />
        <Stack.Screen name="Ajuda em Áudio" component={AudioHelpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
