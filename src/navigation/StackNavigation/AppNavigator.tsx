import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import { LoginScreen, SignupScreen } from '../../screens';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
<NavigationContainer>
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
</NavigationContainer>
  )
}

export default AppNavigator

