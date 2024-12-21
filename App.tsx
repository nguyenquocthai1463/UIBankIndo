// Import các thư viện cần thiết
import React, { useState } from 'react';
import { Text, View, } from 'react-native';
import ProfileScreen from './shared/components/profile-screen';
import DashboardScreen from './shared/components/dashboard-screen';
import CustomerDetailsScreen from './shared/components/customer-details-screen';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Stack = createNativeStackNavigator();


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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CustomerDetailsScreen"
        screenOptions={{
          // animation: 'none', // Tắt hiệu ứng chuyển màn hình
        }}
      >
        <Stack.Screen name="CustomerDetailsScreen" component={CustomerDetailsScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );

}

