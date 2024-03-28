import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './screens/loading/LoadingScreen';
import HomeScreen from './screens/home/HomeScreen';
import MonsterDetailss from './screens/monster details/MonsterDetailss';
import { DataProvider } from './context/DataContext';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <DataProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoadingScreen' screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name='LoadingScreen' component={LoadingScreen} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='MonsterDetailss' component={MonsterDetailss} />
      </Stack.Navigator>  
      </NavigationContainer>
    </DataProvider>
  );
}

