import { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";

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

  const [random, setRandom] = useState(0);
  useEffect(() => {
    getRandomNumber();
  }, []);

  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 15) + 1;
    setRandom(randomNumber);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.dateText}>
        Dia {day} de {monthNames[month]}!
      </Text>
      <Text style={styles.specialText}>{special}</Text>
      <Image
        source={
          random === 1
            ? require(`../../images/giphy1.gif`)
            : random === 2
            ? require(`../../images/giphy2.gif`)
            : random === 3
            ? require(`../../images/giphy3.gif`)
            : random === 4
            ? require(`../../images/giphy4.gif`)
            : random === 5
            ? require(`../../images/giphy5.gif`)
            : random === 6
            ? require(`../../images/giphy6.gif`)
            : random === 7
            ? require(`../../images/giphy7.gif`)
            : random === 8
            ? require(`../../images/giphy8.gif`)
            : random === 9
            ? require(`../../images/giphy9.gif`)
            : random === 10
            ? require(`../../images/giphy10.gif`)
            : random === 11
            ? require(`../../images/giphy11.gif`)
            : random === 12
            ? require(`../../images/giphy12.gif`)
            : random === 13
            ? require(`../../images/giphy13.gif`)
            : random === 14
            ? require(`../../images/giphy14.gif`)
            : require(`../../images/giphy15.gif`)
        }
        style={styles.gif}
      />

      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
}

export default Home;
