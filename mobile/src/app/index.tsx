import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Listen</Text>
      <Text style={styles.subtitle}>Find den billigste indkøbskurv!</Text>
      <Text style={styles.subtitle}>Det bliver så fedt</Text> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f58dca',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#7d2e2e',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 12,
    color: '#dd1e61',
  },
});
