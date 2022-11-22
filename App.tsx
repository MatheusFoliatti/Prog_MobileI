import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Hello World</Text>
    <Text style={styles.paragraph}>With Expo.io</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#642eaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:28
  },
  paragraph: {
    fontSize:15
  }

});
