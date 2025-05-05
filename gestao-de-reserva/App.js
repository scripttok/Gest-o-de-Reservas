import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

// Drawer Navigator
const Drawer = createDrawerNavigator();

// Componente reutilizável para Cards
const CategoryCard = ({ title, iconName, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Card containerStyle={styles.card}>
      <Icon name={iconName} type="font-awesome" size={40} color="#1E90FF" />
      <Card.Title style={styles.cardTitle}>{title}</Card.Title>
    </Card>
  </TouchableOpacity>
);

// Tela Inicial
const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.header}>Gestão de Reservas</Text>
    <View style={styles.cardContainer}>
      <CategoryCard
        title="Casas"
        iconName="home"
        onPress={() => navigation.navigate("Casas")}
      />
      <CategoryCard
        title="Carros"
        iconName="car"
        onPress={() => navigation.navigate("Carros")}
      />
      <CategoryCard
        title="Festas"
        iconName="gift"
        onPress={() => navigation.navigate("Festas")}
      />
      <CategoryCard
        title="Diversos"
        iconName="cube"
        onPress={() => navigation.navigate("Diversos")}
      />
    </View>
  </SafeAreaView>
);

// Placeholder para telas de listagem
const PlaceholderScreen = ({ route }) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.header}>Tela de {route.name}</Text>
    <Text style={styles.text}>Em desenvolvimento...</Text>
  </SafeAreaView>
);

// App Principal
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#F5F5F5",
            width: 250,
          },
          drawerLabelStyle: {
            fontSize: 16,
            color: "#333",
          },
          headerStyle: {
            backgroundColor: "#1E90FF",
          },
          headerTintColor: "#FFF",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Início" }}
        />
        <Drawer.Screen
          name="Clientes"
          component={PlaceholderScreen}
          options={{ title: "Clientes" }}
        />
        <Drawer.Screen
          name="Historico"
          component={PlaceholderScreen}
          options={{ title: "Histórico" }}
        />
        {/* Telas acessíveis apenas pelos cards */}
        <Drawer.Screen
          name="Casas"
          component={PlaceholderScreen}
          options={{ title: "Casas", drawerItemStyle: { display: "none" } }}
        />
        <Drawer.Screen
          name="Carros"
          component={PlaceholderScreen}
          options={{ title: "Carros", drawerItemStyle: { display: "none" } }}
        />
        <Drawer.Screen
          name="Festas"
          component={PlaceholderScreen}
          options={{ title: "Festas", drawerItemStyle: { display: "none" } }}
        />
        <Drawer.Screen
          name="Diversos"
          component={PlaceholderScreen}
          options={{ title: "Diversos", drawerItemStyle: { display: "none" } }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    marginTop: 10,
    color: "#333",
  },
  text: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
});
