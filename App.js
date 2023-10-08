import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import react,{useState} from 'react';

import Scr1 from "./components/Scr1";
import Scr2 from './components/Scr2';
import Scr3 from './components/Src3';
import Src4 from './components/Src4';



export default function App() {
  return (
      // <Scr1/>
      // <Scr2/>
      // <Scr3/>
      <Src4/>
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



