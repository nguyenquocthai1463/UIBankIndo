// Import các thư viện cần thiết
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, GestureResponderEvent, } from 'react-native';
import ProfileScreen from './shared/components/profile-screen';
import { Provider as PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';

export default function App() {
  // Cài đặt font chữ
  const [fontsLoaded] = useFonts({
    'Manrope-Bold': require('./public/assets/fonts/Manrope-Bold.ttf'),
    'Manrope-Light': require('./public/assets/fonts/Manrope-Light.ttf'),
    'Manrope-ExtraBold': require('./public/assets/fonts/Manrope-ExtraBold.ttf'),
    'Manrope-ExtraLight': require('./public/assets/fonts/Manrope-ExtraLight.ttf'),
    'Manrope-Medium': require('./public/assets/fonts/Manrope-Medium.ttf'),
    'Manrope-Regular': require('./public/assets/fonts/Manrope-Regular.ttf'),
    'Manrope-SemiBold': require('./public/assets/fonts/Manrope-SemiBold.ttf'),
  });

  
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }


  return (
    <PaperProvider>
      <ProfileScreen />
    </PaperProvider>
  )
}
