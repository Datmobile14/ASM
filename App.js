import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./LoginScreen";
import HomeScreen from './HomeScreen';
import NewPostScreen from './NewPostScreen';
import TabBarButton from './TabBarButton';
import SingUpScreen from './SignUpScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          options={{ headerShown: false }}
          name = "Login"
          component = {LoginScreen}
          option = {{title: 'WellCome'}}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name = "TabBar" 
          component = {TabBarButton}
          option = {{title: 'TabBar'}}>
        </Stack.Screen>
       
        <Stack.Screen
          // options={{ headerShown: false }}
          name = "NewPost" 
          component = {NewPostScreen}
          option = {{title: 'NewPost'}}>
        </Stack.Screen>
        <Stack.Screen
          // options={{ headerShown: false }}
          name = "SignUp" 
          component = {SingUpScreen}
          option = {{title: 'SignUp'}}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




