import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../../screens/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signin from '../../screens/Signin'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
<NavigationContainer>
    <Stack.Navigator initialRouteName="Signin" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
</NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})