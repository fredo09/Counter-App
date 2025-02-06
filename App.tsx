import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Components
import { FloatingButton} from './components';

export default function App() {
  const [ count, setCount ] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Counter App</Text>
      <Text style={styles.textHuge}>{count}</Text>

      <FloatingButton
        label="+1"
        position="right"
        onPress={() => setCount(count + 1)}
      />

      <FloatingButton
        label="Reset"
        onLongPress={() => setCount(0)}
      />

      <FloatingButton
        label="-1"
        position="left"
        onPress={() => setCount(count - 1)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textHuge: {
    fontSize: 120,
    fontWeight: "100",
  },
});
