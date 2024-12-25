import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./app/screens/signIn";
import LandingPageDashboard from "./app/screens/landingPageDashboard";
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, GestureResponderEvent, } from 'react-native';
import { useFonts } from 'expo-font';
import AccountList from "./app/screens/accountList";

const Stack = createNativeStackNavigator();

export default function App() {

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Account List" component={AccountList} options={{ headerShown: false }}/>
        <Stack.Screen name="Sign In" component={SignIn} options={{ headerShown: false }}/>
        <Stack.Screen name="LandingPageDashboard" component={LandingPageDashboard} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
