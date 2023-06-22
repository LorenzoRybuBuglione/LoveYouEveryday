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
      <Text>
        Dia {day} de {monthNames[month]}
      </Text>
      <Text>{special}</Text>
      <Text>{message}</Text>
    </View>
  );
}

export default Home;
