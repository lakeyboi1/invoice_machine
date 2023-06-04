import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BluetoothManager, BluetoothEscposPrinter, BluetoothTscPrinter} from 'react-native-bluetooth-escpos-printer';

export default function App() {
  BluetoothManager.isBluetoothEnabled().then(
    (enabled) => {
      alert(enabled); // enabled ==> true /false
      console.log(enabled);
    },
    (err) => {
      alert(err);
      console.log(err);
    }
  );

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
