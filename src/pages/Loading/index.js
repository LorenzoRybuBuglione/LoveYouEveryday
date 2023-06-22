import { ActivityIndicator, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';

function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ActivityIndicator size="large" color="#fff"/>
      <Text style={styles.title}>Carregando...</Text>
    </View>
  );
}

export default Loading;

