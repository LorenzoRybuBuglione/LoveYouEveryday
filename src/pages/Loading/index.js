import { Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';

function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Carregando...</Text>
    </View>
  );
}

export default Loading;

