import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Summary from './App/Screens/SummaryScreen/Summary';

export default function App() {
  return (
    <View>
      <Summary/>
      <StatusBar style="auto" />
    </View>
  );
}


