import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function SettingsScreen() {
  return (
      <View style={styles.container}>
          <Text>Pokemon #025</Text>
          <Image
          style={{ width: 100, height: 100, marginBottom: 15 }}
          source={require("../assets/pikachu.png")}
          />
          <Text>Pikachu</Text>
          <StatusBar style="auto" />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  }
})