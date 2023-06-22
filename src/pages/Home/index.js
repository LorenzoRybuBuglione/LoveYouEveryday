import { Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

function Home({ month, day, message, special }) {
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.dateText}>
        Dia {day} de {monthNames[month]}!
      </Text>
      <Text style={styles.specialText}>{special}</Text>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
}

export default Home;
