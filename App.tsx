import React  from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import {TelaConfiguracao} from './src/navigation/configuracoes';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from './src/config/firebase-config';
import {  initializeAuth, getReactNativePersistence } from '@firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const app = initializeApp(firebaseConfig)
  initializeAuth(app, { persistence:  getReactNativePersistence(AsyncStorage)})

  return (

    <TelaConfiguracao/>
  );
}

