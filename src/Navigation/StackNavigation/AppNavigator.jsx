import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import Signin from '../../screens/Signin'
import LoginScreen from '../../screens/auth/login-screen/login-screen'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
<NavigationContainer>
    <Stack.Navigator initialRouteName="Signin" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Signin" component={Signin} /> */}
        {/* mobile connect kren sath */}
    </Stack.Navigator>
</NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})